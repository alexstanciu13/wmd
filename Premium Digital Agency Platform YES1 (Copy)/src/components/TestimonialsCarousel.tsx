import React, { useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const AUTOPLAY_SPEED = 0.3 // adjust for slower/faster scroll

export default function TestimonialsCarousel({ slides }: { slides: React.ReactNode[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    align: 'start',
    skipSnaps: false,
    slidesToScroll: 1
  })

  const rafRef = useRef<number | null>(null)

  const animate = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollBy(AUTOPLAY_SPEED)
    rafRef.current = requestAnimationFrame(animate)
  }, [emblaApi])

  const start = useCallback(() => {
    if (rafRef.current === null) rafRef.current = requestAnimationFrame(animate)
  }, [animate])

  const stop = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    start()

    const root = emblaApi.rootNode()

    root.addEventListener('mouseenter', stop)
    root.addEventListener('mouseleave', start)

    emblaApi.on('pointerDown', stop)
    emblaApi.on('pointerUp', start)
    emblaApi.on('settle', start)

    return () => {
      stop()
      root.removeEventListener('mouseenter', stop)
      root.removeEventListener('mouseleave', start)
    }
  }, [emblaApi, start, stop])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  )
}
