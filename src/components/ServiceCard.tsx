import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "teal" | "green" | "purple" | "orange";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="glass-card p-6 border border-ovnilab-cream/10 hover:border-ovnilab-orange transition-all duration-300">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-ovnilab-cream/10">
        <div className="text-ovnilab-cream">{icon}</div>
      </div>

      <h3 className="text-xl font-bold mb-3 font-space">{title}</h3>

      <p className="text-ovnilab-text/80">{description}</p>
    </div>
  );
};

export default ServiceCard;
