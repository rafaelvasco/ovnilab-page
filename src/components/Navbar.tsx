
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/locales";
import { Link } from "react-router-dom";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileMenu } from "./navbar/MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const t = translations[language];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 lg:px-24",
        scrolled
          ? "bg-ovnilab-background/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-ovnilab-text font-space font-bold text-2xl md:text-3xl flex items-center"
        >
          <span className="text-gradient">OVNI</span>LAB
        </Link>

        <DesktopNav translations={t} />

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            className="p-2 text-ovnilab-teal"
            onClick={() => {
              const nextLang =
                language === "en" ? "es" : language === "es" ? "pt-br" : "en";
              setLanguage(nextLang);
            }}
            aria-label="Change Language"
          >
            <Globe size={20} />
          </button>
          <button
            className="text-ovnilab-text"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col space-y-1">
              <span
                className={cn(
                  "block h-0.5 bg-ovnilab-teal transition-all duration-300",
                  menuOpen ? "transform rotate-45 translate-y-1.5" : ""
                )}
              ></span>
              <span
                className={cn(
                  "block h-0.5 bg-ovnilab-teal transition-all duration-300",
                  menuOpen ? "opacity-0" : ""
                )}
              ></span>
              <span
                className={cn(
                  "block h-0.5 bg-ovnilab-teal transition-all duration-300",
                  menuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                )}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        translations={t}
      />
    </nav>
  );
};

export default Navbar;
