
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'pt-br';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

// Helper function to get browser language and match it with our supported languages
const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  // Check if the browser language starts with our supported languages
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('pt')) return 'pt-br';
  
  // Default to English for any other language
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default value, will be updated in useEffect

  // First try to load from localStorage, then fallback to browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedLanguage && ['en', 'es', 'pt-br'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // If no saved preference, use browser language
      const browserLanguage = getBrowserLanguage();
      setLanguage(browserLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
