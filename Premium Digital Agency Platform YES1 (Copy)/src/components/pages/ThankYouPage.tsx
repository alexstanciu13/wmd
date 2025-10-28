import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../SEO';

export function ThankYouPage() {
  const location = useLocation();
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const fromApply = location.state?.fromApply === true;

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

  return (
    <div className="relative pt-32 pb-20 min-h-screen flex items-center">
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-20 h-20 text-[#00AEEF] mx-auto mb-8 glow-cyan" />
          </motion.div>

          {/* H1 Heading */}
          <h1
            ref={h1Ref}
            tabIndex={-1}
            className="text-4xl md:text-5xl lg:text-6xl mb-6 outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-4 focus:ring-offset-[#0A0A0A] rounded-lg"
          >
            Mulțumim pentru <span className="text-gradient">aplicație!</span>
          </h1>

          {/* Lead Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto"
          >
            Am primit cererea ta cu succes. Echipa noastră o va analiza și te vom contacta în 24–48 de ore.
          </motion.p>

          {/* Secondary Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 mb-12 max-w-xl mx-auto"
          >
            Între timp, poți explora portofoliul sau ne poți scrie la{' '}
            <a
              href="mailto:contact@webmediadesign.ro"
              className="text-[#00AEEF] hover:underline focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2 focus:ring-offset-[#0A0A0A] rounded"
            >
              contact@webmediadesign.ro
            </a>
            .
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Portfolio Button */}
            <Link
              to="/studii-de-caz"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-4 focus:ring-offset-[#0A0A0A]"
            >
              Înapoi la Portofoliu
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Home Button */}
            <Link
              to="/"
              className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-4 focus:ring-offset-[#0A0A0A]"
            >
              <Home className="w-5 h-5" />
              Revenire la Acasă
            </Link>
          </motion.div>
        </motion.div>

        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-xl p-6 mt-16 max-w-2xl mx-auto"
        >
          <h2 className="text-xl mb-4 text-center">Ce urmează?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl text-gradient mb-2">1</div>
              <h3 className="text-sm font-semibold mb-2">Revizuire Aplicație</h3>
              <p className="text-xs text-white/60">24-48 ore</p>
            </div>
            <div>
              <div className="text-3xl text-gradient mb-2">2</div>
              <h3 className="text-sm font-semibold mb-2">Apel Descoperire</h3>
              <p className="text-xs text-white/60">30-60 minute</p>
            </div>
            <div>
              <div className="text-3xl text-gradient mb-2">3</div>
              <h3 className="text-sm font-semibold mb-2">Propunere Strategie</h3>
              <p className="text-xs text-white/60">3-5 zile</p>
            </div>
          </div>
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
