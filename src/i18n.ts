import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./languages/en.json";
import esTranslation from "./languages/es.json";

const languageNames: { [key: string]: string } = {
    en: "English",
    es: "Español"
};

const browserLanguage = navigator.language.split("-")[0];
const storedLanguage = localStorage.getItem("language") || browserLanguage || "en";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslation,
        },
        es: {
            translation: esTranslation,
        },
    },
    lng: storedLanguage,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export { i18n, languageNames };
