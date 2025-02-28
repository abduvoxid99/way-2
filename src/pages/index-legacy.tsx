import React from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { lib } from "@/shared/lib";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { Container } from "@/shared/ui";

import akfa from "@/../public/images/akfa_logo.png";
import arrowRight from "@/../public/images/arrow-right.svg";
import artel from "@/../public/images/artel.jpg";
import caex from "@/../public/images/caex.jpg";
import cards from "@/../public/images/cards.png";
import hilton from "@/../public/images/hilton.jpg";
import phones from "@/../public/images/phones3.svg";

import { wayll_common } from "@/mock/wayll-common";

interface WayllCommonItem {
  id: string;
  title_ru: string;
  title_uz: string;
  title_en: string;
  subtitle_ru: string;
  subtitle_uz: string;
  subtitle_en: string;
  image: string;
  description_ru?: string;
  description_uz?: string;
  description_en?: string;
  descriptionLow_ru?: string;
  descriptionLow_uz?: string;
  descriptionLow_en: string;
  date_ru: string;
  date_uz: string;
  date_en: string;
}

export default function Home() {
  const localizedStrings = useLocalizedStrings();
  const router = useRouter();
  const addLocaleSuffix = lib.localeWithRu.useAddLocaleSuffixWitRu();

  const getRouteElement = (element: string) => {
    router.push(`/wayll-common/${element}`);
  };

  return (
    <div>
      <Head>
        <title>Way ll</title>
      </Head>

      <section>
        <Container>
          <div
            id="iframe"
            className="py-6 lg:flex lg:items-center lg:justify-between">
            {/* <div style={{ overflow: "hidden", height: "750px", width: "100%" }}>
            <iframe
              src="https://fearless-priority-148182.framer.app/"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              scrolling="no"></iframe>
          </div> */}
            <div>
              <div className="mt-16 text-3xl font-semibold text-gray-900 xl:mt-32 xl:text-5xl xl:font-bold">
                {localizedStrings["welcome_message"]}
              </div>
              <div className="mt-4 max-w-[640px] text-lg font-normal text-gray-600 xl:mt-6 xl:text-[20px]">
                {localizedStrings["home_subtitle"]}
              </div>

              <div className="mt-[40px] flex flex-col md:mt-[100px] md:flex-row md:space-x-4 lg:mt-[180px]">
                <Link href={"/be-invested"}>
                  <div
                    className="rounded-full p-[10px] shadow"
                    style={{
                      boxShadow: "0px 0px 6px 0px #00000026",
                    }}>
                    <button className="w-full rounded-full border-2 border-red-600 bg-white px-6 py-2 font-bold text-red-600 transition hover:bg-red-600 hover:text-white md:max-w-[250px]">
                      {localizedStrings["get_invest_button"]}
                    </button>
                  </div>
                </Link>
                <Link href={"/invest"}>
                  <div
                    className="mt-3 rounded-full bg-[#D42427] p-[10px] shadow md:mt-0"
                    style={{
                      boxShadow: "0px 0px 6px 0px #00000026",
                    }}>
                    <button className="w-full rounded-full border-2 border-white bg-red-600 px-6 py-2 font-bold text-white transition hover:bg-white hover:text-red-600">
                      {localizedStrings["make_invest_button"]}
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <Image src={phones} alt="app" className="mx-auto mt-16" />
          </div>
        </Container>
      </section>

      <section className="xl:py-010 bg-gray-50 py-10">
        <Container>
          <div className="text-center">
            <p className="text-2xl text-gray-600">
              {localizedStrings["partners_title"]}
            </p>
          </div>
          <div className="mt-[32px] flex items-center justify-between gap-x-8 gap-y-6 overflow-auto">
            <Image src={akfa} alt="akfa" className="h-9 w-fit xl:h-12" />
            <Image src={artel} alt="artel" className="h-20 w-auto xl:h-40" />
            <Image src={hilton} alt="hilton" className="h-20 w-auto xl:h-24" />
            <Image src={caex} alt="caex" className="h-9 w-fit xl:h-12" />
          </div>
        </Container>
      </section>

      <section className="py-16 md:pr-12 lg:flex lg:items-center lg:gap-x-8 xl:gap-x-16 xl:py-24 xl:pr-28">
        <Container className="lg:!pr-0">
          <div className="text-center text-4xl font-semibold text-gray-900">
            {localizedStrings["why_wayll"]}
          </div>
          <div className="py-12">
            {wayll_common?.map((element: WayllCommonItem) => {
              const titleKey = addLocaleSuffix({
                key: "title",
              }) as keyof WayllCommonItem;
              const subtitleKey = addLocaleSuffix({
                key: "subtitle",
              }) as keyof WayllCommonItem;

              return (
                <div key={element.id}>
                  <Feature
                    element={element}
                    getRouteElement={getRouteElement}
                    title={element[titleKey] as string}
                    subtitle={element[subtitleKey] as string}
                  />
                </div>
              );
            })}
          </div>
        </Container>

        <Image
          src={cards}
          alt="cards"
          className="mx-auto max-h-[640px] w-full max-w-[576px] object-contain"
        />
      </section>

      {/* <FinancesFeatures /> */}
    </div>
  );
}

const AppFeature = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="max-w-[450px]">
    <div className="mx-auto flex size-[93px] items-center justify-center rounded-full bg-error-50 xl:size-[142px]">
      {icon}
    </div>
    <div className="mt-4 text-center text-xl font-bold text-black xl:text-2xl xl:font-bold">
      {title}
    </div>
    <div className="mt-4 text-center text-base font-normal text-gray-600 xl:text-xl">
      {subtitle}
    </div>
  </div>
);
const Feature = ({
  title,
  subtitle,
  element,
  getRouteElement,
}: {
  title: string;
  subtitle: string;
  element: WayllCommonItem;
  getRouteElement: (element: string) => void;
}) => {
  const localizedStrings = useLocalizedStrings();

  return (
    <div className="border-l-4 border-solid py-4 pl-6 transition-colors duration-200 first:border-l-error-600">
      <div className="text-lg font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-base font-normal text-gray-600">{subtitle}</div>
      <div className="mt-4 flex items-center gap-x-2 text-base font-semibold text-error-700">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => getRouteElement(element.id)}>
          <div>{localizedStrings["learn_more_button"]}</div>{" "}
          <Image src={arrowRight} alt="right" />
        </div>
      </div>
    </div>
  );
};
