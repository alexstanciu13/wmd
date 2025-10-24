import { motion } from 'motion/react';
import { useState } from 'react';
import { GraduationCap, Search, Filter } from 'lucide-react';
import { CourseCard } from '../CourseCard';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { toast } from 'sonner@2.0.3';

interface AcademyPageProps {
  onNavigate: (page: string) => void;
}

export function AcademyPage({ onNavigate }: AcademyPageProps) {
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      title: 'Curs Avansat de Design Web Modern',
      description: 'Învață să proiectezi site-uri web uimitoare, optimizate pentru conversie, folosind cele mai bune practici din industrie și instrumente moderne.',
      image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '8 ore',
      students: 3240,
      rating: 4.9,
      level: 'Intermediar',
      category: 'design',
    },
    {
      title: 'Strategie de Creștere E-Commerce',
      description: 'Stăpânește fundamentele e-commerce de la configurarea magazinului până la scalarea unei afaceri online de milioane de dolari.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjEyMzkzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '12 ore',
      students: 2890,
      rating: 4.8,
      level: 'Avansat',
      category: 'ecommerce',
    },
    {
      title: 'Esențiale Marketing Digital',
      description: 'Ghid complet de marketing digital incluzând SEO, PPC, social media și analytics.',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTIzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '10 ore',
      students: 4120,
      rating: 4.9,
      level: 'Începător',
      category: 'marketing',
    },
    {
      title: 'Automatizare AI pentru Afaceri',
      description: 'Profită de AI și automatizare pentru a simplifica operațiunile, îmbunătăți eficiența și scala afacerea ta.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyMTA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '15 ore',
      students: 2650,
      rating: 5.0,
      level: 'Avansat',
      category: 'automation',
    },
    {
      title: 'Optimizare Rată de Conversie',
      description: 'Strategii bazate pe date pentru a îmbunătăți conversiile site-ului și a maximiza ROI-ul din traficul tău.',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTIzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '6 ore',
      students: 1980,
      rating: 4.8,
      level: 'Intermediar',
      category: 'marketing',
    },
    {
      title: 'Design Identitate de Brand',
      description: 'Creează identități de brand puternice care rezonează cu audiența ta și se evidențiază pe piață.',
      image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '9 ore',
      students: 2340,
      rating: 4.9,
      level: 'Intermediar',
      category: 'design',
    },
  ];

  const categories = [
    { id: 'all', name: 'Toate Cursurile' },
    { id: 'design', name: 'Design' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'automation', name: 'Automatizare' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEnroll = (courseTitle: string) => {
    toast.success('Acces la Curs Acordat!', {
      description: `Acum ai acces la "${courseTitle}". Verifică-ți emailul pentru detalii de autentificare.`,
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Bun venit la Academia WMD!', {
      description: 'Verifică-ți emailul pentru acces la toate cursurile și resursele exclusive.',
    });
    setEmail('');
  };

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block glass-strong rounded-full px-6 py-2 mb-6">
            <GraduationCap className="w-5 h-5 inline mr-2 text-[#00AEEF]" />
            <span className="text-[#00AEEF]">Resurse Educaționale Gratuite</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6">
            <span className="text-gradient">Academia WMD</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Stăpânește abilitățile care generează succes digital. Cursuri gratuite despre design web, e-commerce, marketing și automatizare AI de la experți din industrie.
          </p>

          {/* Email Capture */}
          <div className="glass-strong rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4">Obține Acces Complet</h3>
            <p className="text-white/60 mb-6">
              Alătură-te celor 10.000+ de profesioniști care învață și cresc cu Academia WMD
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Introdu adresa ta de email"
                required
                className="bg-white/5 border-white/10 text-white flex-1"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#0070C9] to-[#002F6C] text-white hover:opacity-90 transition-opacity"
              >
                Începe Gratuit
              </Button>
            </form>
            <p className="text-xs text-white/40 mt-4">
              Nu este necesar card de credit. Acces instant la toate cursurile.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Caută cursuri..."
              className="bg-white/5 border-white/10 text-white pl-10"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#0070C9] to-[#002F6C] text-white'
                    : 'glass text-white/70 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CourseCard
                {...course}
                onEnroll={() => handleEnroll(course.title)}
              />
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-xl">Nu s-au găsit cursuri care să corespundă căutării tale.</p>
          </div>
        )}
      </section>
    </div>
  );
}
