import React from "react";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";

import { Container } from "@/shared/ui";

import akfaLogo from "@/../public/images/akfaregnew.png";
import akfaBuild from "@/../public/images/akfanew.png";
import artelLogo from "@/../public/images/artel_white_logo.svg";
import korzinkaLogo from "@/../public/images/korzinka_white_logo.svg";
import noAlcohol from "@/../public/images/no-alcohol.svg";
import noTobacco from "@/../public/images/no-tobacco.svg";
import noImpureFoodStock from "@/../public/images/no-impure-food-stock.svg";
import imzo from "@/../public/images/imzonew.png";

export default function Shariah() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-4xl font-semibold text-gray-900 xl:text-5xl">
            Портфолио
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            Наши инвесторы и проекты, в которые мы инвестировали
          </div>
        </Container>
      </section> */}

      <section className="xl:pt-8">
        <Container>
          <div className="border-b border-solid border-b-gray-200 py-16 xl:py-24">
            <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl">
              Компании, которые уже с нами
            </div>
            <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
              Мы гордимся тем, что наши идеи привлекли внимание ведущих компаний
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6">
              <Company
                img={<Image src={akfaLogo} alt="akfa" />}
                title="Akfa"
                subtitle="“Нравится ответственность, светлые идеи и сильная команда”"
                background="#344054"
              />
              {/* <Company
                img={<Image src={artelLogo} alt="akfa" />}
                title="Artel"
                subtitle="“Discover a wide range of consumer electronics with cutting-edge technology”"
                background="#67B437"
              /> */}
              {/* <Company
                img={<Image src={korzinkaLogo} alt="akfa" />}
                title="Korzinka"
                subtitle="“According to reviews about supermarkets in Tashkent, Korzinka.uz is popular for a number of reasons.”"
                background="#D92D20"
              /> */}
            </div>
            {/* <div className="mt-8 text-center text-base font-semibold text-error-700">
              View more
            </div> */}
          </div>
        </Container>
      </section>

      <section className="py-16 xl:py-24">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl xl:font-bold">
            Integrations Проекты с Исламским финансированием
          </div>
          <div className="mx-auto mt-4 text-center text-lg font-normal text-gray-600 xl:mt-5 xl:max-w-[768px]">
            Мы рады сообщить, что наш проект получил поддержку от уважаемых
            партнеров в области исламского финансирования.
          </div>
          <div className="mt-[72px] flex flex-wrap justify-center gap-x-8 gap-y-16">
            <Feature imageSrc={noAlcohol} title="Alocohol" />
            <Feature imageSrc={noTobacco} title="Tobacco" />
            <Feature imageSrc={noImpureFoodStock} title="Impure food stocks" />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="border-b border-solid border-b-gray-200 py-3 xl:py-5">
            <div className="scrollbar-hide mt-12 flex gap-x-8 gap-y-6 overflow-x-auto">
              {/* <div className="min-w-[300px] flex-shrink-0">
                <Company
                  img={<Image src={imzo} alt="imzo" />}
                  title="Imzo"
                  subtitle="Love the simplicity of the service and the prompt customer support."
                  background="#F2F4F7"
                  color="#000"
                />
              </div>
              <div className="min-w-[300px] flex-shrink-0">
                <Company
                  img={<Image src={akfaBuild} alt="artel" />}
                  title="Akfa Build"
                  subtitle="Love the simplicity of the service and the prompt customer support."
                  background="#F2F4F7"
                  color="#000"
                />
              </div> */}
              <div className="min-w-[300px] flex-shrink-0">
                <Company
                  img={<Image src={akfaLogo} alt="akfa" />}
                  title="Akfa"
                  subtitle="“Нравится ответственность, светлые идеи и сильная команда”"
                  background="#344054"
                />
              </div>
              {/* <div className="min-w-[300px] flex-shrink-0">
                <Company
                  img={<Image src={artelLogo} alt="artel" />}
                  title="Artel"
                  subtitle="“Discover a wide range of consumer electronics with cutting-edge technology”"
                  background="#67B437"
                  color="#fff"
                />
              </div> */}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

const Company = ({
  img,
  title,
  subtitle,
  background,
  color,
}: {
  img: React.ReactNode;
  title: string;
  subtitle: string;
  background: string;
  color?: string;
}) => (
  <div
    className="flex h-[504px] max-w-96 flex-col justify-between rounded-[14px] p-6 pt-8"
    style={{ backgroundColor: background }}>
    {img}
    <div className="rounded-[10px] border border-solid border-white bg-[#FFFFFF4D] px-6 py-8">
      <div
        style={{ color: color }}
        className="text-3xl font-semibold text-white">
        {title}
      </div>
      <div
        style={{ color: color }}
        className="mt-4 text-lg font-normal text-white">
        {subtitle}
      </div>
    </div>
  </div>
);

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
