
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  translations: {
    services: string;
    contact: string;
    getExpertHelp: string;
  };
};

export const MobileMenu = ({ isOpen, onClose, translations }: MobileMenuProps) => {
  return (
    <div
      className={cn(
        "md:hidden absolute left-0 right-0 px-6 py-4 bg-ovnilab-darkPurple/90 backdrop-blur-lg transition-all duration-300 ease-in-out",
        isOpen
          ? "opacity-100 top-16"
          : "opacity-0 top-[-400px] pointer-events-none"
      )}
    >
      <div className="flex flex-col space-y-4">
        <a
          href="#services"
          className="text-ovnilab-text hover:text-ovnilab-teal transition-colors py-2"
          onClick={onClose}
        >
          {translations.services}
        </a>
        <a
          href="#contact"
          className="text-ovnilab-text hover:text-ovnilab-teal transition-colors py-2"
          onClick={onClose}
        >
          {translations.contact}
        </a>
        <a
          href="#contact"
          className="text-ovnilab-text hover:text-ovnilab-teal transition-colors py-2 btn-primary inline-block text-center"
          onClick={onClose}
        >
          {translations.getExpertHelp}
        </a>
        <LanguageSwitcher isMobile />
      </div>
    </div>
  );
};
