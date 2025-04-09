import React from "react";

import { ArrowRightIcon } from "lucide-react";
import { default as Image } from "next/image";
import Link from "next/link";

import { lib } from "@/shared/lib";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

import Container from "@/components/common/container";
import CSlider from "@/components/common/slider";
import Typography from "@/components/common/typhography";
import { careers } from "@/mock/career";

interface CareerItem {
  title: string;
  subtitle: string;
}

export default function Career() {
  const localizedStrings = useLocalizedStrings();
  const addLocaleSuffix = lib.localeWithRu.useAddLocaleSuffixWitRu();

  const careerItems: CareerItem[] = [
    {
      title: localizedStrings["career_profession_1_title"],
      subtitle: localizedStrings["career_profession_1_subtitle"],
    },
    {
      title: localizedStrings["career_profession_2_title"],
      subtitle: localizedStrings["career_profession_2_subtitle"],
    },
    {
      title: localizedStrings["career_profession_3_title"],
      subtitle: localizedStrings["career_profession_3_subtitle"],
    },
    {
      title: localizedStrings["career_profession_4_title"],
      subtitle: localizedStrings["career_profession_4_subtitle"],
    },
    {
      title: localizedStrings["career_profession_5_title"],
      subtitle: localizedStrings["career_profession_5_subtitle"],
    },
    {
      title: localizedStrings["career_profession_3_title"],
      subtitle: localizedStrings["career_profession_6_subtitle"],
    },
  ];

  return (
    <div>
      <section className="py-20 bg-[#F7F8F6]">
        <Container size="md">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(510px,1fr))] gap-5">
            <div className="border rounded-sm py-20 px-10 ">
              <Typography
                as="h1"
                variant="h1"
                className="text-[40px] leading-[42px] ">
                Build your career with strong company’s value and milestone
              </Typography>
              <Typography
                as="h3"
                className="text-2xl leading-[26px] font-normal mt-10">
                Current open job vacancies available, you can find out ...
              </Typography>
            </div>

            <div className="w-full max-w-[510px] max-md:mx-auto rounded-sm overflow-hidden">
              <Image
                src="https://s3-alpha-sig.figma.com/img/53ca/3bcd/f314dcd949471f78faa8c4d38e5aadba?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CB4T9lJFyCxnbAImaZ34AE1vJn31oyzveGMHSGRC4IEkbUGEjl3tudSjn-QRh5chJW371GvipHD1SDJsckiZLxzeLEzJg7Wts-0W3X-qcWgf-r~~rmmZKJLkA5ObNOOZDh5XzWTxWsbKJz72Zj1VTR9qW6C4UjR7nTaJgp-Xt2ErRHGBf~RBsZhZyhiM92Mp-9-0Wt2uHrVGURyixqBtSwETDlAMC2d~bpE9mogkehdF5g7PS8pPnkxLMeai1ibKgVs6xHmQgGTFU5ZLrSsyvIgE3iAMuu~Et1-3JCmHZzkPJqhlmW3h-XrcPMdzqrD2WvQOy56abAW64Z2pqtQTDA__"
                alt="Responsive Image"
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
                width={510}
                height={505}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-[105px] xl:pt-20 overflow-hidden">
        <Container size="md">
          <div className="pb-16 xl:pb-20">
            <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl mb-20">
              {localizedStrings["career_title"]}
            </div>

            <CSlider leftTitle="career_subtitle" sliderItems={careerItems} />
          </div>
        </Container>
      </section>

      <section className="py-16 xl:py-20 bg-[#F7F8F6]">
        <Container size="md">
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl">
            {localizedStrings["career_jobs_title"]}
          </div>
          {/* <div className="mt-4 text-center text-lg font-normal text-gray-600 xl:text-xl">
            {localizedStrings["career_jobs_subtitle"]}
          </div> */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
            {careers?.map((item) => (
              <OpenPosition
                key={item?.id}
                id={item?.id}
                title={item?.[addLocaleSuffix({ key: "title" })]}
                subtitle={item?.[addLocaleSuffix({ key: "description" })]}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

const OpenPosition = ({
  key,
  id,
  title,
  subtitle,
}: {
  key: string;
  id: string;
  title: string;
  subtitle: string;
}) => {
  const localizedStrings = useLocalizedStrings();

  return (
    <div className="w-full flex items-center justify-between p-10 border border-[#EDEDED] rounded-[5px] bg-white">
      <div className="text-2xl font-bold text-gray-900">{title}</div>
      <Link href={`/career/${id}`} passHref>
        <div className="p-3 border border-[#EDEDED] rounded-[5px]">
          <ArrowRightIcon />
        </div>
      </Link>
    </div>
  );
};
