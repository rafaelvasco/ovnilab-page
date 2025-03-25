
import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'teal' | 'green' | 'purple' | 'orange';
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  color,
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

  const getColorClasses = () => {
    switch (color) {
      case 'teal':
        return 'border-ovnilab-teal/30 hover:shadow-neon';
      case 'green':
        return 'border-ovnilab-green/30 hover:shadow-neon-green';
      case 'purple':
        return 'border-ovnilab-lightPurple/30 hover:shadow-neon-purple';
      case 'orange':
        return 'border-ovnilab-orange/30 hover:shadow-[0_0_10px_rgba(255,180,99,0.5),0_0_20px_rgba(255,180,99,0.3)]';
      default:
        return 'border-ovnilab-teal/30 hover:shadow-neon';
    }
  };

  const getIconBgClasses = () => {
    switch (color) {
      case 'teal':
        return 'bg-ovnilab-teal/20';
      case 'green':
        return 'bg-ovnilab-green/20';
      case 'purple':
        return 'bg-ovnilab-lightPurple/20';
      case 'orange':
        return 'bg-ovnilab-orange/20';
      default:
        return 'bg-ovnilab-teal/20';
    }
  };

  const getIconClasses = () => {
    switch (color) {
      case 'teal':
        return 'text-ovnilab-teal';
      case 'green':
        return 'text-ovnilab-green';
      case 'purple':
        return 'text-ovnilab-lightPurple';
      case 'orange':
        return 'text-ovnilab-orange';
      default:
        return 'text-ovnilab-teal';
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card p-6 border transition-all duration-500 reveal h-full",
        "hover:-translate-y-2",
        getColorClasses()
      )}
    >
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
        getIconBgClasses()
      )}>
        <div className={getIconClasses()}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 font-space">
        {title}
      </h3>
      
      <p className="text-ovnilab-text/80">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
