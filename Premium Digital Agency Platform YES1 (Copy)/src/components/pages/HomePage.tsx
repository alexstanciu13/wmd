import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Rocket, Target, Zap, Shield, Award, TrendingUp, Users, DollarSign, BarChart3, Clock, Code2, Palette, Megaphone, Brain, CheckCircle2, GraduationCap, Star, Globe, Lock, Briefcase } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
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
      industry: 'Tehnologie SaaS',
      image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      problem: 'Site web învechit cu rate de conversie slabe și implicare minimă a utilizatorilor pe paginile cheie ale produsului.',
      solution: 'Redesign complet cu UX orientat spre conversie, personalizare alimentată de AI și arhitectură de funnel optimizată.',
      results: [
        { metric: 'Rată de Conversie', value: '+247%' },
        { metric: 'Implicare Utilizatori', value: '+189%' },
      ],
    },
    {
      client: 'LuxeCommerce',
      industry: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjEyMzkzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      problem: 'Rate scăzute de conversie a coșului și rate ridicate de abandon care afectează creșterea veniturilor și valoarea pe viață a clienților.',
      solution: 'Platformă e-commerce reconstruită cu recomandări AI, checkout simplificat și automatizare de retenție.',
      results: [
        { metric: 'Creștere Venituri', value: '+312%' },
        { metric: 'Abandon Coș', value: '-68%' },
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'TechFlow Solutions',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMjkwOTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      testimonial: 'WMD ne-a transformat complet prezența digitală. ROI-ul a fost excepțional, iar abordarea lor strategică pentru creșterea noastră a fost inestimabilă. Acesta este parteneriatul premium pe care îl căutam.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Fondator',
      company: 'LuxeCommerce',
      image: 'https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMjMzMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      testimonial: 'Colaborarea cu WMD a fost ca și cum am avea o echipă internă de clasă mondială. Soluțiile lor de automatizare AI ne-au economisit nenumărate ore și au îmbunătățit semnificativ experiența clienților noștri.',
      rating: 5,
    },
  ];

  const valuePillars = [
    {
      icon: Sparkles,
      title: 'Design Premium',
      description: 'Experiențe digitale de nivel luxury care captivează și convertesc',
    },
    {
      icon: TrendingUp,
      title: 'Focusat pe ROI',
      description: 'Fiecare decizie susținută de date și optimizată pentru creștere măsurabilă',
    },
    {
      icon: Zap,
      title: 'Automatizare AI',
      description: 'Automatizare de ultimă generație care scalează operațiunile tale fără probleme',
    },
    {
      icon: Shield,
      title: 'Parteneriat Strategic',
      description: 'Colaborare pe termen lung bazată pe încredere și succes reciproc',
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
            <Badge variant="outline" className="mb-6 border-[#00AEEF]/30 text-[#00AEEF] bg-[#00AEEF]/10 px-4 py-2 animate-glow">
              <Zap className="w-4 h-4 mr-2" />
              Parteneri Digitali de Elită — Doar pe Bază de Aplicație
            </Badge>

            <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl mx-auto">
              Ridică-ți Brandul cu{' '}
              <span className="text-gradient">Excelență Digitală Premium</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Parteneriate exclusive pentru branduri în creștere rapidă care caută design excepțional, marketing bazat pe date și automatizare alimentată de AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                onClick={() => onNavigate('apply')}
                className="btn-primary h-14 px-8 glow-blue text-lg"
              >
                Aplică pentru Colaborare
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('portfolio')}
                className="btn-ghost h-14 px-8 text-lg"
              >
                Vezi Munca Noastră
              </Button>
            </div>

            <div className="glass rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-white/60">
                <Award className="w-4 h-4 inline mr-2 text-[#00AEEF]" />
                Limitat la <span className="text-[#00AEEF]">12 clienți pe trimestru</span> • Aplicație necesară
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="relative py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/60 mb-8">De Încredere pentru Liderii din Industrie</p>
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
            <h2 className="text-4xl mb-4">Impact Care Vorbește de la Sine</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Rezultate bazate pe date care transformă afaceri și depășesc așteptările
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '200+', label: 'Proiecte Finalizate', color: 'from-[#0070C9] to-[#002F6C]' },
              { icon: DollarSign, value: '$50M+', label: 'Venituri Generate', color: 'from-[#0070C9] to-[#002F6C]' },
              { icon: BarChart3, value: '247%', label: 'Creștere ROI Medie', color: 'from-[#0070C9] to-[#002F6C]' },
              { icon: Clock, value: '98%', label: 'Retenție Clienți', color: 'from-[#002F6C] to-[#0070C9]' },
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
            <h2 className="text-4xl mb-4">Servicii de Elită pentru Branduri de Elită</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Soluții cuprinzătoare concepute pentru a ridica fiecare aspect al prezenței tale digitale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Code2,
                title: 'Design & Dezvoltare Web',
                description: 'Site-uri și platforme premium construite pentru conversie, performanță și scalare',
                features: ['Dezvoltare Personalizată', 'Soluții E-Commerce', 'Aplicații Web Progressive'],
              },
              {
                icon: Megaphone,
                title: 'Marketing Digital',
                description: 'Campanii bazate pe date care maximizează ROI-ul și accelerează creșterea',
                features: ['Management PPC', 'Strategie SEO', 'Reclame Social Media'],
              },
              {
                icon: Palette,
                title: 'Strategie de Brand',
                description: 'Identități de brand distinctive care rezonează și convertesc',
                features: ['Dezvoltare Brand', 'Identitate Vizuală', 'Ghiduri Brand'],
              },
              {
                icon: Brain,
                title: 'Automatizare AI',
                description: 'Sisteme inteligente care simplifică operațiunile și îmbunătățesc experiența clienților',
                features: ['Automatizare Fluxuri', 'Chatbot-uri AI', 'Analiză Predictivă'],
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0070C9] to-[#002F6C] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              className="btn-ghost h-12 px-8"
            >
              Explorează Toate Serviciile
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">De Ce Brandurile Premium Aleg WMD</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Combinăm gândire strategică, design excepțional și tehnologie de ultimă generație pentru a livra rezultate transformatoare.
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
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0070C9] to-[#002F6C] flex items-center justify-center mb-4">
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
            <h2 className="text-4xl mb-4">Rezultate Dovedite</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Transformări reale, impact măsurabil și creștere excepțională pentru partenerii noștri.
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
              className="btn-ghost"
            >
              Vezi Toate Studiile de Caz
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Ce Spun Partenerii Noștri</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Nu lua doar cuvântul nostru. Iată ce au de spus clienții noștri despre colaborarea cu WMD.
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
            <h2 className="text-4xl mb-4">Alimentat de Tehnologie de Ultimă Generație</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Folosim cele mai recente instrumente și framework-uri pentru a livra performanță și scalabilitate excepționale
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
            <h2 className="text-4xl mb-4">Procesul Nostru</h2>
            <p className="text-white/60">O metodologie dovedită pentru rezultate excepționale</p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Aplicație & Descoperire',
                description: 'Trimite aplicația și alătură-te unei sesiuni strategice de descoperire pentru a alinia obiectivele și viziunea.',
              },
              {
                step: '02',
                title: 'Strategie & Planificare',
                description: 'Dezvoltăm o foaie de parcurs cuprinzătoare adaptată obiectivelor tale de business și țintelor de creștere.',
              },
              {
                step: '03',
                title: 'Design & Dezvoltare',
                description: 'Echipa noastră creează experiențe premium cu atenție meticuloasă la detalii și performanță.',
              },
              {
                step: '04',
                title: 'Lansare & Optimizare',
                description: 'Lansare strategică urmată de optimizare continuă și îmbunătățiri bazate pe date.',
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
          <div className="glass-strong rounded-2xl p-8 md:p-12 glow-blue overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00AEEF]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block glass rounded-full px-4 py-1 mb-4">
                  <span className="text-[#00AEEF] text-sm">Educație Gratuită • Acces pe Viață</span>
                </div>
                <h2 className="text-4xl mb-4">Stăpânește Creșterea Digitală cu Academia WMD</h2>
                <p className="text-white/70 mb-6">
                  Accesează cursuri premium despre design web, e-commerce, marketing digital și automatizare AI. Învață de la experți din industrie și dezvoltă-ți cunoștințele de business.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Cursuri video conduse de experți',
                    'Studii de caz din lumea reală',
                    'Resurse descărcabile',
                    'Acces la comunitate'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <GraduationCap className="w-5 h-5 mr-3 text-[#00AEEF]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => onNavigate('academy')}
                  className="btn-primary h-12 px-8"
                >
                  Începe să Înveți Gratuit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Design Web', modules: '12 Module' },
                  { title: 'E-Commerce', modules: '8 Module' },
                  { title: 'Marketing', modules: '10 Module' },
                  { title: 'Automatizare AI', modules: '6 Module' },
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
              <span className="text-[#00AEEF]">Parteneriat Exclusiv</span>
            </div>
            <h2 className="text-4xl mb-4">Cu Cine Lucrăm</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Ne asociem exclusiv cu branduri ambițioase pregătite să investească în creștere transformatoare
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Parteneri Ideali',
                icon: CheckCircle2,
                items: [
                  'Venit anual $500K+',
                  'Angajați pentru creștere și inovație',
                  'Apreciază parteneriatul strategic',
                  'Pregătiți să investească în soluții premium',
                  'Deschiși la abordări bazate pe date'
                ],
                className: 'border-[#00AEEF]/30'
              },
              {
                title: 'Nu Sunt Potriviți',
                icon: Target,
                items: [
                  'Caută opțiunea cea mai ieftină',
                  'Au nevoie de lucru făcut "ieri"',
                  'Nu sunt deschiși la îndrumare profesională',
                  'Nu vor să investească în calitate',
                  'Caută soluții bazate pe template-uri'
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
              Limitat la <span className="text-[#00AEEF]">12 parteneriate noi pe trimestru</span>
            </p>
            <Button
              onClick={() => onNavigate('apply')}
              className="btn-primary h-12 px-8"
            >
              Aplică Acum
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>


      {/* Industry Expertise */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Expertiză în Industrie</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Cunoștințe profunde în sectoare diverse, oferind soluții personalizate care generează rezultate
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'SaaS & Tehnologie', icon: Code2 },
              { name: 'E-Commerce', icon: Globe },
              { name: 'Servicii Profesionale', icon: Briefcase },
              { name: 'Sănătate', icon: Shield },
              { name: 'Finanțe & Fintech', icon: DollarSign },
              { name: 'Imobiliare', icon: Target },
              { name: 'Educație', icon: GraduationCap },
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
            <h2 className="text-4xl mb-4">Întrebări Frecvente</h2>
            <p className="text-white/60">
              Tot ce trebuie să știi despre parteneriatul cu WMD
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Care este cronologia tipică a unui proiect?',
                answer: 'Cronologia proiectelor variază în funcție de domeniu și complexitate. Un proiect tipic de site web durează 6-12 săptămâni, în timp ce transformările digitale cuprinzătoare pot dura 3-6 luni. Oferim cronologii detaliate în faza de descoperire.'
              },
              {
                question: 'Care sunt cerințele minime pentru proiecte?',
                answer: 'Lucrăm cu afaceri consacrate cu venituri anuale de $500K+ și bugete de proiect începând de la $25,000. Acest lucru asigură că putem livra calitatea și profunzimea serviciilor care generează rezultate transformatoare.'
              },
              {
                question: 'Oferiți planuri de plată?',
                answer: 'Da, oferim structuri de plată flexibile pentru clienții calificați. De obicei, lucrăm cu un avans de 50% și plăți bazate pe milestone-uri pe parcursul ciclului de viață al proiectului.'
              },
              {
                question: 'Cum măsurați succesul?',
                answer: 'Stabilim KPI-uri clare aliniate cu obiectivele tale de business în faza de descoperire. Acestea includ metrici precum ratele de conversie, creșterea veniturilor, implicarea utilizatorilor și ROI. Oferim analize detaliate și raportare regulată.'
              },
              {
                question: 'Ce suport continuu oferiți?',
                answer: 'Toți clienții primesc 30 de zile de suport post-lansare incluse. De asemenea, oferim pachete de reținere lunare pentru optimizare continuă, întreținere și îndrumare strategică pentru a asigura creșterea continuă.'
              },
              {
                question: 'De ce există un proces de aplicație?',
                answer: 'Procesul nostru de aplicație asigură potrivirea reciprocă și ne permite să menținem calitatea serviciilor pe care clienții noștri o așteaptă. Putem accepta doar 12 parteneriate noi pe trimestru, deci selectăm cu atenție proiectele unde putem livra rezultate excepționale.'
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
            Ești Gata să îți <span className="text-gradient">Transformi</span> Prezența Digitală?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Alătură-te grupului exclusiv de branduri în creștere rapidă cu care ne asociem.
          </p>
          <Button
            onClick={() => onNavigate('apply')}
            className="btn-primary h-14 px-8 text-lg glow-blue"
          >
            Aplică pentru Colaborare
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
