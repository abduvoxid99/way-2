import React from "react";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";

export default function WhyWorkUs() {
  return (
    <section className="py-20 bg-[#000]">
      <Container className="flex flex-col gap-20" size="md">
        <Typography
          className="self-center"
          as="h1"
          variant="h1"
          colorVariant="white">
          Why work with us?
        </Typography>
        <Typography
          className="max-w-[584px]"
          variant="caption"
          colorVariant="white">
          We elevate our clients above the crowd, through integrity,
          intelligence and the timely, dedicated delivery of leading-edge
          projects.
        </Typography>

        <div className="grid grid-cols-3 gap-[50px]">
          {[1, 2, 3].map((el) => (
            <div className="max-w-[313px]">
              <Typography
                colorVariant="white"
                className="font-bold text-[48px]">
                2022
              </Typography>
              <Typography colorVariant="white" variant="p-md">
                Our investment products are structured in accordance Our
                investment products are structured in accordance
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
