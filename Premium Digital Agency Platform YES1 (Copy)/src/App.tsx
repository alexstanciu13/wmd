import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from './components/ui/sonner';
import { ParticleBackground } from './components/ParticleBackground';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AcademyPage } from './components/pages/AcademyPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ServiceDetailPage } from './components/pages/ServiceDetailPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { AboutPage } from './components/pages/AboutPage';
import { ApplyPage } from './components/pages/ApplyPage';
import { TermsPage } from './components/pages/TermsPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { CookiesPage } from './components/pages/CookiesPage';
import { GDPRPage } from './components/pages/GDPRPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { getServiceBySlug } from './config/services';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// Service detail route wrapper
function ServiceDetail() {
  const location = useLocation();
  const slug = location.pathname.split('/').pop() || '';
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFoundPage />;
  }

  return <ServiceDetailPage service={service} />;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      <ParticleBackground />
      <ScrollToTop />
      <Header />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicii" element={<ServicesPage />} />
          <Route path="/servicii/design-web" element={<ServiceDetail />} />
          <Route path="/servicii/marketing-digital" element={<ServiceDetail />} />
          <Route path="/servicii/branding" element={<ServiceDetail />} />
          <Route path="/servicii/automatizare-ai" element={<ServiceDetail />} />
          <Route path="/studii-de-caz" element={<PortfolioPage />} />
          <Route path="/academia" element={<AcademyPage />} />
          <Route path="/despre" element={<AboutPage />} />
          <Route path="/aplica" element={<ApplyPage />} />
          <Route path="/termeni-conditii" element={<TermsPage />} />
          <Route path="/politica-confidentialitate" element={<PrivacyPage />} />
          <Route path="/politica-cookies" element={<CookiesPage />} />
          <Route path="/gdpr" element={<GDPRPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" theme="dark" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}
