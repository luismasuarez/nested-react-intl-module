import { useCallback } from "react";
import { useIntl } from "react-intl";
import { TranslationKey } from "../types";

export const useTranslate = () => {
  const { formatMessage } = useIntl();
  const t = useCallback(
    (key: TranslationKey) =>
      // Call formatMessage with an object that has an id property set to the given key, as well as any additional arguments passed in.
      formatMessage({ id: key }),
    [formatMessage]
  );

  return { t };
};
