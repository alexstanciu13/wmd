import { motion } from 'motion/react';
import { CheckCircle, Clock, Award } from 'lucide-react';
import { ApplicationForm } from '../ApplicationForm';

export function ApplyPage() {
  const benefits = [
    'Senior-level team dedicated to your project',
    'Strategic partnership, not transactional service',
    'Data-driven approach with measurable ROI',
    'Direct access to leadership and decision-makers',
    'Ongoing optimization and support',
  ];

  const qualifications = [
    {
      title: 'Budget Commitment',
      description: 'Minimum project budget of $50,000',
    },
    {
      title: 'Growth Mindset',
      description: 'Ready to invest in transformational change',
    },
    {
      title: 'Strategic Alignment',
      description: 'Clear goals and decision-making authority',
    },
    {
      title: 'Timeline',
      description: 'Realistic expectations and committed timeline',
    },
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block glass-strong rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 inline mr-2 text-[#00AEEF]" />
            <span className="text-[#00AEEF]">Limited to 12 Clients Per Quarter</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6">
            Apply for <span className="text-gradient">Collaboration</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join the exclusive group of high-growth brands we partner with to create exceptional digital experiences.
          </p>
        </motion.div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="glass rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-[#00AEEF]" />
            <h3>What Happens Next</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Application Review', time: '24-48 hours' },
              { step: '2', title: 'Discovery Call', time: '30-60 minutes' },
              { step: '3', title: 'Proposal & Strategy', time: '3-5 days' },
              { step: '4', title: 'Project Kickoff', time: '1-2 weeks' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center mx-auto mb-2">
                  <span>{item.step}</span>
                </div>
                <h4 className="text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-white/60">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Partnership Benefits */}
            <div className="glass rounded-xl p-6">
              <h3 className="mb-4">Partnership Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal Partner */}
            <div className="glass rounded-xl p-6">
              <h3 className="mb-4">Ideal Partner Profile</h3>
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={index}>
                    <h4 className="text-sm text-[#00AEEF] mb-1">{qual.title}</h4>
                    <p className="text-sm text-white/70">{qual.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Signal */}
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-3xl text-gradient mb-2">98%</div>
              <div className="text-sm text-white/60 mb-3">Client Satisfaction Rate</div>
              <div className="text-3xl text-gradient mb-2">$50M+</div>
              <div className="text-sm text-white/60">Generated in Client Revenue</div>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <ApplicationForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'Why do you limit client intake?',
              a: 'Quality over quantity. By limiting our partnerships to 12 per quarter, we ensure every project receives senior-level attention and the strategic focus needed for exceptional results.',
            },
            {
              q: 'What is the minimum project budget?',
              a: 'Our projects typically start at $50,000. This investment level ensures we have the resources needed to deliver transformational results.',
            },
            {
              q: 'How long does the application process take?',
              a: 'We review applications within 24-48 hours. If there\'s a potential fit, we\'ll schedule a discovery call within a week.',
            },
            {
              q: 'What if my project doesn\'t fit right now?',
              a: 'We\'ll be transparent if we\'re not the right fit or if timing doesn\'t align. We may recommend alternative solutions or suggest reconnecting in the future.',
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="mb-2">{faq.q}</h3>
              <p className="text-white/70">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
