import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Container } from "@/shared/ui";
import chartImage from "@/../public/images/invest-new.png";
import akfa from "@/../public/images/akfa_logo.png";
import artel from "@/../public/images/artel_logo.png";
import imzo from "@/../public/images/imzo_logo.png";
import caex from "@/../public/images/caex.jpg";
import feedup from "@/../public/images/feed-up.png";
import { SubmitApplication } from "@/widgets/submit-application";
import { numberWithSpaces } from "@/shared/lib/numberWithSpaces";
import * as Dialog from "@radix-ui/react-dialog";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

interface Props {
  showForm: boolean;
  onClose: () => void;
}

export default function Invest() {
  const [investment, setInvestment] = useState(5000000);
  const [term, setTerm] = useState(5);
  const [percentage, setPercentage] = useState(5);
  const [result, setResult] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const localizedStrings = useLocalizedStrings();

  const handleCalculate = () => {
    const calculatedResult = investment * Math.pow(1 + percentage / 100, term);
    setResult(calculatedResult);
    setShowBtn(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div>
      <Head>
        <title>Invest</title>
      </Head>

      <section className="py-16 xl:py-24">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-[560px] lg:w-1/2">
              <h2 className="text-[30px] font-semibold text-gray-900 xl:text-[30px] xl:font-bold">
                {localizedStrings["invest_title"]}
              </h2>
              <p className="mt-4 text-[18px] font-normal text-gray-600 xl:mt-6 xl:text-[18px]">
                {localizedStrings["invest_subtitle_1"]}
              </p>
              <p className="mt-4 text-[18px] font-normal text-gray-600 xl:mt-6 xl:text-[18px]">
                {localizedStrings["invest_subtitle_2"]}
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

      <section className="bg-[#fff] py-16 xl:py-24">
        <Container>
          <div className="text-center text-[30px] font-bold text-[#101828]">
            {localizedStrings["invest_calculator_title"]}
          </div>
          <div className="mx-auto mt-2 max-w-[70%] rounded-lg bg-white lg:p-8">
            <div className="relative mb-12">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {localizedStrings["invest_sum"]} (UZS)
              </label>
              <input
                type="text"
                className="text-x border-b-none h-[59px] w-full rounded-md rounded-b-none rounded-t-[8px] border-[1px] border-[#D0D5DD] px-[14px] font-bold text-[#667085]"
                value={`${numberWithSpaces(investment)} UZS`}
                readOnly
              />
              <input
                type="range"
                min="5000000"
                max="1000000000"
                step="1000000"
                className="absolute bottom-[-10px] left-0 w-full accent-red-500"
                value={investment}
                onChange={(e) => {
                  setInvestment(parseInt(e.target.value, 10));
                }}
              />
            </div>

            <div className="relative mb-12">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {localizedStrings["invest_deadline"]}
              </label>
              <input
                type="text"
                className="text-x border-b-none h-[59px] w-full rounded-md rounded-b-none rounded-t-[8px] border-[1px] border-[#D0D5DD] px-[14px] font-bold text-[#667085]"
                value={`${term} ${term == 1 ? localizedStrings["invest_year"] : localizedStrings["invest_years"]}`}
                readOnly
              />
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                className="absolute bottom-[-10px] left-0 w-full accent-red-500"
                value={term}
                onChange={(e) => {
                  setTerm(parseInt(e.target.value, 10));
                }}
              />
            </div>

            <div className="relative mb-12">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {localizedStrings["invest_percent"]} (%)
              </label>
              <input
                type="text"
                className="text-x border-b-none h-[59px] w-full rounded-md rounded-b-none rounded-t-[8px] border-[1px] border-[#D0D5DD] px-[14px] font-bold text-[#667085]"
                value={`${percentage} %`}
                readOnly
              />
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                className="absolute bottom-[-10px] left-0 w-full accent-red-500"
                value={percentage}
                onChange={(e) => {
                  setPercentage(parseInt(e.target.value, 10));
                }}
              />
            </div>
            <div className="text-center text-[16px] text-gray-500 lg:m-12 lg:text-[26px]">
              {localizedStrings["invest_profit"]}{" "}
              <span className="block font-bold">
                {numberWithSpaces(result)} UZS
              </span>
            </div>

            <button
              className="mt-4 w-full rounded-md bg-red-500 py-3 text-lg font-bold text-white shadow-md"
              onClick={handleCalculate}>
              {localizedStrings["invest_count"]}
            </button>

            {showBtn && (
              <button
                className="mt-4 w-full rounded-md border bg-white py-3 text-lg font-bold text-red-500 shadow-lg"
                onClick={() => setShowForm(true)}>
                {localizedStrings["make_request"]}
              </button>
            )}
            <ModalComponent showForm={showForm} onClose={handleClose} />
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 xl:py-24">
        <Container>
          <div className="text-center text-[24px] text-base font-medium text-gray-600">
            {localizedStrings["invest_partners"]}
          </div>
          <div className="mt-8 flex items-end justify-between gap-x-8 gap-y-6 overflow-auto">
            <Image src={feedup} alt="akfa" className="h-9 w-fit xl:h-12" />
            <Image src={akfa} alt="akfa" className="h-9 w-fit xl:h-12" />
            <Image src={artel} alt="artel" className="h-9 w-fit xl:h-12" />
            <Image src={imzo} alt="imzo" className="h-9 w-fit xl:h-12" />
            <Image
              src={caex}
              alt="akfa-build"
              className="h-9 w-fit xl:h-[54px]"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}

const ModalComponent = ({ showForm, onClose }: Props) => {
  return (
    <Dialog.Root open={showForm} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <section>
            <SubmitApplication
              title={"Подать заявку"}
              subtitle="Оставьте заявку и мы свяжемся с вами"
              onClose={onClose}
            />
          </section>
          <Dialog.Close asChild>
            <button className="mt-4 w-full rounded-md bg-red-500 py-2 text-lg font-bold text-white shadow-md">
              Закрыть
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
