import React from "react";
import { LANG_DEFAULT } from "../constants";

export const NestedIntlContext = React.createContext({
  locale: LANG_DEFAULT,
  selectLanguage: (e: string) => {
    console.log(e);
  },
});
