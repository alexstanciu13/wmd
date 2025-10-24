import { ArrowRight, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyCardProps {
  client: string;
  industry: string;
  image: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  onClick: () => void;
}

export function CaseStudyCard({
  client,
  industry,
  image,
  problem,
  solution,
  results,
  onClick,
}: CaseStudyCardProps) {
  return (
    <div
      onClick={onClick}
      className="glass rounded-2xl overflow-hidden group cursor-pointer hover:glass-strong transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={client}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="glass-strong px-3 py-1 rounded-full text-sm text-[#00AEEF] inline-block mb-2">
            {industry}
          </span>
          <h3 className="text-2xl">{client}</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-[#00AEEF] mb-2">The Challenge</h4>
          <p className="text-white/70 line-clamp-2">{problem}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-[#9333EA] mb-2">Our Solution</h4>
          <p className="text-white/70 line-clamp-2">{solution}</p>
        </div>

        <div className="glass rounded-lg p-4 mb-4">
          <div className="flex items-center space-x-2 mb-3">
            <TrendingUp className="w-5 h-5 text-[#00AEEF]" />
            <h4>Key Results</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {results.map((result, index) => (
              <div key={index}>
                <div className="text-2xl text-gradient mb-1">{result.value}</div>
                <div className="text-sm text-white/60">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="flex items-center space-x-2 text-[#00AEEF] group-hover:space-x-3 transition-all">
          <span>View Full Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
