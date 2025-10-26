import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type Props = {
  slides: React.ReactNode[];
};

export default function TestimonialsCarousel({ slides }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: 'start',
    skipSnaps: false,
    containScroll: 'trimSnaps',
  });

  const rafIdRef = useRef<number | null>(null);
  const AUTOPLAY_SPEED = 0.5; // pixels per frame for smooth scroll

  const autoScroll = useCallback(() => {
    if (!emblaApi) return;

    const currentScroll = emblaApi.scrollProgress();
    const targetScroll = currentScroll + AUTOPLAY_SPEED / emblaApi.scrollSnapList().length / 100;

    emblaApi.scrollTo(targetScroll * emblaApi.scrollSnapList().length, false);
    rafIdRef.current = requestAnimationFrame(autoScroll);
  }, [emblaApi]);

  const start = useCallback(() => {
    if (rafIdRef.current === null && emblaApi) {
      rafIdRef.current = requestAnimationFrame(autoScroll);
    }
  }, [autoScroll, emblaApi]);

  const stop = useCallback(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // Start auto-scroll
    start();

    // Pause on hover/focus
    const root = emblaApi.rootNode();
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);

    // Pause while touching/dragging
    emblaApi.on('pointerDown', stop);
    emblaApi.on('pointerUp', start);
    emblaApi.on('settle', start);

    return () => {
      stop();
      root.removeEventListener('mouseenter', stop);
      root.removeEventListener('mouseleave', start);
      root.removeEventListener('focusin', stop);
      root.removeEventListener('focusout', start);
    };
  }, [emblaApi, start, stop]);

  return (
    <div className="relative">
      <div
        className="embla overflow-hidden"
        ref={emblaRef}
        aria-roledescription="carousel"
        aria-label="Testimoniale"
      >
        <div className="embla__container flex gap-[14px] md:gap-[18px] lg:gap-6">
          {slides.map((slide, i) => (
            <div
              className="embla__slide flex-[0_0_calc(100%/1.15)] md:flex-[0_0_calc((100%-18px)/2)] lg:flex-[0_0_calc((100%-48px)/3)] h-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${i + 1} of ${slides.length}`}
              key={i}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Fade gradients */}
      <div className="absolute top-0 left-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none z-10" />
    </div>
  );
}
