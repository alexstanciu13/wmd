import { useEffect, useRef, useState } from 'react';
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate testimonials for infinite effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || isPaused || isDragging) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      scroller.scrollLeft = scrollPosition;

      // Reset to middle section when reaching the end
      const maxScroll = scroller.scrollWidth / 3;
      if (scrollPosition >= maxScroll * 2) {
        scrollPosition = maxScroll;
        scroller.scrollLeft = scrollPosition;
      }

      animationId = requestAnimationFrame(animate);
    };

    // Start at the middle section
    scroller.scrollLeft = scroller.scrollWidth / 3;
    scrollPosition = scroller.scrollWidth / 3;

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollerRef.current) return;
    const x = e.touches[0].pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollerRef}
        className="flex gap-8 overflow-x-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="flex-shrink-0 w-full md:w-[480px]"
            style={{ userSelect: 'none' }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      {/* Optional: Add fade edges */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
    </div>
  );
}
