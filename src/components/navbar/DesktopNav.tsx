
import { LanguageSwitcher } from "./LanguageSwitcher";

type DesktopNavProps = {
  translations: {
    services: string;
    contact: string;
    getExpertHelp: string;
  };
};

export const DesktopNav = ({ translations }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <a
        href="#services"
        className="text-ovnilab-text hover:text-ovnilab-orange transition-colors"
      >
        {translations.services}
      </a>
      <a
        href="#contact"
        className="text-ovnilab-text hover:text-ovnilab-orange transition-colors"
      >
        {translations.contact}
      </a>
      <a href="#contact" className="text-ovnilab-navy btn-primary">
        {translations.getExpertHelp}
      </a>
      <LanguageSwitcher />
    </div>
  );
};
