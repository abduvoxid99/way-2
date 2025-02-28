import React from "react";
import { default as Image, StaticImageData } from "next/image";
import Head from "next/head";
import { SubmitApplication } from "@/widgets/submit-application";

import { Button, Container } from "@/shared/ui";

import noAlcohol from "@/../public/images/no-alcohol.svg";
import noTobacco from "@/../public/images/no-tobacco.svg";
import noImpureFoodStock from "@/../public/images/no-impure-food-stock.svg";
import shariah from "@/../public/images/shariah.jpeg";

export default function Shariah() {
  return (
    <div>
      <Head>
        <title>Shariah</title>
      </Head>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-4xl font-semibold text-gray-900 xl:text-5xl xl:font-bold">
            We strictly adhere to Shariah rules
          </div>
          <div className="mx-auto mt-4 text-center text-lg font-normal text-gray-600 xl:mt-6 xl:max-w-[640px] xl:text-xl">
            Way ll received permission and recommendations from the
            International Islamic Bank
          </div>
          <Button
            appearance="secondaryGray"
            size="xl"
            className="mt-8 w-full sm:mx-auto sm:w-fit">
            View resolution
          </Button>
        </Container>
      </section>

      <section className="py-16 xl:py-24">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl xl:font-bold">
            Rigorous screenings
          </div>
          <div className="mx-auto mt-4 text-center text-lg font-normal text-gray-600 xl:mt-5 xl:max-w-[768px]">
            Connect your tools, connect your teams. With over 100 apps already
            available in our directory, your team’s favourite tools are just a
            click away.
          </div>
          <div className="mt-[72px] flex flex-wrap justify-center gap-x-8 gap-y-16">
            <Feature imageSrc={noAlcohol} title="Alocohol" />
            <Feature imageSrc={noTobacco} title="Tobacco" />
            <Feature imageSrc={noImpureFoodStock} title="Impure food stocks" />
          </div>
        </Container>
      </section>

      <section className="py-16 xl:py-24">
        <Container>
          <div className="max-w-[1216px] md:mx-auto md:flex md:max-h-[400px]">
            <div className="rounded-t-2xl bg-error-50 px-6 pb-12 pt-10 md:flex md:items-center md:rounded-l-2xl md:rounded-tr-none xl:p-16">
              <div>
                <div className="text-3xl font-semibold text-black xl:text-4xl xl:font-bold">
                  Shariah Made Simple
                </div>
                <div className="mt-4 text-lg font-normal text-gray-600 xl:mt-5 xl:text-xl">
                  Find out how we approach Shariah compliance and the processes
                  we have in place to make sure your money is always aligned
                  with your faith.
                </div>
                <Button
                  appearance="secondaryGray"
                  size="xl"
                  className="mt-8 w-full border-transparent text-black shadow-sm md:w-fit xl:mt-10">
                  Manage Shari’ah
                </Button>
              </div>
            </div>
            <Image
              src={shariah}
              alt="shariah"
              className="h-[280px] w-full rounded-b-2xl object-cover object-center md:h-auto md:max-w-[480px] md:rounded-b-none md:rounded-r-2xl"
            />
          </div>
        </Container>
      </section>

      {/* <SubmitApplication /> */}
    </div>
  );
}

const Feature = ({
  imageSrc,
  title,
}: {
  imageSrc: StaticImageData | string;
  title: string;
}) => (
  <div className="relative w-full max-w-[343px] rounded-2xl bg-gray-50 p-6 pt-10 xl:pt-14">
    <Image
      src={imageSrc}
      alt={title}
      className="absolute -top-6 left-1/2 size-12 -translate-x-1/2 xl:size-16"
    />
    <div className="text-center text-lg font-semibold text-gray-900 xl:text-xl">
      {title}
    </div>
  </div>
);
