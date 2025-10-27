export interface ServiceConfig {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  pricing: string;
}

export const services: Record<string, ServiceConfig> = {
  'design-web': {
    title: 'Design & Dezvoltare Web',
    subtitle: 'Experiențe digitale premium care convertesc',
    description:
      'Creăm site-uri web frumoase și de înaltă performanță care nu doar arată uimitor, dar generează rezultate de business măsurabile. De la concept la lansare, gestionăm totul cu precizie și atenție.',
    image:
      'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Design UI/UX Personalizat',
      'Dezvoltare Responsivă',
      'Optimizare Performanță',
      'Integrare CMS (WordPress, Webflow, Custom)',
      'Soluții E-Commerce',
      'Aplicații Web Progressive',
      'Conformitate Accesibilitate (WCAG AA)',
      'Fundație SEO',
      'Integrare Analytics',
    ],
    benefits: [
      'Designeri și dezvoltatori seniori pe fiecare proiect',
      'Abordare de design mobile-first, optimizată pentru conversie',
      'Timpi de încărcare rapizi ca fulgerul și optimizare Core Web Vitals',
      'Arhitectură scalabilă care crește odată cu afacerea ta',
      'Suport și întreținere continuă incluse',
      'Training și documentație pentru echipa ta',
    ],
    process: [
      {
        title: 'Descoperire & Cercetare',
        description:
          'Analiză profundă a afacerii tale, audienței, concurenților și obiectivelor pentru a informa strategia noastră.',
      },
      {
        title: 'Strategie & Planificare',
        description:
          'Dezvoltăm hartă site, wireframe-uri și arhitectură tehnică aliniate cu obiectivele tale.',
      },
      {
        title: 'Design & Prototipare',
        description:
          'Creăm designuri de înaltă fidelitate și prototipuri interactive pentru revizuirea stakeholderilor.',
      },
      {
        title: 'Dezvoltare & Testare',
        description:
          'Construim cu cod curat, testare riguroasă și asigurare calității pe toate dispozitivele.',
      },
      {
        title: 'Lansare & Optimizare',
        description:
          'Lansare strategică cu monitorizare continuă, testare A/B și îmbunătățire continuă.',
      },
    ],
    pricing: 'Începând de la $3k',
  },
  'marketing-digital': {
    title: 'Marketing Digital',
    subtitle: 'Strategii de creștere bazate pe date',
    description:
      'Maximizează ROI-ul cu strategii de marketing integrate concepute pentru a atrage trafic calificat, a genera lead-uri și a accelera creșterea sustenabilă.',
    image:
      'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTIzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Strategie & Implementare SEO',
      'Management Campanii PPC (Google, Meta, LinkedIn)',
      'Strategie Marketing de Conținut',
      'Marketing Social Media',
      'Email Marketing & Automatizare',
      'Optimizare Rată de Conversie',
      'Analytics & Raportare Marketing',
      'Configurare Automatizare Marketing',
      'Marketing cu Influenceri & Parteneriate',
    ],
    benefits: [
      'Strategisti experimentați cu rezultate dovedite',
      'Decizii bazate pe date susținute de analytics și testare',
      'Campanii integrate pe mai multe canale',
      'Raportare transparentă cu insight-uri acționabile',
      'Focus pe lead-uri calificate, nu pe metrici de vanitate',
      'Optimizare continuă pentru ROI maxim',
    ],
    process: [
      {
        title: 'Audit & Analiză',
        description:
          'Audit cuprinzător al eforturilor de marketing curente, analiză competitivă și identificare oportunități.',
      },
      {
        title: 'Dezvoltare Strategie',
        description:
          'Creăm strategie de marketing integrată cu KPI-uri clare, bugete și cronologii.',
      },
      {
        title: 'Execuție Campanii',
        description:
          'Lansăm campanii pe canalele selectate cu urmărire și monitorizare atentă.',
      },
      {
        title: 'Optimizare & Scalare',
        description:
          'Testare continuă, rafinare și scalare a tacticilor de succes.',
      },
    ],
    pricing: 'Începând de la $3k',
  },
  branding: {
    title: 'Identitate & Strategie de Brand',
    subtitle: 'Branduri distinctive care rezonează',
    description:
      'Construiește o identitate de brand puternică care te diferențiază, rezonează cu audiența ta și generează loialitate și creștere pe termen lung.',
    image:
      'https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMjMzMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Strategie & Poziționare Brand',
      'Design Identitate Brand (Logo, Culori, Tipografie)',
      'Ghiduri Brand & Ghid de Stil',
      'Design Materiale Marketing',
      'Design Ambalaje',
      'Mesaj & Voce Brand',
      'Bibliotecă Resurse Vizuale',
      'Suport Implementare Brand',
      'Evoluție & Refresh Brand',
    ],
    benefits: [
      'Fundație strategică pentru toate eforturile de marketing',
      'Diferențiere pe piețe competitive',
      'Conexiune emoțională cu audiența țintă',
      'Experiență de brand consistentă pe toate punctele de contact',
      'Poziționare premium care comandă prețuri mai mari',
      'Echitate și recunoaștere brand pe termen lung',
    ],
    process: [
      {
        title: 'Descoperire Brand',
        description:
          'Înțelegem viziunea, valorile, audiența și peisajul competitiv.',
      },
      {
        title: 'Strategie & Poziționare',
        description:
          'Definim poziționarea brandului, personalitatea și cadrul de mesaje.',
      },
      {
        title: 'Design Identitate',
        description:
          'Creăm sistem de identitate vizuală incluzând logo, culori, tipografie și modele.',
      },
      {
        title: 'Ghiduri & Implementare',
        description:
          'Dezvoltăm ghiduri de brand cuprinzătoare și sprijinim implementarea pe toate canalele.',
      },
    ],
    pricing: 'Începând de la $3k',
  },
  'automatizare-ai': {
    title: 'Soluții AI & Automatizare',
    subtitle: 'Sisteme inteligente care scalează',
    description:
      'Profită de AI și automatizare de ultimă generație pentru a simplifica operațiunile, a îmbunătăți experiența clienților și a debloca noi oportunități de creștere.',
    image:
      'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyMTA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Dezvoltare Chatbot AI',
      'Automatizare Procese & Optimizare Fluxuri',
      'Analiză Predictivă & Machine Learning',
      'Soluții Procesare Limbaj Natural',
      'Aplicații Computer Vision',
      'Motoare de Recomandări',
      'Raportare & Dashboard-uri Automate',
      'Integrare cu Sisteme Existente',
      'Dezvoltare Modele AI Personalizate',
    ],
    benefits: [
      'Economii semnificative de timp și costuri',
      'Experiență client îmbunătățită cu suport 24/7',
      'Insight-uri bazate pe date pentru decizii mai bune',
      'Scalabilitate fără creșteri proporționale de costuri',
      'Avantaj competitiv prin inovație',
      'Acuratețe îmbunătățită și erori reduse',
    ],
    process: [
      {
        title: 'Analiză Procese',
        description:
          'Identificăm oportunități de automatizare și cazuri de utilizare AI în operațiunile tale.',
      },
      {
        title: 'Design Soluție',
        description:
          'Proiectăm soluții AI/automatizare personalizate adaptate nevoilor tale specifice.',
      },
      {
        title: 'Dezvoltare & Training',
        description:
          'Construim și antrenăm modele AI, dezvoltăm fluxuri de automatizare și integrăm sisteme.',
      },
      {
        title: 'Implementare & Optimizare',
        description:
          'Implementăm soluții, monitorizăm performanța și optimizăm continuu pentru rezultate mai bune.',
      },
    ],
    pricing: 'Începând de la $10k',
  },
};

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceConfig | undefined => {
  return services[slug];
};

// Helper function to convert old state keys to new slugs
export const stateKeyToSlug: Record<string, string> = {
  'web-design': 'design-web',
  'marketing': 'marketing-digital',
  'branding': 'branding',
  'ai-automation': 'automatizare-ai',
};

// Helper function to get all service slugs
export const getServiceSlugs = (): string[] => {
  return Object.keys(services);
};
