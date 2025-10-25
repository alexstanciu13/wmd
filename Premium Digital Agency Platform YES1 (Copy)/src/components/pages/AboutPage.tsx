import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Award, Users, Target, Zap, Heart, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SEO } from '../SEO';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excelență',
      description: 'Urmărim perfecțiunea în fiecare proiect, fără a ne mulțumi cu suficient de bine.',
    },
    {
      icon: Shield,
      title: 'Integritate',
      description: 'Transparența și onestitatea ghidează fiecare interacțiune cu clienții și decizie.',
    },
    {
      icon: Zap,
      title: 'Inovație',
      description: 'Rămânem înaintea tendințelor, folosind tehnologie de ultimă generație pentru rezultate.',
    },
    {
      icon: Heart,
      title: 'Parteneriat',
      description: 'Succesul tău este succesul nostru. Suntem împreună în asta, pe termen lung.',
    },
  ];

  const team = [
    {
      name: 'Sarah Che',
      role: 'Fondator & CEO',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMjkwOTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Director Creativ',
      image: 'https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMjMzMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emily Watson',
      role: 'Șef Strategie',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTIzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Kim',
      role: 'Dezvoltator Principal',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyMTA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="relative pt-32 pb-20">
      <SEO
        title="Despre Noi"
        description="Agenție digitală premium fondată în 2018. Parteneriatul strategic, nu serviciul tranzacțional. Descoperă echipa și valorile Web Media Design."
        path="/despre"
      />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Despre <span className="text-gradient">Web Media Design</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Nu suntem doar o altă agenție. Suntem partenerul tău strategic în transformarea digitală.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-strong rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl mb-6 text-center">Povestea Noastră</h2>
          <div className="space-y-4 text-white/70">
            <p>
              Fondată în 2018, Web Media Design a apărut dintr-o observație simplă: majoritatea agențiilor digitale
              prioritizează cantitatea în detrimentul calității, tratând clienții ca tranzacții și nu ca parteneri.
              Știam că există o cale mai bună.
            </p>
            <p>
              Am construit WMD pe principiul exclusivității și excelenței. Limitând lista noastră de clienți
              la doar 12 parteneriate pe trimestru, ne asigurăm că fiecare proiect primește atenția strategică,
              excelența creativă și precizia tehnică pe care le merită.
            </p>
            <p>
              Astăzi, suntem mândri să fim partenerii unor dintre cele mai ambițioase branduri din tech, e-commerce
              și servicii profesionale. Clienții noștri nu doar văd rezultate—ei experimentează transformare.
            </p>
            <p>
              Nu este vorba despre construirea de site-uri web sau difuzarea de reclame. Este vorba despre arhitecturarea
              ecosistemelor digitale care generează creștere sustenabilă, alimentate de date, înflăcărate de creativitate
              și executate cu precizie.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Valorile Noastre</h2>
          <p className="text-white/60">Principiile care ghidează tot ce facem</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0070C9] to-[#002F6C] flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">{value.title}</h3>
              <p className="text-white/60 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Întâlnește Echipa Noastră</h2>
          <p className="text-white/60">Experții din spatele succesului tău</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 ring-2 ring-[#00AEEF]/30">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1">{member.name}</h3>
              <p className="text-sm text-white/60">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-strong rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-gradient mb-2">7+ Ani</div>
              <div className="text-white/60">În Afaceri</div>
            </div>
            <div>
              <div className="text-4xl text-gradient mb-2">150+</div>
              <div className="text-white/60">Proiecte Finalizate</div>
            </div>
            <div>
              <div className="text-4xl text-gradient mb-2">$50M+</div>
              <div className="text-white/60">Venituri Clienți</div>
            </div>
            <div>
              <div className="text-4xl text-gradient mb-2">98%</div>
              <div className="text-white/60">Rată Retenție</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Exclusive */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0070C9] to-[#002F6C] flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl mb-4">De Ce Suntem Exclusivi</h2>
              <p className="text-white/70 mb-4">
                Calitatea necesită timp. Strategia profundă necesită concentrare. Rezultatele transformatoare necesită parteneriat.
              </p>
              <p className="text-white/70 mb-4">
                Limitând lista noastră de clienți la 12 parteneriate pe trimestru, ne asigurăm că fiecare proiect
                primește atenția la nivel senior pe care o merită. Fără echipe junior, fără soluții de tip cookie-cutter,
                fără atenție divizată.
              </p>
              <p className="text-white/70">
                Această exclusivitate nu înseamnă a fi dificili—înseamnă a fi excepționali. Este despre
                asigurarea că putem livra nivelul de serviciu, creativitate și rezultate care justifică
                investiția ta și reputația noastră.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl mb-6">Ești Gata să te Alături Rețelei Noastre de Parteneri?</h2>
          <p className="text-xl text-white/70 mb-8">
            Suntem selectivi cu cine lucrăm și căutăm branduri gata să facă un impact real.
          </p>
          <Button
            asChild
            className="btn-primary h-14 px-8 text-lg glow-blue"
          >
            <Link to="/aplica">
              Aplică pentru Colaborare
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
