import { motion } from 'motion/react';
import { useState } from 'react';
import { CaseStudyCard } from '../CaseStudyCard';
import { Badge } from '../ui/badge';


export function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const caseStudies = [
    {
      client: 'TechFlow Solutions',
      industry: 'SaaS Technology',
      image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      problem: 'TechFlow had an outdated website with a 1.2% conversion rate. Their complex product offerings confused visitors, leading to high bounce rates and minimal demo requests.',
      solution: 'We redesigned their entire digital presence with a conversion-optimized UX, implemented AI-powered product recommendations, and restructured their information architecture for clarity.',
      results: [
        { metric: 'Conversion Rate', value: '+247%' },
        { metric: 'Demo Requests', value: '+312%' },
        { metric: 'Time on Site', value: '+189%' },
        { metric: 'Bounce Rate', value: '-58%' },
      ],
      category: 'web-design',
    },
    {
      client: 'LuxeCommerce',
      industry: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjEyMzkzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      problem: 'High cart abandonment (78%) and low average order value plagued their luxury fashion e-commerce platform. Poor mobile experience affected 60% of their traffic.',
      solution: 'Complete platform rebuild with headless commerce, AI-powered sizing recommendations, streamlined checkout, mobile-first design, and retention automation.',
      results: [
        { metric: 'Revenue', value: '+312%' },
        { metric: 'Cart Abandonment', value: '-68%' },
        { metric: 'Mobile Conversions', value: '+425%' },
        { metric: 'AOV', value: '+87%' },
      ],
      category: 'ecommerce',
    },
    {
      client: 'Innovate Marketing',
      industry: 'Marketing Agency',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTIzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      problem: 'Struggling to generate qualified leads and showcase their expertise. Their content marketing efforts yielded minimal engagement and brand awareness.',
      solution: 'Comprehensive digital marketing strategy including SEO optimization, thought leadership content, strategic PPC campaigns, and marketing automation.',
      results: [
        { metric: 'Organic Traffic', value: '+428%' },
        { metric: 'Qualified Leads', value: '+356%' },
        { metric: 'Brand Mentions', value: '+290%' },
        { metric: 'Content Engagement', value: '+512%' },
      ],
      category: 'marketing',
    },
    {
      client: 'Catalyst Ventures',
      industry: 'Investment Firm',
      image: 'https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMjMzMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      problem: 'Outdated brand identity that didn\'t reflect their premium positioning. Inconsistent messaging across channels undermined credibility with high-net-worth clients.',
      solution: 'Complete brand overhaul including strategy, visual identity, messaging framework, and premium marketing collateral aligned with their luxury positioning.',
      results: [
        { metric: 'Brand Perception', value: '+245%' },
        { metric: 'Client Inquiries', value: '+198%' },
        { metric: 'AUM Growth', value: '+167%' },
        { metric: 'Referrals', value: '+284%' },
      ],
      category: 'branding',
    },
    {
      client: 'AutomateX',
      industry: 'Business Services',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyMTA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      problem: 'Manual processes consuming 40+ hours per week. Customer service bottlenecks causing delays and affecting satisfaction scores.',
      solution: 'Implemented AI chatbots, workflow automation, predictive analytics for demand forecasting, and automated reporting systems.',
      results: [
        { metric: 'Time Saved', value: '40hrs/wk' },
        { metric: 'Response Time', value: '-85%' },
        { metric: 'Customer Satisfaction', value: '+94%' },
        { metric: 'Operational Cost', value: '-62%' },
      ],
      category: 'automation',
    },
    {
      client: 'GlobalTech Corp',
      industry: 'Technology',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMjkwOTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      problem: 'Needed to rebrand and launch a new SaaS product in a competitive market with limited time and budget constraints.',
      solution: 'Comprehensive package including brand development, product website, marketing automation, and go-to-market strategy with integrated campaigns.',
      results: [
        { metric: 'Launch Signups', value: '12,500+' },
        { metric: 'Market Penetration', value: '+340%' },
        { metric: 'Press Coverage', value: '45+ outlets' },
        { metric: 'Paid CAC', value: '-48%' },
      ],
      category: 'comprehensive',
    },
  ];

  const filters = [
    { id: 'all', name: 'Toate Proiectele' },
    { id: 'web-design', name: 'Design Web' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'branding', name: 'Branding' },
    { id: 'automation', name: 'Automatizare' },
  ];

  const filteredStudies = selectedFilter === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.category === selectedFilter);

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
            <span className="text-gradient">Povești de Succes</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Rezultate reale din parteneriate reale. Vezi cum am ajutat brandurile să atingă o creștere excepțională.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedFilter === filter.id
                  ? 'btn-primary'
                  : 'glass text-white/70 hover:text-white'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CaseStudyCard
                {...study}
                onClick={() => {
                  // In a real app, this would open a detailed case study page
                  console.log('View case study:', study.client);
                }}
              />
            </motion.div>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-xl">Nu s-au găsit studii de caz în această categorie.</p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="glass-strong rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-gradient mb-2">150+</div>
              <div className="text-white/60">Proiecte Finalizate</div>
            </div>
            <div>
              <div className="text-4xl text-gradient mb-2">$50M+</div>
              <div className="text-white/60">Venituri Clienți</div>
            </div>
            <div>
              <div className="text-4xl text-gradient mb-2">98%</div>
              <div className="text-white/60">Satisfacție Clienți</div>
            </div>
            <div>
              <div className="text-4xl text-gradient mb-2">4.9★</div>
              <div className="text-white/60">Evaluare Medie</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
