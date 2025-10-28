import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Home,
  Briefcase,
  GraduationCap,
  Award,
  ArrowRight,
  Sparkles,
  Mail,
  Calendar
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../SEO';
import { CodeRain } from '../CodeRain';

export function ThankYouPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const fromApply = location.state?.fromApply === true;

  const [countdown, setCountdown] = useState(10);
  const [isPaused, setIsPaused] = useState(false);

  // Route mapping for navigation
  const routeMap: Record<string, string> = {
    'home': '/',
    'portfolio': '/studii-de-caz',
    'academy': '/academia',
    'about': '/despre',
  };

  const handleNavigate = (page: string) => {
    const route = routeMap[page] || '/';
    navigate(route);
  };

  useEffect(() => {
    // Focus H1 on mount for accessibility
    if (h1Ref.current) {
      h1Ref.current.focus();
    }

    // Fire GTM conversion event only if user came from apply form
    if (fromApply) {
      const sessionKey = 'wmd_thankyou_fired';
      const alreadyFired = sessionStorage.getItem(sessionKey);

      if (!alreadyFired) {
        // Initialize dataLayer if it doesn't exist
        window.dataLayer = window.dataLayer || [];

        // Push conversion event to GTM
        window.dataLayer.push({
          event: 'form_submit_success',
          form_name: 'Aplică Acum'
        });

        // Mark as fired to prevent duplicates on refresh
        sessionStorage.setItem(sessionKey, 'true');
      }
    }
  }, [fromApply]);

  // Countdown timer effect
  useEffect(() => {
    if (countdown === 0 && !isPaused) {
      handleNavigate('home');
      return;
    }

    if (!isPaused) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countdown, isPaused]);

  const quickLinks = [
    {
      icon: Home,
      title: 'Homepage',
      description: 'Explore our services',
      page: 'home',
      gradient: 'from-[#00AEEF] to-[#0EA5E9]',
    },
    {
      icon: Briefcase,
      title: 'Portfolio',
      description: 'View our work',
      page: 'portfolio',
      gradient: 'from-[#9333EA] to-[#A855F7]',
    },
    {
      icon: GraduationCap,
      title: 'WMD Academy',
      description: 'Free courses',
      page: 'academy',
      gradient: 'from-[#00AEEF] to-[#9333EA]',
    },
    {
      icon: Award,
      title: 'About Us',
      description: 'Our story',
      page: 'about',
      gradient: 'from-[#1A237E] to-[#9333EA]',
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      <SEO
        title="Mulțumim pentru Aplicație"
        description="Aplicația ta a fost primită cu succes. Echipa noastră te va contacta în 24–48 de ore."
        path="/thank-you"
      />

      {/* Add noindex meta tag if user didn't come from apply form */}
      {!fromApply && (
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
      )}

      <CodeRain />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Success Icon Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 200,
              damping: 15
            }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#9333EA] mb-6 relative"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />

            {/* Pulse rings */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut'
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#9333EA]"
            />
            <motion.div
              animate={{
                scale: [1, 1.8, 1.8],
                opacity: [0.3, 0, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 0.3
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#9333EA]"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            ref={h1Ref}
            tabIndex={-1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl mb-4 outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-4 focus:ring-offset-[#0A0A0A] rounded-lg"
          >
            Aplicația a fost <span className="text-gradient">primită!</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
          >
            Mulțumim pentru interesul tău de a colabora cu Web Media Design.
            Echipa noastră va analiza aplicația ta și te va contacta în 24–48 de ore.
          </motion.p>

          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6 mb-8 max-w-2xl mx-auto"
          >
            <h3 className="text-xl mb-4 flex items-center justify-center space-x-2">
              <Sparkles className="w-5 h-5 text-[#00AEEF]" />
              <span>Ce urmează?</span>
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#0EA5E9] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Revizuire Aplicație</h4>
                  <p className="text-sm text-white/60">
                    Echipa noastră analizează detaliile și cerințele proiectului tău
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9333EA] to-[#A855F7] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Apel Descoperire</h4>
                  <p className="text-sm text-white/60">
                    Vom programa o sesiune de strategie pentru a discuta viziunea ta
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Propunere Personalizată</h4>
                  <p className="text-sm text-white/60">
                    Primești o strategie adaptată și un plan detaliat al proiectului
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Email Confirmation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center space-x-2 text-white/60 mb-8"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">
              Verifică email-ul pentru un mesaj de confirmare
            </span>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-3 glass-strong rounded-full px-6 py-3">
              <Calendar className="w-5 h-5 text-[#00AEEF]" />
              <span className="text-white/80">Redirecționare în</span>
              <div className="text-2xl text-gradient tabular-nums min-w-[2ch] text-center">
                {countdown}
              </div>
              <span className="text-white/80">secunde</span>
            </div>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-sm text-[#00AEEF] hover:text-[#00AEEF]/80 transition-colors mt-3 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2 focus:ring-offset-[#0A0A0A] rounded"
            >
              {isPaused ? 'Reia cronometrul' : 'Pauză cronometru'}
            </button>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-lg text-white/80 mb-6">
              Sau alege unde să mergi:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  onClick={() => handleNavigate(link.page)}
                  className="glass hover:glass-strong transition-all duration-300 rounded-xl p-4 text-left group focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white mb-1 group-hover:text-[#00AEEF] transition-colors">
                    {link.title}
                  </h4>
                  <p className="text-sm text-white/60">
                    {link.description}
                  </p>
                  <ArrowRight className="w-4 h-4 text-[#00AEEF] mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00AEEF]/20 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#9333EA]/20 to-transparent rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}
