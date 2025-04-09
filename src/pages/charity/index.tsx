import React from "react";

import Head from "next/head";
import Image, { StaticImageData } from "next/image";

import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

import independance from "@/../public/images/independance.jpg";
import kindergarten from "@/../public/images/kindegarden.jpg";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";

export default function HomePage() {
  const localizedStrings = useLocalizedStrings();
  return (
    <div>
      <Head>
        <title>Charity comes first</title>
      </Head>

      <section className="py-20 pb-[160px] bg-[#F7F8F6]">
        <Container size="md">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(510px,1fr))] gap-5">
            <div className="border rounded-sm py-20 px-10 ">
              <Typography
                as="h1"
                variant="h1"
                className="text-[40px] leading-[42px] ">
                Our commitment to positive change
              </Typography>
              <Typography
                as="h3"
                className="text-2xl leading-[26px] font-normal mt-10">
                We are committed to fostering a more equitable society active
                participation in social initiatives and community engagement.
              </Typography>
            </div>

            <div className="w-full max-w-[510px] max-md:mx-auto rounded-sm overflow-hidden">
              <Image
                src="https://s3-alpha-sig.figma.com/img/50f9/0733/9912177b792de082841537dcc6218e60?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q2PJ-kdDlyGEGyvSOItMlvBz3AZvUF2fSCH8TsiOaLPU0ch6TgiblbAJh2mAxcbAPo7WYTgtClF4itYP9-eROZnU9bCBQTKfJY-tv9xLyrrF0Tnugq-IrUBje3Sl5Ti1kHgrVtO9VhrTamR-179hT1pXwZGm5BMxGn6eZHA1KL6E3PRa0qM-jbH1Lh3m0y3AFE2cXjbpi3AgFSdZR06TEHA4O8uiOc4bMumqVFLddN-57bblvn~8jBewcKjeleP4oEAclaATu8RY8ygeCVXISfg0hBFbdgZyK-e6goU1SEf8WRarzxNBJRuQGXpCDCnHJqhv~S7re8tQZ-U7fWnz6Q__"
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
      <Container className="mt-[-80px]" size="md">
        <div className="grid grid-cols-2 gap-5">
          <div className="border border-[#EDEDED] bg-white rounded-sm grid grid-cols-[72px_auto] gap-5 p-10">
            <div className="p-5 border border-[#DCE0D7] rounded-sm w-[72px] h-[72px]">
              <img src="/icons/hand.svg" alt="img" />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h3">Support for those in need</Typography>
              <Typography variant="p-md">
                Our primary focus is dedicated to assisting individuals facing
                adversity
              </Typography>
            </div>
          </div>
          <div className="border border-[#EDEDED] bg-white rounded-sm grid grid-cols-[72px_auto] gap-5 p-10">
            <div className="p-5 border border-[#DCE0D7] rounded-sm w-[72px] h-[72px]">
              <img src="/icons/hand.svg" alt="img" />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h3">Support for those in need</Typography>
              <Typography variant="p-md">
                Our primary focus is dedicated to assisting individuals facing
                adversity
              </Typography>
            </div>
          </div>
        </div>
      </Container>

      <section className="py-20">
        <Container size="md">
          <Typography className="text-[40px] font-bold">
            Our commitment to positive change
          </Typography>

          <div className="grid grid-cols-2 gap-5 mt-10">
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
          </div>
        </Container>
      </section>
    </div>
  );
}

const Article = ({
  image,
  title,
  date,
  description,
}: {
  image: StaticImageData | string;
  title: string;
  date: string;
  description: string;
}) => (
  <div className="overflow-hidden rounded-lg bg-white border border-[#EDEDED] p-10">
    <Image
      src={image}
      alt={title}
      className="h-48 w-full object-cover rounded-sm"
    />
    <div className="mt-5">
      <div className="flex justify-between">
        <Typography variant="p-xs">Independence Day</Typography>
        <Typography variant="p-xs">12.02.2025</Typography>
      </div>

      <Typography variant="h3">Our investment structured</Typography>
    </div>
  </div>
);
