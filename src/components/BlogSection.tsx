
import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/locales";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const handleNavigate = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

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
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              onClick={() => handleNavigate(post.slug)} 
              className="cursor-pointer"
            >
              <Card className="bg-black/30 backdrop-blur-lg border border-ovnilab-cream/10 hover:border-ovnilab-orange hover:cursor-pointer transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 text-ovnilab-cream mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-ovnilab-text/80">{post.excerpt}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/blog')} 
            className="btn-outline"
          >
            {t.viewAllPosts}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
