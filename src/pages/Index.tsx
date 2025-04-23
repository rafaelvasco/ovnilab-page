import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import AIApplications from "@/components/AIApplications";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AIAgentsFeatures from "@/components/AIAgentsFeatures";
import Services from "@/components/Services";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/locales";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <AIAgentsFeatures />
      <AIApplications />
      <BlogSection />

      <div className="text-center mb-32">
        <a href="#" className="btn-primary inline-flex items-center text-xl py-6 px-12">
          {t.tryOurAgents}
        </a>
      </div>

      <section id="contact" className="section-padding relative">
        <div className="absolute inset-0 bg-stars opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
              {t.contact}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
              <span className="text-gradient">{t.readyToTransform}</span>
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
