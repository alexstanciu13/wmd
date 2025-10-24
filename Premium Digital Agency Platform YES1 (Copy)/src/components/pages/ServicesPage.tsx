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
      title: 'Web Design & Development',
      description: 'Premium, conversion-optimized websites that captivate audiences and drive measurable results.',
      features: [
        'Custom UI/UX Design',
        'Responsive Development',
        'Performance Optimization',
        'CMS Integration',
        'E-Commerce Solutions',
      ],
      page: 'web-design',
      color: 'from-[#00AEEF] to-[#1A237E]',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that maximize ROI and accelerate sustainable growth.',
      features: [
        'SEO & Content Strategy',
        'PPC & Paid Advertising',
        'Social Media Marketing',
        'Email Marketing',
        'Analytics & Reporting',
      ],
      page: 'marketing',
      color: 'from-[#9333EA] to-[#00AEEF]',
    },
    {
      icon: Sparkles,
      title: 'Brand Identity',
      description: 'Distinctive brand identities that resonate with your audience and stand out in the market.',
      features: [
        'Brand Strategy',
        'Logo & Visual Identity',
        'Brand Guidelines',
        'Marketing Collateral',
        'Brand Positioning',
      ],
      page: 'branding',
      color: 'from-[#1A237E] to-[#9333EA]',
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Cutting-edge AI solutions that streamline operations and unlock new growth opportunities.',
      features: [
        'Process Automation',
        'AI Chatbots',
        'Predictive Analytics',
        'Workflow Optimization',
        'Custom AI Solutions',
      ],
      page: 'ai-automation',
      color: 'from-[#00AEEF] to-[#9333EA]',
    },
  ];

  const process = [
    {
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business, goals, and target audience to develop a winning strategy.',
    },
    {
      title: 'Design & Planning',
      description: 'Create detailed designs and roadmaps with stakeholder collaboration and feedback.',
    },
    {
      title: 'Development & Execution',
      description: 'Build and implement solutions with precision, quality, and attention to detail.',
    },
    {
      title: 'Launch & Optimization',
      description: 'Strategic launch followed by continuous monitoring, testing, and optimization.',
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
            Premium <span className="text-gradient">Digital Services</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Comprehensive solutions designed to elevate your brand and drive exceptional growth.
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center mb-6">
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
                  className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity w-full group"
                >
                  Learn More
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
          <h2 className="text-4xl mb-4">Our Process</h2>
          <p className="text-white/60">
            A proven methodology that delivers exceptional results
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
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join the exclusive group of high-growth brands we partner with. Limited slots available.
          </p>
          <Button
            onClick={() => onNavigate('apply')}
            className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity h-12 px-8"
          >
            Apply for Collaboration
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
