import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ServiceDetailPageProps {
  service: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
    benefits: string[];
    process: { title: string; description: string }[];
    pricing: string;
  };
  onNavigate: (page: string) => void;
}

export function ServiceDetailPage({ service, onNavigate }: ServiceDetailPageProps) {
  return (
    <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/70 mb-6">
              {service.subtitle}
            </p>
            <p className="text-white/60 mb-8">
              {service.description}
            </p>
            <Button
              onClick={() => onNavigate('apply')}
              className="bg-gradient-to-r from-[#0070C9] to-[#002F6C] text-white hover:opacity-90 transition-opacity h-12 px-8"
            >
              Începe Acum
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="glass rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Ce Este Inclus</h2>
          <p className="text-white/60">Soluții complete adaptate nevoilor tale</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <Check className="w-6 h-6 text-[#00AEEF] mb-3" />
              <p className="text-white/80">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-strong rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl mb-8 text-center">De Ce Să Alegi WMD</h2>
          <div className="space-y-4">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0070C9] to-[#002F6C] flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-white/80">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Procesul Nostru</h2>
          <p className="text-white/60">Cum livrăm rezultate excepționale</p>
        </div>

        <div className="space-y-6">
          {service.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 flex items-start space-x-6"
            >
              <div className="text-4xl text-gradient flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-white/60">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-strong rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl mb-4">Investiție</h2>
          <div className="text-5xl text-gradient mb-4">{service.pricing}</div>
          <p className="text-white/60 mb-8">
            Soluții personalizate adaptate nevoilor și obiectivelor tale specifice
          </p>
          <Button
            onClick={() => onNavigate('apply')}
            className="bg-gradient-to-r from-[#0070C9] to-[#002F6C] text-white hover:opacity-90 transition-opacity h-12 px-8"
          >
            Solicită Propunere
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl mb-6">Ești Gata să Începi?</h2>
          <p className="text-xl text-white/70 mb-8">
            Să discutăm cum te putem ajuta să îți atingi obiectivele.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('apply')}
              className="bg-gradient-to-r from-[#0070C9] to-[#002F6C] text-white hover:opacity-90 transition-opacity h-12 px-8"
            >
              Aplică Acum
            </Button>
            <Button
              onClick={() => onNavigate('portfolio')}
              className="bg-gradient-to-r from-[#0070C9] to-[#002F6C] text-white hover:from-[#0084E8] hover:to-[#003D85] transition-all h-12 px-8 border border-[#0070C9]/30"
            >
              Vezi Studii de Caz
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
