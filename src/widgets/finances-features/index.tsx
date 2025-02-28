import React from "react";
import Image from "next/image";

import { Container } from "@/shared/ui";
import arrowRight from "@/../public/images/arrow-right.svg";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

export const FinancesFeatures = () => {
  const localizedStrings = useLocalizedStrings();

  return (
    <section className="py-16 xl:py-24">
      <Container>
        <div className="text-center text-3xl font-semibold text-gray-900 xl:font-bold">
          {localizedStrings["offer_title"]}
        </div>
        <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:mt-5 xl:text-xl">
          {localizedStrings["offer_subtitle"]}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6 xl:mt-16">
          <FinancesFeature
            icon={
              <Image
                src="/images/message-smile-circle.svg"
                alt="message-chat-circle"
                width={24}
                height={24}
              />
            }
            title={localizedStrings["first_offer_title"]}
            subtitle={localizedStrings["first_offer_subtitle"]}
          />
          <FinancesFeature
            icon={
              <Image
                src="/images/message-chat-circle.svg"
                alt="zap"
                width={24}
                height={24}
              />
            }
            title={localizedStrings["second_offer_title"]}
            subtitle={localizedStrings["second_offer_subtitle"]}
          />
          <FinancesFeature
            icon={
              <Image
                src="/images/zap.svg"
                alt="chart-breakout-square"
                width={24}
                height={24}
              />
            }
            title={localizedStrings["third_offer_title"]}
            subtitle={localizedStrings["third_offer_subtitle"]}
          />
          <FinancesFeature
            icon={
              <Image
                src="/images/chart-breakout-square.svg"
                alt="message-smile-circle"
                width={24}
                height={24}
              />
            }
            title={localizedStrings["fourth_offer_title"]}
            subtitle={localizedStrings["fourth_offer_subtitle"]}
          />
        </div>
      </Container>
    </section>
  );
};

const FinancesFeature = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <div className="max-w-[343px] rounded-[10px] bg-gray-50 p-5 sm:max-w-[286px]">
      <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-error-50">
        {icon}
      </div>
      <div className="h-[164px]">
        <div className="mt-12 text-lg font-semibold text-gray-900">{title}</div>
        <div className="mt-1 text-base font-normal text-gray-600">
          {subtitle}
        </div>
      </div>
      <div className="mt-4 flex cursor-pointer items-center gap-x-2 text-base font-semibold text-error-700">
        {localizedStrings["learn_more_button"]}{" "}
        <Image src={arrowRight} alt="right" />
      </div>
    </div>
  );
};
