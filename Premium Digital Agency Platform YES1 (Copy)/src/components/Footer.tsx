import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import logoImage from './images/logo.png';
import webMediaDesignLogo from './images/webmediadesign.png';

export function Footer() {
  const services = [
    { name: 'Design Web', path: '/servicii/design-web' },
    { name: 'Marketing Digital', path: '/servicii/marketing-digital' },
    { name: 'Branding', path: '/servicii/branding' },
    { name: 'Automatizare AI', path: '/servicii/automatizare-ai' },
  ];

  const company = [
    { name: 'Despre Noi', path: '/despre' },
    { name: 'Portofoliu', path: '/studii-de-caz' },
    { name: 'Academia WMD', path: '/academia' },
  ];

  const legal = [
    { name: 'Termeni și Condiții', path: '/termeni-conditii' },
    { name: 'Politica de Confidențialitate', path: '/politica-confidentialitate' },
    { name: 'Politica de Cookies', path: '/politica-cookies' },
    { name: 'GDPR – Protecția Datelor', path: '/gdpr' },
  ];

  return (
    <footer className="relative mt-32 glass-strong border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logoImage}
                alt="Web Media Design Logo"
                className="h-10 w-auto"
              />
              <img
                src={webMediaDesignLogo}
                alt="Web Media Design"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/60 mb-4">
              Agenție digitală premium care creează experiențe excepționale pentru branduri în creștere rapidă.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#00AEEF] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00AEEF] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00AEEF] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00AEEF] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Servicii</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-[#00AEEF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4">Companie</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-[#00AEEF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Separator */}
              <li className="!mt-4 pt-4 border-t border-white/10"></li>

              {/* Legal links */}
              {legal.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-[#00AEEF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://anpc.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#00AEEF] transition-colors inline-flex items-center"
                >
                  ANPC
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-white/60">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@webmediadesign.ro" className="hover:text-[#00AEEF] transition-colors">
                  contact@webmediadesign.ro
                </a>
              </li>
              <li className="flex items-start space-x-3 text-white/60">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+40773335409" className="hover:text-[#00AEEF] transition-colors">
                  +40 (773) 335 409
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left">
          <p className="text-white/60">
            © 2025 Web Media Design. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
