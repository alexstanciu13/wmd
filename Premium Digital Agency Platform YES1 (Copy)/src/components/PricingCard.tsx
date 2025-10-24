import { Check, Zap } from 'lucide-react';
import { Button } from './ui/button';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  onSelect: () => void;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  onSelect,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 ${
        highlighted
          ? 'glass-strong border-2 border-[#00AEEF] glow-cyan scale-105'
          : 'glass border border-white/10'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-[#00AEEF] to-[#1E40AF] text-white px-4 py-1 rounded-full text-sm flex items-center space-x-1">
            <Zap className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-4xl text-gradient">{price}</span>
          {price !== 'Custom' && <span className="text-white/60">/month</span>}
        </div>
        <p className="text-white/60 text-sm">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
            <span className="text-white/80">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={onSelect}
        className={`w-full ${
          highlighted
            ? 'bg-gradient-to-r from-[#00AEEF] to-[#1E40AF] text-white hover:opacity-90'
            : 'bg-white/10 text-white hover:bg-white/20'
        } transition-all`}
      >
        Get Started
      </Button>
    </div>
  );
}
