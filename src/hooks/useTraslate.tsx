import { useCallback } from "react";
import { useIntl } from "react-intl";
import { TranslationKey } from "../types";

export const useTranslate = () => {
  const { formatMessage } = useIntl();

  const t = useCallback(
    (key: TranslationKey) => formatMessage({ id: key }),
    [formatMessage]
  );

  return { t };
};
