import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//https://medium.com/swlh/localization-with-react-navigation-4-and-the-context-api-c75778816041
//https://react.i18next.com/getting-started
// https://www.youtube.com/watch?v=kGFEvphB5G0
//above 2 is reference
// the translations
// (tip: move them in separate JSON files and import them)
import en from './locale/en.json';
import cn from './locale/cn.json';

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources:{
      en:{translation: en},
      cn:{translation: cn},
    },
    compatibilityJSON: 'v3',
    lng: "en",
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;
