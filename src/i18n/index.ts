import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./translations/en.json";
import frJson from "./translations/fr.json";
import ptJson from "./translations/pt.json";
import mdJson from "./translations/md.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: enJson,
    fr: frJson,
    pt: ptJson,
    md: mdJson,
  },
});

export default i18n;
