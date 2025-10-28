import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { SEO } from '../SEO';

export function AcademyPage() {
  return (
    <div className="relative">
      <SEO
        title="Academia WMD – În curând"
        description="Academia Web Media Design – Programe educaționale premium în curând."
        path="/academia"
      />

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Icon Badge */}
          <div className="inline-block glass-strong rounded-full px-6 py-2 mb-8">
            <GraduationCap className="w-5 h-5 inline mr-2 text-[#00AEEF]" />
            <span className="text-[#00AEEF] font-medium">În Curând</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Academia WMD
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed">
            În curând: programe educaționale premium pentru performanță digitală.
          </p>

          {/* CTA Button */}
          <Link
            to="/"
            className="btn-primary inline-block px-3 py-1 text-lg"
          >
            Înapoi la Acasă
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
