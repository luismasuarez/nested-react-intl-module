import React from "react";
import { IntlProvider } from "react-intl";
import { LANG_DEFAULT } from "../constants";
import { useLocale } from "../hooks";
import { Locale } from "../types";
import { setStoredLocale } from "../utils";

export const NestedIntlContext = React.createContext({
  locale: LANG_DEFAULT,
  selectLanguage: (e: Locale) => {
    console.log(e);
  },
});

const NestedIntlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { locale, translations, switchLocale } = useLocale();

  function selectLanguage(newLocale: Locale) {
    switchLocale(newLocale);
    setStoredLocale(newLocale);
    document.documentElement.lang = newLocale;
  }

  return (
    <NestedIntlContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={translations} locale={locale}>
        {children}
      </IntlProvider>
    </NestedIntlContext.Provider>
  );
};

export default NestedIntlProvider;
