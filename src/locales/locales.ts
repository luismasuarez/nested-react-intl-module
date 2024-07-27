import { INestedMessages } from "../interfaces";
import { Locale } from "../types";
import { en, es } from "./data";

export const LocalesLibrary: Record<Locale, INestedMessages> = {
  en,
  es,
};
