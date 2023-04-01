import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translateEN from './local/en.json'
import translateAR from './local/ar.json'

const resources = {
  en: {
    translation: translateEN
  },
  ar: {
    translation: translateAR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    },
    react : {
        useSuspense: false
    }
  });

  export default i18n;