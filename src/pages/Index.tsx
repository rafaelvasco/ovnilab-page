
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Code, MessageSquare, Star, BarChart4, Bot, Zap, Settings, CloudCog } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="section-padding relative">
        <div className="absolute inset-0 bg-stars opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
              How OVNILAB Can <span className="text-gradient">Transform</span> Your Business
            </h2>
            <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
              We deliver cutting-edge AI and automation solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="AI Customer Support Agents"
              description="24/7 intelligent support agents that understand context, solve problems, and deliver exceptional customer experiences."
              icon={<MessageSquare size={24} />}
              color="teal"
              delay={100}
            />
            
            <ServiceCard
              title="AI Sales Assistants"
              description="Conversational AI agents that qualify leads, answer product questions, and move prospects through your sales funnel."
              icon={<Star size={24} />}
              color="green"
              delay={200}
            />
            
            <ServiceCard
              title="Scheduling & Booking Agents"
              description="Intelligent agents that handle appointment setting, follow-ups, and calendar management without human intervention."
              icon={<Code size={24} />}
              color="purple"
              delay={300}
            />
            
            <ServiceCard
              title="Business Process Automation"
              description="Streamline workflows, eliminate repetitive tasks, and reduce operational costs with intelligent automation solutions."
              icon={<Zap size={24} />}
              color="orange"
              delay={400}
            />
            
            <ServiceCard
              title="Marketing Automation"
              description="AI-powered content creation, campaign management, and customer journey optimization for improved conversion rates."
              icon={<BarChart4 size={24} />}
              color="teal"
              delay={500}
            />
            
            <ServiceCard
              title="Custom AI Solutions"
              description="Tailored artificial intelligence applications designed specifically for your unique business challenges and opportunities."
              icon={<Settings size={24} />}
              color="green"
              delay={600}
            />
          </div>
          
          <div className="mt-16 text-center reveal">
            <a href="#contact" className="btn-primary inline-flex items-center">
              <CloudCog className="w-5 h-5 mr-2" />
              Get Started with AI
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gradient-to-b from-ovnilab-background to-ovnilab-darkPurple relative">
        <div className="absolute inset-0 bg-stars opacity-30"></div>
        <div className="absolute w-64 h-64 blur-3xl rounded-full bg-ovnilab-teal/10 top-1/4 -right-32"></div>
        <div className="absolute w-64 h-64 blur-3xl rounded-full bg-ovnilab-purple/10 bottom-1/4 -left-32"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
              What Our <span className="text-gradient">Clients</span> Say
            </h2>
            <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              position="CEO"
              company="TechFlow Inc."
              testimonial="OVNILAB's AI customer support agents have revolutionized our support operations. We've reduced response times by 80% while improving customer satisfaction scores."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              delay={100}
            />
            
            <TestimonialCard
              name="Michael Chen"
              position="Marketing Director"
              company="GrowthX"
              testimonial="The marketing automation platform they built for us has transformed our lead nurturing process. Our conversion rates have increased by 45% in just three months."
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              delay={200}
            />
            
            <TestimonialCard
              name="Emily Rodriguez"
              position="Operations Manager"
              company="Streamline Solutions"
              testimonial="Implementing OVNILAB's business process automation has cut our operational costs by 30% and freed up our team to focus on strategic initiatives instead of repetitive tasks."
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section-padding relative">
        <div className="absolute inset-0 bg-stars opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
