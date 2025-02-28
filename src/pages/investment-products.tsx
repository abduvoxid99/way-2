import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useUnit } from "effector-react";

import { Container } from "@/shared/ui";
import { Project } from "@/shared/types/api";

import { $projects } from "@/model/projects-list";
import arrowRight from "@/../public/images/arrow-right.svg";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import numberToPrice from "@/utils/number-to-price";
import { lib } from "@/shared/lib";

export default function InvestmentProducts() {
  const localizedStrings = useLocalizedStrings();
  return (
    <div>
      <Head>
        <title>Investment products</title>
      </Head>

      <section className="py-16 pt-[100px] xl:py-24">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <div className="text-4xl font-semibold text-gray-900 xl:text-5xl xl:font-bold">
                {localizedStrings["investment_products_title"]}
              </div>
              <div className="mt-4 text-lg font-normal text-gray-600 xl:mt-6 xl:text-xl">
                {localizedStrings["investment_products_subtitle"]}
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap justify-between gap-x-8 gap-y-8 rounded-2xl bg-error-50 px-6 py-10 lg:mt-24 xl:p-16">
            <div className="mx-auto max-w-[341px] text-center">
              <div className="text-5xl font-semibold text-error-600 xl:text-5xl">
                ~ 10-15%
              </div>
              <div className="mt-3 text-[18px] font-medium text-error-900 xl:text-lg">
                {localizedStrings["expected_profit"]}
              </div>
            </div>

            <div className="mx-auto max-w-[341px] text-center">
              <div className="text-5xl font-semibold text-error-600 xl:text-5xl">
                {localizedStrings["divident_times"]}
              </div>
              <div className="mt-3 text-lg font-medium text-error-900 xl:text-lg">
                {localizedStrings["divident_type"]}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-2xl font-semibold">
            <span className="text-black">
              {localizedStrings["market_summary"]} |{" "}
            </span>
            <span className="text-error-600">
              {localizedStrings["market_summary_second"]}
            </span>
          </div>
          <Projects />
          <div className="mt-12 text-lg font-normal text-gray-600">
            {localizedStrings["market_update"]}
          </div>
        </Container>
      </section>
    </div>
  );
}

const Projects = () => {
  const projects = useUnit($projects);

  if (!projects) {
    return (
      <div className="mt-12 flex flex-col gap-x-4 gap-y-8 lg:flex-row lg:justify-between">
        <div className="h-8 w-52 rounded-xl bg-skeleton" />
        <div className="h-8 w-52 rounded-xl bg-skeleton" />
        <div className="h-8 w-52 rounded-xl bg-skeleton" />
        <div className="h-8 w-52 rounded-xl bg-skeleton" />
      </div>
    );
  }

  return (
    <div className="mt-12 flex flex-col gap-x-8 gap-y-8 lg:flex-row lg:justify-between">
      {projects.map((project) => (
        <Stock key={project.name} project={project} />
      ))}
    </div>
  );
};

const nameRegex = /\(([^)]+)\)/;

const Stock = ({ project }: { project: Project }) => {
  const formatByLocale = lib.dates.useFormatByLocale();
  const localizedStrings = useLocalizedStrings();

  return (
    <div className="relative flex w-full cursor-pointer gap-6 rounded-lg bg-white p-4 shadow-md lg:w-1/2">
      <div className="">
        <Image
          src={project.image}
          alt="akfa-build"
          className="h-[80px] w-[80px] sm:h-[100%] sm:w-[100%]"
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
      <div className="flex h-full flex-col gap-1">
        <p className="text-sm font-medium text-gray-800 sm:text-lg sm:font-semibold">
          {project.name}
        </p>

        <div>
          <div className="flex items-center gap-2">
            <p className="text-xs">{localizedStrings["lot_price"]}: </p>
            <span className="text-xs font-normal text-gray-900 sm:text-sm">
              {numberToPrice(project.minimal_sum * 12984.44, "UZS")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-xs">{localizedStrings["expected_profit"]}: </p>
            <span className="text-xs font-normal text-gray-900 sm:text-sm">
              ~{project.approx_income} - {project.aproximetly_profit}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-xs">{localizedStrings["end_date"]}: </p>
            <span className="text-xs font-normal text-gray-900 sm:text-sm">
              {formatByLocale(project.end_date, "dd LLL yyyy")}
            </span>
          </div>
        </div>
      </div>

      {project.status[0] === "closed" && (
        <div className="absolute right-2 top-2 rounded bg-error-100 p-1 text-[10px] text-error-600">
          {localizedStrings["close"]}
        </div>
      )}

      {project.status[0] === "investment" && (
        <div className="absolute right-2 top-2 rounded bg-blue-100 p-1 text-[10px] text-blue-600">
          {localizedStrings["investment"]}
        </div>
      )}
    </div>
  );
};

const Feature = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="border-l-4 border-solid py-4 pl-6 transition-colors duration-200 first:border-l-error-600">
    <div className="text-lg font-semibold text-gray-900">{title}</div>
    <div className="mt-1 text-base font-normal text-gray-600">{subtitle}</div>
    <div className="mt-4 flex items-center gap-x-2 text-base font-semibold text-error-700">
      Learn more <Image src={arrowRight} alt="right" />
    </div>
  </div>
);
