import React, { useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const AUTOPLAY_SPEED = 1 // pixels per frame for visible smooth scroll

export default function TestimonialsCarousel({ slides }: { slides: React.ReactNode[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    slidesToScroll: 1,
    containScroll: false
  })

  const rafRef = useRef<number | null>(null)

  const animate = useCallback(() => {
    if (!emblaApi) return

    // Scroll by 1 pixel per frame for smooth visible motion
    const engine = emblaApi.internalEngine()
    const currentScroll = engine.location.get()
    engine.location.set(currentScroll + AUTOPLAY_SPEED)
    engine.translate.to(engine.location)
    engine.animation.start()

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
