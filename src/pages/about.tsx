import React from "react";
import { default as Image, StaticImageData } from "next/image";
import Head from "next/head";
import clsx from "clsx";

import { SubmitApplication } from "@/widgets/submit-application";

import { Container } from "@/shared/ui";
import { Div } from "@/shared/types/element";

import messageChat from "@/../public/images/message-chat-circle.svg";
import mission from "@/../public/images/about-mission.png";
import zapFast from "@/../public/images/zap-fast.svg";
import values from "@/../public/images/about-values.png";
import ceo from "@/../public/images/ceo-way.png";
import check from "@/../public/images/check-icon.svg";
import alisaHelster from "@/../public/images/alisa_helster.png";
import richWilson from "@/../public/images/rich_wilson.png";
import annieStanley from "@/../public/images/annie_stanley.png";
import johnnyBell from "@/../public/images/johnny_bell.png";
import arrowUpRight from "@/../public/images/arrow-up-right.svg";
import arrowLeftGray from "@/../public/images/arrow_left_gray.svg";
import arrowRightGray from "@/../public/images/arrow_right_gray.svg";
import telegramIcon from "@/../public/images/telegram_icon.svg";
import linkedinIcon from "@/../public/images/linkedin_white_icon.svg";
import dribbbleIcon from "@/../public/images/dribble_white_icon.svg";
import quoteUp from "@/../public/images/quote-up.png";
import quoteDown from "@/../public/images/quote-down.png";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

export default function About() {
  const localizedStrings = useLocalizedStrings();
  return (
    <div>
      <Head>
        <title>About us</title>
      </Head>

      <section className="py-16 xl:py-24">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900">
            {localizedStrings["aboutus_title"]}
          </div>
          <div className="mx-auto mt-4 max-w-[768px] text-center text-lg font-normal text-gray-600">
            {localizedStrings["aboutus_subtitle"]}
          </div>

          <Feature
            icon={<Image src={messageChat} alt="zap fast" />}
            title={localizedStrings["our_mission"]}
            subtitle={localizedStrings["our_mission_text"]}
            items={[
              localizedStrings["first_mission"],
              localizedStrings["second_mission"],
              localizedStrings["third_mission"],
            ]}
            image={<Image src={mission} alt="About mission" />}
          />
          <Feature
            icon={<Image src={zapFast} alt="zap fast" />}
            title={localizedStrings["our_values"]}
            subtitle={localizedStrings["our_values_subtitle"]}
            items={[
              localizedStrings["first_value"],
              localizedStrings["second_value"],
              localizedStrings["third_value"],
            ]}
            image={<Image src={values} alt="About values" />}
            className="lg:flex-row-reverse"
          />
        </Container>
      </section>
      {/* 
      <section className="overflow-hidden py-16 xl:py-24">
        <Container>
          <div className="text-3xl font-semibold text-gray-900 xl:text-4xl xl:font-bold">
            We’re a fast-growing team
          </div>
          <div className="mt-4 text-lg font-normal text-gray-600 xl:text-xl">
            We’re always on the lookout for passionate, dynamic, and talented
            individuals.
          </div>
        </Container>
        <Carousel />
      </section>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-[40px] xl:font-bold">
            Social responsibility
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            We offer the best accounting and expense tracking for ambitious
            businesses.
          </div>
        </Container>
      </section> */}

      {/* <section className="py-16 xl:py-24">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:font-bold">
            Social respocibility
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:mt-5 xl:text-xl">
            We offer the best accounting and expense tracking for ambitious
            businesses.
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 xl:mt-16">
            <FinancesFeature
              icon={
                <Image
                  src="/images/message-chat-circle.svg"
                  alt="message-chat-circle"
                  width={24}
                  height={24}
                />
              }
              title="Share team inboxes"
              subtitle="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
            />
            <FinancesFeature
              icon={
                <Image src="/images/zap.svg" alt="zap" width={24} height={24} />
              }
              title="Deliver instant answers"
              subtitle="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
            />
            <FinancesFeature
              icon={
                <Image
                  src="/images/chart-breakout-square.svg"
                  alt="chart-breakout-square"
                  width={24}
                  height={24}
                />
              }
              title="Manage your team"
              subtitle="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email."
            />
            <FinancesFeature
              icon={
                <Image
                  src="/images/message-smile-circle.svg"
                  alt="message-smile-circle"
                  width={24}
                  height={24}
                />
              }
              title="Connect with customers"
              subtitle="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email."
            />
          </div>
        </Container>
      </section> */}
    </div>
  );
}

