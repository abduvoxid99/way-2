import React from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

import Container from "../common/container";
import Typography from "../common/typhography";
import { Button } from "../ui/button";

export default function GetInvestment({ className }: { className?: string }) {
  return (
    <section className={cn("py-20", className)}>
      <Container size="md">
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
