
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

export const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { language, setLanguage } = useLanguage();

  if (isMobile) {
    return (
      <div className="flex space-x-2 pt-2 border-t border-ovnilab-teal/30">
        <button
          onClick={() => setLanguage("en")}
          className={cn(
            "px-2 py-1 rounded-md transition-colors",
            language === "en"
              ? "bg-ovnilab-teal/20 text-ovnilab-teal"
              : "text-ovnilab-text/70"
          )}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("es")}
          className={cn(
            "px-2 py-1 rounded-md transition-colors",
            language === "es"
              ? "bg-ovnilab-teal/20 text-ovnilab-teal"
              : "text-ovnilab-text/70"
          )}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage("pt-br")}
          className={cn(
            "px-2 py-1 rounded-md transition-colors",
            language === "pt-br"
              ? "bg-ovnilab-teal/20 text-ovnilab-teal"
              : "text-ovnilab-text/70"
          )}
        >
          PT-BR
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 border-l pl-2 border-ovnilab-teal/30">
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2 py-1 rounded-md transition-colors",
          language === "en"
            ? "bg-ovnilab-orange/20 text-ovnilab-orange"
            : "text-ovnilab-text/70 hover:text-ovnilab-orange"
        )}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={cn(
          "px-2 py-1 rounded-md transition-colors",
          language === "es"
            ? "bg-ovnilab-orange/20 text-ovnilab-orange"
            : "text-ovnilab-text/70 hover:text-ovnilab-orange"
        )}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("pt-br")}
        className={cn(
          "px-2 py-1 rounded-md transition-colors",
          language === "pt-br"
            ? "bg-ovnilab-orange/20 text-ovnilab-orange"
            : "text-ovnilab-text/70 hover:text-ovnilab-orange"
        )}
      >
        PT-BR
      </button>
    </div>
  );
};
