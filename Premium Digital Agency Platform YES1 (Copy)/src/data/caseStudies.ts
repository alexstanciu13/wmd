export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  image: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  category: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'techflow-solutions',
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
    id: 'luxecommerce',
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
    id: 'innovate-marketing',
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
    id: 'catalyst-ventures',
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
    id: 'automatex',
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
    id: 'globaltech-corp',
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

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(study => study.id === id);
}
