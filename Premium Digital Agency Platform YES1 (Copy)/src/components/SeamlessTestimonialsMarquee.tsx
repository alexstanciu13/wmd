import { useEffect, useRef, useState } from 'react';
import { TestimonialCard } from './TestimonialCard';
import './seamless-testimonials.css';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

interface SeamlessTestimonialsMarqueeProps {
  testimonials: Testimonial[];
}

/**
 * Computes the scroll speed (px/sec) based on viewport width.
 * Mobile (≤767px): ~170 px/s
 * Tablet (≤1023px): ~110 px/s
 * Desktop: ~80 px/s
 */
function getPixelsPerSecond(): number {
  const width = window.innerWidth;
  if (width <= 767) return 170;
  if (width <= 1023) return 110;
  return 80;
}

export function SeamlessTestimonialsMarquee({ testimonials }: SeamlessTestimonialsMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const sequenceARef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  /**
   * Updates CSS custom properties for animation
   */
  const updateAnimation = () => {
    if (!trackRef.current || !sequenceARef.current) return;

    const sequenceWidth = sequenceARef.current.scrollWidth;
    const pxPerSec = getPixelsPerSecond();
    const duration = Math.max(3, sequenceWidth / pxPerSec);

    trackRef.current.style.setProperty('--loop-w', `${sequenceWidth}px`);
    trackRef.current.style.setProperty('--loop-dur', `${duration}s`);
  };

  useEffect(() => {
    // Initial measurement
    updateAnimation();

    // Set up ResizeObserver on sequence A
    if (sequenceARef.current) {
      resizeObserverRef.current = new ResizeObserver(() => {
        updateAnimation();
      });
      resizeObserverRef.current.observe(sequenceARef.current);
    }

    // Listen for window resize
    const handleResize = () => {
      updateAnimation();
    };
    window.addEventListener('resize', handleResize);

    // Listen for window load (for image loading)
    window.addEventListener('load', updateAnimation);

    return () => {
      resizeObserverRef.current?.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', updateAnimation);
    };
  }, [testimonials]);

  // Handle touch events for pause/resume
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="seamless-marquee"
      aria-roledescription="carousel"
      aria-label="Testimoniale"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={trackRef}
        className="seamless-marquee__track"
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {/* Sequence A */}
        <div ref={sequenceARef} className="seamless-marquee__sequence">
          {testimonials.map((testimonial, index) => (
            <div
              key={`a-${testimonial.name}-${index}`}
              className="seamless-marquee__card"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${index + 1}`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Sequence B (clone) */}
        <div className="seamless-marquee__sequence" aria-hidden="true">
          {testimonials.map((testimonial, index) => (
            <div
              key={`b-${testimonial.name}-${index}`}
              className="seamless-marquee__card"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Fade gradients */}
      <div className="seamless-marquee__gradient seamless-marquee__gradient--left" />
      <div className="seamless-marquee__gradient seamless-marquee__gradient--right" />
    </div>
  );
}
