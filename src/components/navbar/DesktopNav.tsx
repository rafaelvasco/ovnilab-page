import { LanguageSwitcher } from "./LanguageSwitcher";
import { CustomButton } from "@/components/ui/custom-button";
import { EXTERNAL_LINKS } from "@/constants/links";

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
      <CustomButton asChild variant="gradient">
        <a href={EXTERNAL_LINKS.TRY_OUR_AGENTS}>{translations.tryOurAgents}</a>
      </CustomButton>
      <CustomButton asChild variant="primary">
        <a href="#contact">{translations.getExpertHelp}</a>
      </CustomButton>
      <LanguageSwitcher />
    </div>
  );
};
