// LanguageContext.js
import React, { createContext, useState, useEffect, ReactNode } from "react";
import i18next from "i18next";

const LanguageContext = createContext({
  language: "en",
  setLanguage: (lang: string) => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(() => {
    // Retrieve language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem("language") || "en";
    i18next.changeLanguage(savedLanguage);
    return savedLanguage;
  });

  useEffect(() => {
    // Update i18next and localStorage when language changes
    i18next.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
