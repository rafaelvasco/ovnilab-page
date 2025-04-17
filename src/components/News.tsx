
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/locales";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const News = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const newsItems = [
    {
      date: t.news1Date,
      title: t.news1Title,
      content: t.news1Content,
    },
    {
      date: t.news2Date,
      title: t.news2Title,
      content: t.news2Content,
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-stars opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
            {t.news}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
            <span className="text-gradient">{t.newsTitle}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <Card
              key={item.title}
              className="bg-black/30 backdrop-blur-lg border border-ovnilab-cream/10 hover:border-ovnilab-orange transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-ovnilab-cream mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-ovnilab-text/80">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
