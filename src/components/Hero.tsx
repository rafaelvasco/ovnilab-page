
import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Parallax scroll effect for the stars
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const starsElement = document.querySelector('.bg-stars');
      if (starsElement) {
        starsElement.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-stars opacity-70"></div>
      <div className="absolute w-48 h-48 md:w-64 md:h-64 blur-3xl rounded-full bg-ovnilab-purple/20 top-1/4 -left-24 animate-pulse"></div>
      <div className="absolute w-48 h-48 md:w-64 md:h-64 blur-3xl rounded-full bg-ovnilab-teal/20 bottom-1/4 -right-24 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Logo and Headline */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-12 animate-float">
          <img 
            src="/lovable-uploads/79d1b9c8-2872-43db-90c1-9dbcd7ca67b9.png" 
            alt="OVNILAB Logo" 
            className="mx-auto w-44 md:w-56 lg:w-64 h-auto animate-scale-in"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6 leading-tight">
          <AnimatedText 
            text="Transforming Business with" 
            className="block"
            onComplete={() => setShowSubtitle(true)} 
          />
          {showSubtitle && (
            <span className="block text-gradient text-shadow animate-fade-in">
              AI Agents & Smart Automation
            </span>
          )}
        </h1>
        
        {showSubtitle && (
          <p className="text-xl md:text-2xl text-ovnilab-text/80 max-w-3xl mx-auto mb-10 animate-fade-in animate-delay-300">
            We help companies leverage artificial intelligence and automation to streamline processes, 
            reduce costs and deliver exceptional customer experiences.
          </p>
        )}
        
        {showSubtitle && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-500">
            <a href="#services" className="btn-primary w-full sm:w-auto">
              Explore Services
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto">
              Contact Us
            </a>
          </div>
        )}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="38" 
          viewBox="0 0 24 38" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-70"
        >
          <rect x="1" y="1" width="22" height="36" rx="11" stroke="#0BDBE3" strokeWidth="2"/>
          <circle 
            cx="12" 
            cy="10" 
            r="4" 
            fill="#0BDBE3"
            className="animate-float"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
