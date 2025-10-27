import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from './images/logo.png';
import webMediaDesignLogo from './images/webmediadesign.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Acasă', path: '/' },
    { name: 'Servicii', path: '/servicii' },
    { name: 'Portofoliu', path: '/studii-de-caz' },
    { name: 'Academia WMD', path: '/academia' },
    { name: 'Despre', path: '/despre' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-[#0A0A0A]/60 shadow-lg border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
          >
            <img
              src={logoImage}
              alt="Web Media Design Logo"
              className="h-10 w-auto"
            />
            <img
              src={webMediaDesignLogo}
              alt="Web Media Design"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-[#00AEEF] ${
                  isActive(item.path) ? 'text-[#00AEEF]' : 'text-white/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="btn-primary glow-blue"
            >
              <Link to="/aplica">Aplică Acum</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white rounded-xl hover:bg-white/10 transition-colors"
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
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left py-2 transition-colors hover:text-[#00AEEF] ${
                  isActive(item.path) ? 'text-[#00AEEF]' : 'text-white/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full btn-primary"
            >
              <Link to="/aplica" onClick={() => setIsMobileMenuOpen(false)}>
                Aplică Acum
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
