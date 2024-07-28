import { useCallback, useMemo, useState } from "react";
import { INestedMessages } from "../interfaces";
import { flattenMessages, getDefaultLocale, setStoredLocale } from "../utils";

export const useLocale = (locales: Record<string, INestedMessages>) => {
  const defaultLocale = getDefaultLocale();
  const [locale, setLocale] = useState<string>(defaultLocale);

  const flattenedMessages = useMemo(
    () => flattenMessages(locales[locale]),
    [locale]
  );

  const switchLocale = useCallback(
    (newLocale: string) => {
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

  return {
    locale,
    setLocale,
    switchLocale,
    translations: flattenedMessages,
  };
};
