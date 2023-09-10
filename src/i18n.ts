import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        preload: ['zh_TW'],
        load: 'languageOnly',
        fallbackLng: "zh_TW",
        debug: true,
        detection: {
            order: ['path', 'localStorage']
        },
        whitelist: ['zh_TW', 'zh_CN']
    });

export default i18n;
