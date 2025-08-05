import { useTranslation } from "react-i18next";

type TranslateOptions = {
  [key: string]: string | number | boolean | null | undefined;
};
export const useTranslate = (keyPrefix?: string) => {
  const { t: translate, i18n } = useTranslation();

  const changeLocale = (lng: string) => {
    i18n.changeLanguage(lng);
    // i18n dil değişince AppContent'deki useEffect tetiklenip yön güncelleniyor
  };

  const getLocale = () => i18n.language;

  const prefixedTranslate = keyPrefix
    ? (key: string, options?: TranslateOptions) =>
        translate(`${keyPrefix}.${key}`, options)
    : translate;

  return {
    translate: prefixedTranslate,
    translateWithoutPrefix: translate,
    changeLocale,
    getLocale,
  };
};
