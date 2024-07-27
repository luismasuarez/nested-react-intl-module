import { LOCALE_STORAGE_VAR } from "../constants";
import { Locale } from "../types";

export const getStoredLocale = () => {
  return localStorage.getItem(LOCALE_STORAGE_VAR);
};

export const setStoredLocale = (locale: Locale) => {
  return localStorage.setItem(LOCALE_STORAGE_VAR, locale);
};
