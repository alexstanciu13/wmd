import { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { TestimonialCard } from './TestimonialCard';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

interface InfiniteTestimonialSliderProps {
  testimonials: Testimonial[];
}

export function InfiniteTestimonialSlider({ testimonials }: InfiniteTestimonialSliderProps) {
  const autoplayRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
      skipSnaps: false,
      dragFree: false,
      duration: 25,
    },
    [autoplayRef.current]
  );

  const onPointerDown = useCallback(() => {
    const autoplay = autoplayRef.current;
    if (autoplay) autoplay.stop();
  }, []);

  const onPointerUp = useCallback(() => {
    const autoplay = autoplayRef.current;
    if (autoplay) autoplay.play();
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!emblaApi) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        emblaApi.scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        emblaApi.scrollNext();
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    const embla = emblaApi;
    if (!embla) return;

    const rootNode = embla.rootNode();
    rootNode.addEventListener('pointerdown', onPointerDown);
    rootNode.addEventListener('pointerup', onPointerUp);
    rootNode.addEventListener('touchstart', onPointerDown);
    rootNode.addEventListener('touchend', onPointerUp);
    rootNode.addEventListener('keydown', handleKeyDown);

    return () => {
      rootNode.removeEventListener('pointerdown', onPointerDown);
      rootNode.removeEventListener('pointerup', onPointerUp);
      rootNode.removeEventListener('touchstart', onPointerDown);
      rootNode.removeEventListener('touchend', onPointerUp);
      rootNode.removeEventListener('keydown', handleKeyDown);
    };
  }, [emblaApi, onPointerDown, onPointerUp, handleKeyDown]);

  return (
    <div
      className="relative overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimoniale"
      tabIndex={0}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-[14px] md:gap-[18px] lg:gap-6 touch-pan-y">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="min-w-0 flex-[0_0_calc((100%-14px)/1.15)] md:flex-[0_0_calc((100%-18px)/2)] lg:flex-[0_0_calc((100%-48px)/3)]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${testimonials.length}`}
            >
              <TestimonialCard {...testimonial} />
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
