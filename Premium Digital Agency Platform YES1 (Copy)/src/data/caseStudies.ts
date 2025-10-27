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
    industry: 'Tehnologie SaaS',
    image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'TechFlow avea un site web învechit cu o rată de conversie de 1,2%. Ofertele lor complexe de produse confundau vizitatorii, conducând la rate mari de respingere și cereri minime de demo.',
    solution: 'Am reproiectat întreaga lor prezență digitală cu un UX optimizat pentru conversie, am implementat recomandări de produse alimentate de AI și am restructurat arhitectura informațiilor pentru claritate.',
    results: [
      { metric: 'Rată de Conversie', value: '+247%' },
      { metric: 'Cereri Demo', value: '+312%' },
      { metric: 'Timp pe Site', value: '+189%' },
      { metric: 'Rată de Respingere', value: '-58%' },
    ],
    category: 'web-design',
  },
  {
    id: 'luxecommerce',
    client: 'LuxeCommerce',
    industry: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjEyMzkzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Abandonul ridicat al coșului (78%) și valoarea medie scăzută a comenzilor afectau platforma lor de e-commerce de modă de lux. Experiența slabă pe mobil afecta 60% din trafic.',
    solution: 'Reconstrucție completă a platformei cu comerț headless, recomandări de dimensiuni alimentate de AI, checkout simplificat, design mobile-first și automatizare de retenție.',
    results: [
      { metric: 'Venituri', value: '+312%' },
      { metric: 'Abandon Coș', value: '-68%' },
      { metric: 'Conversii Mobile', value: '+425%' },
      { metric: 'Valoare Medie Comandă', value: '+87%' },
    ],
    category: 'ecommerce',
  },
  {
    id: 'innovate-marketing',
    client: 'Innovate Marketing',
    industry: 'Agenție de Marketing',
    image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTIzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Se confruntau cu dificultăți în generarea de lead-uri calificate și demonstrarea expertizei lor. Eforturile de marketing de conținut generau implicare și conștientizare de brand minime.',
    solution: 'Strategie cuprinzătoare de marketing digital, incluzând optimizare SEO, conținut de leadership de gândire, campanii PPC strategice și automatizare marketing.',
    results: [
      { metric: 'Trafic Organic', value: '+428%' },
      { metric: 'Lead-uri Calificate', value: '+356%' },
      { metric: 'Mențiuni Brand', value: '+290%' },
      { metric: 'Implicare Conținut', value: '+512%' },
    ],
    category: 'marketing',
  },
  {
    id: 'catalyst-ventures',
    client: 'Catalyst Ventures',
    industry: 'Firmă de Investiții',
    image: 'https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMjMzMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Identitate de brand învechită care nu reflecta poziționarea lor premium. Mesajele inconsistente pe toate canalele submina credibilitatea cu clienții cu avere mare.',
    solution: 'Revizie completă a brandului, incluzând strategie, identitate vizuală, cadru de mesaje și materiale de marketing premium aliniate cu poziționarea lor de lux.',
    results: [
      { metric: 'Percepție Brand', value: '+245%' },
      { metric: 'Întrebări Clienți', value: '+198%' },
      { metric: 'Creștere Active', value: '+167%' },
      { metric: 'Recomandări', value: '+284%' },
    ],
    category: 'branding',
  },
  {
    id: 'automatex',
    client: 'AutomateX',
    industry: 'Servicii Business',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyMTA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Procesele manuale consumau peste 40 de ore pe săptămână. Blocajele la serviciul clienți cauzau întârzieri și afectau scorurile de satisfacție.',
    solution: 'Am implementat chatbot-uri AI, automatizare fluxuri de lucru, analiză predictivă pentru prognoza cererii și sisteme automate de raportare.',
    results: [
      { metric: 'Timp Economisit', value: '40ore/săpt' },
      { metric: 'Timp Răspuns', value: '-85%' },
      { metric: 'Satisfacție Clienți', value: '+94%' },
      { metric: 'Cost Operațional', value: '-62%' },
    ],
    category: 'automation',
  },
  {
    id: 'globaltech-corp',
    client: 'GlobalTech Corp',
    industry: 'Tehnologie',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMjkwOTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Avea nevoie să rebranduiască și să lanseze un nou produs SaaS pe o piață competitivă, cu constrângeri de timp și buget limitate.',
    solution: 'Pachet cuprinzător incluzând dezvoltare brand, site web produs, automatizare marketing și strategie de intrare pe piață cu campanii integrate.',
    results: [
      { metric: 'Înscrieri Lansare', value: '12.500+' },
      { metric: 'Penetrare Piață', value: '+340%' },
      { metric: 'Acoperire Presă', value: '45+ publicații' },
      { metric: 'CAC Plătit', value: '-48%' },
    ],
    category: 'comprehensive',
  },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(study => study.id === id);
}
