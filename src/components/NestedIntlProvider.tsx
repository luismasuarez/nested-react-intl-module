import React from "react";
import { IntlProvider } from "react-intl";
import { LANG_DEFAULT } from "../constants";
import { useLocale } from "../hooks";
import { setLocaleStored } from "../utils";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  locales: any;
};

export const NestedIntlContext = React.createContext({
  locale: LANG_DEFAULT,
  selectLanguage: (e: string) => {
    console.log(e);
  },
});

export const NestedIntlProvider: React.FC<Props> = ({ children, locales }) => {
  const { locale, translations, setLocale } = useLocale(locales);

  function selectLanguage(e: string) {
    setLocale(e);
    setLocaleStored(e);
    document.documentElement.lang = e;
  }

  return (
    <NestedIntlContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={translations} locale={locale}>
        {children}
      </IntlProvider>
    </NestedIntlContext.Provider>
  );
};
