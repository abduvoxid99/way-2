import React from "react";

import Image from "next/image";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";

export default function Purpose() {
  return (
    <section className="py-20">
      <Container className="flex flex-col gap-20" size="md">
        <Typography as="h1" variant="h1">
          Our purpose
        </Typography>
        <Typography variant="h4" className="max-w-[584px]">
          We elevate our clients above the crowd, through integrity,
          intelligence and the timely, dedicated delivery of leading-edge
          projects.
        </Typography>

        <div className="flex gap-5 justify-between">
          <div className="border border-neutral-100 rounded-sm p-10">
            <Typography variant="h2">Our team</Typography>
            <Typography variant="p-md">
              Our investment products are structured in accordance Our
              investment products are structured in accordance
            </Typography>
          </div>
          <div className="border border-neutral-100 rounded-sm p-10">
            <Typography variant="h2">Our story</Typography>
            <Typography variant="p-md">
              Our investment products are structured in accordance Our
              investment products are structured in accordance
            </Typography>
          </div>
        </div>

        <div className="w-full p-10 bg-[#F7F8F6] rounded-sm">
          <div className="grid grid-cols-[336px_auto] gap-10">
            <div className="max-w-[336px]">
              <Image
                src="https://s3-alpha-sig.figma.com/img/b359/a60b/be528859adff4cbc9a37803d90cc6f1f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MBTiH3g5Slpq7VA0bBL7WDG6QrnQdiqTJgG~9FAsWJBCsLtNXikujLSfSIGu6g1rNUtSbFkQXKjJLoGp461g8-vrNbDDsFHCmiBuz7d7Nb383NI8waZ5A0edT4j0XorsGmyvzH7I4~WQIDUknv-btYAmS29wx5CUPShsM3CC5Bo3rnIhlcXhI1ujAiPdbFdj9eGveoerGdfdzufOC6H7n6IM1kGcfgb4QDHMqHZmmJTyokM8KmhsgXMW2B3wHMUb5UsM741srHfoZgZRbFeAGH4TklcAsmWH9wAVL0ZHdbgfFWwYzMRwy0xJQ2V3jTuRsoavu66txMKoQD34egpXdA__"
                alt="Responsive Image"
                width={336}
                height={337}
              />
            </div>
            <div className="py-[60px] px-10 relative">
              <img
                className="absolute left-0 top-[25px]"
                src="/icons/quote-up.svg"
                alt="img"
              />
              <Typography variant="caption" className="italic">
                Way II Management is a leading investment company dedicated to
                fostering dynamic growth in Uzbekistan's capital market. We
                achieve this by offering innovative investment opportunities
                that create significant value for all stakeholders. Way II aims
                to provide access to investment opportunities that promote
                financial inclusion across the country. We empower individuals
                by offering a range of financial tools that support capital
                growth and long-term well-being.
              </Typography>
              <img
                className="absolute right-0 bottom-[25px] rotate-180"
                src="/icons/quote-up.svg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
