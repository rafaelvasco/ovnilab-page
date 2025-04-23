
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";

type DesktopNavProps = {
  translations: {
    services: string;
    contact: string;
    getExpertHelp: string;
    tryOurAgents: string;
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
      <Button asChild variant="default" className="bg-ovnilab-orange hover:bg-ovnilab-orange/90">
        <a href="#">{translations.tryOurAgents}</a>
      </Button>
      <Button asChild variant="default" className="bg-ovnilab-navy hover:bg-ovnilab-navy/90">
        <a href="#contact">{translations.getExpertHelp}</a>
      </Button>
      <LanguageSwitcher />
    </div>
  );
};

