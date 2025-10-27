import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaseStudyCard } from '../CaseStudyCard';
import { Badge } from '../ui/badge';
import { SEO } from '../SEO';
import { caseStudies } from '../../data/caseStudies';


export function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const navigate = useNavigate();

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
      <SEO
        title="Studii de Caz"
        description="Studii de caz reale cu rezultate măsurabile: proiecte de design web, marketing digital și automatizare AI pentru branduri din România."
        path="/studii-de-caz"
      />
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
                onClick={() => navigate(`/studii-de-caz/${study.id}`)}
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
              <div className="text-4xl text-gradient mb-2">100+</div>
              <div className="text-white/60">Proiecte Finalizate</div>
            </div>
            <div>
              <div className="text-4xl text-gradient mb-2">$4.4M+</div>
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
