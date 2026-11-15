import { createContext, useContext } from "react";

export const LANGUAGES = ["en", "es"];

export const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: (key) => key });

export function useLanguage() {
  return useContext(LanguageContext);
}

// Turns every { en, es } pair inside data into the text for the given language
export function localize(value, lang) {
  if (Array.isArray(value)) return value.map((item) => localize(item, lang));
  if (value && typeof value === "object") {
    if ("en" in value && "es" in value) return value[lang] ?? value.en;
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localize(item, lang)]));
  }
  return value;
}
