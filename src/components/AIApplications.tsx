
import React from 'react';
import { School, Stethoscope, Dumbbell, Database, Store, MoreHorizontal } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const applications = [
  {
    icon: <School className="w-8 h-8 text-ovnilab-teal" />,
    title: 'School Services',
    description: 'Streamline enrollment processes and enhance student services with AI-powered solutions.',
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-ovnilab-green" />,
    title: 'Medical Clinics',
    description: 'Improve patient care and optimize appointment scheduling with intelligent automation.',
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-ovnilab-purple" />,
    title: 'Gyms',
    description: 'Enhance member experience and automate class scheduling with AI assistance.',
  },
  {
    icon: <Database className="w-8 h-8 text-ovnilab-teal" />,
    title: 'Data AI Agent (RAG)',
    description: 'Leverage your data with retrieval-augmented generation for intelligent insights.',
  },
  {
    icon: <Store className="w-8 h-8 text-ovnilab-green" />,
    title: 'Marketplace',
    description: 'Optimize your online marketplace with AI-powered recommendations and automation.',
  },
  {
    icon: <MoreHorizontal className="w-8 h-8 text-ovnilab-purple" />,
    title: 'And More',
    description: 'Discover custom AI solutions tailored to your industry needs.',
  },
];

const AIApplications = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-stars opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="inline-block px-3 py-1 bg-ovnilab-purple/20 rounded-full text-ovnilab-teal text-sm font-medium mb-4">
            AI Applications
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
            Transforming <span className="text-gradient">Industries</span>
          </h2>
          <p className="text-xl text-ovnilab-text/80 max-w-2xl mx-auto">
            Discover how our AI solutions are revolutionizing different sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <Card key={app.title} className="bg-black/30 backdrop-blur-lg border border-white/10 card-hover reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {app.icon}
                  <CardTitle className="text-xl font-semibold">{app.title}</CardTitle>
                </div>
                <CardDescription className="text-ovnilab-text/80 text-base">
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
