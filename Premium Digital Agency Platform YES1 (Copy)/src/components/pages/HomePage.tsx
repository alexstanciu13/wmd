import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Rocket, Target, Zap, Shield, Award, TrendingUp, Users, DollarSign, BarChart3, Clock, Code2, Palette, Megaphone, Brain, CheckCircle2, GraduationCap, Star, Globe, Lock, Briefcase } from 'lucide-react';
import { Button } from '../ui/button';
import { CaseStudyCard } from '../CaseStudyCard';
import { TestimonialCard } from '../TestimonialCard';
import { CodeRain } from '../CodeRain';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const caseStudies = [
    {
      client: 'TechFlow Solutions',
      industry: 'SaaS Technology',
      image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      problem: 'Outdated website with poor conversion rates and minimal user engagement across key product pages.',
      solution: 'Complete redesign with conversion-focused UX, AI-powered personalization, and optimized funnel architecture.',
      results: [
        { metric: 'Conversion Rate', value: '+247%' },
        { metric: 'User Engagement', value: '+189%' },
      ],
    },
    {
      client: 'LuxeCommerce',
      industry: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjEyMzkzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      problem: 'Low cart conversion and high abandonment rates impacting revenue growth and customer lifetime value.',
      solution: 'Rebuilt e-commerce platform with AI recommendations, streamlined checkout, and retention automation.',
      results: [
        { metric: 'Revenue Growth', value: '+312%' },
        { metric: 'Cart Abandonment', value: '-68%' },
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'TechFlow Solutions',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMjkwOTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      testimonial: 'WMD transformed our digital presence completely. The ROI has been exceptional, and their strategic approach to our growth has been invaluable. This is the premium partnership we were looking for.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder',
      company: 'LuxeCommerce',
      image: 'https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMjMzMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      testimonial: 'Working with WMD felt like having a world-class in-house team. Their AI automation solutions have saved us countless hours and significantly improved our customer experience.',
      rating: 5,
    },
  ];

  const valuePillars = [
    {
      icon: Sparkles,
      title: 'Premium Design',
      description: 'Luxury-grade digital experiences that captivate and convert',
    },
    {
      icon: TrendingUp,
      title: 'ROI-Focused',
      description: 'Every decision backed by data and optimized for measurable growth',
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Cutting-edge automation that scales your operations seamlessly',
    },
    {
      icon: Shield,
      title: 'Strategic Partnership',
      description: 'Long-term collaboration built on trust and mutual success',
    },
  ];

  const clientLogos = [
    'TechFlow', 'LuxeCommerce', 'Innovate', 'Catalyst', 'Nexus', 'Quantum'
  ];

  return (
    <div className="relative">
      <CodeRain />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block glass-strong rounded-full px-6 py-2 mb-8">
              <span className="text-[#00AEEF]">✦ Elite Digital Agency ✦</span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl mx-auto">
              Elevate Your Brand with{' '}
              <span className="text-gradient">Premium Digital Excellence</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Exclusive partnerships for high-growth brands seeking exceptional design, data-driven marketing, and AI-powered automation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                onClick={() => onNavigate('apply')}
                className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity h-14 px-8 glow-cyan text-lg"
              >
                Apply for Collaboration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('portfolio')}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 h-14 px-8 text-lg"
              >
                View Our Work
              </Button>
            </div>

            <div className="glass rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-white/60">
                <Award className="w-4 h-4 inline mr-2 text-[#00AEEF]" />
                Limited to <span className="text-[#00AEEF]">12 clients per quarter</span> • Application required
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="relative py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/60 mb-8">Trusted by Industry Leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <span className="text-2xl text-white/40 hover:text-white/80 transition-colors">
                  {logo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-[#1A237E]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Impact That Speaks Volumes</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Data-driven results that transform businesses and exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '200+', label: 'Projects Delivered', color: 'from-[#00AEEF] to-cyan-600' },
              { icon: DollarSign, value: '$50M+', label: 'Revenue Generated', color: 'from-[#9333EA] to-purple-600' },
              { icon: BarChart3, value: '247%', label: 'Avg ROI Increase', color: 'from-[#00AEEF] to-[#1A237E]' },
              { icon: Clock, value: '98%', label: 'Client Retention', color: 'from-[#1A237E] to-[#9333EA]' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl md:text-4xl mb-2 text-gradient">{stat.value}</div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Elite Services for Elite Brands</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate every aspect of your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Code2,
                title: 'Web Design & Development',
                description: 'Premium websites and platforms built for conversion, performance, and scale',
                features: ['Custom Development', 'E-Commerce Solutions', 'Progressive Web Apps'],
              },
              {
                icon: Megaphone,
                title: 'Digital Marketing',
                description: 'Data-driven campaigns that maximize ROI and accelerate growth',
                features: ['PPC Management', 'SEO Strategy', 'Social Media Ads'],
              },
              {
                icon: Palette,
                title: 'Brand Strategy',
                description: 'Distinctive brand identities that resonate and convert',
                features: ['Brand Development', 'Visual Identity', 'Brand Guidelines'],
              },
              {
                icon: Brain,
                title: 'AI Automation',
                description: 'Intelligent systems that streamline operations and enhance customer experience',
                features: ['Workflow Automation', 'AI Chatbots', 'Predictive Analytics'],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-8 hover:glass-strong transition-all duration-300 group cursor-pointer"
                onClick={() => onNavigate('services')}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-white/60 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-white/50">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-[#00AEEF]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('services')}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 h-12 px-8"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Premium Brands Choose WMD</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We combine strategic thinking, exceptional design, and cutting-edge technology to deliver transformative results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">{pillar.title}</h3>
                <p className="text-white/60 text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Proven Results</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Real transformations, measurable impact, and exceptional growth for our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CaseStudyCard {...study} onClick={() => onNavigate('portfolio')} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('portfolio')}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">What Our Partners Say</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with WMD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-[#00AEEF]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Powered by Cutting-Edge Technology</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We leverage the latest tools and frameworks to deliver exceptional performance and scalability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'React', 'Next.js', 'Node.js', 'Python', 'TailwindCSS', 'TypeScript',
              'OpenAI', 'AWS', 'Vercel', 'Shopify', 'WordPress', 'Webflow'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-lg p-6 text-center hover:glass-strong transition-all duration-300 hover:scale-105"
              >
                <p className="text-white/80">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Process</h2>
            <p className="text-white/60">A proven methodology for exceptional results</p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Application & Discovery',
                description: 'Submit your application and join a strategic discovery session to align goals and vision.',
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'We develop a comprehensive roadmap tailored to your business objectives and growth targets.',
              },
              {
                step: '03',
                title: 'Design & Development',
                description: 'Our team crafts premium experiences with meticulous attention to detail and performance.',
              },
              {
                step: '04',
                title: 'Launch & Optimization',
                description: 'Strategic launch followed by continuous optimization and data-driven improvements.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 flex items-start space-x-6"
              >
                <div className="text-4xl text-gradient flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WMD Academy Promotion */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-8 md:p-12 glow-cyan overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00AEEF]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block glass rounded-full px-4 py-1 mb-4">
                  <span className="text-[#00AEEF] text-sm">Free Education • Lifetime Access</span>
                </div>
                <h2 className="text-4xl mb-4">Master Digital Growth with WMD Academy</h2>
                <p className="text-white/70 mb-6">
                  Access premium courses on web design, e-commerce, digital marketing, and AI automation. Learn from industry experts and grow your business knowledge.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Expert-led video courses',
                    'Real-world case studies',
                    'Downloadable resources',
                    'Community access'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <GraduationCap className="w-5 h-5 mr-3 text-[#00AEEF]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => onNavigate('academy')}
                  className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity h-12 px-8"
                >
                  Start Learning Free
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Web Design', modules: '12 Modules' },
                  { title: 'E-Commerce', modules: '8 Modules' },
                  { title: 'Marketing', modules: '10 Modules' },
                  { title: 'AI Automation', modules: '6 Modules' },
                ].map((course, index) => (
                  <motion.div
                    key={course.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-lg p-4 hover:scale-105 transition-transform duration-300"
                  >
                    <GraduationCap className="w-8 h-8 mb-2 text-[#00AEEF]" />
                    <h4 className="mb-1">{course.title}</h4>
                    <p className="text-sm text-white/50">{course.modules}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Selection Criteria */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-[#1A237E]/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block glass-strong rounded-full px-6 py-2 mb-6">
              <Lock className="w-4 h-4 inline mr-2 text-[#00AEEF]" />
              <span className="text-[#00AEEF]">Exclusive Partnership</span>
            </div>
            <h2 className="text-4xl mb-4">Who We Work With</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We partner exclusively with ambitious brands ready to invest in transformative growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Ideal Partners',
                icon: CheckCircle2,
                items: [
                  'Annual revenue $500K+',
                  'Committed to growth and innovation',
                  'Value strategic partnership',
                  'Ready to invest in premium solutions',
                  'Open to data-driven approaches'
                ],
                className: 'border-[#00AEEF]/30'
              },
              {
                title: 'Not a Fit',
                icon: Target,
                items: [
                  'Looking for the cheapest option',
                  'Need work done "yesterday"',
                  'Not open to professional guidance',
                  'Unwilling to invest in quality',
                  'Seeking template-based solutions'
                ],
                className: 'border-white/10'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-strong rounded-xl p-8 border ${category.className}`}
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-6 h-6 mr-3 text-[#00AEEF]" />
                  <h3 className="text-xl">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60 mb-6">
              Limited to <span className="text-[#00AEEF]">12 new partnerships per quarter</span>
            </p>
            <Button
              onClick={() => onNavigate('apply')}
              className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity h-12 px-8"
            >
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Hosting Promo */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-8 md:p-12 text-center glow-indigo">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-[#00AEEF]" />
            <h2 className="text-3xl mb-4">Premium Hosting & Domains</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Enterprise-grade infrastructure powered by ROMARG. Secure, fast, and reliable hosting solutions for businesses that demand excellence.
            </p>
            <Button
              onClick={() => onNavigate('hosting')}
              className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity"
            >
              Explore Hosting Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Industry Expertise</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Deep knowledge across diverse sectors, delivering tailored solutions that drive results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'SaaS & Technology', icon: Code2 },
              { name: 'E-Commerce', icon: Globe },
              { name: 'Professional Services', icon: Briefcase },
              { name: 'Healthcare', icon: Shield },
              { name: 'Finance & Fintech', icon: DollarSign },
              { name: 'Real Estate', icon: Target },
              { name: 'Education', icon: GraduationCap },
              { name: 'Manufacturing', icon: BarChart3 },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-lg p-6 text-center hover:glass-strong transition-all duration-300"
              >
                <industry.icon className="w-8 h-8 mx-auto mb-3 text-[#00AEEF]" />
                <p className="text-white/80 text-sm">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-[#00AEEF]/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60">
              Everything you need to know about partnering with WMD
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. A typical website project ranges from 6-12 weeks, while comprehensive digital transformations can take 3-6 months. We provide detailed timelines during the discovery phase.'
              },
              {
                question: 'What are your minimum project requirements?',
                answer: 'We work with established businesses with annual revenue of $500K+ and project budgets starting at $25,000. This ensures we can deliver the quality and depth of service that drives transformative results.'
              },
              {
                question: 'Do you offer payment plans?',
                answer: 'Yes, we offer flexible payment structures for qualified clients. Typically, we work with a 50% deposit and milestone-based payments throughout the project lifecycle.'
              },
              {
                question: 'How do you measure success?',
                answer: 'We establish clear KPIs aligned with your business objectives during the discovery phase. This includes metrics like conversion rates, revenue growth, user engagement, and ROI. We provide detailed analytics and regular reporting.'
              },
              {
                question: 'What ongoing support do you provide?',
                answer: 'All clients receive 30 days of post-launch support included. We also offer monthly retainer packages for ongoing optimization, maintenance, and strategic guidance to ensure continued growth.'
              },
              {
                question: 'Why is there an application process?',
                answer: 'Our application process ensures mutual fit and allows us to maintain the quality of service our clients expect. We can only take on 12 new partnerships per quarter, so we carefully select projects where we can deliver exceptional results.'
              }
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-strong rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Digital Presence?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Join the exclusive group of high-growth brands we partner with.
          </p>
          <Button
            onClick={() => onNavigate('apply')}
            className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity h-14 px-8 text-lg glow-cyan"
          >
            Apply for Collaboration
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
