
import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  testimonial,
  image,
  delay = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="glass-card p-6 border border-white/10 transition-all duration-500 reveal hover:shadow-neon hover:-translate-y-2"
    >
      <div className="mb-6">
        {/* Quote Icon */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-ovnilab-teal/60"
        >
          <path 
            d="M10 11L8 13H8.01L8 17H2V13L4 7H10V11ZM22 11L20 13H20.01L20 17H14V13L16 7H22V11Z" 
            fill="currentColor" 
          />
        </svg>
      </div>
      
      <p className="text-ovnilab-text/80 mb-6 italic">
        "{testimonial}"
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 mr-4 rounded-full overflow-hidden bg-ovnilab-purple/20">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-bold font-space">{name}</h4>
          <p className="text-sm text-ovnilab-text/70">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
