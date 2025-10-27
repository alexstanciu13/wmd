import { motion } from 'motion/react';
import { CheckCircle, Clock, Award } from 'lucide-react';
import { ApplicationForm } from '../ApplicationForm';
import { SEO } from '../SEO';

export function ApplyPage() {
  const benefits = [
    'Echipă de nivel senior dedicată proiectului tău',
    'Parteneriat strategic, nu serviciu tranzacțional',
    'Abordare bazată pe date cu ROI măsurabil',
    'Acces direct la conducere și decidenți',
    'Optimizare și suport continuu',
  ];

  const qualifications = [
    {
      title: 'Angajament Bugetar',
      description: 'Buget minim pentru proiect de $3.000',
    },
    {
      title: 'Mentalitate de Creștere',
      description: 'Pregătit să investești în schimbare transformațională',
    },
    {
      title: 'Aliniere Strategică',
      description: 'Obiective clare și autoritate decizională',
    },
    {
      title: 'Cronologie',
      description: 'Așteptări realiste și cronologie angajată',
    },
  ];

  return (
    <div className="relative pt-32 pb-20">
      <SEO
        title="Aplică pentru Colaborare"
        description="Aplică pentru parteneriat cu Web Media Design. Acceptăm 12 clienți pe trimestru pentru proiecte de design web și marketing digital premium."
        path="/aplica"
      />
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block glass-strong rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 inline mr-2 text-[#00AEEF]" />
            <span className="text-[#00AEEF]">Limitat la 12 Clienți pe Trimestru</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6">
            Aplică pentru <span className="text-gradient">Colaborare</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Alătură-te grupului exclusiv de branduri în creștere cu care colaborăm pentru a crea experiențe digitale excepționale.
          </p>
        </motion.div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="glass rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-[#00AEEF]" />
            <h3>Ce Urmează</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Revizuire Aplicație', time: '24-48 ore' },
              { step: '2', title: 'Apel Descoperire', time: '30-60 minute' },
              { step: '3', title: 'Propunere & Strategie', time: '3-5 zile' },
              { step: '4', title: 'Lansare Proiect', time: '1-2 săptămâni' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mx-auto mb-2 glow-blue" style={{
                  backgroundImage: 'linear-gradient(180deg, #0070C9 0%, #002F6C 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <span className="text-white font-bold text-sm md:text-base">{item.step}</span>
                </div>
                <h4 className="text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-white/60">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Partnership Benefits */}
            <div className="glass rounded-xl p-6">
              <h3 className="mb-4">Beneficii Parteneriat</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal Partner */}
            <div className="glass rounded-xl p-6">
              <h3 className="mb-4">Profil Partener Ideal</h3>
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={index}>
                    <h4 className="text-sm text-[#00AEEF] mb-1">{qual.title}</h4>
                    <p className="text-sm text-white/70">{qual.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Signal */}
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl text-gradient mb-2">98%</div>
              <div className="text-sm text-white/60 mb-3">Rată Satisfacție Clienți</div>
              <div className="text-3xl text-gradient mb-2">$4.4M+</div>
              <div className="text-sm text-white/60">Generat în Venituri Clienți</div>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <ApplicationForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Întrebări Frecvente</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'De ce limitați acceptarea clienților?',
              a: 'Calitate peste cantitate. Limitând parteneriatele la 12 pe trimestru, ne asigurăm că fiecare proiect primește atenție la nivel senior și focusul strategic necesar pentru rezultate excepționale.',
            },
            {
              q: 'Care este bugetul minim pentru proiect?',
              a: 'Proiectele noastre încep de obicei de la $3.000. Acest nivel de investiție asigură că avem resursele necesare pentru a livra rezultate transformaționale.',
            },
            {
              q: 'Cât durează procesul de aplicare?',
              a: 'Revizuim aplicațiile în 24-48 de ore. Dacă există o potrivire potențială, vom programa un apel de descoperire într-o săptămână.',
            },
            {
              q: 'Ce se întâmplă dacă proiectul meu nu se potrivește acum?',
              a: 'Vom fi transparenți dacă nu suntem potrivirea corectă sau dacă momentul nu se aliniază. Putem recomanda soluții alternative sau sugera reconectarea în viitor.',
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="mb-2">{faq.q}</h3>
              <p className="text-white/70">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
