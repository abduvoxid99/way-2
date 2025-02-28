import React from "react";
import Image from "next/image";
import Head from "next/head";

import { Container } from "@/shared/ui";
import chartImage from "@/../public/images/chart-image.png";
import akfa from "@/../public/images/akfa_logo.png";
import artel from "@/../public/images/artel_logo.png";
import hilton from "@/../public/images/hilton-icon.jpg";
import caex from "@/../public/images/caex.jpg";
import akfaBuild from "@/../public/images/akfa_build_logo.png";
import feedup from "@/../public/images/feed-up.png";
import { SubmitApplication } from "@/widgets/submit-application";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

export default function InvestPage() {
  const localizedStrings = useLocalizedStrings();
  return (
    <div>
      <Head>
        <title>Be invested</title>
      </Head>

      {/* <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Получить инвестиции
        </h1>
        <p className="mx-auto mt-4 max-w-[600px] text-lg font-normal text-gray-600">
          Мы научим вас философии инвестиций и тому, как инвестировать.
        </p>
      </section> */}

      <section className="py-16 xl:py-24 xl:pt-32">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-[560px] lg:w-1/2">
              <h2 className="text-[30px] font-semibold text-gray-900 xl:text-[30px] xl:font-bold">
                {localizedStrings["be_invested_title"]}
              </h2>
              <p className="mt-4 text-[18px] font-normal text-gray-600 xl:mt-6 xl:text-[18px]">
                {localizedStrings["be_invested_subtitle_1"]}
              </p>
              <p className="mt-4 text-[18px] font-normal text-gray-600 xl:mt-6 xl:text-[18px]">
                {localizedStrings["be_invested_subtitle_2"]}
              </p>
              <p className="mt-4 text-[18px] font-normal text-gray-600 xl:mt-6 xl:text-[18px]">
                {localizedStrings["be_invested_subtitle_3"]}
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:flex lg:w-1/2 lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={chartImage}
                  alt="Investment Chart"
                  layout="responsive"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="xl:py-18 bg-gray-50 py-12">
        <Container>
          <div className="text-center">
            <p className="text-2xl text-gray-600">
              {localizedStrings["partners_title"]}
            </p>
          </div>
          <div className="mt-[32px] flex items-center justify-between gap-x-8 gap-y-6 overflow-auto">
            <Image src={akfa} alt="akfa" className="h-9 w-fit xl:h-12" />
            <Image src={artel} alt="artel" className="h-16 w-auto xl:h-16" />
            <Image src={hilton} alt="hilton" className="h-20 w-auto xl:h-40" />
            <Image src={caex} alt="caex" className="h-9 w-fit xl:h-12" />
          </div>
        </Container>
      </section>

      {/* <section>
        <SubmitApplication
          title="Подать заявку"
          subtitle="Будьте одним из первых, кто станет нашим партнером! "
        />
      </section> */}
    </div>
  );
}
