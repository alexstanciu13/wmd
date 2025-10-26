import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import type { EmblaCarouselType } from 'embla-carousel'

interface TestimonialsCarouselProps {
  slides: React.ReactNode[]
}

export default function TestimonialsCarousel({ slides }: TestimonialsCarouselProps) {
  const autoScrollRef = useRef<any>(null)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
      containScroll: 'trimSnaps',
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      })
    ]
  )

  // Handle touch/drag pause and resume
  const handlePointerDown = useCallback(() => {
    if (emblaApi) {
      const autoScroll = emblaApi.plugins()?.autoScroll
      if (autoScroll) {
        autoScrollRef.current = autoScroll
        autoScroll.stop()
      }
    }
  }, [emblaApi])

  const handlePointerUp = useCallback(() => {
    if (autoScrollRef.current) {
      // Small delay to allow the drag to complete before resuming
      setTimeout(() => {
        autoScrollRef.current?.play()
      }, 100)
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    const container = emblaApi.containerNode()

    container.addEventListener('pointerdown', handlePointerDown)
    container.addEventListener('pointerup', handlePointerUp)
    container.addEventListener('pointerleave', handlePointerUp)

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown)
      container.removeEventListener('pointerup', handlePointerUp)
      container.removeEventListener('pointerleave', handlePointerUp)
    }
  }, [emblaApi, handlePointerDown, handlePointerUp])

  return (
    <div
      className="embla"
      ref={emblaRef}
      role="region"
      aria-label="Customer testimonials carousel"
      aria-roledescription="carousel"
    >
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div
            className="embla__slide"
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${index + 1} of ${slides.length}`}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  )
}
