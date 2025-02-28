import React from "react";
import Image from "next/image";
import Head from "next/head";
import clsx from "clsx";
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionItemProps } from "@radix-ui/react-accordion";
import { SubmitApplication } from "@/widgets/submit-application";

import { Container } from "@/shared/ui";

import investmentStocks from "@/../public/images/investment-stocks.png";
import plusCircle from "@/../public/images/plus_circle.svg";

export default function LookingForInvestments() {
  return (
    <div>
      <Head>
        <title>Looking for investments</title>
      </Head>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-4xl font-semibold text-gray-900 xl:text-5xl xl:font-bold">
            Looking for investments
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:mt-6 xl:text-xl">
            We will teach you the philosophy of investment and how to invest
          </div>
        </Container>
      </section>
      <section className="py-16 xl:py-24">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-x-16 xl:gap-x-24">
            <div className="lg:max-w-[560px]">
              <div className="text-2xl font-semibold text-gray-900 xl:text-3xl xl:font-bold">
                Philosophy
              </div>
              <div className="mt-2 text-lg font-normal text-gray-600 xl:text-lg">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop. Leverage
                automation to move fast, while always giving customers a human,
                helpful experience.
              </div>
              <div className="mt-5 text-lg font-normal text-gray-600 xl:text-lg">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop. Leverage
                automation to move fast, while always giving customers a human,
                helpful experience.
              </div>
            </div>
            <Image
              src={investmentStocks}
              alt="Investment stocks"
              className="mx-auto mt-12 max-h-[400px] w-full max-w-[560px] rounded-[20px] lg:m-0"
            />
          </div>
        </Container>
      </section>
      <section className="py-16 xl:py-24">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl xl:font-bold">
            Frequently asked questions
          </div>
          <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:mt-5 xl:text-xl">
            Everything you need to know about the product and billing.
          </div>
          <QuestionsAccordion />
        </Container>
      </section>
      <SubmitApplication />
    </div>
  );
}

const QuestionsAccordion = () => (
  <Accordion.Root
    type="single"
    collapsible
    defaultValue="item-1"
    className="mx-auto mt-12 max-w-[768px]">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
      <AccordionContent>
        Yes, you can try us for free for 30 days. If you want, we’ll provide you
        with a free, personalized 30-minute onboarding call to get you up and
        running as soon as possible.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
      <AccordionContent>
        Yes, you can try us for free for 30 days. If you want, we’ll provide you
        with a free, personalized 30-minute onboarding call to get you up and
        running as soon as possible.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
      <AccordionContent>
        Yes, you can try us for free for 30 days. If you want, we’ll provide you
        with a free, personalized 30-minute onboarding call to get you up and
        running as soon as possible.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>
        Can other info be added to an invoice?
      </AccordionTrigger>
      <AccordionContent>
        Yes, you can try us for free for 30 days. If you want, we’ll provide you
        with a free, personalized 30-minute onboarding call to get you up and
        running as soon as possible.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger>How does billing work?</AccordionTrigger>
      <AccordionContent>
        Yes, you can try us for free for 30 days. If you want, we’ll provide you
        with a free, personalized 30-minute onboarding call to get you up and
        running as soon as possible.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6">
      <AccordionTrigger>How do I change my account email?</AccordionTrigger>
      <AccordionContent>
        Yes, you can try us for free for 30 days. If you want, we’ll provide you
        with a free, personalized 30-minute onboarding call to get you up and
        running as soon as possible.
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={clsx(
        "overflow-hidden border-b border-solid border-b-gray-200 last:border-b-0 focus-within:relative focus-within:z-10",
        className,
      )}
      {...props}
      ref={forwardedRef}>
      {children}
    </Accordion.Item>
  ),
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={clsx(
          "group flex flex-1 cursor-pointer items-center justify-between gap-x-2 bg-white py-6 text-left text-lg font-semibold leading-none text-gray-900 outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef}>
        {children}
        <Image
          src={plusCircle}
          aria-hidden
          alt="open"
          className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-45"
        />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={clsx(
        "overflow-hidden text-base font-normal text-gray-600 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
        className,
      )}
      {...props}
      ref={forwardedRef}>
      <div className="pb-8">{children}</div>
    </Accordion.Content>
  ),
);
