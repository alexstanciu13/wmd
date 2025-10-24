import { motion } from 'motion/react';
import { Palette, TrendingUp, Sparkles, Bot, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Palette,
      title: 'Design & Dezvoltare Web',
      description: 'Site-uri web premium, optimizate pentru conversie, care captivează audiențele și generează rezultate măsurabile.',
      features: [
        'Design UI/UX Personalizat',
        'Dezvoltare Responsivă',
        'Optimizare Performanță',
        'Integrare CMS',
        'Soluții E-Commerce',
      ],
      page: 'web-design',
      color: 'from-[#00AEEF] to-[#1A237E]',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description: 'Strategii de marketing bazate pe date care maximizează ROI-ul și accelerează creșterea sustenabilă.',
      features: [
        'Strategie SEO & Conținut',
        'PPC & Publicitate Plătită',
        'Marketing Social Media',
        'Email Marketing',
        'Analytics & Raportare',
      ],
      page: 'marketing',
      color: 'from-[#2563EB] to-[#00AEEF]',
    },
    {
      icon: Sparkles,
      title: 'Identitate de Brand',
      description: 'Identități de brand distinctive care rezonează cu audiența ta și se evidențiază pe piață.',
      features: [
        'Strategie Brand',
        'Logo & Identitate Vizuală',
        'Ghiduri Brand',
        'Materiale Marketing',
        'Poziționare Brand',
      ],
      page: 'branding',
      color: 'from-[#1A237E] to-[#2563EB]',
    },
    {
      icon: Bot,
      title: 'Automatizare AI',
      description: 'Soluții AI de ultimă generație care simplifică operațiunile și deblochează noi oportunități de creștere.',
      features: [
        'Automatizare Procese',
        'Chatbot-uri AI',
        'Analiză Predictivă',
        'Optimizare Fluxuri',
        'Soluții AI Personalizate',
      ],
      page: 'ai-automation',
      color: 'from-[#00AEEF] to-[#2563EB]',
    },
  ];

  const process = [
    {
      title: 'Descoperire & Strategie',
      description: 'Analiză profundă a afacerii tale, obiectivelor și audienței țintă pentru a dezvolta o strategie câștigătoare.',
    },
    {
      title: 'Design & Planificare',
      description: 'Creăm designuri și foi de parcurs detaliate cu colaborare și feedback de la stakeholderi.',
    },
    {
      title: 'Dezvoltare & Execuție',
      description: 'Construim și implementăm soluții cu precizie, calitate și atenție la detalii.',
    },
    {
      title: 'Lansare & Optimizare',
      description: 'Lansare strategică urmată de monitorizare continuă, testare și optimizare.',
    },
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Servicii <span className="text-gradient">Digitale Premium</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Soluții cuprinzătoare concepute pentru a-ți ridica brandul și a genera creștere excepțională.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:glass-strong transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#2563EB] flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl mb-4">{service.title}</h2>
                <p className="text-white/70 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => onNavigate(service.page)}
                  className="bg-gradient-to-r from-[#00AEEF] to-[#2563EB] text-white hover:opacity-90 transition-opacity w-full group"
                >
                  Află Mai Multe
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Procesul Nostru</h2>
          <p className="text-white/60">
            O metodologie dovedită care livrează rezultate excepționale
          </p>
        </div>

        <div className="space-y-6">
          {process.map((step, index) => (
            <motion.div
              key={step.title}
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

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-strong rounded-2xl p-8 md:p-12 text-center glow-cyan">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ești Gata să Începi?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Alătură-te grupului exclusiv de branduri în creștere rapidă cu care ne asociem. Locuri limitate disponibile.
          </p>
          <Button
            onClick={() => onNavigate('apply')}
            className="bg-gradient-to-r from-[#00AEEF] to-[#2563EB] text-white hover:opacity-90 transition-opacity h-12 px-8"
          >
            Aplică pentru Colaborare
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
