import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./data/en";
import esTranslation from "./data/es";

const languageNames: { [key: string]: string } = {
    en: "English",
    es: "Español"
};

const browserLanguage = navigator.language.split("-")[0];
const storedLanguage = localStorage.getItem("language");
const fallbackLanguage = "en";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslation,
        },
        es: {
            translation: esTranslation,
        },
    },
    lng: storedLanguage || browserLanguage || fallbackLanguage,
    fallbackLng: fallbackLanguage,
    interpolation: {
        escapeValue: false,
    },
});

export { i18n, languageNames };
