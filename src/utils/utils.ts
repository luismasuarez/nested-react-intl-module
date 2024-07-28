import { BehaviorSubject } from "rxjs";
import { LANG_DEFAULT, LOCALE_STORAGE_VAR } from "../constants";

import { Locale } from "../types";

export const getStoredLocale = () => {
  return localStorage.getItem(LOCALE_STORAGE_VAR);
};

export const setStoredLocale = (locale: Locale) => {
  return localStorage.setItem(LOCALE_STORAGE_VAR, locale);
};
export const getLocaleFromBrowser = () => {
  if (typeof navigator != "undefined" && navigator.language) {
    if (navigator.language.includes("en")) {
      return "en";
    }
    if (navigator.language.includes("es")) {
      return "es";
    }
  }
  return LANG_DEFAULT;
};

export const getLocaleStored = () =>
  localStorage.getItem(LOCALE_STORAGE_VAR) ?? getLocaleFromBrowser();

export const locale$ = new BehaviorSubject<string>(getLocaleStored());

export const setLocaleStored = (locale: string) => {
  localStorage.setItem(LOCALE_STORAGE_VAR, locale);
  locale$.next(locale);
};

export const getDefaultLocale = () => {
  const localLocale = getLocaleStored() ?? LANG_DEFAULT;
  const browserLocale = getLocaleFromBrowser();

  return localLocale ? (localLocale as Locale) : browserLocale;
};
