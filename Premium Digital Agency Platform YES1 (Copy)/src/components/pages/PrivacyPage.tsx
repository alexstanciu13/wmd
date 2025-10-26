import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import { SEO } from '../SEO';

export function PrivacyPage() {
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
        title="Politica de Confidențialitate - Web Media Design"
        description="Politica de confidențialitate Web Media Design. Află cum protejăm și procesăm datele tale personale în conformitate cu GDPR și legislația română."
        path="/politica-confidentialitate"
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
            <Shield className="w-10 h-10 text-[#00AEEF]" />
            <h1 className="text-4xl md:text-5xl">Politica de Confidențialitate</h1>
          </div>
          <p className="text-white/60 text-lg">
            Data ultimei actualizări: 26 octombrie 2025
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="glass rounded-xl p-4">
            <Eye className="w-6 h-6 text-[#00AEEF] mb-2" />
            <h3 className="text-sm font-medium mb-1">Transparență Totală</h3>
            <p className="text-xs text-white/60">Îți spunem exact ce date colectăm și de ce</p>
          </div>
          <div className="glass rounded-xl p-4">
            <Lock className="w-6 h-6 text-[#00AEEF] mb-2" />
            <h3 className="text-sm font-medium mb-1">Securitate Maximă</h3>
            <p className="text-xs text-white/60">Datele tale sunt protejate cu tehnologii moderne</p>
          </div>
          <div className="glass rounded-xl p-4">
            <Database className="w-6 h-6 text-[#00AEEF] mb-2" />
            <h3 className="text-sm font-medium mb-1">Controlul Tău</h3>
            <p className="text-xs text-white/60">Poți accesa, modifica sau șterge datele oricând</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="glass-strong rounded-xl p-6 mb-12">
          <h2 className="text-xl mb-4">Cuprins</h2>
          <nav className="space-y-2">
            <a href="#introducere" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              1. Introducere
            </a>
            <a href="#operator" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              2. Operator de Date cu Caracter Personal
            </a>
            <a href="#date-colectate" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              3. Ce Date Colectăm
            </a>
            <a href="#scopul" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              4. Scopul Prelucrării Datelor
            </a>
            <a href="#temei" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              5. Temei Legal pentru Prelucrare
            </a>
            <a href="#partajare" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              6. Partajarea Datelor
            </a>
            <a href="#securitate" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              7. Securitatea Datelor
            </a>
            <a href="#durata" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              8. Durata de Stocare
            </a>
            <a href="#drepturi" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              9. Drepturile Tale
            </a>
            <a href="#cookies" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              10. Module Cookie
            </a>
            <a href="#modificari" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              11. Modificări ale Politicii
            </a>
            <a href="#contact" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              12. Contact
            </a>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section id="introducere" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">1. Introducere</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Web Media Design respectă și protejează confidențialitatea datelor cu caracter personal ale
                utilizatorilor săi. Prezenta Politică de Confidențialitate explică modul în care colectăm, folosim,
                stocăm și protejăm informațiile tale personale când utilizezi website-ul nostru sau serviciile noastre.
              </p>
              <p>
                Această politică este redactată în conformitate cu:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Regulamentul (UE) 2016/679</strong> (GDPR - Regulamentul General privind Protecția Datelor)</li>
                <li><strong>Legea nr. 190/2018</strong> privind măsuri de punere în aplicare a GDPR</li>
                <li><strong>Legea nr. 506/2004</strong> privind prelucrarea datelor cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice</li>
              </ul>
            </div>
          </section>

          <section id="operator" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">2. Operator de Date cu Caracter Personal</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Operatorul de date cu caracter personal este:
              </p>
              <div className="glass rounded-xl p-6 space-y-3">
                <p><strong>STANCIU ALEX PFA</strong></p>
                <p>CUI: 51703420</p>
                <p>Email: <a href="mailto:contact@webmediadesign.ro" className="text-[#00AEEF] hover:underline">contact@webmediadesign.ro</a></p>
                <p>Telefon: <a href="tel:+40773335409" className="text-[#00AEEF] hover:underline">+40 (773) 335 409</a></p>
                <p>Website: <a href="https://webmediadesign.ro" className="text-[#00AEEF] hover:underline">webmediadesign.ro</a></p>
              </div>
              <p>
                În calitate de operator, suntem responsabili pentru modul în care datele tale personale sunt
                colectate, prelucrate și protejate.
              </p>
            </div>
          </section>

          <section id="date-colectate" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">3. Ce Date Colectăm</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <h3 className="text-xl mt-6 mb-3">3.1. Date de Identificare</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nume și prenume</li>
                <li>Adresă de email</li>
                <li>Număr de telefon</li>
                <li>Companie (opțional)</li>
                <li>Funcție (opțional)</li>
              </ul>

              <h3 className="text-xl mt-6 mb-3">3.2. Date de Navigare</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Adresa IP</li>
                <li>Tip de browser și versiune</li>
                <li>Sistem de operare</li>
                <li>Paginile vizitate pe website</li>
                <li>Data și ora accesării</li>
                <li>URL-ul de referință</li>
                <li>Informații despre dispozitivul utilizat</li>
              </ul>

              <h3 className="text-xl mt-6 mb-3">3.3. Date din Module Cookie</h3>
              <p>
                Pentru detalii complete despre modulele cookie utilizate, consultă{' '}
                <Link to="/politica-cookies" className="text-[#00AEEF] hover:underline">
                  Politica de Cookies
                </Link>.
              </p>

              <h3 className="text-xl mt-6 mb-3">3.4. Date furnizate voluntar</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informații din formulare de contact</li>
                <li>Informații din formulare de aplicare pentru colaborare</li>
                <li>Conținutul mesajelor trimise prin email</li>
                <li>Feedback și recenzii</li>
              </ul>
            </div>
          </section>

          <section id="scopul" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">4. Scopul Prelucrării Datelor</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Colectăm și prelucrăm datele tale personale în următoarele scopuri:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Furnizarea serviciilor:</strong> Pentru a procesa solicitările tale, a oferi servicii digitale și a menține relația contractuală</li>
                <li><strong>Comunicare:</strong> Pentru a răspunde la întrebări, cereri de ofertă și alte solicitări</li>
                <li><strong>Îmbunătățirea serviciilor:</strong> Pentru a analiza modul de utilizare a website-ului și a optimiza experiența utilizatorului</li>
                <li><strong>Marketing:</strong> Pentru a trimite informații despre servicii, oferte și noutăți (doar cu consimțământul tău explicit)</li>
                <li><strong>Conformitate legală:</strong> Pentru a respecta obligațiile legale fiscale și contabile</li>
                <li><strong>Securitate:</strong> Pentru a proteja website-ul împotriva fraudelor și a asigura securitatea datelor</li>
                <li><strong>Analiză statistică:</strong> Pentru a genera rapoarte anonime privind utilizarea website-ului</li>
              </ul>
            </div>
          </section>

          <section id="temei" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">5. Temei Legal pentru Prelucrare</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Conform GDPR, prelucrăm datele tale personale pe baza următoarelor temeiuri legale:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consimțământul tău explicit</strong> (Art. 6(1)(a) GDPR) - pentru comunicări de marketing și anumite module cookie</li>
                <li><strong>Executarea unui contract</strong> (Art. 6(1)(b) GDPR) - pentru furnizarea serviciilor contractate</li>
                <li><strong>Obligații legale</strong> (Art. 6(1)(c) GDPR) - pentru conformitatea fiscală și contabilă</li>
                <li><strong>Interese legitime</strong> (Art. 6(1)(f) GDPR) - pentru securitatea website-ului și analiza statistică</li>
              </ul>
            </div>
          </section>

          <section id="partajare" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">6. Partajarea Datelor</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Web Media Design nu vinde, închiriază sau schimbă datele tale personale cu terțe părți în scopuri de marketing.
              </p>
              <h3 className="text-xl mt-6 mb-3">6.1. Partajare cu furnizori de servicii</h3>
              <p>
                Putem partaja datele cu furnizori de servicii terți care ne ajută să operăm website-ul și să furnizăm serviciile:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Furnizori de hosting și infrastructură cloud</li>
                <li>Furnizori de servicii de email și comunicare</li>
                <li>Furnizori de servicii de analiză web (Google Analytics)</li>
                <li>Procesatori de plăți (dacă aplicabil)</li>
              </ul>
              <p>
                Acești furnizori acționează ca procesatori de date și sunt obligați contractual să protejeze datele
                în conformitate cu GDPR.
              </p>

              <h3 className="text-xl mt-6 mb-3">6.2. Cerințe legale</h3>
              <p>
                Putem dezvălui datele tale personale dacă acest lucru este cerut de lege sau în răspunsul la cereri
                valabile ale autorităților publice (de exemplu, tribunale, organe de aplicare a legii).
              </p>
            </div>
          </section>

          <section id="securitate" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">7. Securitatea Datelor</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele tale personale împotriva
                accesului neautorizat, modificării, dezvăluirii sau distrugerii:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Criptare SSL/TLS:</strong> Toate transmisiile de date sunt criptate</li>
                <li><strong>Acces restricționat:</strong> Doar personalul autorizat are acces la date</li>
                <li><strong>Backup-uri regulate:</strong> Efectuăm backup-uri pentru a preveni pierderea datelor</li>
                <li><strong>Monitorizare continuă:</strong> Sistemele sunt monitorizate pentru a detecta activități suspecte</li>
                <li><strong>Actualizări de securitate:</strong> Menținem software-ul actualizat cu ultimele patch-uri de securitate</li>
              </ul>
              <p>
                Cu toate acestea, nicio metodă de transmisie prin internet sau metodă de stocare electronică nu este
                100% sigură, și nu putem garanta securitatea absolută.
              </p>
            </div>
          </section>

          <section id="durata" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">8. Durata de Stocare</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Păstrăm datele tale personale doar cât timp este necesar pentru îndeplinirea scopurilor pentru care
                au fost colectate:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Date de contact:</strong> Până la retragerea consimțământului sau finalizarea relației contractuale</li>
                <li><strong>Date contractuale:</strong> Pe durata contractului plus perioada de arhivare legală (5-10 ani conform legislației fiscale)</li>
                <li><strong>Date de navigare și cookie-uri:</strong> Conform Politicii de Cookies (maxim 24 luni pentru cookie-uri de analiză)</li>
                <li><strong>Corespondență email:</strong> Maximum 3 ani de la ultimă comunicare</li>
              </ul>
              <p>
                După expirarea perioadelor menționate, datele vor fi șterse sau anonimizate.
              </p>
            </div>
          </section>

          <section id="drepturi" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">9. Drepturile Tale</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Conform GDPR, beneficiezi de următoarele drepturi privind datele tale personale:
              </p>

              <h3 className="text-xl mt-6 mb-3">9.1. Dreptul de acces (Art. 15 GDPR)</h3>
              <p>
                Poți solicita confirmarea că prelucrăm date despre tine și poți obține o copie a acestor date.
              </p>

              <h3 className="text-xl mt-6 mb-3">9.2. Dreptul la rectificare (Art. 16 GDPR)</h3>
              <p>
                Poți cere corectarea datelor inexacte sau completarea datelor incomplete.
              </p>

              <h3 className="text-xl mt-6 mb-3">9.3. Dreptul la ștergere - "dreptul de a fi uitat" (Art. 17 GDPR)</h3>
              <p>
                Poți solicita ștergerea datelor tale în anumite condiții (de exemplu, dacă datele nu mai sunt
                necesare sau îți retragi consimțământul).
              </p>

              <h3 className="text-xl mt-6 mb-3">9.4. Dreptul la restricționarea prelucrării (Art. 18 GDPR)</h3>
              <p>
                Poți cere limitarea prelucrării în anumite situații (de exemplu, dacă contești exactitatea datelor).
              </p>

              <h3 className="text-xl mt-6 mb-3">9.5. Dreptul la portabilitatea datelor (Art. 20 GDPR)</h3>
              <p>
                Poți primi datele tale într-un format structurat, utilizat în mod curent și care poate fi citit automat.
              </p>

              <h3 className="text-xl mt-6 mb-3">9.6. Dreptul la opoziție (Art. 21 GDPR)</h3>
              <p>
                Poți te opune prelucrării datelor tale pentru marketing direct sau când prelucrarea se bazează pe interese legitime.
              </p>

              <h3 className="text-xl mt-6 mb-3">9.7. Dreptul de a depune o plângere</h3>
              <p>
                Dacă consideri că drepturile tale au fost încălcate, poți depune o plângere la:
              </p>
              <div className="glass rounded-xl p-6 space-y-2">
                <p><strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong></p>
                <p>Adresă: B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, București</p>
                <p>Telefon: <a href="tel:+40318059211" className="text-[#00AEEF] hover:underline">+40 318 059 211</a></p>
                <p>Email: <a href="mailto:anspdcp@dataprotection.ro" className="text-[#00AEEF] hover:underline">anspdcp@dataprotection.ro</a></p>
                <p>Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[#00AEEF] hover:underline">www.dataprotection.ro</a></p>
              </div>

              <h3 className="text-xl mt-6 mb-3">Cum să îți exerciți drepturile</h3>
              <p>
                Pentru a-ți exercita oricare dintre drepturile menționate mai sus, te rugăm să ne contactezi la{' '}
                <a href="mailto:contact@webmediadesign.ro" className="text-[#00AEEF] hover:underline">contact@webmediadesign.ro</a>.
                Vei primi un răspuns în termen de maximum 30 de zile de la primirea cererii.
              </p>
            </div>
          </section>

          <section id="cookies" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">10. Module Cookie</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Website-ul nostru utilizează module cookie pentru a îmbunătăți experiența utilizatorului și a analiza
                traficul. Pentru informații detaliate despre tipurile de cookie-uri utilizate, scopurile lor și
                modul de gestionare, consultă{' '}
                <Link to="/politica-cookies" className="text-[#00AEEF] hover:underline">
                  Politica de Cookies
                </Link>.
              </p>
            </div>
          </section>

          <section id="modificari" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">11. Modificări ale Politicii</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Ne rezervăm dreptul de a modifica această Politică de Confidențialitate pentru a reflecta schimbări
                în practicile noastre sau cerințele legale. Orice modificare semnificativă va fi comunicată prin
                afișare pe website, iar data ultimei actualizări va fi modificată corespunzător.
              </p>
              <p>
                Îți recomandăm să consulți periodic această pagină pentru a fi la curent cu modul în care protejăm datele tale.
              </p>
            </div>
          </section>

          <section id="contact" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">12. Contact</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Pentru orice întrebări, solicitări sau preocupări legate de protecția datelor personale, ne poți contacta:
              </p>
              <div className="glass rounded-xl p-6 space-y-3">
                <p><strong>STANCIU ALEX PFA</strong></p>
                <p>CUI: 51703420</p>
                <p>Email (Protecția Datelor): <a href="mailto:contact@webmediadesign.ro" className="text-[#00AEEF] hover:underline">contact@webmediadesign.ro</a></p>
                <p>Telefon: <a href="tel:+40773335409" className="text-[#00AEEF] hover:underline">+40 (773) 335 409</a></p>
              </div>
              <p className="text-sm text-white/60 mt-6">
                Ne angajăm să răspundem la toate solicitările în termen de maximum 30 de zile conform GDPR.
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
