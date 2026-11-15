import PropTypes from "prop-types";
import { useCallback, useEffect, useMemo, useState } from "react";
import { LANGUAGES, LanguageContext } from "./LanguageContext";
import ui from "./ui";

const STORAGE_KEY = "portfolio-lang";

// Saved choice first, then the browser language, then English
function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    // Storage can be blocked; fall through to the browser language
  }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

LanguageProvider.propTypes = {
  children: PropTypes.node,
};

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The choice still applies for this visit
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: (key) => ui[lang][key] ?? ui.en[key] ?? key }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
