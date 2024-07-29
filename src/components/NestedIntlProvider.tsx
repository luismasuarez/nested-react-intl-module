import React from "react";
import { IntlProvider } from "react-intl";
import { NestedIntlContext } from "../context";
import { useLocale } from "../hooks";
import { setLocaleStored } from "../utils";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  locales: any;
};

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
