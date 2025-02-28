import { useRouter } from "next/router";

export type Locale = "ru" | "uz" | "en";

export const useAddLocaleSuffixWitRu = <L extends Locale>() => {
  const { locale } = useRouter();
  return <K extends string>({ key }: { key: K }) =>
    addLocaleSuffix<K, L>({ key, locale: locale as L });
};

export const addLocaleSuffix = <K extends string, L extends Locale>({
  key,
  locale,
}: {
  key: K;
  locale: L;
}) => {
  return `${key}_${locale}` as `${K}_${L}`;
};
