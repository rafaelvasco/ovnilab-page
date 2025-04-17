
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import AIApplications from '@/components/AIApplications';
import { Code, MessageSquare, Star, BarChart4, Bot, Zap, Settings, CloudCog } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/locales';

const Index = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  useEffect(() => {
    // Reveal animations on scroll
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
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
  return <div className="overflow-x-hidden">
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
              {t.transformBusiness.split('Transform').map((part, i) => i === 0 ? <>{part}<span className="text-gradient">Transform</span></> : part)}
            </h2>
            <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
              {t.cuttingEdgeAI}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title={t.aiCustomerSupportTitle} description={t.aiCustomerSupportDesc} icon={<MessageSquare size={24} />} color="teal" delay={100} />
            
            <ServiceCard title={t.aiSalesAssistantsTitle} description={t.aiSalesAssistantsDesc} icon={<Star size={24} />} color="green" delay={200} />
            
            <ServiceCard title={t.schedulingAgentsTitle} description={t.schedulingAgentsDesc} icon={<Code size={24} />} color="purple" delay={300} />
            
            <ServiceCard title={t.businessProcessTitle} description={t.businessProcessDesc} icon={<Zap size={24} />} color="orange" delay={400} />
            
            <ServiceCard title={t.marketingAutomationTitle} description={t.marketingAutomationDesc} icon={<BarChart4 size={24} />} color="teal" delay={500} />
            
            <ServiceCard title={t.customAISolutionsTitle} description={t.customAISolutionsDesc} icon={<Settings size={24} />} color="green" delay={600} />
          </div>
          
          <div className="mt-16 text-center reveal">
            <a href="#contact" className="btn-primary inline-flex items-center">
              <CloudCog className="w-5 h-5 mr-2" />
              {t.getExpertHelp}
            </a>
          </div>
        </div>
      </section>
      
      {/* AI Applications Section */}
      <AIApplications />
      
      {/* Contact Section */}
      <section id="contact" className="section-padding relative">
        <div className="absolute inset-0 bg-stars opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
              {t.contact}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
              {t.readyToTransform.split('Transform').map((part, i) => i === 0 ? <>{part}<span className="text-gradient">Transform</span></> : part)}
            </h2>
            <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
              {t.fillOutForm}
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;
