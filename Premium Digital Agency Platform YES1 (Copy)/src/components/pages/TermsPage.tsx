import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { SEO } from '../SEO';

export function TermsPage() {
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
        title="Termeni și Condiții - Web Media Design"
        description="Termenii și condițiile de utilizare a serviciilor Web Media Design. Consultați condițiile legale pentru folosirea website-ului și serviciilor noastre digitale."
        path="/termeni-conditii"
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
          <h1 className="text-4xl md:text-5xl mb-4">Termeni și Condiții</h1>
          <p className="text-white/60 text-lg">
            Data ultimei actualizări: 26 octombrie 2025
          </p>
        </div>

        {/* Table of Contents */}
        <div className="glass-strong rounded-xl p-6 mb-12">
          <h2 className="text-xl mb-4">Cuprins</h2>
          <nav className="space-y-2">
            <a href="#definitii" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              1. Definiții
            </a>
            <a href="#acceptare" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              2. Acceptarea Termenilor
            </a>
            <a href="#servicii" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              3. Servicii Oferite
            </a>
            <a href="#utilizare" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              4. Utilizarea Website-ului
            </a>
            <a href="#proprietate" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              5. Proprietate Intelectuală
            </a>
            <a href="#limitari" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              6. Limitări și Excluderi de Răspundere
            </a>
            <a href="#confidentialitate" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              7. Confidențialitate și Protecția Datelor
            </a>
            <a href="#modificari" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              8. Modificări ale Termenilor
            </a>
            <a href="#jurisdictie" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              9. Jurisdicție și Legea Aplicabilă
            </a>
            <a href="#contact" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              10. Contact
            </a>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section id="definitii" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">1. Definiții</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                În cadrul prezentului document, următorii termeni au semnificațiile de mai jos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>„Prestator"</strong> - STANCIU ALEX PFA, CUI 51703420, operator al website-ului webmediadesign.ro</li>
                <li><strong>„Website"</strong> - platforma digitală disponibilă la adresa webmediadesign.ro</li>
                <li><strong>„Utilizator"</strong> - orice persoană fizică sau juridică care accesează și utilizează Website-ul</li>
                <li><strong>„Servicii"</strong> - serviciile de design web, marketing digital, branding și automatizare AI oferite de Prestator</li>
                <li><strong>„Conținut"</strong> - text, imagini, grafica, cod, software și orice alte materiale prezente pe Website</li>
              </ul>
            </div>
          </section>

          <section id="acceptare" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">2. Acceptarea Termenilor</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Prin accesarea și utilizarea Website-ului webmediadesign.ro, Utilizatorul declară că acceptă în totalitate
                prezentii Termeni și Condiții, Politica de Confidențialitate și Politica de Cookies.
              </p>
              <p>
                Dacă nu sunteți de acord cu acești termeni, vă rugăm să încetați imediat utilizarea Website-ului.
              </p>
              <p>
                Accesul și utilizarea Website-ului sunt permise exclusiv persoanelor care au capacitate deplină de exercițiu
                sau reprezentanților legali ai persoanelor juridice.
              </p>
            </div>
          </section>

          <section id="servicii" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">3. Servicii Oferite</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Web Media Design oferă următoarele categorii de servicii digitale profesionale:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Design și Dezvoltare Web</strong> - creare website-uri, platforme e-commerce, aplicații web</li>
                <li><strong>Marketing Digital</strong> - SEO, PPC, Social Media Marketing, campanii de publicitate online</li>
                <li><strong>Branding</strong> - identitate vizuală, logo design, ghiduri de brand</li>
                <li><strong>Automatizare AI</strong> - soluții de inteligență artificială pentru automatizarea proceselor de business</li>
              </ul>
              <p>
                Serviciile sunt furnizate pe bază de contract individual, cu specificații tehnice și termene stabilite
                de comun acord între Prestator și Client.
              </p>
              <p>
                Prestatorul își rezervă dreptul de a refuza prestarea serviciilor către orice persoană sau entitate,
                fără obligația de a motiva decizia.
              </p>
            </div>
          </section>

          <section id="utilizare" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">4. Utilizarea Website-ului</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Utilizatorul se angajează să folosească Website-ul în conformitate cu legislația română și cu bunele practici online.
              </p>
              <h3 className="text-xl mt-6 mb-3">4.1. Utilizări Permise</h3>
              <p>
                Utilizatorul poate accesa Website-ul pentru a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Consulta informații despre serviciile oferite</li>
                <li>Solicita oferte și informații suplimentare</li>
                <li>Aplica pentru colaborare</li>
                <li>Accesa resurse educaționale din Academia WMD</li>
              </ul>
              <h3 className="text-xl mt-6 mb-3">4.2. Utilizări Interzise</h3>
              <p>
                Este strict interzis:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copierea, reproducerea sau distribuirea neautorizată a Conținutului</li>
                <li>Utilizarea Website-ului în scopuri ilegale sau frauduloase</li>
                <li>Încercarea de a accesa zone restricționate sau de a compromite securitatea Website-ului</li>
                <li>Încărcarea de malware, viruși sau cod malițios</li>
                <li>Spamming, phishing sau orice formă de activitate abuzivă</li>
                <li>Utilizarea roboților, scraperelor sau altor instrumente automate fără autorizare</li>
              </ul>
            </div>
          </section>

          <section id="proprietate" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">5. Proprietate Intelectuală</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Întregul Conținut prezent pe Website, inclusiv dar fără a se limita la text, grafică, logo-uri, imagini,
                clipuri video, cod sursă, design și structură, este proprietatea exclusivă a STANCIU ALEX PFA sau a
                partenerilor săi și este protejat de legile române și internaționale privind drepturile de autor și
                proprietatea intelectuală.
              </p>
              <h3 className="text-xl mt-6 mb-3">5.1. Drepturi de Autor</h3>
              <p>
                Toate drepturile de autor asupra Conținutului sunt rezervate. Reproducerea, modificarea, distribuirea
                sau utilizarea comercială a Conținutului fără autorizare scrisă prealabilă din partea Prestatorului
                este strict interzisă și poate atrage răspunderea civilă și penală conform Legii nr. 8/1996 privind
                dreptul de autor și drepturile conexe.
              </p>
              <h3 className="text-xl mt-6 mb-3">5.2. Mărci Înregistrate</h3>
              <p>
                Denumirea „Web Media Design", logo-ul și alte mărci prezente pe Website sunt mărci înregistrate sau
                în curs de înregistrare și nu pot fi folosite fără acordul scris al Prestatorului.
              </p>
            </div>
          </section>

          <section id="limitari" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">6. Limitări și Excluderi de Răspundere</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <h3 className="text-xl mt-6 mb-3">6.1. Disponibilitatea Website-ului</h3>
              <p>
                Prestatorul depune toate eforturile pentru a asigura funcționarea continuă a Website-ului, dar nu
                garantează că acesta va fi disponibil neîntrerupt sau fără erori. Website-ul poate fi temporar
                indisponibil din cauza mentenanței, actualizărilor sau din motive tehnice independente de voința Prestatorului.
              </p>
              <h3 className="text-xl mt-6 mb-3">6.2. Acuratețea Informațiilor</h3>
              <p>
                Deși ne străduim să menținem informațiile prezentate pe Website actualizate și corecte, Prestatorul
                nu își asumă răspunderea pentru eventuale erori, omisiuni sau inexactități.
              </p>
              <h3 className="text-xl mt-6 mb-3">6.3. Link-uri către Site-uri Terțe</h3>
              <p>
                Website-ul poate conține link-uri către site-uri web externe. Prestatorul nu controlează și nu își
                asumă răspunderea pentru conținutul, politicile de confidențialitate sau practicile acestor site-uri terțe.
              </p>
              <h3 className="text-xl mt-6 mb-3">6.4. Limitarea Răspunderii</h3>
              <p>
                În limita permisă de lege, Prestatorul nu va fi răspunzător pentru:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Daune directe, indirecte, incidentale, speciale sau consecvente rezultate din utilizarea sau imposibilitatea de utilizare a Website-ului</li>
                <li>Pierderi de date, profit sau reputație</li>
                <li>Întreruperi ale activității comerciale</li>
                <li>Erori sau omisiuni în Conținut</li>
              </ul>
            </div>
          </section>

          <section id="confidentialitate" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">7. Confidențialitate și Protecția Datelor</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Protecția datelor cu caracter personal este o prioritate pentru Web Media Design. Colectarea,
                prelucrarea și stocarea datelor personale se realizează în conformitate cu Regulamentul General
                privind Protecția Datelor (GDPR - Regulamentul UE 2016/679) și Legea nr. 190/2018 privind măsuri
                de punere în aplicare a GDPR.
              </p>
              <p>
                Pentru detalii complete privind modul în care prelucrăm datele dumneavoastră personale, vă rugăm
                să consultați <Link to="/politica-confidentialitate" className="text-[#00AEEF] hover:underline">
                Politica de Confidențialitate</Link> și <Link to="/gdpr" className="text-[#00AEEF] hover:underline">
                pagina dedicată GDPR</Link>.
              </p>
            </div>
          </section>

          <section id="modificari" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">8. Modificări ale Termenilor</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Prestatorul își rezervă dreptul de a modifica sau actualiza prezentii Termeni și Condiții în orice
                moment, fără notificare prealabilă. Modificările intră în vigoare imediat după publicarea pe Website.
              </p>
              <p>
                Data ultimei actualizări este afișată în partea superioară a acestui document. Utilizatorul are
                obligația de a consulta periodic această pagină pentru a lua la cunoștință eventualele modificări.
              </p>
              <p>
                Continuarea utilizării Website-ului după modificarea Termenilor implică acceptarea acestora.
              </p>
            </div>
          </section>

          <section id="jurisdictie" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">9. Jurisdicție și Legea Aplicabilă</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Prezentii Termeni și Condiții sunt supuși legislației române. Orice litigiu rezultat din
                interpretarea sau executarea acestor termeni va fi soluționat pe cale amiabilă. În cazul în care
                rezolvarea amiabilă nu este posibilă, litigiul va fi soluționat de instanțele judecătorești
                competente din România.
              </p>
              <p>
                Utilizatorii au dreptul de a apela la procedura de soluționare alternativă a litigiilor (SAL)
                prin intermediul platformei online disponibile la adresa:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00AEEF] hover:underline inline-flex items-center"
                >
                  https://ec.europa.eu/consumers/odr
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
              <p>
                Pentru protecția consumatorilor, puteți consulta și:{' '}
                <a
                  href="https://anpc.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00AEEF] hover:underline inline-flex items-center"
                >
                  Autoritatea Națională pentru Protecția Consumatorilor (ANPC)
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </p>
            </div>
          </section>

          <section id="contact" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">10. Contact</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Pentru orice întrebări, clarificări sau solicitări referitoare la prezentii Termeni și Condiții,
                vă rugăm să ne contactați:
              </p>
              <div className="glass rounded-xl p-6 space-y-3">
                <p><strong>STANCIU ALEX PFA</strong></p>
                <p>CUI: 51703420</p>
                <p>Email: <a href="mailto:contact@webmediadesign.ro" className="text-[#00AEEF] hover:underline">contact@webmediadesign.ro</a></p>
                <p>Telefon: <a href="tel:+40773335409" className="text-[#00AEEF] hover:underline">+40 (773) 335 409</a></p>
              </div>
              <p className="text-sm text-white/60 mt-6">
                Vă vom răspunde în termen de maximum 5 zile lucrătoare de la primirea solicitării.
              </p>
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
