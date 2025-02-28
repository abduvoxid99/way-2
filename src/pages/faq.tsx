import React from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { useUnit } from "effector-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { lib } from "@/shared/lib";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { NewsFaq } from "@/shared/types/api";
import { Container } from "@/shared/ui";

import { $faq } from "@/model/faq-lists";

import plusIcon from "@/../public/images/plus_circle.svg";

export default function Faq() {
  const localizedStrings = useLocalizedStrings();
  return (
    <div>
      <Head>
        <title>FAQ</title>
      </Head>

      <section className="py-16 xl:py-24 xl:pt-32">
        <Container>
          <div className="text-center">
            <div className="mb-4 text-[30px] font-bold text-[#101828] lg:text-[40px]">
              {localizedStrings["faq_title"]}
            </div>
            <div className="mx-auto max-w-[760px] text-[16px] font-normal text-[#475467] md:text-[16px] lg:text-[20px]">
              {localizedStrings["faq_subtitle"]}
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <Accordion />
          </div>
        </Container>
      </section>
    </div>
  );
}

const Accordion: React.FC = () => {
  const faqList = useUnit($faq);

  // Filter out items where faq_id is null
  const filteredFaqList = faqList?.filter((faqItem) => faqItem.faq_id !== null);

  return (
    <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
      {filteredFaqList?.map((faqItem) => (
        <AccordionItem key={faqItem.guid} faqItem={faqItem} faqList={faqList} />
      ))}
    </AccordionPrimitive.Root>
  );
};

const AccordionItem = ({
  faqItem,
  faqList,
}: {
  faqItem: NewsFaq;
  faqList: NewsFaq[];
}) => {
  const router = useRouter();
  const formatByLocale = lib.dates.useFormatByLocale();
  const addLocaleSuffix = lib.locale.useAddLocaleSuffix();

  // Find the content for the current item where faq_id matches guid
  const contentItem = faqList.find((item) => item.guid === faqItem.faq_id);

  return (
    <AccordionPrimitive.Item value={faqItem.guid} className="border-b">
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-gray-900 hover:text-gray-700">
          <div
            className="mt-2 w-[90%] text-[18px] font-semibold text-gray-900"
            dangerouslySetInnerHTML={{
              __html: contentItem
                ? contentItem[addLocaleSuffix({ key: "name" })]
                : "",
            }}
          />
          <div className="flex items-center">
            <Image
              src={plusIcon}
              alt={"plus icon"}
              className="h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out data-[state=open]:hidden"
            />
            {/* <Image
              src={minusIcon}
              alt={"minus icon"}
              className="h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out data-[state=closed]:hidden"
            /> */}
          </div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden text-gray-600 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
        <div
          className="mt-2 text-[16px] font-normal text-gray-900"
          dangerouslySetInnerHTML={{
            __html: faqItem?.name,
          }}
        />
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
};
