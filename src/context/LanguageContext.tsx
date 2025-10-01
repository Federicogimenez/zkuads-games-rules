import { createContext, useEffect, useState, type ReactNode } from "react";
import en_US from "../languages/en.json";
import es_ES from "../languages/es.json";
import pt_BR from "../languages/pt.json";
import { useSearchParams } from "react-router-dom";

export type Language = "en_US" | "es_ES" | "pt_BR";
type Translations = typeof en_US;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const isLanguageType = (value: string): value is Language => {
  return ["en_US", "es_ES", "pt_BR"].includes(value);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en_US");
  const [searchParams] = useSearchParams();
  const defaultLang = searchParams.get("lang");

  useEffect(() => {
    if (defaultLang && isLanguageType(defaultLang)) {
      setLang(defaultLang);
    }
  }, [defaultLang]);

  const translations: Record<Language, Translations> = {
    en_US,
    es_ES,
    pt_BR,
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
