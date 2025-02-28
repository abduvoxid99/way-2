import React from "react";

import Image from "next/image";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";

import InvestorCard from "./components/investor-card";

export default function Investment() {
  return (
    <section className="py-20">
      <Container size="md" className="flex flex-col items-center gap-20">
        <Typography className="max-w-[840px] mx-auto text-center" variant="h1">
          Understand your customers. Connect teams with insights. Deliver
          experiences that maximize business impact with service
        </Typography>
        <div className="flex">
          <InvestorCard color="blue" className="rotate-[-5deg]" />
          <InvestorCard color="black" className="rotate-[7deg]" />
        </div>

        <Button
          className="w-[217px] h-[56px] text-[#981C1E] font-bold "
          variant={"outline"}>
          GET INVESTMENT
        </Button>
        <div className="w-full p-10 bg-[#000] rounded-xl overflow-hidden relative">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 relative z-1 ">
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-[352px]">
                <Typography variant="h2" className="text-white uppercase">
                  Ready to get started?
                </Typography>
                <Typography variant="caption" className="mt-6 text-white">
                  Advanced analytics reporting of investments refers to using
                  sophisticated data analysis techniques
                </Typography>
                <Button
                  className="w-[185px] h-[48px] text-[#000] font-bold mt-10"
                  variant={"secondary"}>
                  GET INVESTMENT
                </Button>
              </div>
            </div>

            <div className="w-full max-w-[364px] ml-auto max-md:mx-auto">
              <Image
                src="/images/home/analytics.png"
                alt="Responsive Image"
                width={364}
                height={308}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
