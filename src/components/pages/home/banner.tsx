import React from "react";

import Image from "next/image";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="w-full bg-[#981C1E]">
      <Container>
        <div className="py-[80px] grid grid-cols-2 max-md:grid-cols-1 gap-6 ">
          <div className="flex flex-col gap-10">
            <Typography
              as="h1"
              className="text-[40px] leading-[48px] font-bold text-white">
              Become an Investor Partner with an established business today.
            </Typography>
            <Typography variant="h3" className="font-normal mt-4 text-white">
              As a trusted partner in the investment world, Way ll Management
              provides exceptional opportunities to grow your capital and
              achieve financial independence. Discover how we can empower your
              investment journey.
            </Typography>
            <Button
              className="w-[217px] h-[56px] text-[#981C1E] font-bold"
              variant={"secondary"}>
              GET INVESTMENT
            </Button>
          </div>

          <div className="w-full max-w-[520px] ml-auto max-md:mx-auto">
            <Image
              src="/images/home/banner.png"
              alt="Responsive Image"
              width={520}
              height={440}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
