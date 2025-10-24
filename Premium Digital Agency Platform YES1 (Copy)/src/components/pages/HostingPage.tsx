import { motion } from 'motion/react';
import { Server, Shield, Zap, HeadphonesIcon, Globe, Lock } from 'lucide-react';
import { PricingCard } from '../PricingCard';
import { toast } from 'sonner@2.0.3';

interface HostingPageProps {
  onNavigate: (page: string) => void;
}

export function HostingPage({ onNavigate }: HostingPageProps) {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      description: 'Perfect for startups and small businesses',
      features: [
        '10 GB SSD Storage',
        '100 GB Bandwidth',
        '5 Email Accounts',
        'Free SSL Certificate',
        '99.9% Uptime Guarantee',
        'Daily Backups',
        'Basic Support (24/7)',
        '1 Domain Included',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$79',
      description: 'Ideal for growing businesses',
      features: [
        '50 GB SSD Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Free SSL Certificate',
        '99.99% Uptime Guarantee',
        'Hourly Backups',
        'Priority Support (24/7)',
        '5 Domains Included',
        'CDN Integration',
        'Advanced Security',
        'Staging Environment',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For high-traffic, mission-critical sites',
      features: [
        'Unlimited SSD Storage',
        'Unlimited Bandwidth',
        'Unlimited Email Accounts',
        'Free SSL Certificate',
        '99.999% Uptime Guarantee',
        'Real-time Backups',
        'Dedicated Account Manager',
        'Unlimited Domains',
        'Global CDN',
        'DDoS Protection',
        'Dedicated Resources',
        'White Glove Migration',
        'Performance Optimization',
      ],
      highlighted: false,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security protocols, SSL certificates, and DDoS protection to keep your site safe.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'SSD storage, CDN integration, and optimized infrastructure for blazing fast load times.',
    },
    {
      icon: Server,
      title: '99.99% Uptime',
      description: 'Reliable infrastructure with redundancy and monitoring to ensure your site stays online.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Premium Support',
      description: '24/7 expert support team ready to help with any technical issues or questions.',
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Content delivery network ensures fast loading times for visitors worldwide.',
    },
    {
      icon: Lock,
      title: 'Daily Backups',
      description: 'Automated backups with one-click restore to protect your valuable data.',
    },
  ];

  const handleSelectPlan = (planName: string) => {
    toast.success('Great Choice!', {
      description: `${planName} plan selected. Redirecting to checkout...`,
    });
    // In a real app, this would navigate to a checkout page
  };

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block glass-strong rounded-full px-6 py-2 mb-6">
            <Server className="w-5 h-5 inline mr-2 text-[#00AEEF]" />
            <span className="text-[#00AEEF]">Powered by ROMARG</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6">
            Premium <span className="text-gradient">Hosting & Domains</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Enterprise-grade infrastructure with the reliability and performance your business demands. Secure, fast, and fully managed.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Choose Your Plan</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            All plans include premium features. Scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PricingCard
                {...plan}
                onSelect={() => handleSelectPlan(plan.name)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Domain Services */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-strong rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Globe className="w-16 h-16 mx-auto mb-4 text-[#00AEEF]" />
            <h2 className="text-3xl mb-4">Domain Registration</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Secure your perfect domain name with competitive pricing and easy management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-lg p-6 text-center">
              <div className="text-3xl text-gradient mb-2">$12.99</div>
              <div className="text-white/60 mb-4">.com domain/year</div>
              <ul className="text-sm text-white/70 space-y-2">
                <li>Free WHOIS privacy</li>
                <li>DNS management</li>
                <li>Easy transfer</li>
              </ul>
            </div>

            <div className="glass rounded-lg p-6 text-center">
              <div className="text-3xl text-gradient mb-2">$9.99</div>
              <div className="text-white/60 mb-4">.net domain/year</div>
              <ul className="text-sm text-white/70 space-y-2">
                <li>Free WHOIS privacy</li>
                <li>DNS management</li>
                <li>Easy transfer</li>
              </ul>
            </div>

            <div className="glass rounded-lg p-6 text-center">
              <div className="text-3xl text-gradient mb-2">$14.99</div>
              <div className="text-white/60 mb-4">.io domain/year</div>
              <ul className="text-sm text-white/70 space-y-2">
                <li>Free WHOIS privacy</li>
                <li>DNS management</li>
                <li>Easy transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl text-gradient mb-2">99.99%</div>
              <div className="text-white/60 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-3xl text-gradient mb-2">24/7</div>
              <div className="text-white/60 text-sm">Support</div>
            </div>
            <div>
              <div className="text-3xl text-gradient mb-2">10K+</div>
              <div className="text-white/60 text-sm">Sites Hosted</div>
            </div>
            <div>
              <div className="text-3xl text-gradient mb-2">5★</div>
              <div className="text-white/60 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
