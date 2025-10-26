import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle2, FileText, Mail, ExternalLink } from 'lucide-react';
import { SEO } from '../SEO';

export function GDPRPage() {
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
        title="GDPR – Protecția Datelor - Web Media Design"
        description="Informații despre GDPR și protecția datelor personale la Web Media Design. Află-ți drepturile conform Regulamentului General privind Protecția Datelor."
        path="/gdpr"
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
            <h1 className="text-4xl md:text-5xl">GDPR – Protecția Datelor</h1>
          </div>
          <p className="text-white/60 text-lg">
            Angajamentul nostru pentru protecția datelor tale personale
          </p>
          <p className="text-white/60 mt-2">
            Data ultimei actualizări: 26 octombrie 2025
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Link to="/politica-confidentialitate" className="glass rounded-xl p-4 hover:glass-strong transition-all">
            <FileText className="w-6 h-6 text-[#00AEEF] mb-2" />
            <h3 className="text-sm font-medium mb-1">Politica de Confidențialitate</h3>
            <p className="text-xs text-white/60">Vezi cum procesăm datele tale</p>
          </Link>
          <a href="mailto:contact@webmediadesign.ro" className="glass rounded-xl p-4 hover:glass-strong transition-all">
            <Mail className="w-6 h-6 text-[#00AEEF] mb-2" />
            <h3 className="text-sm font-medium mb-1">Contactează-ne</h3>
            <p className="text-xs text-white/60">Pentru exercitarea drepturilor GDPR</p>
          </a>
        </div>

        {/* Table of Contents */}
        <div className="glass-strong rounded-xl p-6 mb-12">
          <h2 className="text-xl mb-4">Cuprins</h2>
          <nav className="space-y-2">
            <a href="#ce-este-gdpr" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              1. Ce este GDPR?
            </a>
            <a href="#principii" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              2. Principii de Protecție a Datelor
            </a>
            <a href="#drepturi" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              3. Drepturile Tale conform GDPR
            </a>
            <a href="#exercitare" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              4. Cum îți Exerciți Drepturile
            </a>
            <a href="#date-minori" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              5. Protecția Datelor Minorilor
            </a>
            <a href="#transfer" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              6. Transfer Internațional de Date
            </a>
            <a href="#incidente" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              7. Notificarea Incidentelor de Securitate
            </a>
            <a href="#autoritate" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              8. Autoritatea de Supraveghere
            </a>
            <a href="#contact" className="block text-white/60 hover:text-[#00AEEF] transition-colors">
              9. Contact și Cereri GDPR
            </a>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section id="ce-este-gdpr" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">1. Ce este GDPR?</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                <strong>GDPR</strong> (General Data Protection Regulation / Regulamentul General privind Protecția Datelor)
                este <strong>Regulamentul (UE) 2016/679</strong>, un cadru legal al Uniunii Europene care reglementează
                modul în care organizațiile colectează, utilizează și protejează datele cu caracter personal ale cetățenilor UE.
              </p>
              <p>
                GDPR a intrat în vigoare la <strong>25 mai 2018</strong> și se aplică tuturor companiilor care prelucrează
                date personale ale rezidenților UE, indiferent de locația geografică a companiei.
              </p>
              <div className="glass rounded-xl p-6 mt-6">
                <h3 className="text-lg mb-3">Obiectivele GDPR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Protejarea drepturilor și libertăților fundamentale ale persoanelor fizice</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Armonizarea legislației privind protecția datelor în UE</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Creșterea controlului pe care îl au persoanele asupra datelor lor personale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Impunerea obligațiilor clare pentru organizații în ceea ce privește protecția datelor</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="principii" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">2. Principii de Protecție a Datelor</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Web Media Design respectă și aplică cele 7 principii fundamentale ale GDPR (Art. 5):
              </p>
              <div className="space-y-4 mt-6">
                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2">1. Legalitate, Echitate și Transparență</h3>
                  <p className="text-sm text-white/70">
                    Prelucrăm datele în mod legal, echitabil și transparent. Te informăm clar despre ce date colectăm și de ce.
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2">2. Limitarea Scopului</h3>
                  <p className="text-sm text-white/70">
                    Colectăm date doar pentru scopuri specifice, explicite și legitime. Nu le folosim ulterior
                    într-un mod incompatibil cu aceste scopuri.
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2">3. Minimizarea Datelor</h3>
                  <p className="text-sm text-white/70">
                    Colectăm doar datele care sunt adecvate, relevante și limitate la ceea ce este necesar
                    pentru scopurile declarate.
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2">4. Exactitate</h3>
                  <p className="text-sm text-white/70">
                    Ne asigurăm că datele sunt exacte și actualizate. Ștergem sau corectăm datele inexacte fără întârziere.
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2">5. Limitarea Stocării</h3>
                  <p className="text-sm text-white/70">
                    Păstrăm datele doar atât timp cât este necesar pentru îndeplinirea scopurilor pentru care au fost colectate.
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2">6. Integritate și Confidențialitate</h3>
                  <p className="text-sm text-white/70">
                    Implementăm măsuri tehnice și organizatorice adecvate pentru a asigura securitatea datelor
                    împotriva prelucrării neautorizate sau ilegale.
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2">7. Responsabilitate</h3>
                  <p className="text-sm text-white/70">
                    Suntem responsabili pentru respectarea tuturor principiilor și putem demonstra conformitatea.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="drepturi" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">3. Drepturile Tale conform GDPR</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                GDPR îți acordă următoarele drepturi în legătură cu datele tale personale:
              </p>
              <div className="space-y-4 mt-6">
                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#00AEEF] font-bold">1</span>
                    </span>
                    Dreptul de Acces (Art. 15)
                  </h3>
                  <p className="text-sm text-white/70 ml-11">
                    Ai dreptul să obții confirmarea că prelucrăm date despre tine și să primești o copie a acestor date,
                    precum și informații despre modul în care sunt prelucrate.
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#00AEEF] font-bold">2</span>
                    </span>
                    Dreptul la Rectificare (Art. 16)
                  </h3>
                  <p className="text-sm text-white/70 ml-11">
                    Poți cere corectarea datelor inexacte sau completarea datelor incomplete care te privesc.
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#00AEEF] font-bold">3</span>
                    </span>
                    Dreptul la Ștergere - "Dreptul de a fi uitat" (Art. 17)
                  </h3>
                  <p className="text-sm text-white/70 ml-11">
                    Poți solicita ștergerea datelor în anumite circumstanțe, cum ar fi:
                  </p>
                  <ul className="text-sm text-white/70 ml-11 mt-2 space-y-1 list-disc list-inside">
                    <li>Datele nu mai sunt necesare pentru scopurile pentru care au fost colectate</li>
                    <li>Îți retragi consimțământul și nu există alt temei legal</li>
                    <li>Te opui prelucrării și nu există motive legitime care să prevaleze</li>
                    <li>Datele au fost prelucrate ilegal</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#00AEEF] font-bold">4</span>
                    </span>
                    Dreptul la Restricționarea Prelucrării (Art. 18)
                  </h3>
                  <p className="text-sm text-white/70 ml-11">
                    Poți cere limitarea prelucrării datelor în următoarele situații:
                  </p>
                  <ul className="text-sm text-white/70 ml-11 mt-2 space-y-1 list-disc list-inside">
                    <li>Contești exactitatea datelor (pe perioada verificării)</li>
                    <li>Prelucrarea este ilegală, dar te opui ștergerii</li>
                    <li>Ai nevoie de datele pentru constatarea, exercitarea sau apărarea unui drept în instanță</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#00AEEF] font-bold">5</span>
                    </span>
                    Dreptul la Portabilitatea Datelor (Art. 20)
                  </h3>
                  <p className="text-sm text-white/70 ml-11">
                    Ai dreptul să primești datele pe care ni le-ai furnizat într-un format structurat, utilizat în mod
                    curent și care poate fi citit automat (de exemplu, CSV, JSON), și să le transmiți altui operator.
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#00AEEF] font-bold">6</span>
                    </span>
                    Dreptul la Opoziție (Art. 21)
                  </h3>
                  <p className="text-sm text-white/70 ml-11">
                    Te poți opune în orice moment prelucrării datelor tale pentru:
                  </p>
                  <ul className="text-sm text-white/70 ml-11 mt-2 space-y-1 list-disc list-inside">
                    <li>Marketing direct (inclusiv profilare în scopuri de marketing)</li>
                    <li>Prelucrare bazată pe interes legitim</li>
                    <li>Cercetare științifică sau statistică</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#00AEEF] font-bold">7</span>
                    </span>
                    Dreptul de a nu fi Supus Deciziilor Automate (Art. 22)
                  </h3>
                  <p className="text-sm text-white/70 ml-11">
                    Ai dreptul să nu fii supus unei decizii bazate exclusiv pe prelucrare automată, inclusiv crearea
                    de profiluri, care produce efecte juridice sau te afectează în mod similar într-o măsură semnificativă.
                  </p>
                </div>

                <div className="glass rounded-xl p-5">
                  <h3 className="text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#00AEEF]/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#00AEEF] font-bold">8</span>
                    </span>
                    Dreptul de a Retrage Consimțământul
                  </h3>
                  <p className="text-sm text-white/70 ml-11">
                    Când prelucrarea se bazează pe consimțământul tău, ai dreptul să îl retragi în orice moment,
                    fără a afecta legalitatea prelucrării efectuate înainte de retragere.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="exercitare" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">4. Cum îți Exerciți Drepturile</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Pentru a-ți exercita oricare dintre drepturile menționate mai sus, urmează acești pași:
              </p>
              <div className="glass rounded-xl p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00AEEF] flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h4 className="font-medium mb-1">Trimite o cerere în scris</h4>
                    <p className="text-sm text-white/70">
                      Contactează-ne la{' '}
                      <a href="mailto:contact@webmediadesign.ro" className="text-[#00AEEF] hover:underline">
                        contact@webmediadesign.ro
                      </a>
                      {' '}cu subiectul "Cerere GDPR - [Tip Drept]"
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00AEEF] flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h4 className="font-medium mb-1">Identifică-te</h4>
                    <p className="text-sm text-white/70">
                      Pentru a verifica identitatea ta și a proteja datele împotriva accesului neautorizat, te rugăm
                      să incluzi: nume complet, adresă de email utilizată în relația cu noi și o copie a unui document
                      de identitate (CI/pașaport)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00AEEF] flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h4 className="font-medium mb-1">Specifică cererea</h4>
                    <p className="text-sm text-white/70">
                      Descrie clar ce drept dorești să exerciți și, dacă e cazul, motivul cererii
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00AEEF] flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <h4 className="font-medium mb-1">Primește răspuns</h4>
                    <p className="text-sm text-white/70">
                      Vei primi un răspuns în termen de <strong>maximum 30 de zile</strong> de la primirea cererii
                      (conform Art. 12(3) GDPR). În cazuri complexe, această perioadă poate fi prelungită cu încă 60
                      de zile, despre care vei fi informat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-xl p-5 mt-6">
                <h4 className="font-medium mb-2 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-[#00AEEF]" />
                  Exercitarea drepturilor este gratuită
                </h4>
                <p className="text-sm text-white/70">
                  De regulă, nu percepem taxe pentru exercitarea drepturilor GDPR. Cu toate acestea, în cazul cererilor
                  vădit nefondate sau excesive (în special prin caracterul lor repetitiv), ne rezervăm dreptul de a
                  percepe o taxă rezonabilă sau de a refuza să dăm curs cererii.
                </p>
              </div>
            </div>
          </section>

          <section id="date-minori" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">5. Protecția Datelor Minorilor</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Serviciile noastre sunt destinate persoanelor cu vârsta de <strong>18 ani sau mai mult</strong>.
                Nu colectăm cu bună știință date personale de la copii sub 16 ani fără consimțământul părintelui
                sau tutorelui legal, conform cerințelor Art. 8 GDPR.
              </p>
              <p>
                Dacă ești părinte sau tutore legal și descoperi că copilul tău ne-a furnizat date personale fără
                consimțământul tău, te rugăm să ne contactezi imediat pentru a putea șterge aceste informații.
              </p>
            </div>
          </section>

          <section id="transfer" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">6. Transfer Internațional de Date</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Datele tale personale sunt stocate și prelucrate în principal în Spațiul Economic European (SEE).
                În cazul în care este necesar transferul datelor către țări din afara SEE, ne asigurăm că sunt
                implementate garanții adecvate conform Art. 46 GDPR:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Clauze contractuale standard aprobate de Comisia Europeană</li>
                <li>Mecanisme de certificare aprobate</li>
                <li>Decizii de adecvare pentru țări recunoscute ca oferind protecție adecvată</li>
              </ul>
            </div>
          </section>

          <section id="incidente" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">7. Notificarea Incidentelor de Securitate</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                În conformitate cu Art. 33 și 34 GDPR, în cazul unei încălcări a securității datelor cu caracter
                personal care poate prezenta un risc ridicat pentru drepturile și libertățile tale:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vom notifica Autoritatea Națională de Supraveghere (ANSPDCP) în termen de <strong>72 de ore</strong></li>
                <li>Te vom informa direct și fără întârziere despre incident</li>
                <li>Îți vom comunica măsurile luate pentru a atenua efectele adverse</li>
              </ul>
            </div>
          </section>

          <section id="autoritate" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">8. Autoritatea de Supraveghere</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Dacă consideri că drepturile tale conform GDPR au fost încălcate, ai dreptul să depui o plângere
                la autoritatea de supraveghere competentă:
              </p>
              <div className="glass rounded-xl p-6 space-y-3 mt-6">
                <h4 className="font-medium text-lg">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Adresă:</strong> B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, cod poștal 010336, București, România</p>
                  <p><strong>Telefon:</strong> <a href="tel:+40318059211" className="text-[#00AEEF] hover:underline">+40 318 059 211</a></p>
                  <p><strong>Fax:</strong> +40 318 059 602</p>
                  <p><strong>Email:</strong> <a href="mailto:anspdcp@dataprotection.ro" className="text-[#00AEEF] hover:underline">anspdcp@dataprotection.ro</a></p>
                  <p>
                    <strong>Website:</strong>{' '}
                    <a
                      href="https://www.dataprotection.ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00AEEF] hover:underline inline-flex items-center"
                    >
                      www.dataprotection.ro
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </p>
                  <p><strong>Program:</strong> Luni - Joi: 08:30 - 17:00, Vineri: 08:30 - 14:30</p>
                </div>
              </div>
              <p className="mt-4">
                De asemenea, ai dreptul la o cale de atac eficientă în fața unei instanțe (Art. 79 GDPR).
              </p>
            </div>
          </section>

          <section id="contact" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl mb-6">9. Contact și Cereri GDPR</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              <p>
                Pentru orice întrebări despre GDPR sau pentru exercitarea drepturilor tale, ne poți contacta:
              </p>
              <div className="glass rounded-xl p-6 space-y-3">
                <p><strong>STANCIU ALEX PFA</strong></p>
                <p>CUI: 51703420</p>
                <p>
                  <strong>Email (Protecția Datelor):</strong>{' '}
                  <a href="mailto:contact@webmediadesign.ro" className="text-[#00AEEF] hover:underline">
                    contact@webmediadesign.ro
                  </a>
                </p>
                <p>
                  <strong>Telefon:</strong>{' '}
                  <a href="tel:+40773335409" className="text-[#00AEEF] hover:underline">
                    +40 (773) 335 409
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a href="https://webmediadesign.ro" className="text-[#00AEEF] hover:underline">
                    webmediadesign.ro
                  </a>
                </p>
              </div>
              <p className="text-sm text-white/60 mt-6">
                <strong>Timp de răspuns:</strong> Maximum 30 de zile de la primirea cererii (conform Art. 12(3) GDPR)
              </p>
              <p className="text-sm text-white/60">
                <strong>Format cerere:</strong> Cererea poate fi trimisă prin email cu subiectul "Cerere GDPR - [Tip Drept]"
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
