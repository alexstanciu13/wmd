import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const services = [
    { name: 'Design Web', page: 'web-design' },
    { name: 'Marketing Digital', page: 'marketing' },
    { name: 'Branding', page: 'branding' },
    { name: 'Automatizare AI', page: 'ai-automation' },
  ];

  const company = [
    { name: 'Despre Noi', page: 'about' },
    { name: 'Portofoliu', page: 'portfolio' },
    { name: 'Academia WMD', page: 'academy' },
    { name: 'Găzduire & Domenii', page: 'hosting' },
  ];

  return (
    <footer className="relative mt-32 glass-strong border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-gradient">WMD</span>
            </div>
            <p className="text-white/60 mb-4">
              Agenție digitală premium care creează experiențe excepționale pentru branduri în creștere rapidă.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#00AEEF] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00AEEF] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00AEEF] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00AEEF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Servicii</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-white/60 hover:text-[#00AEEF] transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4">Companie</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-white/60 hover:text-[#00AEEF] transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-white/60">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>hello@webmediadesign.com</span>
              </li>
              <li className="flex items-start space-x-3 text-white/60">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-white/60">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Innovation Drive, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60">
            © 2025 Web Media Design. Toate drepturile rezervate.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-[#00AEEF] transition-colors">
              Politica de Confidențialitate
            </a>
            <a href="#" className="text-white/60 hover:text-[#00AEEF] transition-colors">
              Termeni și Condiții
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
