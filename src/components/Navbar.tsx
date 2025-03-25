
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 lg:px-24",
        scrolled ? "bg-ovnilab-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="text-ovnilab-text font-space font-bold text-xl flex items-center">
          <span className="text-gradient">OVNI</span>LAB
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-ovnilab-text hover:text-ovnilab-teal transition-colors">
            Services
          </a>
          <a href="#testimonials" className="text-ovnilab-text hover:text-ovnilab-teal transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-ovnilab-text hover:text-ovnilab-teal transition-colors">
            Contact
          </a>
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-ovnilab-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col space-y-1">
            <span className={cn(
              "block h-0.5 bg-ovnilab-teal transition-all duration-300", 
              menuOpen ? "transform rotate-45 translate-y-1.5" : ""
            )}></span>
            <span className={cn(
              "block h-0.5 bg-ovnilab-teal transition-all duration-300", 
              menuOpen ? "opacity-0" : ""
            )}></span>
            <span className={cn(
              "block h-0.5 bg-ovnilab-teal transition-all duration-300", 
              menuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 px-6 py-4 bg-ovnilab-darkPurple/90 backdrop-blur-lg transition-all duration-300 ease-in-out",
        menuOpen ? "opacity-100 top-16" : "opacity-0 top-[-400px] pointer-events-none"
      )}>
        <div className="flex flex-col space-y-4">
          <a href="#services" 
            className="text-ovnilab-text hover:text-ovnilab-teal transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a href="#testimonials" 
            className="text-ovnilab-text hover:text-ovnilab-teal transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a href="#contact" 
            className="text-ovnilab-text hover:text-ovnilab-teal transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a href="#contact" 
            className="btn-primary inline-block text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
