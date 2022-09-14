import { createI18n } from "vue3-i18n";
import tr from "./locales/tr.json";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

let userLang = null
try {

  let ls = localStorage[import.meta.env.VITE_STORE_KEY];
  if (typeof ls !== undefined) {
    try {
      ls = JSON.parse(ls);

      if (ls.locale === null || typeof ls.lang === undefined) {
        userLang = navigator.language || navigator.userLanguage;
        userLang = userLang.split("-")[0];
      } else {
        userLang = ls.locale
      }
    } catch (error) {
      userLang = navigator.language || navigator.userLanguage;
    }
  }
} catch (e) {

  userLang = "en";
  userLang = userLang.split("-")[0];
}

const messages = {
  ...tr,
  ...en,
  ...zh,
};



const i18n = createI18n({
  locale: userLang || 'en',
  messages: messages,
});

export default i18n;