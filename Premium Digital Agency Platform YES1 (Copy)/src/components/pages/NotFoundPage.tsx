import { motion } from 'motion/react';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block"
            >
              <div className="text-9xl md:text-[12rem] text-gradient mb-4">404</div>
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-5xl mb-6">
            Pagina Nu a Fost Găsită
          </h1>

          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Se pare că pagina pe care o cauți nu există sau a fost mutată. Hai să te readucem pe drumul cel bun.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="btn-primary h-12 px-8"
            >
              <Link to="/">
                <Home className="mr-2 w-4 h-4" />
                Acasă
              </Link>
            </Button>
            <Button
              asChild
              className="btn-ghost h-12 px-8"
            >
              <Link to="/servicii">
                <Search className="mr-2 w-4 h-4" />
                Vezi Serviciile
              </Link>
            </Button>
          </div>

          <div className="mt-16">
            <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl mb-4">Link-uri Utile</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link to="/" className="text-[#00AEEF] hover:text-white transition-colors">
                  Acasă
                </Link>
                <Link to="/servicii" className="text-[#00AEEF] hover:text-white transition-colors">
                  Servicii
                </Link>
                <Link to="/studii-de-caz" className="text-[#00AEEF] hover:text-white transition-colors">
                  Studii de Caz
                </Link>
                <Link to="/academia" className="text-[#00AEEF] hover:text-white transition-colors">
                  Academia
                </Link>
                <Link to="/despre" className="text-[#00AEEF] hover:text-white transition-colors">
                  Despre
                </Link>
                <Link to="/aplica" className="text-[#00AEEF] hover:text-white transition-colors">
                  Aplică
                </Link>
                <Link to="/servicii/design-web" className="text-[#00AEEF] hover:text-white transition-colors">
                  Design Web
                </Link>
                <Link to="/servicii/marketing-digital" className="text-[#00AEEF] hover:text-white transition-colors">
                  Marketing
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
