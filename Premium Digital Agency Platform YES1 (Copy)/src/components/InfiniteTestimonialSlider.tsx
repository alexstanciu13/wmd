import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
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
  return (
    <div className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, A11y, FreeMode]}
        loop={true}
        speed={450}
        freeMode={{ enabled: true, momentum: true, momentumRatio: 1, sticky: false }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1.15, spaceBetween: 14 },
          640: { slidesPerView: 2, spaceBetween: 18 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        onTouchStart={(swiper: SwiperType) => swiper.autoplay?.stop()}
        onTouchEnd={(swiper: SwiperType) => swiper.autoplay?.start()}
        className="testimonial-swiper"
        aria-roledescription="carousel"
        aria-label="Testimoniale"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={`${testimonial.name}-${index}`}
            className="h-auto"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${testimonials.length}`}
          >
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fade gradients */}
      <div className="absolute top-0 left-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none z-10" />
    </div>
  );
}
