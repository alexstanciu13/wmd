import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, BarChart3, Target } from 'lucide-react';
import { SEO } from '../SEO';

export function CookiesPage() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen">
      <SEO
        title="Politica de Cookies - Web Media Design"
        description="Politica de module cookie Web Media Design. Află ce sunt cookie-urile, cum le folosim și cum le poți gestiona în browser."
        path="/politica-cookies"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Navigation */}
        <Link
          to="/"
          className="inline-flex items-center text-white/60 hover:text-[#00AEEF] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Înapoi la pagina principală
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Cookie className="w-10 h-10 text-[#00AEEF]" />
            <h1 className="text-4xl md:text-5xl">Politica de Cookies</h1>
          </div>
          <p className="text-white/60 text-lg">
            Data ultimei actualizări: 26 octombrie 2025
          </p>
        </div>

        {/* Cookie Types Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="glass rounded-xl p-4">
            <Settings className="w-6 h-6 text-[#00AEEF] mb-2" />
            <h3 className="text-sm font-medium mb-1">Esențiale</h3>
            <p className="text-xs text-white/60">Necesare pentru funcționarea site-ului</p>
          </div>
          <div className="glass rounded-xl p-4">
            <BarChart3 className="w-6 h-6 text-[#00AEEF] mb-2" />
            <h3 className="text-sm font-medium mb-1">Analiză</h3>
            <p className="text-xs text-white/60">Ne ajută să îmbunătățim experiența</p>
          </div>
          <div className="glass rounded-xl p-4">
            <Target className="w-6 h-6 text-[#00AEEF] mb-2" />
            <h3 className="text-sm font-medium mb-1">Marketing</h3>
            <p className="text-xs text-white/60">Pentru publicitate relevantă</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="glass-strong rounded-xl p-6 mb-12">
          <h2 className="text-xl mb-4">Cuprins</h2>
          <nav className="space-y-2">
            <a href="#ce-sunt" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              1. Ce sunt cookie-urile?
            </a>
            <a href="#de-ce" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              2. De ce folosim cookie-uri?
            </a>
            <a href="#tipuri" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              3. Tipuri de cookie-uri utilizate
            </a>
            <a href="#detalii" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              4. Detalii despre cookie-uri
            </a>
            <a href="#gestionare" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              5. Cum gestionezi cookie-urile?
            </a>
            <a href="#consecinte" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              6. Consecințe la dezactivare
            </a>
            <a href="#terte-parti" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              7. Cookie-uri terțe părți
            </a>
            <a href="#modificari" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              8. Modificări ale politicii
            </a>
            <a href="#contact" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              9. Contact
            </a>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section id="ce-sunt" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">1. Ce sunt cookie-urile?</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Cookie-urile sunt fișiere text mici care sunt stocate pe dispozitivul tău (computer, telefon, tabletă)
                când vizitezi un website. Acestea permit website-ului să își „amintească" acțiunile și preferințele
                tale (cum ar fi limba, mărimea fontului sau alte setări de afișare) pentru o perioadă de timp, astfel
                încât să nu fie nevoie să le introduci din nou de fiecare dată când revii pe site sau navighezi de la
                o pagină la alta.
              </p>
              <p>
                Cookie-urile nu pot accesa, citi sau modifica alte date de pe computerul tău și nu pot transmite viruși.
              </p>
            </div>
          </section>

          <section id="de-ce" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">2. De ce folosim cookie-uri?</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Folosim cookie-uri pentru a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Asigura funcționarea corectă</strong> a website-ului și a caracteristicilor sale de bază</li>
                <li><strong>Îmbunătăți experiența ta</strong> prin memorarea preferințelor și setărilor tale</li>
                <li><strong>Analiza traficului</strong> și înțelege cum este utilizat website-ul pentru a-l optimiza</li>
                <li><strong>Măsura eficiența</strong> campaniilor noastre de marketing</li>
                <li><strong>Personaliza conținutul</strong> și reclamele afișate în funcție de interesele tale</li>
              </ul>
            </div>
          </section>

          <section id="tipuri" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">3. Tipuri de cookie-uri utilizate</h2>
            <div className="text-white/80 leading-relaxed space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-[#00AEEF]" />
                  3.1. Cookie-uri strict necesare
                </h3>
                <p className="mb-3">
                  Aceste cookie-uri sunt esențiale pentru funcționarea website-ului și nu pot fi dezactivate în sistemele noastre.
                  Ele sunt setate de obicei doar ca răspuns la acțiuni efectuate de tine, cum ar fi setarea preferințelor de
                  confidențialitate, autentificarea sau completarea formularelor.
                </p>
                <p className="text-sm text-white/60">
                  <strong>Temei legal:</strong> Interes legitim (Art. 6(1)(f) GDPR) - necesare pentru furnizarea serviciilor solicitate
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-xl mb-3 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-[#00AEEF]" />
                  3.2. Cookie-uri de performanță și analiză
                </h3>
                <p className="mb-3">
                  Aceste cookie-uri ne permit să numărăm vizitele și sursele de trafic pentru a putea măsura și îmbunătăți
                  performanța website-ului nostru. Ele ne ajută să știm care pagini sunt cele mai populare și să vedem cum
                  se deplasează vizitatorii pe site.
                </p>
                <p className="mb-3 text-sm">
                  <strong>Exemple:</strong> Google Analytics, date despre timpul petrecut pe pagină, rata de respingere
                </p>
                <p className="text-sm text-white/60">
                  <strong>Temei legal:</strong> Consimțământul tău (Art. 6(1)(a) GDPR)
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-xl mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-[#00AEEF]" />
                  3.3. Cookie-uri de marketing și publicitate
                </h3>
                <p className="mb-3">
                  Aceste cookie-uri pot fi setate prin intermediul website-ului nostru de către partenerii noștri de publicitate.
                  Pot fi folosite pentru a crea un profil al intereselor tale și pentru a-ți afișa reclame relevante pe alte site-uri.
                </p>
                <p className="mb-3 text-sm">
                  <strong>Exemple:</strong> Facebook Pixel, Google Ads, retargeting
                </p>
                <p className="text-sm text-white/60">
                  <strong>Temei legal:</strong> Consimțământul tău (Art. 6(1)(a) GDPR)
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-xl mb-3">3.4. Cookie-uri funcționale</h3>
                <p className="mb-3">
                  Aceste cookie-uri permit website-ului să ofere funcționalitate îmbunătățită și personalizare.
                  Ele pot fi setate de noi sau de furnizori terți ale căror servicii le-am adăugat pe paginile noastre.
                </p>
                <p className="mb-3 text-sm">
                  <strong>Exemple:</strong> Preferințe de limbă, setări de afișare, widget-uri de social media
                </p>
                <p className="text-sm text-white/60">
                  <strong>Temei legal:</strong> Consimțământul tău (Art. 6(1)(a) GDPR)
                </p>
              </div>
            </div>
          </section>

          <section id="detalii" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">4. Detalii despre cookie-uri</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <h3 className="text-xl mt-6 mb-3">4.1. Cookie-uri proprii (First-party)</h3>
              <div className="overflow-x-auto">
                <table className="w-full glass rounded-xl overflow-hidden">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left">Nume</th>
                      <th className="px-4 py-3 text-left">Scop</th>
                      <th className="px-4 py-3 text-left">Durată</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm">cookie_consent</td>
                      <td className="px-4 py-3 text-sm">Memorează preferințele de cookie-uri</td>
                      <td className="px-4 py-3 text-sm">12 luni</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm">session_id</td>
                      <td className="px-4 py-3 text-sm">Identifică sesiunea utilizatorului</td>
                      <td className="px-4 py-3 text-sm">Sesiune</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-sm">lang</td>
                      <td className="px-4 py-3 text-sm">Memorează limba preferată</td>
                      <td className="px-4 py-3 text-sm">12 luni</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl mt-6 mb-3">4.2. Cookie-uri terțe părți (Third-party)</h3>
              <div className="overflow-x-auto">
                <table className="w-full glass rounded-xl overflow-hidden">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left">Furnizor</th>
                      <th className="px-4 py-3 text-left">Scop</th>
                      <th className="px-4 py-3 text-left">Politică</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 font-medium">Google Analytics</td>
                      <td className="px-4 py-3 text-sm">Analiză trafic website</td>
                      <td className="px-4 py-3 text-sm">
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00AEEF] hover:underline">
                          Politică
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Google Ads</td>
                      <td className="px-4 py-3 text-sm">Publicitate și remarketing</td>
                      <td className="px-4 py-3 text-sm">
                        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-[#00AEEF] hover:underline">
                          Politică
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Facebook Pixel</td>
                      <td className="px-4 py-3 text-sm">Măsurare conversii și publicitate</td>
                      <td className="px-4 py-3 text-sm">
                        <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-[#00AEEF] hover:underline">
                          Politică
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="gestionare" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">5. Cum gestionezi cookie-urile?</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Ai controlul complet asupra cookie-urilor și poți să le gestionezi sau ștergi după preferință.
              </p>

              <h3 className="text-xl mt-6 mb-3">5.1. Prin setările browser-ului</h3>
              <p>
                Majoritatea browserelor acceptă cookie-uri în mod implicit, dar poți modifica setările pentru a le
                bloca sau șterge. Iată cum poți face acest lucru în browserele populare:
              </p>
              <div className="space-y-3 ml-4">
                <div className="glass rounded-lg p-4">
                  <p className="font-medium mb-2">Google Chrome</p>
                  <p className="text-sm text-white/70">
                    Setări → Confidențialitate și securitate → Cookie-uri și alte date ale site-ului
                  </p>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#00AEEF] hover:underline text-sm">
                    Ghid complet →
                  </a>
                </div>
                <div className="glass rounded-lg p-4">
                  <p className="font-medium mb-2">Mozilla Firefox</p>
                  <p className="text-sm text-white/70">
                    Setări → Confidențialitate și securitate → Cookie-uri și date ale site-urilor
                  </p>
                  <a href="https://support.mozilla.org/ro/kb/cookie-uri" target="_blank" rel="noopener noreferrer" className="text-[#00AEEF] hover:underline text-sm">
                    Ghid complet →
                  </a>
                </div>
                <div className="glass rounded-lg p-4">
                  <p className="font-medium mb-2">Safari</p>
                  <p className="text-sm text-white/70">
                    Preferințe → Confidențialitate → Cookie-uri și date de site-uri web
                  </p>
                  <a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#00AEEF] hover:underline text-sm">
                    Ghid complet →
                  </a>
                </div>
                <div className="glass rounded-lg p-4">
                  <p className="font-medium mb-2">Microsoft Edge</p>
                  <p className="text-sm text-white/70">
                    Setări → Cookie-uri și permisiuni site → Gestionați și ștergeți cookie-uri
                  </p>
                  <a href="https://support.microsoft.com/ro-ro/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-[#00AEEF] hover:underline text-sm">
                    Ghid complet →
                  </a>
                </div>
              </div>

              <h3 className="text-xl mt-6 mb-3">5.2. Opt-out pentru cookie-uri de analiză</h3>
              <p>
                Pentru Google Analytics, poți dezactiva urmărirea instalând:
              </p>
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#00AEEF] hover:underline"
              >
                Google Analytics Opt-out Browser Add-on →
              </a>

              <h3 className="text-xl mt-6 mb-3">5.3. Do Not Track</h3>
              <p>
                Majoritatea browserelor moderne permit activarea unui semnal „Do Not Track" (DNT). Deși respectăm
                acest semnal, te rugăm să ții cont că nu toate site-urile și serviciile online respectă semnalele DNT.
              </p>
            </div>
          </section>

          <section id="consecinte" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">6. Consecințe la dezactivare</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Dacă alegi să blochezi sau ștergi cookie-urile, anumite funcționalități ale website-ului pot fi afectate:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>S-ar putea să trebuiască să reintroduci preferințele la fiecare vizită</li>
                <li>Unele caracteristici ale site-ului ar putea să nu funcționeze corect</li>
                <li>Experiența ta de navigare ar putea fi mai puțin personalizată</li>
                <li>Formularele și funcționalitățile interactive ar putea fi limitate</li>
              </ul>
              <p className="mt-4">
                Cookie-urile strict necesare nu pot fi dezactivate fără a afecta grav funcționarea website-ului.
              </p>
            </div>
          </section>

          <section id="terte-parti" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">7. Cookie-uri terțe părți</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                În unele cazuri speciale, folosim și cookie-uri furnizate de terțe părți de încredere. Website-ul
                nostru folosește Google Analytics, unul dintre cele mai răspândite și de încredere soluții de analiză
                de pe web, pentru a ne ajuta să înțelegem cum folosești site-ul și cum putem îmbunătăți experiența ta.
              </p>
              <p>
                Aceste cookie-uri pot urmări lucruri precum cât timp petreci pe site și paginile pe care le vizitezi,
                astfel încât să putem continua să producem conținut captivant.
              </p>
              <p>
                De asemenea, putem utiliza butoane de social media și/sau plugin-uri pe acest site care îți permit
                să te conectezi la rețeaua ta socială în diverse moduri. Pentru ca acestea să funcționeze, site-urile
                de social media (de exemplu, Facebook, Twitter, LinkedIn) vor seta cookie-uri prin site-ul nostru care
                pot fi folosite pentru a-ți îmbunătăți profilul pe site-ul lor sau pentru a contribui la datele pe
                care le dețin în diverse scopuri prezentate în propriile lor politici de confidențialitate.
              </p>
            </div>
          </section>

          <section id="modificari" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">8. Modificări ale politicii</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Ne rezervăm dreptul de a actualiza această Politică de Cookies pentru a reflecta schimbări în
                tehnologie, legislație sau practicile noastre de afaceri. Orice modificare semnificativă va fi
                comunicată prin afișare pe website, iar data ultimei actualizări va fi modificată corespunzător.
              </p>
              <p>
                Îți recomandăm să consulți periodic această pagină pentru a fi la curent cu modul în care folosim cookie-urile.
              </p>
            </div>
          </section>

          <section id="contact" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">9. Contact</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Dacă ai întrebări despre utilizarea cookie-urilor pe website-ul nostru, ne poți contacta:
              </p>
              <div className="glass rounded-xl p-6 space-y-3">
                <p><strong>STANCIU ALEX PFA</strong></p>
                <p>CUI: 51703420</p>
                <p>Email: <a href="mailto:contact@webmediadesign.ro" className="text-[#00AEEF] hover:underline">contact@webmediadesign.ro</a></p>
                <p>Telefon: <a href="tel:+40773335409" className="text-[#00AEEF] hover:underline">+40 (773) 335 409</a></p>
              </div>
            </div>
          </section>
        </div>

        {/* Back to top */}
        <div className="mt-12 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white/60 hover:text-[#00AEEF] transition-colors"
          >
            ↑ Înapoi sus
          </button>
        </div>
      </div>
    </div>
  );
}
