import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, TrendingUp, Calendar, MapPin, Users, Target, Zap, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CodeRain } from '../CodeRain';

interface CaseStudyDetailProps {
  client: string;
  industry: string;
  image: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  onNavigate: (page: string) => void;
}

export function CaseStudyDetailPage({
  client,
  industry,
  image,
  problem,
  solution,
  results,
  onNavigate,
}: CaseStudyDetailProps) {
  // Enhanced data based on client
  const getCaseStudyDetails = () => {
    switch (client) {
      case 'TechFlow Solutions':
        return {
          location: 'San Francisco, CA',
          timeline: '6 luni',
          team: '8 specialiști',
          overview: 'TechFlow Solutions este o platformă SaaS de top care oferă instrumente de automatizare a fluxurilor de lucru pentru echipele enterprise. În ciuda unui produs puternic, prezența lor digitală nu reușea să convertească lead-uri calificate, rezultând oportunități pierdute și creștere lentă.',
          challenges: [
            'Design învechit al site-ului care nu reflecta produsul lor inovator',
            'Navigare complexă care confunda potențialii clienți',
            'Experiență slabă pe mobil afectând 65% din trafic',
            'Timpii lenți de încărcare pagină (medie 4,2s) afectând rankingurile SEO',
            'Nicio cale clară de conversie sau CTA-uri',
            'Semnale minime de încredere și dovezi sociale'
          ],
          approach: [
            {
              title: 'Descoperire & Cercetare',
              description: 'Am efectuat cercetare cuprinzătoare a utilizatorilor, analiză competitivă și interviuri cu stakeholderi pentru a înțelege punctele critice și oportunitățile.'
            },
            {
              title: 'Planificare Strategică',
              description: 'Am dezvoltat o arhitectură informațională focusată pe conversie cu călătorii clare ale utilizatorilor și strategie de conținut optimizată.'
            },
            {
              title: 'Design UX/UI',
              description: 'Am creat o interfață modernă și intuitivă cu accent pe claritate, construirea încrederii și optimizarea conversiei.'
            },
            {
              title: 'Dezvoltare',
              description: 'Construit cu React și Next.js pentru performanță optimă, implementând personalizare alimentată de AI și analiză avansată.'
            },
            {
              title: 'Optimizare',
              description: 'Testare A/B continuă și rafinări bazate pe date pentru a maximiza ratele de conversie și implicarea utilizatorilor.'
            }
          ],
          features: [
            'Recomandări de produse alimentate de AI',
            'Demo-uri interactive de produse',
            'Calculator dinamic de prețuri',
            'Dashboard analitică avansată',
            'Călătorii personalizate ale utilizatorilor',
            'CRM integrat și automatizare marketing'
          ],
          testimonial: {
            quote: 'WMD ne-a transformat complet prezența digitală. ROI-ul a fost excepțional, iar abordarea lor strategică pentru creșterea noastră a fost inestimabilă. În 6 luni, am văzut o creștere de 247% în conversii, iar cererile noastre de demo s-au triplat.',
            author: 'Sarah Chen',
            role: 'CEO, TechFlow Solutions'
          },
          additionalMetrics: [
            { label: 'Timp Încărcare Pagină', before: '4,2s', after: '0,8s' },
            { label: 'Trafic Mobil', before: '35%', after: '58%' },
            { label: 'Rankinguri SEO', before: 'Pagina 3-5', after: 'Pagina 1' },
            { label: 'Satisfacție Clienți', before: '3,2/5', after: '4,8/5' }
          ]
        };

      case 'LuxeCommerce':
        return {
          location: 'New York, NY',
          timeline: '8 luni',
          team: '10 specialiști',
          overview: 'LuxeCommerce este un brand premium de e-commerce de modă care oferă colecții de lux curate. Se confruntau cu abandon ridicat al coșului și rate slabe de conversie pe mobil, afectând semnificativ potențialul de venituri.',
          challenges: [
            'Rată de abandon al coșului de 78% - mult peste media industriei',
            'Experiență slabă pe mobil îndepărtând 60% din trafic',
            'Valoare medie scăzută a comenzii comparativ cu competitorii',
            'Proces ineficient de checkout cu 7+ pași',
            'Nicio personalizare sau recomandări de produse',
            'Implicare limitată post-achiziție'
          ],
          approach: [
            {
              title: 'Audit Platformă',
              description: 'Analiză cuprinzătoare a platformei existente, date comportament utilizatori și benchmarking competitiv.'
            },
            {
              title: 'Migrare Headless Commerce',
              description: 'Reconstruire platformă folosind arhitectura headless commerce pentru flexibilitate și performanță maximă.'
            },
            {
              title: 'Design Mobile-First',
              description: 'Design premium de experiență mobilă cu navigare prietenoasă și flux de achiziție simplificat.'
            },
            {
              title: 'Integrare AI',
              description: 'Implementare recomandări de dimensiuni alimentate de AI, sugestii personalizate de produse și upselling dinamic.'
            },
            {
              title: 'Automatizare Retenție',
              description: 'Creare secvențe automate de email, recuperare coș abandonat și campanii de implicare post-achiziție.'
            }
          ],
          features: [
            'Arhitectură headless commerce',
            'Recomandări de dimensiuni alimentate de AI',
            'Checkout la un click',
            'Tehnologie încercare virtuală',
            'Pachete inteligente de produse',
            'Recuperare automată coș'
          ],
          testimonial: {
            quote: 'Colaborarea cu WMD a fost ca și cum am avea o echipă internă de clasă mondială. Reconstruirea platformei lor ne-a transformat afacerea. Veniturile au crescut cu 312%, iar abandonul coșului a scăzut cu 68%. Doar experiența mobilă a fost un factor decisiv.',
            author: 'Michael Rodriguez',
            role: 'Fondator, LuxeCommerce'
          },
          additionalMetrics: [
            { label: 'Pași Checkout', before: '7 pași', after: '3 pași' },
            { label: 'Conversie Mobil', before: '0,8%', after: '4,2%' },
            { label: 'Venituri Email', before: '12%', after: '34%' },
            { label: 'Rată Returnări', before: '18%', after: '7%' }
          ]
        };

      case 'Innovate Marketing':
        return {
          location: 'Austin, TX',
          timeline: '5 luni',
          team: '6 specialiști',
          overview: 'Innovate Marketing este o agenție de marketing cu servicii complete care se lupta să genereze lead-uri calificate și să stabilească leadership de gândire într-o piață competitivă.',
          challenges: [
            'Trafic organic minimal și performanță SEO slabă',
            'Lead-uri de calitate scăzută care nu se convertesc în clienți',
            'Conștientizare limitată de brand pe piața țintă',
            'Eforturi de marketing de conținut cu ROI minimal',
            'Lipsă de poziționare ca lider de gândire',
            'Niciun proces sistematic de cultivare lead-uri'
          ],
          approach: [
            {
              title: 'Fundație SEO',
              description: 'Audit și optimizare SEO tehnică, dezvoltare strategie cuvinte cheie și optimizare on-page.'
            },
            {
              title: 'Strategie Conținut',
              description: 'Dezvoltare calendar cuprinzător de conținut focusat pe leadership de gândire și subiecte de valoare înaltă.'
            },
            {
              title: 'Campanii PPC',
              description: 'Publicitate plătită strategică pe Google și LinkedIn țintind decidenți cu intenție ridicată.'
            },
            {
              title: 'Automatizare Marketing',
              description: 'Implementare scoring lead-uri, secvențe automate de cultivare și fluxuri personalizate de implicare.'
            },
            {
              title: 'Analiză & Optimizare',
              description: 'Monitorizare continuă, testare A/B și optimizări bazate pe date pentru ROI maxim.'
            }
          ],
          features: [
            'Strategie SEO cuprinzătoare',
            'Conținut de leadership de gândire',
            'Campanii PPC multi-canal',
            'Platformă automatizare marketing',
            'Sistem scoring lead-uri',
            'Dashboard analitică avansată'
          ],
          testimonial: {
            quote: 'Rezultatele vorbesc de la sine. Traficul organic a crescut cu 428%, iar acum generăm de 3 ori mai multe lead-uri calificate. Abordarea strategică a WMD pentru marketing digital ne-a transformat complet afacerea.',
            author: 'Jennifer Williams',
            role: 'Partener Conducător, Innovate Marketing'
          },
          additionalMetrics: [
            { label: 'Trafic Blog', before: '2,4K/lună', after: '12,7K/lună' },
            { label: 'Scor Calitate Lead', before: '2,8/10', after: '8,4/10' },
            { label: 'ROI Marketing', before: '140%', after: '420%' },
            { label: 'Volum Căutări Brand', before: '120/lună', after: '890/lună' }
          ]
        };

      case 'Catalyst Ventures':
        return {
          location: 'Boston, MA',
          timeline: '4 luni',
          team: '5 specialiști',
          overview: 'Catalyst Ventures este o firmă premium de investiții care gestionează portofolii pentru clienți cu avere mare. Identitatea lor de brand era învechită și inconsistentă, subminând credibilitatea cu clienți pretențioși.',
          challenges: [
            'Identitate vizuală învechită din 2008',
            'Mesaje inconsistente pe toate canalele',
            'Lipsă de poziționare premium în materiale',
            'Niciun ghid clar de brand pentru echipă',
            'Diferențiere slabă față de competitori',
            'Prezență digitală minimă și leadership de gândire'
          ],
          approach: [
            {
              title: 'Descoperire Brand',
              description: 'Interviuri extinse cu stakeholderi, analiză competitivă și dezvoltare strategie de poziționare.'
            },
            {
              title: 'Identitate Vizuală',
              description: 'Creare sistem sofisticat de logo, paletă de culori, tipografie și elemente de brand reflectând poziționare premium.'
            },
            {
              title: 'Cadru de Mesaje',
              description: 'Dezvoltare voce clară de brand, piloni de mesaje și ghiduri de comunicare.'
            },
            {
              title: 'Design Materiale',
              description: 'Design pitch deck-uri premium, rapoarte, cărți de vizită și active digitale.'
            },
            {
              title: 'Implementare',
              description: 'Ghiduri cuprinzătoare de brand, training echipă și suport lansare pe toate canalele.'
            }
          ],
          features: [
            'Logo premium și sistem vizual',
            'Ghiduri cuprinzătoare de brand',
            'Materiale marketing de lux',
            'Active digitale de brand',
            'Cadru de mesaje',
            'Training și suport echipă'
          ],
          testimonial: {
            quote: 'WMD ne-a ridicat brandul pentru a se potrivi cu calitatea serviciilor noastre. Noua identitate a îmbunătățit dramatic percepția noastră pe piață. Întrebările clienților au crescut cu 198%, iar recomandările s-au aproape triplat.',
            author: 'David Thompson',
            role: 'Director Executiv, Catalyst Ventures'
          },
          additionalMetrics: [
            { label: 'Consistență Brand', before: '3/10', after: '9,5/10' },
            { label: 'Valoare Percepută', before: '+0%', after: '+67%' },
            { label: 'Sesiuni Website', before: '890/lună', after: '3.240/lună' },
            { label: 'Mențiuni Media', before: '2/an', after: '18/an' }
          ]
        };

      case 'AutomateX':
        return {
          location: 'Seattle, WA',
          timeline: '6 luni',
          team: '7 specialiști',
          overview: 'AutomateX oferă servicii business dar era copleșit de procese manuale consumând peste 40 de ore săptămânal și creând blocaje la serviciul clienți.',
          challenges: [
            'Procese manuale consumând peste 40 de ore pe săptămână',
            'Timpii de răspuns serviciu clienți de peste 24 de ore',
            'Costuri operaționale ridicate limitând scalabilitatea',
            'Erori frecvente în introducerea manuală a datelor',
            'Capacitate limitată de a gestiona creșterea',
            'Scoruri slabe de satisfacție clienți'
          ],
          approach: [
            {
              title: 'Mapare Procese',
              description: 'Analiză detaliată a fluxurilor de lucru pentru a identifica oportunități de automatizare și puncte critice.'
            },
            {
              title: 'Dezvoltare Chatbot AI',
              description: 'Chatbot antrenat personalizat gestionând 80% din întrebările comune ale clienților instant.'
            },
            {
              title: 'Automatizare Fluxuri',
              description: 'Automatizare introducere date, raportare, facturare și comunicări interne.'
            },
            {
              title: 'Analiză Predictivă',
              description: 'Implementare modele ML pentru prognoza cererii și optimizarea resurselor.'
            },
            {
              title: 'Integrare & Training',
              description: 'Integrare perfectă cu sistemele existente și training cuprinzător al echipei.'
            }
          ],
          features: [
            'Suport clienți alimentat de AI',
            'Sisteme automate de fluxuri',
            'Dashboard analitică predictivă',
            'Raportare automată',
            'Alocare inteligentă resurse',
            'Integrare cu instrumentele existente'
          ],
          testimonial: {
            quote: 'Soluțiile de automatizare implementate de WMD au fost transformatoare. Am economisit 40 de ore pe săptămână, timpii de răspuns au scăzut cu 85%, iar satisfacția clienților nu a fost niciodată mai mare. Ne-a permis să scalăm fără creșteri proporționale de costuri.',
            author: 'Amanda Foster',
            role: 'CEO, AutomateX'
          },
          additionalMetrics: [
            { label: 'Ore Manuale', before: '40ore/săpt', after: '8ore/săpt' },
            { label: 'Rată Erori', before: '12%', after: '0,8%' },
            { label: 'Capacitate', before: '100 clienți', after: '320 clienți' },
            { label: 'Cost per Tranzacție', before: '$12', after: '$3,20' }
          ]
        };

      case 'GlobalTech Corp':
        return {
          location: 'Denver, CO',
          timeline: '7 luni',
          team: '12 specialiști',
          overview: 'GlobalTech trebuia să rebranduiască și să lanseze un nou produs SaaS pe o piață competitivă cu termene limită agresive și buget limitat.',
          challenges: [
            'Termen limită strâns de lansare (6 luni)',
            'Piață competitivă cu jucători consacrați',
            'Conștientizare limitată de brand',
            'Nicio infrastructură existentă de marketing',
            'Constrângeri bugetare pentru achiziția de clienți',
            'Nevoie de tracțiune imediată pe piață'
          ],
          approach: [
            {
              title: 'Dezvoltare Brand',
              description: 'Strategie de brand accelerată și creare identitate cu focus pe diferențiere.'
            },
            {
              title: 'Website Produs',
              description: 'Construire site produs cu conversie ridicată cu capabilități demo și propunere de valoare clară.'
            },
            {
              title: 'Strategie Go-to-Market',
              description: 'Plan cuprinzător de lansare integrând PR, conținut, reclame plătite și parteneriate cu influenceri.'
            },
            {
              title: 'Automatizare Marketing',
              description: 'Configurare stack complet de marketing cu CRM, automatizare email și analitică.'
            },
            {
              title: 'Campanii Lansare',
              description: 'Lansare coordonată multi-canal cu PR outreach, campanii plătite și marketing de conținut.'
            }
          ],
          features: [
            'Identitate completă de brand',
            'Website lansare produs',
            'Configurare automatizare marketing',
            'Campanii multi-canal',
            'PR și outreach media',
            'Parteneriate cu influenceri'
          ],
          testimonial: {
            quote: 'WMD a livrat tot ce aveam nevoie la timp și sub buget. Am lansat cu 12.500 de înscrieri, acoperire în peste 45 de publicații și am atins 340% din țintele noastre de penetrare pe piață. Lucru cu adevărat excepțional.',
            author: 'Robert Chen',
            role: 'VP Produs, GlobalTech Corp'
          },
          additionalMetrics: [
            { label: 'Cronologie Lansare', before: 'N/A', after: 'La timp' },
            { label: 'Eficiență Buget', before: 'N/A', after: '92%' },
            { label: 'Trial-to-Paid', before: 'N/A', after: '28%' },
            { label: 'Scor NPS', before: 'N/A', after: '72' }
          ]
        };

      default:
        return {
          location: 'Statele Unite',
          timeline: '6 luni',
          team: '8 specialiști',
          overview: problem,
          challenges: [problem],
          approach: [
            {
              title: 'Descoperire',
              description: 'Înțelegerea obiectivelor de business și provocărilor.'
            },
            {
              title: 'Strategie',
              description: 'Dezvoltarea unui plan cuprinzător de soluții.'
            },
            {
              title: 'Implementare',
              description: 'Executare cu precizie și atenție la detalii.'
            },
            {
              title: 'Optimizare',
              description: 'Îmbunătățire și rafinare continuă.'
            }
          ],
          features: [solution],
          testimonial: {
            quote: 'Colaborarea cu Web Media Design a fost o experiență excepțională. Au livrat rezultate remarcabile.',
            author: 'Client',
            role: client
          },
          additionalMetrics: []
        };
    }
  };

  const details = getCaseStudyDetails();

  return (
    <div className="relative">
      <CodeRain />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => onNavigate('portfolio')}
            className="flex items-center space-x-2 text-white/60 hover:text-[#00AEEF] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Înapoi la Portofoliu</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-block glass rounded-full px-4 py-1 mb-6">
                <span className="text-[#00AEEF]">{industry}</span>
              </div>
              <h1 className="text-5xl md:text-6xl mb-6">{client}</h1>
              <p className="text-xl text-white/70 mb-8">{details.overview}</p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="glass rounded-lg p-4">
                  <MapPin className="w-5 h-5 text-[#00AEEF] mb-2" />
                  <div className="text-sm text-white/60">Locație</div>
                  <div className="text-white">{details.location}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <Calendar className="w-5 h-5 text-[#00AEEF] mb-2" />
                  <div className="text-sm text-white/60">Durată</div>
                  <div className="text-white">{details.timeline}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <Users className="w-5 h-5 text-[#00AEEF] mb-2" />
                  <div className="text-sm text-white/60">Echipă</div>
                  <div className="text-white">{details.team}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden glass-strong glow-cyan"
            >
              <ImageWithFallback
                src={image}
                alt={client}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-[#1A237E]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#00AEEF]" />
            <h2 className="text-4xl mb-4">Rezultate Cheie</h2>
            <p className="text-white/60">Impact măsurabil care a depășit așteptările</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl text-gradient mb-2">{result.value}</div>
                <div className="text-white/60">{result.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Target className="w-12 h-12 mb-4 text-[#00AEEF]" />
            <h2 className="text-4xl mb-4">Provocarea</h2>
            <p className="text-xl text-white/70 mb-8">{problem}</p>
          </motion.div>

          <div className="space-y-3">
            {details.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3 glass rounded-lg p-4"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00AEEF]/20 to-[#9333EA]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#00AEEF]" />
                </div>
                <p className="text-white/80">{challenge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-[#00AEEF]/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Zap className="w-12 h-12 mx-auto mb-4 text-[#00AEEF]" />
            <h2 className="text-4xl mb-4">Abordarea Noastră</h2>
            <p className="text-white/60">{solution}</p>
          </motion.div>

          <div className="space-y-6">
            {details.approach.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-xl p-6 flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center text-xl">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Implemented */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-4xl mb-4">Funcționalități Implementate</h2>
            <p className="text-white/60">Soluții cuprinzătoare adaptate pentru a genera rezultate</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {details.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-lg p-4 flex items-center space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00AEEF] flex-shrink-0" />
                <span className="text-white/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Metrics */}
      {details.additionalMetrics && details.additionalMetrics.length > 0 && (
        <section className="relative py-20 bg-gradient-to-b from-transparent via-[#1A237E]/5 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl mb-4">Înainte & După</h2>
              <p className="text-white/60">Îmbunătățiri cuprinzătoare de performanță</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {details.additionalMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-strong rounded-xl p-6"
                >
                  <div className="text-white/60 mb-4">{metric.label}</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/40 mb-1">Înainte</div>
                      <div className="text-xl text-white/60">{metric.before}</div>
                    </div>
                    <ArrowLeft className="w-8 h-8 text-[#00AEEF] rotate-180" />
                    <div className="text-right">
                      <div className="text-sm text-white/40 mb-1">După</div>
                      <div className="text-2xl text-gradient">{metric.after}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-2xl p-8 md:p-12 text-center glow-indigo"
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-[#00AEEF]" />
            <p className="text-2xl text-white/90 mb-8 italic">"{details.testimonial.quote}"</p>
            <div>
              <div className="text-xl mb-1">{details.testimonial.author}</div>
              <div className="text-white/60">{details.testimonial.role}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Gata pentru <span className="text-gradient">Rezultate Similare</span>?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Să discutăm cum putem transforma prezența ta digitală și să generăm creștere excepțională.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('apply')}
                className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity h-14 px-8 text-lg glow-cyan"
              >
                Aplică pentru Colaborare
              </Button>
              <Button
                onClick={() => onNavigate('portfolio')}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 h-14 px-8 text-lg"
              >
                Vezi Mai Multe Studii de Caz
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
