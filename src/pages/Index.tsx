
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
import { CustomButton } from "@/components/ui/custom-button";

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
            <div className="flex flex-col items-center space-y-8">
              <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto mb-4">
                Click the Button Below to Try our AI Agents
              </p>
              <CustomButton asChild variant="gradient" size="lg">
                <a href="#">{t.tryOurAgents}</a>
              </CustomButton>
              <div className="flex items-center gap-4 my-8">
                <div className="h-px bg-ovnilab-text/20 w-16"></div>
                <span className="text-ovnilab-text/60 text-sm font-medium">OR</span>
                <div className="h-px bg-ovnilab-text/20 w-16"></div>
              </div>
              <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
                {t.fillOutForm}
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
