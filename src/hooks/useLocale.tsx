import { useCallback, useEffect, useMemo, useState } from "react";
import { LocalesLibrary } from "../locales/locales";
import { Locale } from "../types";
import { flattenMessages, getStoredLocale, setStoredLocale } from "../utils";

export const useLocale = () => {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const storedLocale = getStoredLocale() as Locale;
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  const flattenedMessages = useMemo(
    () => flattenMessages(LocalesLibrary[locale]),
    [locale]
  );

  const switchLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale === locale) return;

      setLocale(newLocale);
      setStoredLocale(newLocale);

      // Optional: Update the URL if you want to reflect the language in the URL
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("locale", newLocale);
      window.history.pushState(
        {},
        "",
        `${window.location.pathname}?${searchParams.toString()}`
      );
    },
    [locale]
  );

  return { locale, switchLocale, translations: flattenedMessages };
};
