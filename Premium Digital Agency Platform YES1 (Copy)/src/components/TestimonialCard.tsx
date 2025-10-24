import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

export function TestimonialCard({
  name,
  role,
  company,
  image,
  testimonial,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? 'fill-[#FFD700] text-[#FFD700]'
                  : 'text-white/20'
              }`}
            />
          ))}
        </div>
        <Quote className="w-8 h-8 text-[#00AEEF]/20" />
      </div>

      <p className="text-white/80 mb-6 italic">"{testimonial}"</p>

      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00AEEF]/30">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm">{name}</h4>
          <p className="text-sm text-white/60">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
