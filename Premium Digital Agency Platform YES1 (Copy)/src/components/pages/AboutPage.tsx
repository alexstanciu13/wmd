import { motion } from 'motion/react';
import { Award, Users, Target, Zap, Heart, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue perfection in every project, never settling for good enough.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency and honesty guide every client interaction and decision.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of trends, leveraging cutting-edge technology for results.',
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'Your success is our success. We\'re in this together, long-term.',
    },
  ];

  const team = [
    {
      name: 'Sarah Che',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMjkwOTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMjMzMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emily Watson',
      role: 'Head of Strategy',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTIzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEyMTA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            About <span className="text-gradient">Web Media Design</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We're not just another agency. We're your strategic partner in digital transformation.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-strong rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl mb-6 text-center">Our Story</h2>
          <div className="space-y-4 text-white/70">
            <p>
              Founded in 2018, Web Media Design emerged from a simple observation: most digital agencies
              prioritize quantity over quality, treating clients as transactions rather than partners.
              We knew there was a better way.
            </p>
            <p>
              We built WMD on the principle of exclusivity and excellence. By limiting our client roster
              to just 12 partnerships per quarter, we ensure every project receives the strategic attention,
              creative excellence, and technical precision it deserves.
            </p>
            <p>
              Today, we're proud to partner with some of the most ambitious brands in tech, e-commerce,
              and professional services. Our clients don't just see results—they experience transformation.
            </p>
            <p>
              This isn't about building websites or running ads. It's about architecting digital ecosystems
              that drive sustainable growth, powered by data, fueled by creativity, and executed with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Our Values</h2>
          <p className="text-white/60">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">{value.title}</h3>
              <p className="text-white/60 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Meet Our Team</h2>
          <p className="text-white/60">The experts behind your success</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 ring-2 ring-[#00AEEF]/30">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-1">{member.name}</h3>
              <p className="text-sm text-white/60">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-strong rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-gradient mb-2">7+ Years</div>
              <div className="text-white/60">In Business</div>
            </div>
            <div>
              <div className="text-4xl text-gradient mb-2">150+</div>
              <div className="text-white/60">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl text-gradient mb-2">$50M+</div>
              <div className="text-white/60">Client Revenue</div>
            </div>
            <div>
              <div className="text-4xl text-gradient mb-2">98%</div>
              <div className="text-white/60">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Exclusive */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl mb-4">Why We're Exclusive</h2>
              <p className="text-white/70 mb-4">
                Quality takes time. Deep strategy takes focus. Transformational results require partnership.
              </p>
              <p className="text-white/70 mb-4">
                By limiting our client roster to 12 partnerships per quarter, we ensure that every project
                gets the senior-level attention it deserves. No junior teams, no cookie-cutter solutions,
                no divided attention.
              </p>
              <p className="text-white/70">
                This exclusivity isn't about being difficult—it's about being exceptional. It's about
                ensuring we can deliver the level of service, creativity, and results that justify your
                investment and our reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl mb-6">Ready to Join Our Partner Network?</h2>
          <p className="text-xl text-white/70 mb-8">
            We're selective about who we work with, and we're looking for brands ready to make a real impact.
          </p>
          <Button
            onClick={() => onNavigate('apply')}
            className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity h-14 px-8 text-lg glow-cyan"
          >
            Apply for Collaboration
          </Button>
        </div>
      </section>
    </div>
  );
}
