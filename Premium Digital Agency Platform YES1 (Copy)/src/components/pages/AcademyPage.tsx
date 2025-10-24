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
      title: 'Modern Web Design Masterclass',
      description: 'Learn to design stunning, conversion-optimized websites using industry best practices and modern tools.',
      image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '8 hours',
      students: 3240,
      rating: 4.9,
      level: 'Intermediate',
      category: 'design',
    },
    {
      title: 'E-Commerce Growth Strategy',
      description: 'Master e-commerce fundamentals from store setup to scaling a multi-million dollar online business.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjEyMzkzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '12 hours',
      students: 2890,
      rating: 4.8,
      level: 'Advanced',
      category: 'ecommerce',
    },
    {
      title: 'Digital Marketing Essentials',
      description: 'Complete guide to digital marketing including SEO, PPC, social media, and analytics.',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTIzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '10 hours',
      students: 4120,
      rating: 4.9,
      level: 'Beginner',
      category: 'marketing',
    },
    {
      title: 'AI Automation for Business',
      description: 'Leverage AI and automation to streamline operations, improve efficiency, and scale your business.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyMTA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '15 hours',
      students: 2650,
      rating: 5.0,
      level: 'Advanced',
      category: 'automation',
    },
    {
      title: 'Conversion Rate Optimization',
      description: 'Data-driven strategies to improve website conversions and maximize ROI from your traffic.',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTIzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '6 hours',
      students: 1980,
      rating: 4.8,
      level: 'Intermediate',
      category: 'marketing',
    },
    {
      title: 'Brand Identity Design',
      description: 'Create powerful brand identities that resonate with your audience and stand out in the market.',
      image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjI3OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '9 hours',
      students: 2340,
      rating: 4.9,
      level: 'Intermediate',
      category: 'design',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'design', name: 'Design' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'automation', name: 'Automation' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEnroll = (courseTitle: string) => {
    toast.success('Course Access Granted!', {
      description: `You now have access to "${courseTitle}". Check your email for login details.`,
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Welcome to WMD Academy!', {
      description: 'Check your email for access to all courses and exclusive resources.',
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
            <span className="text-[#00AEEF]">Free Education Resources</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6">
            <span className="text-gradient">WMD Academy</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Master the skills that drive digital success. Free courses on web design, e-commerce, marketing, and AI automation from industry experts.
          </p>

          {/* Email Capture */}
          <div className="glass-strong rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4">Get Full Access</h3>
            <p className="text-white/60 mb-6">
              Join 10,000+ professionals learning and growing with WMD Academy
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-white/5 border-white/10 text-white flex-1"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity"
              >
                Get Started Free
              </Button>
            </form>
            <p className="text-xs text-white/40 mt-4">
              No credit card required. Instant access to all courses.
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
              placeholder="Search courses..."
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
                    ? 'bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white'
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
            <p className="text-white/60 text-xl">No courses found matching your search.</p>
          </div>
        )}
      </section>

      {/* Hosting Upsell */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="glass-strong rounded-2xl p-8 md:p-12 text-center glow-indigo">
          <h2 className="text-3xl mb-4">Ready to Launch Your Project?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Get premium hosting and domain services to bring your skills to life. Professional infrastructure starting at just $29/month.
          </p>
          <Button
            onClick={() => onNavigate('hosting')}
            className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity"
          >
            View Hosting Plans
          </Button>
        </div>
      </section>
    </div>
  );
}
