import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

const languageFromLocalStorage = localStorage.getItem("language") || "en";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: languageFromLocalStorage, // Set the initial language from localStorage
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
