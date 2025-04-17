
import React from 'react';
import AnimatedText from './AnimatedText';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/locales';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getAnimatedText = () => {
    if (language === 'en') return "Transforming Business with";
    if (language === 'es') return "Transformando Negocios con";
    return "Transformando Negócios com";
  };

  const getSubtitleText = () => {
    if (language === 'en') return "AI Agents & Smart Automation";
    if (language === 'es') return "Agentes de IA y Automatización Inteligente";
    return "Agentes de IA e Automação Inteligente";
  };

  const getDescriptionText = () => {
    if (language === 'en') {
      return "We help companies leverage artificial intelligence and automation to streamline processes, reduce costs and deliver exceptional customer experiences.";
    }
    if (language === 'es') {
      return "Ayudamos a las empresas a aprovechar la inteligencia artificial y la automatización para optimizar procesos, reducir costos y brindar experiencias excepcionales al cliente.";
    }
    return "Ajudamos empresas a utilizar inteligência artificial e automação para otimizar processos, reduzir custos e proporcionar experiências excepcionais aos clientes.";
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-stars opacity-70"></div>
      <div className="absolute w-48 h-48 md:w-64 md:h-64 blur-3xl rounded-full bg-ovnilab-purple/20 top-1/4 -left-24"></div>
      <div className="absolute w-48 h-48 md:w-64 md:h-64 blur-3xl rounded-full bg-ovnilab-teal/20 bottom-1/4 -right-24"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <img 
            src="/lovable-uploads/79d1b9c8-2872-43db-90c1-9dbcd7ca67b9.png" 
            alt="OVNILAB Logo" 
            className="mx-auto w-44 md:w-56 lg:w-64 h-auto rounded-full border-4 border-ovnilab-teal/50"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6 leading-tight">
          <AnimatedText text={getAnimatedText()} className="block" />
          <span className="block text-gradient text-shadow">
            {getSubtitleText()}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-ovnilab-text/80 max-w-3xl mx-auto mb-10">
          {getDescriptionText()}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#services" className="btn-primary w-full sm:w-auto">
            {t.exploreServices}
          </a>
          <a href="#contact" className="btn-outline w-full sm:w-auto">
            {t.contactUs}
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg 
          width="24" 
          height="38" 
          viewBox="0 0 24 38" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-70"
        >
          <rect x="1" y="1" width="22" height="36" rx="11" stroke="#0BDBE3" strokeWidth="2"/>
          <circle cx="12" cy="10" r="4" fill="#0BDBE3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
