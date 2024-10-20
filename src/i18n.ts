import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./translate/en.json";
import uzTranslation from "./translate/uz.json";
import ruTranslation from "./translate/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    uz: { translation: uzTranslation },
    ru: { translation: ruTranslation },
  },
  lng: "ru",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

// pastdagi kod bizga tilni public papkasi  ichida ochilsa qanday bolishi kerakligini korsatadi

// i18next konfiguratsiyasida til resurslarini yuklash uchun backend ning loadPath xususiyatida ko'rsatilgan papka manzili public papkasidan olingan (/locales/{{lng}}/translation.json). Ammo, ha, sizning savolingiz to'g'ri — src papkasida til fayllarini saqlashning boshqa bir yo'li ham bor, bu sizning backend konfiguratsiyangizga bog'liq.

// Keling, ikkala usulni ko'rib chiqamiz:

// 1. public papkasida til resurslarini saqlash:
// Sizning hozirgi kodingizda loadPath bu yo‘lda fayllarni qidiradi: /locales/{{lng}}/translation.json. Bu public papkasiga ishora qiladi, chunki public papkasi React ilovasi servisini ishga tushirganda fayllarni ochiq joyga chiqaradi va ular HTTP orqali yuklanadi.

// Agar siz tillar resurslarini public papkasida saqlasangiz, fayllar statik resurslar sifatida yuklanadi. Siz public papkasida locales papkasini yaratishingiz va u yerdagi fayllarni yuklash uchun hozirgi yo'lni ishlatishingiz mumkin.

// Misol:

// public/locales/en/translation.json
// public/locales/uz/translation.json
// public/locales/ru/translation.json
// Bu joylashuvda qolsangiz, loadPath to‘g‘ri ishlaydi, va hech qanday o'zgartirish qilish shart emas.

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// i18n
//     .use(HttpApi)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         supportedLngs: ["en", "uz", "ru" ],
//         fallbackLng: "ru",
//         detection: {
//             order: ["path", "cookie", "localStorage", "navigator"],
//             caches: ["cookie"],
//         },
//         backend: {
//             loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
//         },
//         // Add other options as necessary
//     });

// export default i18n;
