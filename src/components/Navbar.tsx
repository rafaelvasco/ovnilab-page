
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/locales';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    language,
    setLanguage
  } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  const t = translations[language];
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 lg:px-24", scrolled ? "bg-ovnilab-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent")}>
      <div className="flex items-center justify-between">
        <a href="#" className="text-ovnilab-text font-space font-bold text-2xl md:text-3xl flex items-center">
          <span className="text-gradient">OVNI</span>LAB
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-ovnilab-text hover:text-ovnilab-teal transition-colors">
            {t.services}
          </a>
          <a href="#testimonials" className="text-ovnilab-text hover:text-ovnilab-teal transition-colors">
            {t.testimonials}
          </a>
          <a href="#contact" className="text-ovnilab-text transition-colors btn-primary">
            {t.getExpertHelp}
          </a>
          <div className="flex items-center space-x-2 border-l pl-2 border-ovnilab-teal/30">
            <button onClick={() => setLanguage('en')} className={cn("px-2 py-1 rounded-md transition-colors", language === 'en' ? "bg-ovnilab-teal/20 text-ovnilab-teal" : "text-ovnilab-text/70 hover:text-ovnilab-teal")}>
              EN
            </button>
            <button onClick={() => setLanguage('es')} className={cn("px-2 py-1 rounded-md transition-colors", language === 'es' ? "bg-ovnilab-teal/20 text-ovnilab-teal" : "text-ovnilab-text/70 hover:text-ovnilab-teal")}>
              ES
            </button>
            <button onClick={() => setLanguage('pt-br')} className={cn("px-2 py-1 rounded-md transition-colors", language === 'pt-br' ? "bg-ovnilab-teal/20 text-ovnilab-teal" : "text-ovnilab-text/70 hover:text-ovnilab-teal")}>
              PT-BR
            </button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button className="p-2 text-ovnilab-teal" onClick={() => {
          const nextLang = language === 'en' ? 'es' : language === 'es' ? 'pt-br' : 'en';
          setLanguage(nextLang);
        }} aria-label="Change Language">
            <Globe size={20} />
          </button>
          <button className="text-ovnilab-text" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <div className="w-6 flex flex-col space-y-1">
              <span className={cn("block h-0.5 bg-ovnilab-teal transition-all duration-300", menuOpen ? "transform rotate-45 translate-y-1.5" : "")}></span>
              <span className={cn("block h-0.5 bg-ovnilab-teal transition-all duration-300", menuOpen ? "opacity-0" : "")}></span>
              <span className={cn("block h-0.5 bg-ovnilab-teal transition-all duration-300", menuOpen ? "transform -rotate-45 -translate-y-1.5" : "")}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden absolute left-0 right-0 px-6 py-4 bg-ovnilab-darkPurple/90 backdrop-blur-lg transition-all duration-300 ease-in-out", menuOpen ? "opacity-100 top-16" : "opacity-0 top-[-400px] pointer-events-none")}>
        <div className="flex flex-col space-y-4">
          <a href="#services" className="text-ovnilab-text hover:text-ovnilab-teal transition-colors py-2" onClick={() => setMenuOpen(false)}>
            {t.services}
          </a>
          <a href="#testimonials" className="text-ovnilab-text hover:text-ovnilab-teal transition-colors py-2" onClick={() => setMenuOpen(false)}>
            {t.testimonials}
          </a>
          <a href="#contact" className="text-ovnilab-text hover:text-ovnilab-teal transition-colors py-2 btn-primary inline-block text-center" onClick={() => setMenuOpen(false)}>
            {t.getExpertHelp}
          </a>
          <div className="flex space-x-2 pt-2 border-t border-ovnilab-teal/30">
            <button onClick={() => setLanguage('en')} className={cn("px-2 py-1 rounded-md transition-colors", language === 'en' ? "bg-ovnilab-teal/20 text-ovnilab-teal" : "text-ovnilab-text/70")}>
              EN
            </button>
            <button onClick={() => setLanguage('es')} className={cn("px-2 py-1 rounded-md transition-colors", language === 'es' ? "bg-ovnilab-teal/20 text-ovnilab-teal" : "text-ovnilab-text/70")}>
              ES
            </button>
            <button onClick={() => setLanguage('pt-br')} className={cn("px-2 py-1 rounded-md transition-colors", language === 'pt-br' ? "bg-ovnilab-teal/20 text-ovnilab-teal" : "text-ovnilab-text/70")}>
              PT-BR
            </button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;
