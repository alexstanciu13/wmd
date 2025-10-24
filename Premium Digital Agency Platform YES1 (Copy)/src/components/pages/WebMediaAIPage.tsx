import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, Zap, Loader2, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { ScrollArea } from '../ui/scroll-area';
import { CodeRain } from '../CodeRain';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function WebMediaAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm Web Media AI, your intelligent assistant for all things digital marketing, web design, and business growth. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Predefined intelligent responses based on keywords
    if (lowerMessage.includes('web design') || lowerMessage.includes('website')) {
      return "Great question about web design! At Web Media Design, we specialize in creating premium, conversion-focused websites. Our process includes:\n\n1. **Strategic Discovery** - Understanding your business goals and target audience\n2. **Custom Design** - Creating unique, brand-aligned experiences\n3. **Development** - Building with modern tech like React, Next.js, and Tailwind\n4. **Optimization** - Ensuring peak performance and SEO\n\nOur typical website projects range from $25,000 to $100,000+ depending on complexity. Would you like to learn more about our process or see some examples?";
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
      return "Our pricing reflects the premium quality and strategic value we deliver:\n\n**Website Projects:** $25,000 - $100,000+\n**E-Commerce Solutions:** $40,000 - $150,000+\n**Digital Marketing Retainers:** $5,000 - $25,000/month\n**Brand Strategy:** $15,000 - $50,000\n**AI Automation:** $20,000 - $75,000\n\nWe work with established businesses (typically $500K+ annual revenue) ready to invest in transformative growth. Would you like to schedule a discovery call to discuss your specific needs?";
    }

    if (lowerMessage.includes('ai') || lowerMessage.includes('automation')) {
      return "AI and automation are transforming business operations! We offer:\n\n✦ **AI Chatbots** - Customer service automation with natural language processing\n✦ **Workflow Automation** - Streamline repetitive tasks and processes\n✦ **Predictive Analytics** - Data-driven insights for better decisions\n✦ **Personalization Engines** - Dynamic content tailored to each user\n✦ **Lead Scoring** - Automated qualification and routing\n\nOur AI solutions typically deliver 40-60% time savings and 3-5x ROI within the first year. What specific processes are you looking to automate?";
    }

    if (lowerMessage.includes('marketing') || lowerMessage.includes('ads') || lowerMessage.includes('seo')) {
      return "Our digital marketing approach combines strategy, creativity, and data:\n\n**SEO Strategy** - Organic growth through technical optimization and content\n**PPC Management** - Google Ads, Facebook, LinkedIn campaigns optimized for ROI\n**Social Media** - Engaging content and community building\n**Email Marketing** - Automated nurture sequences that convert\n**Analytics** - Comprehensive tracking and reporting\n\nWe typically see 200-300% ROI on marketing spend within 6 months. Our retainer packages start at $5,000/month. What are your current marketing challenges?";
    }

    if (lowerMessage.includes('portfolio') || lowerMessage.includes('examples') || lowerMessage.includes('work')) {
      return "I'd love to show you our work! We've delivered transformative results for clients across industries:\n\n**TechFlow Solutions (SaaS)** - 247% increase in conversions\n**LuxeCommerce (E-Commerce)** - 312% revenue growth, 68% reduced cart abandonment\n**FinanceFirst (Fintech)** - Complete digital transformation, 5x lead generation\n\nOur portfolio showcases projects in SaaS, e-commerce, healthcare, finance, and more. You can view detailed case studies on our Portfolio page. Would you like me to highlight a specific industry or project type?";
    }

    if (lowerMessage.includes('academy') || lowerMessage.includes('learn') || lowerMessage.includes('course')) {
      return "WMD Academy is our free education platform! Access premium courses on:\n\n📚 **Web Design** - 12 comprehensive modules\n🛒 **E-Commerce** - 8 modules on conversion optimization\n📣 **Marketing** - 10 modules covering SEO, PPC, and social\n🤖 **AI Automation** - 6 modules on implementing AI\n\nAll courses include expert-led videos, real-world case studies, downloadable resources, and community access. It's completely free and designed to help you grow your business knowledge. Ready to start learning?";
    }

    if (lowerMessage.includes('hosting') || lowerMessage.includes('domain')) {
      return "Our hosting solutions are powered by ROMARG's enterprise-grade infrastructure:\n\n**Startup Plan** - $29/month - Perfect for small businesses\n**Professional Plan** - $79/month - High-performance with priority support\n**Enterprise Plan** - $199/month - Maximum power and dedicated resources\n\nAll plans include:\n✓ 99.9% uptime guarantee\n✓ Free SSL certificates\n✓ Daily backups\n✓ DDoS protection\n✓ 24/7 expert support\n\nDomain registration starts at $12/year. Need help choosing the right plan?";
    }

    if (lowerMessage.includes('apply') || lowerMessage.includes('start') || lowerMessage.includes('work together')) {
      return "Excellent! We'd love to explore a partnership. Here's our process:\n\n1. **Submit Application** - Tell us about your business and goals (takes 5 minutes)\n2. **Qualification Review** - We review within 48 hours\n3. **Discovery Call** - 60-minute strategic session (if approved)\n4. **Proposal** - Custom roadmap and investment details\n5. **Kickoff** - Let's transform your digital presence!\n\nWe limit partnerships to 12 per quarter to maintain exceptional quality. The application includes questions about your business, goals, timeline, and budget ($25K+ minimum). Ready to apply?";
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Great to connect with you. I'm here to help you understand how Web Media Design can elevate your digital presence. \n\nI can answer questions about:\n• Our premium web design & development services\n• Digital marketing strategies and ROI\n• AI automation solutions\n• Pricing and partnership process\n• Our portfolio and case studies\n• WMD Academy free courses\n\nWhat would you like to explore first?";
    }

    if (lowerMessage.includes('thank')) {
      return "You're very welcome! I'm here to help whenever you need. Feel free to ask any other questions about our services, process, or how we can help grow your business. If you're ready to take the next step, I'd recommend checking out our application page or scheduling a discovery call. 🚀";
    }

    // Default intelligent response
    return "That's a great question! While I can provide information about Web Media Design's services, pricing, process, and capabilities, I'd recommend:\n\n1. **Exploring our website** - Check out our Services, Portfolio, and Academy pages\n2. **Scheduling a discovery call** - Get personalized answers from our team\n3. **Reviewing case studies** - See real results we've delivered\n\nIs there something specific about web design, marketing, AI automation, or our partnership process you'd like to know more about?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: generateAIResponse(input.trim()),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: "Hello! I'm Web Media AI, your intelligent assistant for all things digital marketing, web design, and business growth. How can I help you today?",
        timestamp: new Date(),
      },
    ]);
  };

  const suggestedQuestions = [
    "What services do you offer?",
    "How much does a website cost?",
    "Tell me about AI automation",
    "Show me your portfolio",
  ];

  return (
    <div className="relative min-h-screen pt-20">
      <CodeRain />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#9333EA] mb-6 glow-cyan">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">
            <span className="text-gradient">Web Media AI</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Your intelligent assistant for digital transformation, powered by advanced AI
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-strong rounded-2xl overflow-hidden border border-white/10 glow-indigo"
          style={{ height: 'calc(100vh - 320px)', minHeight: '500px' }}
        >
          {/* Messages Area */}
          <ScrollArea className="h-full p-6" ref={scrollAreaRef}>
            <div className="space-y-6 pb-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex gap-3 max-w-[80%] ${
                        message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                          message.role === 'user'
                            ? 'bg-gradient-to-br from-[#1A237E] to-[#9333EA]'
                            : 'bg-gradient-to-br from-[#00AEEF] to-[#1A237E]'
                        }`}
                      >
                        {message.role === 'user' ? (
                          <User className="w-5 h-5 text-white" />
                        ) : (
                          <Bot className="w-5 h-5 text-white" />
                        )}
                      </div>

                      {/* Message Content */}
                      <div
                        className={`rounded-2xl px-5 py-3 ${
                          message.role === 'user'
                            ? 'bg-gradient-to-br from-[#00AEEF]/20 to-[#9333EA]/20 border border-[#00AEEF]/30'
                            : 'glass border border-white/10'
                        }`}
                      >
                        <p className="text-white/90 whitespace-pre-wrap leading-relaxed">
                          {message.content}
                        </p>
                        <p className="text-xs text-white/40 mt-2">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-3 max-w-[80%]">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#1A237E] flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="glass rounded-2xl px-5 py-3 border border-white/10">
                      <div className="flex gap-1 items-center">
                        <div className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse delay-100" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse delay-200" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Suggested Questions (only show when chat is fresh) */}
              {messages.length === 1 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-2 justify-center pt-4"
                >
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => setInput(question)}
                      className="glass rounded-full px-4 py-2 text-sm text-white/70 hover:text-[#00AEEF] hover:glass-strong transition-all duration-300"
                    >
                      <Zap className="w-3 h-3 inline mr-1" />
                      {question}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="border-t border-white/10 p-4 bg-[#0A0A0A]/50 backdrop-blur-sm">
            <div className="flex gap-3 items-end">
              <div className="flex-1 relative">
                <Textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about web design, marketing, AI automation..."
                  className="resize-none bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#00AEEF] focus:ring-[#00AEEF]/20 min-h-[60px] max-h-[120px]"
                  rows={2}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={clearChat}
                  variant="outline"
                  size="icon"
                  className="h-[60px] w-[60px] border-white/20 text-white/60 hover:bg-white/10 hover:text-white"
                  title="Clear chat"
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="h-[60px] w-[60px] bg-gradient-to-r from-[#00AEEF] to-[#9333EA] text-white hover:opacity-90 transition-opacity disabled:opacity-50 glow-cyan"
                >
                  {isTyping ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
            <p className="text-xs text-white/40 mt-2 text-center">
              Press Enter to send • Shift + Enter for new line
            </p>
          </div>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-white/50">
            <Bot className="w-4 h-4 inline mr-1 text-[#00AEEF]" />
            Powered by advanced AI • Responses are generated instantly
          </p>
        </motion.div>
      </div>
    </div>
  );
}
