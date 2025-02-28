import { useRouter } from "next/router";
import ru from "../../../ru.json";
import uz from "../../../uz.json";
import en from "../../../en.json";

export type Locale = "ru" | "uz" | "en";

const locales: Record<Locale, typeof ru> = { ru, uz, en };

export const useLocalizedStrings = () => {
  const { locale } = useRouter();
  return locales[locale as Locale] || locales;
};
