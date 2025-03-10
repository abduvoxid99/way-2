import React from "react";

import Head from "next/head";
import Image, { StaticImageData } from "next/image";

import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { Container } from "@/shared/ui";

import charityIcon from "@/../public/images/charity-icon.svg";
import helpIcon from "@/../public/images/help-icon.svg";
import independance from "@/../public/images/independance.jpg";
import joinevent from "@/../public/images/joinevent.jpg";
import kindergarten from "@/../public/images/kindegarden.jpg";

export default function HomePage() {
  const localizedStrings = useLocalizedStrings();
  return (
    <div>
      <Head>
        <title>Charity comes first</title>
      </Head>

      <section className="py-16 pt-[105px] xl:py-24">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="max-w-[500px]">
              <h2 className="text-4xl font-semibold text-gray-900 xl:text-[36px] xl:font-bold">
                {localizedStrings["charity_title"]}
              </h2>
              <p className="mt-4 max-w-[560px] text-[20px] font-[400] text-gray-600 xl:mt-6 xl:text-[18px]">
                {localizedStrings["charity_subtitle"]}
              </p>
            </div>
            <div className="mt-8 space-y-6 lg:mt-0">
              <Feature
                icon={helpIcon}
                title={localizedStrings["charity_mission_1_title"]}
                description={localizedStrings["charity_mission_1_subtitle"]}
              />
              <Feature
                icon={charityIcon}
                title={localizedStrings["charity_mission_2_title"]}
                description={localizedStrings["charity_mission_2_subtitle"]}
              />
            </div>
          </div>

          <div className="mt-16">
            <div className="relative mx-auto h-[450px] max-w-[800px] overflow-hidden rounded-lg shadow-lg">
              <iframe
                width="100%"
                height="600px"
                src="https://www.youtube.com/embed/177OUJEU5xQ"
                title="Way ll xayriya loyihalari"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Article
              image={independance}
              title={localizedStrings["charity_event_1_title"]}
              date={localizedStrings["charity_event_1_date"]}
              description={localizedStrings["charity_event_1_subtitle"]}
            />
            <Article
              image={kindergarten}
              title={localizedStrings["charity_event_2_title"]}
              date={localizedStrings["charity_event_2_date"]}
              description={localizedStrings["charity_event_2_subtitle"]}
            />
            <Article
              image={joinevent}
              title={localizedStrings["charity_event_3_title"]}
              date={localizedStrings["charity_event_3_date"]}
              description={localizedStrings["charity_event_3_subtitle"]}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-solid border-gray-200">
      <Image src={icon} alt={title} className="h-[24px] w-[24px]" />
    </div>
    <div className="max-w-[480px]">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </div>
);

const Article = ({
  image,
  title,
  date,
  description,
}: {
  image: StaticImageData;
  title: string;
  date: string;
  description: string;
}) => (
  <div className="overflow-hidden rounded-lg bg-white shadow-md">
    <Image src={image} alt={title} className="h-48 w-full object-cover" />
    <div className="p-6">
      <p className="text-sm text-[#B42318]">{date}</p>
      <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-4 text-base text-gray-600">{description}</p>
    </div>
  </div>
);
