
import React from 'react';
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'teal' | 'green' | 'purple' | 'orange';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  color
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'teal':
        return 'border-ovnilab-teal/30';
      case 'green':
        return 'border-ovnilab-green/30';
      case 'purple':
        return 'border-ovnilab-lightPurple/30';
      case 'orange':
        return 'border-ovnilab-orange/30';
      default:
        return 'border-ovnilab-teal/30';
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
    <div className={cn("glass-card p-6 border", getColorClasses())}>
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", getIconBgClasses())}>
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
