import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LanguageOption, Translations } from './types';
import { es } from './translations/es';
import { en } from './translations/en';
import { de } from './translations/de';
import { fr } from './translations/fr';

const translationsMap: Record<Language, Translations> = {
  es,
  en,
  de,
  fr,
};

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: 'es', label: 'Español', nativeLabel: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', nativeLabel: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', nativeLabel: 'Français', flag: '🇫🇷' },
];

interface LanguageContextType {
  language: Language;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  messages: Translations;
  t: (keyPath: string, fallback?: string) => string;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'golden_coast_preferred_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'es' || saved === 'en' || saved === 'de' || saved === 'fr')) {
        return saved as Language;
      }
    } catch {
      // ignore storage access errors
    }
    return 'es';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    } catch {
      // ignore
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const messages = translationsMap[language] || translationsMap.es;

  // Flexible key path resolver (e.g. t('nav.home') -> "INICIO")
  const t = (keyPath: string, fallback?: string): string => {
    try {
      const keys = keyPath.split('.');
      let current: any = messages;
      for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
          current = current[key];
        } else {
          return fallback || keyPath;
        }
      }
      return typeof current === 'string' ? current : fallback || keyPath;
    } catch {
      return fallback || keyPath;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        currentLanguage: language,
        setLanguage,
        messages,
        t,
        languages: AVAILABLE_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
