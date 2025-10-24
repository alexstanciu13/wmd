import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Acasă', page: 'home' },
    { name: 'Servicii', page: 'services' },
    { name: 'Portofoliu', page: 'portfolio' },
    { name: 'Academia WMD', page: 'academy' },
    { name: 'Despre', page: 'about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-[#0A0A0A]/80 shadow-lg border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center glow-cyan">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl tracking-tight">
              <span className="text-gradient">Web Media Design</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors hover:text-[#00AEEF] ${
                  currentPage === item.page ? 'text-[#00AEEF]' : 'text-white/80'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate('apply')}
              className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity glow-cyan"
            >
              Aplică Acum
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors hover:text-[#00AEEF] ${
                  currentPage === item.page ? 'text-[#00AEEF]' : 'text-white/80'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => {
                onNavigate('apply');
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white"
            >
              Aplică Acum
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
