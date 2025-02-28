import React from "react";

import Image from "next/image";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";

export default function Analytics() {
  return (
    <section>
      <Container className="py-[80px]" size="md">
        <div className="w-full p-10 bg-[#981C1E] rounded-xl overflow-hidden relative">
          <Image
            src="/images/home/analytics-top-left.svg"
            alt="Top Left"
            width={500}
            height={400}
            className="absolute top-0 left-0"
          />

          <Image
            src="/images/home/analytics-top-right.svg"
            alt="Top Right"
            width={100}
            height={100}
            className="absolute top-0 right-0 z-0"
          />

          <Image
            src="/images/home/analytics-bottom-left.svg"
            alt="Bottom Left"
            width={200}
            height={150}
            className="absolute bottom-0 left-0"
          />

          <Image
            src="/images/home/analytics-bottom-right.svg"
            alt="Bottom Right"
            width={420}
            height={300}
            className="absolute bottom-0 right-0"
          />
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 relative z-1 ">
            <div className="flex flex-col justify-center items-center">
              <div className="max-w-[412px]">
                <Typography variant="h2" className="text-white uppercase">
                  Advanced analytics reporting of investments
                </Typography>
                <Typography variant="caption" className="mt-6 text-white">
                  Advanced analytics reporting of investments refers to using
                  sophisticated data analysis techniques
                </Typography>
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
