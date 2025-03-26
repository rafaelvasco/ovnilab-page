
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Code, MessageSquare, Star, BarChart4, Bot, Zap, Settings, CloudCog } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/locales';

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
              {t.ourServices}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
              {t.transformBusiness.split('Transform').map((part, i) => 
                i === 0 ? 
                  <>{part}<span className="text-gradient">Transform</span></> : 
                  part
              )}
            </h2>
            <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
              {t.cuttingEdgeAI}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title={t.aiCustomerSupportTitle}
              description={t.aiCustomerSupportDesc}
              icon={<MessageSquare size={24} />}
              color="teal"
              delay={100}
            />
            
            <ServiceCard
              title={t.aiSalesAssistantsTitle}
              description={t.aiSalesAssistantsDesc}
              icon={<Star size={24} />}
              color="green"
              delay={200}
            />
            
            <ServiceCard
              title={t.schedulingAgentsTitle}
              description={t.schedulingAgentsDesc}
              icon={<Code size={24} />}
              color="purple"
              delay={300}
            />
            
            <ServiceCard
              title={t.businessProcessTitle}
              description={t.businessProcessDesc}
              icon={<Zap size={24} />}
              color="orange"
              delay={400}
            />
            
            <ServiceCard
              title={t.marketingAutomationTitle}
              description={t.marketingAutomationDesc}
              icon={<BarChart4 size={24} />}
              color="teal"
              delay={500}
            />
            
            <ServiceCard
              title={t.customAISolutionsTitle}
              description={t.customAISolutionsDesc}
              icon={<Settings size={24} />}
              color="green"
              delay={600}
            />
          </div>
          
          <div className="mt-16 text-center reveal">
            <a href="#contact" className="btn-primary inline-flex items-center">
              <CloudCog className="w-5 h-5 mr-2" />
              {t.talkWithUs}
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
              {t.testimonials}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
              {t.whatOurClientsSay.split('Clients').map((part, i) => 
                i === 0 ? 
                  <>{part}<span className="text-gradient">Clients</span></> : 
                  part
              )}
            </h2>
            <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
              {t.hearFromBusinesses}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              position="CEO"
              company="TechFlow Inc."
              testimonial={t.testimonialsQuote1}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              delay={100}
            />
            
            <TestimonialCard
              name="Michael Chen"
              position="Marketing Director"
              company="GrowthX"
              testimonial={t.testimonialsQuote2}
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              delay={200}
            />
            
            <TestimonialCard
              name="Emily Rodriguez"
              position="Operations Manager"
              company="Streamline Solutions"
              testimonial={t.testimonialsQuote3}
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
              {t.contact}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
              {t.readyToTransform.split('Transform').map((part, i) => 
                i === 0 ? 
                  <>{part}<span className="text-gradient">Transform</span></> : 
                  part
              )}
            </h2>
            <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
              {t.fillOutForm}
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
