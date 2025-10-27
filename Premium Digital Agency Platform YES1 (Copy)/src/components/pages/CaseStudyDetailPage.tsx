import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, TrendingUp, Calendar, MapPin, Users, Target, Zap, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CodeRain } from '../CodeRain';

interface CaseStudyDetailProps {
  client: string;
  industry: string;
  image: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  onNavigate: (page: string) => void;
}

export function CaseStudyDetailPage({
  client,
  industry,
  image,
  problem,
  solution,
  results,
  onNavigate,
}: CaseStudyDetailProps) {
  // Enhanced data based on client
  const getCaseStudyDetails = () => {
    switch (client) {
      case 'TechFlow Solutions':
        return {
          location: 'San Francisco, CA',
          timeline: '6 months',
          team: '8 specialists',
          overview: 'TechFlow Solutions is a leading SaaS platform providing workflow automation tools for enterprise teams. Despite having a powerful product, their digital presence was failing to convert qualified leads, resulting in missed opportunities and slow growth.',
          challenges: [
            'Outdated website design that didn\'t reflect their innovative product',
            'Complex navigation confusing potential customers',
            'Poor mobile experience affecting 65% of traffic',
            'Slow page load times (4.2s average) hurting SEO rankings',
            'No clear conversion paths or CTAs',
            'Minimal trust signals and social proof'
          ],
          approach: [
            {
              title: 'Discovery & Research',
              description: 'Conducted comprehensive user research, competitor analysis, and stakeholder interviews to understand pain points and opportunities.'
            },
            {
              title: 'Strategic Planning',
              description: 'Developed a conversion-focused information architecture with clear user journeys and optimized content strategy.'
            },
            {
              title: 'UX/UI Design',
              description: 'Created modern, intuitive interface with emphasis on clarity, trust-building, and conversion optimization.'
            },
            {
              title: 'Development',
              description: 'Built with React and Next.js for optimal performance, implementing AI-powered personalization and advanced analytics.'
            },
            {
              title: 'Optimization',
              description: 'Continuous A/B testing and data-driven refinements to maximize conversion rates and user engagement.'
            }
          ],
          features: [
            'AI-powered product recommendations',
            'Interactive product demos',
            'Dynamic pricing calculator',
            'Advanced analytics dashboard',
            'Personalized user journeys',
            'Integrated CRM and marketing automation'
          ],
          testimonial: {
            quote: 'WMD transformed our digital presence completely. The ROI has been exceptional, and their strategic approach to our growth has been invaluable. Within 6 months, we saw a 247% increase in conversions and our demo requests tripled.',
            author: 'Sarah Chen',
            role: 'CEO, TechFlow Solutions'
          },
          additionalMetrics: [
            { label: 'Page Load Time', before: '4.2s', after: '0.8s' },
            { label: 'Mobile Traffic', before: '35%', after: '58%' },
            { label: 'SEO Rankings', before: 'Page 3-5', after: 'Page 1' },
            { label: 'Customer Satisfaction', before: '3.2/5', after: '4.8/5' }
          ]
        };

      case 'LuxeCommerce':
        return {
          location: 'New York, NY',
          timeline: '8 months',
          team: '10 specialists',
          overview: 'LuxeCommerce is a premium fashion e-commerce brand offering curated luxury collections. They were struggling with high cart abandonment and poor mobile conversion rates, significantly impacting revenue potential.',
          challenges: [
            'Cart abandonment rate of 78% - well above industry average',
            'Poor mobile experience driving away 60% of traffic',
            'Low average order value compared to competitors',
            'Inefficient checkout process with 7+ steps',
            'No personalization or product recommendations',
            'Limited post-purchase engagement'
          ],
          approach: [
            {
              title: 'Platform Audit',
              description: 'Comprehensive analysis of existing platform, user behavior data, and competitive benchmarking.'
            },
            {
              title: 'Headless Commerce Migration',
              description: 'Rebuilt platform using headless commerce architecture for maximum flexibility and performance.'
            },
            {
              title: 'Mobile-First Design',
              description: 'Designed premium mobile experience with thumb-friendly navigation and streamlined purchasing flow.'
            },
            {
              title: 'AI Integration',
              description: 'Implemented AI-powered sizing recommendations, personalized product suggestions, and dynamic upselling.'
            },
            {
              title: 'Retention Automation',
              description: 'Built automated email sequences, abandoned cart recovery, and post-purchase engagement campaigns.'
            }
          ],
          features: [
            'Headless commerce architecture',
            'AI-powered sizing recommendations',
            'One-click checkout',
            'Virtual try-on technology',
            'Smart product bundles',
            'Automated cart recovery'
          ],
          testimonial: {
            quote: 'Working with WMD felt like having a world-class in-house team. Their platform rebuild transformed our business. Revenue increased by 312%, and cart abandonment dropped by 68%. The mobile experience alone has been a game-changer.',
            author: 'Michael Rodriguez',
            role: 'Founder, LuxeCommerce'
          },
          additionalMetrics: [
            { label: 'Checkout Steps', before: '7 steps', after: '3 steps' },
            { label: 'Mobile Conversion', before: '0.8%', after: '4.2%' },
            { label: 'Email Revenue', before: '12%', after: '34%' },
            { label: 'Return Rate', before: '18%', after: '7%' }
          ]
        };

      case 'Innovate Marketing':
        return {
          location: 'Austin, TX',
          timeline: '5 months',
          team: '6 specialists',
          overview: 'Innovate Marketing is a full-service marketing agency struggling to generate qualified leads and establish thought leadership in a competitive market.',
          challenges: [
            'Minimal organic traffic and poor SEO performance',
            'Low-quality leads not converting to clients',
            'Limited brand awareness in target market',
            'Content marketing efforts yielding minimal ROI',
            'Lack of thought leadership positioning',
            'No systematic lead nurturing process'
          ],
          approach: [
            {
              title: 'SEO Foundation',
              description: 'Technical SEO audit and optimization, keyword strategy development, and on-page optimization.'
            },
            {
              title: 'Content Strategy',
              description: 'Developed comprehensive content calendar focused on thought leadership and high-value topics.'
            },
            {
              title: 'PPC Campaigns',
              description: 'Strategic paid advertising on Google and LinkedIn targeting high-intent decision-makers.'
            },
            {
              title: 'Marketing Automation',
              description: 'Implemented lead scoring, automated nurture sequences, and personalized engagement workflows.'
            },
            {
              title: 'Analytics & Optimization',
              description: 'Continuous monitoring, A/B testing, and data-driven optimizations for maximum ROI.'
            }
          ],
          features: [
            'Comprehensive SEO strategy',
            'Thought leadership content',
            'Multi-channel PPC campaigns',
            'Marketing automation platform',
            'Lead scoring system',
            'Advanced analytics dashboard'
          ],
          testimonial: {
            quote: 'The results speak for themselves. Organic traffic increased by 428%, and we\'re now generating 3x more qualified leads. WMD\'s strategic approach to digital marketing has completely transformed our business.',
            author: 'Jennifer Williams',
            role: 'Managing Partner, Innovate Marketing'
          },
          additionalMetrics: [
            { label: 'Blog Traffic', before: '2.4K/mo', after: '12.7K/mo' },
            { label: 'Lead Quality Score', before: '2.8/10', after: '8.4/10' },
            { label: 'Marketing ROI', before: '140%', after: '420%' },
            { label: 'Brand Search Volume', before: '120/mo', after: '890/mo' }
          ]
        };

      case 'Catalyst Ventures':
        return {
          location: 'Boston, MA',
          timeline: '4 months',
          team: '5 specialists',
          overview: 'Catalyst Ventures is a premium investment firm managing high-net-worth client portfolios. Their brand identity was outdated and inconsistent, undermining credibility with discerning clients.',
          challenges: [
            'Outdated visual identity from 2008',
            'Inconsistent messaging across channels',
            'Lack of premium positioning in materials',
            'No clear brand guidelines for team',
            'Poor differentiation from competitors',
            'Minimal digital presence and thought leadership'
          ],
          approach: [
            {
              title: 'Brand Discovery',
              description: 'Extensive stakeholder interviews, competitive analysis, and positioning strategy development.'
            },
            {
              title: 'Visual Identity',
              description: 'Created sophisticated logo system, color palette, typography, and brand elements reflecting premium positioning.'
            },
            {
              title: 'Messaging Framework',
              description: 'Developed clear brand voice, messaging pillars, and communication guidelines.'
            },
            {
              title: 'Collateral Design',
              description: 'Designed premium pitch decks, reports, business cards, and digital assets.'
            },
            {
              title: 'Implementation',
              description: 'Comprehensive brand guidelines, team training, and rollout support across all channels.'
            }
          ],
          features: [
            'Premium logo and visual system',
            'Comprehensive brand guidelines',
            'Luxury marketing collateral',
            'Digital brand assets',
            'Messaging framework',
            'Team training and support'
          ],
          testimonial: {
            quote: 'WMD elevated our brand to match our service quality. The new identity has dramatically improved our perception in the market. Client inquiries are up 198%, and referrals have nearly tripled.',
            author: 'David Thompson',
            role: 'Managing Director, Catalyst Ventures'
          },
          additionalMetrics: [
            { label: 'Brand Consistency', before: '3/10', after: '9.5/10' },
            { label: 'Perceived Value', before: '+0%', after: '+67%' },
            { label: 'Website Sessions', before: '890/mo', after: '3,240/mo' },
            { label: 'Media Mentions', before: '2/yr', after: '18/yr' }
          ]
        };

      case 'AutomateX':
        return {
          location: 'Seattle, WA',
          timeline: '6 months',
          team: '7 specialists',
          overview: 'AutomateX provides business services but was overwhelmed by manual processes consuming 40+ hours weekly and creating customer service bottlenecks.',
          challenges: [
            'Manual processes consuming 40+ hours per week',
            'Customer service response times of 24+ hours',
            'High operational costs limiting scalability',
            'Frequent errors in manual data entry',
            'Limited ability to handle growth',
            'Poor customer satisfaction scores'
          ],
          approach: [
            {
              title: 'Process Mapping',
              description: 'Detailed analysis of workflows to identify automation opportunities and pain points.'
            },
            {
              title: 'AI Chatbot Development',
              description: 'Custom-trained chatbot handling 80% of common customer inquiries instantly.'
            },
            {
              title: 'Workflow Automation',
              description: 'Automated data entry, reporting, invoicing, and internal communications.'
            },
            {
              title: 'Predictive Analytics',
              description: 'Implemented ML models for demand forecasting and resource optimization.'
            },
            {
              title: 'Integration & Training',
              description: 'Seamless integration with existing systems and comprehensive team training.'
            }
          ],
          features: [
            'AI-powered customer support',
            'Automated workflow systems',
            'Predictive analytics dashboard',
            'Automated reporting',
            'Smart resource allocation',
            'Integration with existing tools'
          ],
          testimonial: {
            quote: 'The automation solutions WMD implemented have been transformative. We\'ve saved 40 hours per week, response times are down 85%, and customer satisfaction has never been higher. It\'s allowed us to scale without proportional cost increases.',
            author: 'Amanda Foster',
            role: 'CEO, AutomateX'
          },
          additionalMetrics: [
            { label: 'Manual Hours', before: '40hrs/wk', after: '8hrs/wk' },
            { label: 'Error Rate', before: '12%', after: '0.8%' },
            { label: 'Capacity', before: '100 clients', after: '320 clients' },
            { label: 'Cost per Transaction', before: '$12', after: '$3.20' }
          ]
        };

      case 'GlobalTech Corp':
        return {
          location: 'Denver, CO',
          timeline: '7 months',
          team: '12 specialists',
          overview: 'GlobalTech needed to rebrand and launch a new SaaS product in a competitive market with aggressive timelines and limited budget.',
          challenges: [
            'Tight launch deadline (6 months)',
            'Competitive market with established players',
            'Limited brand awareness',
            'No existing marketing infrastructure',
            'Budget constraints for customer acquisition',
            'Need for immediate market traction'
          ],
          approach: [
            {
              title: 'Brand Development',
              description: 'Fast-tracked brand strategy and identity creation with focus on differentiation.'
            },
            {
              title: 'Product Website',
              description: 'Built high-converting product site with demo capabilities and clear value proposition.'
            },
            {
              title: 'Go-to-Market Strategy',
              description: 'Comprehensive launch plan integrating PR, content, paid ads, and influencer partnerships.'
            },
            {
              title: 'Marketing Automation',
              description: 'Set up complete marketing stack with CRM, email automation, and analytics.'
            },
            {
              title: 'Launch Campaigns',
              description: 'Coordinated multi-channel launch with PR outreach, paid campaigns, and content marketing.'
            }
          ],
          features: [
            'Complete brand identity',
            'Product launch website',
            'Marketing automation setup',
            'Multi-channel campaigns',
            'PR and media outreach',
            'Influencer partnerships'
          ],
          testimonial: {
            quote: 'WMD delivered everything we needed on time and under budget. We launched with 12,500 signups, coverage in 45+ publications, and achieved 340% of our market penetration targets. Truly exceptional work.',
            author: 'Robert Chen',
            role: 'VP Product, GlobalTech Corp'
          },
          additionalMetrics: [
            { label: 'Launch Timeline', before: 'N/A', after: 'On time' },
            { label: 'Budget Efficiency', before: 'N/A', after: '92%' },
            { label: 'Trial-to-Paid', before: 'N/A', after: '28%' },
            { label: 'NPS Score', before: 'N/A', after: '72' }
          ]
        };

      default:
        return {
          location: 'United States',
          timeline: '6 months',
          team: '8 specialists',
          overview: problem,
          challenges: [problem],
          approach: [
            {
              title: 'Discovery',
              description: 'Understanding business goals and challenges.'
            },
            {
              title: 'Strategy',
              description: 'Developing comprehensive solution roadmap.'
            },
            {
              title: 'Implementation',
              description: 'Executing with precision and attention to detail.'
            },
            {
              title: 'Optimization',
              description: 'Continuous improvement and refinement.'
            }
          ],
          features: [solution],
          testimonial: {
            quote: 'Working with Web Media Design was an exceptional experience. They delivered outstanding results.',
            author: 'Client',
            role: client
          },
          additionalMetrics: []
        };
    }
  };

  const details = getCaseStudyDetails();

  return (
    <div className="relative">
      <CodeRain />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => onNavigate('portfolio')}
                className="flex items-center space-x-2 text-white/60 hover:text-[#00AEEF] mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Portfolio</span>
              </motion.button>

              <div className="inline-block glass rounded-full px-4 py-1 mb-6">
                <span className="text-[#00AEEF]">{industry}</span>
              </div>

              <h1 className="text-5xl md:text-6xl mb-6">{client}</h1>

              <p className="text-xl text-white/70 mb-8">{details.overview}</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass rounded-lg p-4">
                  <MapPin className="w-5 h-5 text-[#00AEEF] mb-2" />
                  <div className="text-sm text-white/60">Location</div>
                  <div className="text-white">{details.location}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <Calendar className="w-5 h-5 text-[#00AEEF] mb-2" />
                  <div className="text-sm text-white/60">Timeline</div>
                  <div className="text-white">{details.timeline}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <Users className="w-5 h-5 text-[#00AEEF] mb-2" />
                  <div className="text-sm text-white/60">Team</div>
                  <div className="text-white">{details.team}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden glass-strong glow-cyan"
            >
              <ImageWithFallback
                src={image}
                alt={client}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-[#1A237E]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#00AEEF]" />
            <h2 className="text-4xl mb-4">Key Results</h2>
            <p className="text-white/60">Measurable impact that exceeded expectations</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl text-gradient mb-2">{result.value}</div>
                <div className="text-white/60">{result.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Target className="w-12 h-12 mb-4 text-[#00AEEF]" />
            <h2 className="text-4xl mb-4">The Challenge</h2>
            <p className="text-xl text-white/70 mb-8">{problem}</p>
          </motion.div>

          <div className="space-y-3">
            {details.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3 glass rounded-lg p-4"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00AEEF]/20 to-[#9333EA]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#00AEEF]" />
                </div>
                <p className="text-white/80">{challenge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-[#00AEEF]/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Zap className="w-12 h-12 mx-auto mb-4 text-[#00AEEF]" />
            <h2 className="text-4xl mb-4">Our Approach</h2>
            <p className="text-white/60">{solution}</p>
          </motion.div>

          <div className="space-y-6">
            {details.approach.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-xl p-6 flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#9333EA] flex items-center justify-center text-xl">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Implemented */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-4xl mb-4">Features Implemented</h2>
            <p className="text-white/60">Comprehensive solutions tailored to drive results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {details.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-lg p-4 flex items-center space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00AEEF] flex-shrink-0" />
                <span className="text-white/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Metrics */}
      {details.additionalMetrics && details.additionalMetrics.length > 0 && (
        <section className="relative py-20 bg-gradient-to-b from-transparent via-[#1A237E]/5 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl mb-4">Before & After</h2>
              <p className="text-white/60">Comprehensive performance improvements</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {details.additionalMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-strong rounded-xl p-6"
                >
                  <div className="text-white/60 mb-4">{metric.label}</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/40 mb-1">Before</div>
                      <div className="text-xl text-white/60">{metric.before}</div>
                    </div>
                    <ArrowLeft className="w-8 h-8 text-[#00AEEF] rotate-180" />
                    <div className="text-right">
                      <div className="text-sm text-white/40 mb-1">After</div>
                      <div className="text-2xl text-gradient">{metric.after}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-2xl p-8 md:p-12 text-center glow-indigo"
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-[#00AEEF]" />
            <p className="text-2xl text-white/90 mb-8 italic">"{details.testimonial.quote}"</p>
            <div>
              <div className="text-xl mb-1">{details.testimonial.author}</div>
              <div className="text-white/60">{details.testimonial.role}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Ready for <span className="text-gradient">Similar Results</span>?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Let's discuss how we can transform your digital presence and drive exceptional growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('apply')}
                className="bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity h-14 px-8 text-lg glow-cyan"
              >
                Apply for Collaboration
              </Button>
              <Button
                onClick={() => onNavigate('portfolio')}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 h-14 px-8 text-lg"
              >
                View More Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
