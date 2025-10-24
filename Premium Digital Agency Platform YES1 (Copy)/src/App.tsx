import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { ParticleBackground } from './components/ParticleBackground';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AcademyPage } from './components/pages/AcademyPage';
import { HostingPage } from './components/pages/HostingPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ServiceDetailPage } from './components/pages/ServiceDetailPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { AboutPage } from './components/pages/AboutPage';
import { ApplyPage } from './components/pages/ApplyPage';
import { WebMediaAIPage } from './components/pages/WebMediaAIPage';

type Page =
  | 'home'
  | 'services'
  | 'web-design'
  | 'marketing'
  | 'branding'
  | 'ai-automation'
  | 'portfolio'
  | 'academy'
  | 'ai'
  | 'hosting'
  | 'about'
  | 'apply';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  // Service configurations
  const services = {
    'web-design': {
      title: 'Web Design & Development',
      subtitle: 'Premium digital experiences that convert',
      description:
        'We craft beautiful, high-performance websites that not only look stunning but drive measurable business results. From concept to launch, we handle everything with precision and care.',
      image:
        'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Custom UI/UX Design',
        'Responsive Development',
        'Performance Optimization',
        'CMS Integration (WordPress, Webflow, Custom)',
        'E-Commerce Solutions',
        'Progressive Web Apps',
        'Accessibility Compliance (WCAG AA)',
        'SEO Foundation',
        'Analytics Integration',
      ],
      benefits: [
        'Senior designers and developers on every project',
        'Mobile-first, conversion-optimized design approach',
        'Lightning-fast load times and Core Web Vitals optimization',
        'Scalable architecture that grows with your business',
        'Ongoing support and maintenance included',
        'Training and documentation for your team',
      ],
      process: [
        {
          title: 'Discovery & Research',
          description:
            'Deep dive into your business, audience, competitors, and goals to inform our strategy.',
        },
        {
          title: 'Strategy & Planning',
          description:
            'Develop sitemap, wireframes, and technical architecture aligned with your objectives.',
        },
        {
          title: 'Design & Prototyping',
          description:
            'Create high-fidelity designs and interactive prototypes for stakeholder review.',
        },
        {
          title: 'Development & Testing',
          description:
            'Build with clean code, rigorous testing, and quality assurance across devices.',
        },
        {
          title: 'Launch & Optimization',
          description:
            'Strategic launch with ongoing monitoring, A/B testing, and continuous improvement.',
        },
      ],
      pricing: 'Starting at $50k',
    },
    marketing: {
      title: 'Digital Marketing',
      subtitle: 'Data-driven growth strategies',
      description:
        'Maximize your ROI with integrated marketing strategies designed to drive qualified traffic, generate leads, and accelerate sustainable growth.',
      image:
        'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTIzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'SEO Strategy & Implementation',
        'PPC Campaign Management (Google, Meta, LinkedIn)',
        'Content Marketing Strategy',
        'Social Media Marketing',
        'Email Marketing & Automation',
        'Conversion Rate Optimization',
        'Marketing Analytics & Reporting',
        'Marketing Automation Setup',
        'Influencer & Partnership Marketing',
      ],
      benefits: [
        'Experienced strategists with proven track records',
        'Data-driven decisions backed by analytics and testing',
        'Integrated campaigns across multiple channels',
        'Transparent reporting with actionable insights',
        'Focus on qualified leads, not vanity metrics',
        'Continuous optimization for maximum ROI',
      ],
      process: [
        {
          title: 'Audit & Analysis',
          description:
            'Comprehensive audit of current marketing efforts, competitive analysis, and opportunity identification.',
        },
        {
          title: 'Strategy Development',
          description:
            'Create integrated marketing strategy with clear KPIs, budgets, and timelines.',
        },
        {
          title: 'Campaign Execution',
          description:
            'Launch campaigns across selected channels with careful tracking and monitoring.',
        },
        {
          title: 'Optimization & Scaling',
          description:
            'Continuous testing, refinement, and scaling of successful tactics.',
        },
      ],
      pricing: 'Starting at $75k',
    },
    branding: {
      title: 'Brand Identity & Strategy',
      subtitle: 'Distinctive brands that resonate',
      description:
        'Build a powerful brand identity that sets you apart, resonates with your audience, and drives long-term loyalty and growth.',
      image:
        'https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMjMzMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Brand Strategy & Positioning',
        'Brand Identity Design (Logo, Colors, Typography)',
        'Brand Guidelines & Style Guide',
        'Marketing Collateral Design',
        'Packaging Design',
        'Brand Messaging & Voice',
        'Visual Asset Library',
        'Brand Implementation Support',
        'Brand Evolution & Refresh',
      ],
      benefits: [
        'Strategic foundation for all marketing efforts',
        'Differentiation in competitive markets',
        'Emotional connection with target audience',
        'Consistent brand experience across touchpoints',
        'Premium positioning that commands higher prices',
        'Long-term brand equity and recognition',
      ],
      process: [
        {
          title: 'Brand Discovery',
          description:
            'Understand your vision, values, audience, and competitive landscape.',
        },
        {
          title: 'Strategy & Positioning',
          description:
            'Define brand positioning, personality, and messaging framework.',
        },
        {
          title: 'Identity Design',
          description:
            'Create visual identity system including logo, colors, typography, and patterns.',
        },
        {
          title: 'Guidelines & Implementation',
          description:
            'Develop comprehensive brand guidelines and support rollout across channels.',
        },
      ],
      pricing: 'Starting at $60k',
    },
    'ai-automation': {
      title: 'AI & Automation Solutions',
      subtitle: 'Intelligent systems that scale',
      description:
        'Leverage cutting-edge AI and automation to streamline operations, enhance customer experience, and unlock new growth opportunities.',
      image:
        'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyMTA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'AI Chatbot Development',
        'Process Automation & Workflow Optimization',
        'Predictive Analytics & Machine Learning',
        'Natural Language Processing Solutions',
        'Computer Vision Applications',
        'Recommendation Engines',
        'Automated Reporting & Dashboards',
        'Integration with Existing Systems',
        'Custom AI Model Development',
      ],
      benefits: [
        'Significant time and cost savings',
        'Enhanced customer experience with 24/7 support',
        'Data-driven insights for better decision-making',
        'Scalability without proportional cost increases',
        'Competitive advantage through innovation',
        'Improved accuracy and reduced errors',
      ],
      process: [
        {
          title: 'Process Analysis',
          description:
            'Identify automation opportunities and AI use cases within your operations.',
        },
        {
          title: 'Solution Design',
          description:
            'Design custom AI/automation solutions tailored to your specific needs.',
        },
        {
          title: 'Development & Training',
          description:
            'Build and train AI models, develop automation workflows, and integrate systems.',
        },
        {
          title: 'Deployment & Optimization',
          description:
            'Deploy solutions, monitor performance, and continuously optimize for better results.',
        },
      ],
      pricing: 'Starting at $85k',
    },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'web-design':
        return <ServiceDetailPage service={services['web-design']} onNavigate={handleNavigate} />;
      case 'marketing':
        return <ServiceDetailPage service={services.marketing} onNavigate={handleNavigate} />;
      case 'branding':
        return <ServiceDetailPage service={services.branding} onNavigate={handleNavigate} />;
      case 'ai-automation':
        return <ServiceDetailPage service={services['ai-automation']} onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'academy':
        return <AcademyPage onNavigate={handleNavigate} />;
      case 'ai':
        return <WebMediaAIPage />;
      case 'hosting':
        return <HostingPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'apply':
        return <ApplyPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      <ParticleBackground />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="relative z-10">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <Toaster position="top-right" theme="dark" />
    </div>
  );
}
