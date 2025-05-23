
import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/locales";
import {
  Code,
  MessageSquare,
  Star,
  BarChart4,
  Zap,
  Settings,
  CloudCog,
} from "lucide-react";

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-stars opacity-40"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
            {t.ourServices}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
            {t.transformBusiness.split("Transform").map((part, i) =>
              i === 0 ? (
                <>
                  {part}
                  <span className="text-gradient">Transform</span>
                </>
              ) : (
                part
              ),
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
          />
          <ServiceCard
            title={t.aiSalesAssistantsTitle}
            description={t.aiSalesAssistantsDesc}
            icon={<Star size={24} />}
            color="green"
          />
          <ServiceCard
            title={t.schedulingAgentsTitle}
            description={t.schedulingAgentsDesc}
            icon={<Code size={24} />}
            color="purple"
          />
          <ServiceCard
            title={t.businessProcessTitle}
            description={t.businessProcessDesc}
            icon={<Zap size={24} />}
            color="orange"
          />
          <ServiceCard
            title={t.marketingAutomationTitle}
            description={t.marketingAutomationDesc}
            icon={<BarChart4 size={24} />}
            color="teal"
          />
          <ServiceCard
            title={t.customAISolutionsTitle}
            description={t.customAISolutionsDesc}
            icon={<Settings size={24} />}
            color="green"
          />
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center">
            <CloudCog className="w-5 h-5 mr-2" />
            {t.getExpertHelp}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
