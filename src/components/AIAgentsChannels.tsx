import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/locales";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MessageSquare, Instagram, Globe, Mic } from "lucide-react";

const AIAgentsChannels = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-ovnilab-teal" />,
      title: t.whatsappAgentTitle,
      description: t.whatsappAgentDesc,
    },
    {
      icon: <Instagram className="w-8 h-8 text-ovnilab-purple" />,
      title: t.instagramAgentTitle,
      description: t.instagramAgentDesc,
    },
    {
      icon: <Globe className="w-8 h-8 text-ovnilab-green" />,
      title: t.websiteAgentTitle,
      description: t.websiteAgentDesc,
    },
    {
      icon: <Mic className="w-8 h-8 text-ovnilab-teal" />,
      title: t.voiceAgentTitle,
      description: t.voiceAgentDesc,
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-stars opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
            {t.aiAgentsChannels}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
            {t.aiAgentsChannelsTitle}
          </h2>
          <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
            {t.aiAgentsFeaturesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-black/30 backdrop-blur-lg border border-ovnilab-cream/10 hover:border-ovnilab-orange transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-ovnilab-cream/10 p-2 rounded-xl">
                    {React.cloneElement(feature.icon as React.ReactElement, {
                      className: "w-8 h-8 text-ovnilab-cream",
                    })}
                  </div>
                  <CardTitle className="text-xl font-semibold text-zinc-50">
                    {feature.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-ovnilab-text/80 text-base mt-4">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgentsChannels;
