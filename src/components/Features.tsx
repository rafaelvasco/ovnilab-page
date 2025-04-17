
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/locales';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Brain, Bot, Zap, CircuitBoard } from 'lucide-react';

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-ovnilab-teal" />,
      title: t.featureAutoTitle,
      description: t.featureAutoDesc
    },
    {
      icon: <Bot className="w-8 h-8 text-ovnilab-green" />,
      title: t.featureBotTitle,
      description: t.featureBotDesc
    },
    {
      icon: <Zap className="w-8 h-8 text-ovnilab-purple" />,
      title: t.featureSpeedTitle,
      description: t.featureSpeedDesc
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-ovnilab-teal" />,
      title: t.featureIntegrationTitle,
      description: t.featureIntegrationDesc
    }
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-stars opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
            {t.features}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
            {t.featuresTitle.split('Future').map((part, i) => 
              i === 0 ? <>{part}<span className="text-gradient">Future</span></> : part
            )}
          </h2>
          <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
            {t.featuresDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-black/30 backdrop-blur-lg border border-white/10 card-hover">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <CardTitle className="text-xl font-semibold text-zinc-50">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-ovnilab-text/80 text-base">
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

export default Features;
