import { format } from "date-fns/format";
import { uz as uzLocale } from "date-fns/locale/uz";
import { ru as ruLocale } from "date-fns/locale/ru";
import { useRouter } from "next/router";

import { Locale } from "./locale";

type FormatParams = Parameters<typeof format>;
type DateParam = FormatParams[0];
type OptionsParam = FormatParams[2];

export const useFormatByLocale = () => {
  const { locale } = useRouter();
  return (
    date: DateParam,
    formatStr: string,
    options?: Omit<OptionsParam, "locale">,
  ) =>
    formatByLocale(date, formatStr, { ...options, locale: locale as Locale });
};

export const formatByLocale = (
  date: DateParam,
  formatStr: string,
  options: Omit<OptionsParam, "locale"> & { locale: Locale },
) => {
  return format(date, formatStr, {
    ...options,
    locale: getLocaleObject(options.locale),
  });
};

const getLocaleObject = (locale: Locale) => {
  if (locale === "uz") {
    return uzLocale;
  } else if (locale === "ru") {
    return ruLocale;
  }
  return undefined;
};
