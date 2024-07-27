import { useIntl } from "react-intl";
import { TranslationKey } from "../types";

export const useTranslate = () => {
  const { formatMessage } = useIntl();
  const t = (key: TranslationKey) => formatMessage({ id: key });

  return { t };
};
