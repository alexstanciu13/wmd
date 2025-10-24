import { Clock, Users, Star } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  level: string;
  onEnroll: () => void;
}

export function CourseCard({
  title,
  description,
  image,
  duration,
  students,
  rating,
  level,
  onEnroll,
}: CourseCardProps) {
  return (
    <div className="glass rounded-xl overflow-hidden group hover:glass-strong transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="glass-strong px-3 py-1 rounded-full text-sm text-[#00AEEF]">
            {level}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 line-clamp-2">{title}</h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mb-4 text-sm text-white/60">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
            <span>{rating}</span>
          </div>
        </div>

        <Button
          onClick={onEnroll}
          className="w-full bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity"
        >
          Enroll for Free
        </Button>
      </div>
    </div>
  );
}
