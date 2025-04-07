import React from "react";

import Head from "next/head";
import { default as Image } from "next/image";
import Link from "next/link";

import { lib } from "@/shared/lib";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

import clock from "@/../public/images/clock.svg";
import markerPin from "@/../public/images/marker-pin.svg";

import Container from "@/components/common/container";
import CSlider from "@/components/common/slider";
import { careers } from "@/mock/career";

interface CareerItem {
  title: string;
  subtitle: string;
}

export default function Career() {
  const localizedStrings = useLocalizedStrings();
  const addLocaleSuffix = lib.localeWithRu.useAddLocaleSuffixWitRu();

  const careerItems: CareerItem[] = [
    {
      title: localizedStrings["career_profession_1_title"],
      subtitle: localizedStrings["career_profession_1_subtitle"],
    },
    {
      title: localizedStrings["career_profession_2_title"],
      subtitle: localizedStrings["career_profession_2_subtitle"],
    },
    {
      title: localizedStrings["career_profession_3_title"],
      subtitle: localizedStrings["career_profession_3_subtitle"],
    },
    {
      title: localizedStrings["career_profession_4_title"],
      subtitle: localizedStrings["career_profession_4_subtitle"],
    },
    {
      title: localizedStrings["career_profession_5_title"],
      subtitle: localizedStrings["career_profession_5_subtitle"],
    },
    {
      title: localizedStrings["career_profession_3_title"],
      subtitle: localizedStrings["career_profession_6_subtitle"],
    },
  ];

  return (
    <div>
      <Head>
        <title>Career</title>
      </Head>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-4xl font-semibold text-gray-900 xl:text-5xl">
            Карьера
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            Познакомьтесь с нами поближе и присоединяйтесь к нам
          </div>
        </Container>
      </section>

      <section className="pt-[105px] xl:pt-32 overflow-hidden">
        <Container size="md">
          <div className="border-b border-solid border-b-gray-200 pb-16 xl:pb-24">
            <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl mb-20">
              {localizedStrings["career_title"]}
            </div>

            <CSlider leftTitle="career_subtitle" sliderItems={careerItems} />
          </div>
        </Container>
      </section>
      {/* <section className="py-16 xl:py-24">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl">
            {localizedStrings["career_jobs_title"]}
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            {localizedStrings["career_jobs_subtitle"]}
          </div>
          <div className="mt-12 justify-center lg:flex lg:flex-wrap lg:justify-normal lg:gap-x-8 xl:mt-16 xl:gap-x-16">
            {careers?.map((item) => (
              <OpenPosition
                key={item?.id}
                id={item?.id}
                title={item?.[addLocaleSuffix({ key: "title" })]}
                subtitle={item?.[addLocaleSuffix({ key: "description" })]}
              />
            ))}
          </div>
        </Container>
      </section> */}
    </div>
  );
}

const OpenPosition = ({
  key,
  id,
  title,
  subtitle,
}: {
  key: string;
  id: string;
  title: string;
  subtitle: string;
}) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <div
      key={key}
      className="w-full border-b border-solid border-gray-200 pb-8 pt-6 first:border-t lg:w-[40%] lg:[&:nth-child(2)]:border-t">
      <Link href={`/career/${id}`} passHref>
        <div className="text-lg font-semibold text-gray-900">{title}</div>
      </Link>
      <div className="mt-4 text-base font-normal text-gray-600">{subtitle}</div>
      <div className="mt-6 flex gap-x-5">
        <div className="flex items-center gap-x-2">
          <Image src={markerPin} alt="remote" />
          {localizedStrings["office"]}
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={clock} alt="full time" />
          {localizedStrings["work_time"]}
        </div>
      </div>
    </div>
  );
};
