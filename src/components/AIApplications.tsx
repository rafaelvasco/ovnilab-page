import React from "react";
import {
  School,
  Stethoscope,
  Dumbbell,
  Database,
  Store,
  MoreHorizontal,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/locales";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const AIApplications = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const applications = [
    {
      icon: <School className="w-8 h-8 text-ovnilab-teal" />,
      title: t.schoolServicesTitle,
      description: t.schoolServicesDesc,
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-ovnilab-green" />,
      title: t.medicalClinicsTitle,
      description: t.medicalClinicsDesc,
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-ovnilab-purple" />,
      title: t.gymsTitle,
      description: t.gymsDesc,
    },
    {
      icon: <Database className="w-8 h-8 text-ovnilab-teal" />,
      title: t.dataAiAgentTitle,
      description: t.dataAiAgentDesc,
    },
    {
      icon: <Store className="w-8 h-8 text-ovnilab-green" />,
      title: t.marketplaceTitle,
      description: t.marketplaceDesc,
    },
    {
      icon: <MoreHorizontal className="w-8 h-8 text-ovnilab-purple" />,
      title: t.andMoreTitle,
      description: t.andMoreDesc,
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-stars opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
            {t.aiApplications}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
            <span className="text-gradient">{t.transformingIndustries}</span>
          </h2>
          <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
            {t.discoverSolutions}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <Card
              key={app.title}
              className="bg-black/30 backdrop-blur-lg border border-ovnilab-cream/10 hover:border-ovnilab-cream/30 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-ovnilab-cream/10 p-2 rounded-xl">
                    {React.cloneElement(app.icon as React.ReactElement, {
                      className: "w-8 h-8 text-ovnilab-cream",
                    })}
                  </div>
                  <CardTitle className="text-xl font-semibold text-zinc-50">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-ovnilab-text/80 text-base mt-4">
                  {app.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIApplications;
