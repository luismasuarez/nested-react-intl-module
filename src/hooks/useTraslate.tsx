import { useCallback } from "react";
import { useIntl } from "react-intl";
import { TranslationKey } from "../types";

export function useTranslate<T extends object>() {
  const { formatMessage } = useIntl();

  const t = useCallback(
    (key: TranslationKey<T>) => formatMessage({ id: key }),
    [formatMessage]
  );

  return { t };
}