const Feature = ({
  icon,
  title,
  subtitle,
  items,
  image,
  className,
  ...props
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: string[];
  image: React.ReactNode;
} & Div) => (
  <div
    className={clsx(
      "mt-12 justify-between lg:flex lg:items-center lg:gap-x-8 xl:mt-24",
      className,
    )}
    {...props}>
    <div className="max-w-[512px]">
      <div className="w-fit rounded-full border-8 border-error-50">
        <div className="flex size-10 items-center justify-center rounded-full bg-error-100">
          {icon}
        </div>
      </div>
      <div className="mt-6 text-2xl font-semibold text-gray-900">{title}</div>
      <div className="mt-2 text-base font-normal text-gray-600">{subtitle}</div>
      <div className="mt-8 flex flex-col gap-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 pl-2 xl:pl-4">
            <div className="flex min-h-7 min-w-7 items-center justify-center rounded-full bg-error-100">
              <Image src={check} alt="check" />
            </div>
            <div className="text-base font-normal text-gray-600">{item}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-10">{image}</div>
  </div>
);

const Carousel = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const onPreviousClick = () => {
    const cardWidth = window.innerWidth >= 1280 ? 384 : 280;
    const gapX = window.innerWidth >= 1280 ? 24 : 32;
    // @ts-ignore
    ref.current?.scroll?.(ref.current?.scrollLeft - cardWidth - gapX, 0);
  };

  const onNextClick = () => {
    const cardWidth = window.innerWidth >= 1280 ? 384 : 280;
    const gapX = window.innerWidth >= 1280 ? 24 : 32;
    // @ts-ignore
    ref.current?.scroll?.(ref.current?.scrollLeft + cardWidth + gapX, 0);
  };

  return (
    <Container className="mt-20 !pr-0 xl:mt-16">
      <div
        className="transi flex gap-x-6 overflow-hidden scroll-smooth pr-4 xl:gap-x-8"
        ref={ref}>
        <TeamMember
          imageSrc={alisaHelster}
          name="Alisa Hester"
          position="Founder & CEO"
          about="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
        />
        <TeamMember
          imageSrc={richWilson}
          name="Rich Wilson"
          position="Engineering Manager"
          about="Lead engineering teams at Figma, Pitch, and Protocol Labs."
        />
        <TeamMember
          imageSrc={annieStanley}
          name="Annie Stanley"
          position="Product Manager"
          about="Former PM for Airtable, Medium, Ghost, and Lumi."
        />
        <TeamMember
          imageSrc={johnnyBell}
          name="Johnny Bell"
          position="Frontend Developer"
          about="Former frontend dev for Linear, Coinbase, and Postscript."
        />
      </div>

      <div className="mt-8 flex gap-x-4">
        <div
          className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-solid border-gray-200"
          onClick={onPreviousClick}>
          <Image src={arrowLeftGray} className="size-5" alt="previous" />
        </div>
        <div
          className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-solid border-gray-200"
          onClick={onNextClick}>
          <Image src={arrowRightGray} className="size-5" alt="next" />
        </div>
      </div>
    </Container>
  );
};

const TeamMember = ({
  imageSrc,
  name,
  position,
  about,
}: {
  imageSrc: string | StaticImageData;
  name: string;
  position: string;
  about: string;
}) => (
  <div className="relative flex h-[432px] min-w-[280px] items-end xl:h-[480px] xl:min-w-96">
    <Image
      src={imageSrc}
      alt={name}
      fill
      className="-z-10 object-cover object-top"
    />
    <div className="w-full border-t border-solid border-t-[#FFFFFF80] px-5 pb-8 pt-6 backdrop-blur-md">
      <div className="flex items-center justify-between text-2xl font-semibold text-white">
        {name}
        <Image src={arrowUpRight} alt="Arrow up right" />
      </div>
      <div className="mt-3 text-base font-semibold text-white">{position}</div>
      <div className="mt-1 text-sm font-normal text-white">{about}</div>
      <div className="mt-6 flex gap-x-5">
        <Image src={telegramIcon} alt="telegram" className="size-5" />
        <Image
          src={linkedinIcon}
          alt="linkedin"
          className="[g]:fill-white size-5"
        />
        <Image src={dribbbleIcon} alt="dribble" className="size-5" />
      </div>
    </div>
  </div>
);

const FinancesFeature = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="max-w-[343px] rounded-[10px] bg-gray-50 p-5 sm:max-w-[286px]">
    <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-error-50">
      {icon}
    </div>
    <div className="mt-12 text-lg font-semibold text-gray-900">{title}</div>
    <div className="mt-1 text-base font-normal text-gray-600">{subtitle}</div>
  </div>
);
