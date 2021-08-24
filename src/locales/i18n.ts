import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const isDevelopmentEnv = process.env.NODE_ENV === 'development';

i18n
  // load translation using http -> see /public/translations
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    backend: {
      loadPath: '/translations/{{lng}}/{{ns}}.json',
      addPath: '/translations/add/{{lng}}/{{ns}}'
    },

    saveMissing: isDevelopmentEnv, // save missing keys just when node env. is development
    saveMissingTo: 'all',

    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    debug: isDevelopmentEnv, // debug just for development env.
    load: 'currentOnly',

    defaultNS: 'Common',
    fallbackNS: 'Common',
    ns: [],

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
