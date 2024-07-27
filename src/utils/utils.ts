import { Locale } from "../types";

export const getStoredLocale = () => {
  return localStorage.getItem("locale");
};

export const setStoredLocale = (locale: Locale) => {
  return localStorage.setItem("locale", locale);
};
