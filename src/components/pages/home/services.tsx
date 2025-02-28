import React from "react";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";

import TariffCard from "./components/tariff-card";

export default function Services() {
  return (
    <section className="min-h-[907px] px-5 w-full ">
      <div
        style={{ backgroundImage: "url('/images/home/service-bg.png')" }}
        className="w-full min-h-[907px] bg-cover bg-center bg-no-repeat rounded-[10px] overflow-hidden max-w-[1400px] mx-auto py-20">
        <Container size="md">
          <Typography
            variant="h1"
            className="mx-auto max-w-[840px] text-center text-white ">
            Empowering the right experience for every customer, everywhere
          </Typography>
          <div className="grid grid-cols-[423px_auto] gap-5 mt-20">
            <div className="p-10 border border-[#363636] rounded-sm bg-light/5 backdrop-blur-[4px]">
              <div className="bg-[#7E1E20] p-6 rounded-sm">
                <h2 className="font-bold text-[64px] leading-[76px] text-[#FEF2F2] whitespace-nowrap ">
                  ~10 - 15%
                </h2>
              </div>
              <Typography
                variant="h2"
                className="max-w-[343px] text-[#F6F6F6] mt-5">
                Our investment products are structured in accordance with
                Shariah principles
              </Typography>
            </div>
            <div className="bg-[#F7F8F6] rounded-sm p-10 flex flex-col gap-5 items-start">
              <div className="p-5 rounded-sm bg-white">
                <img src="/images/home/akfa.svg" alt="akfa" />
              </div>
              <Typography variant="h2">AKFA ALIMINUIM GROUP</Typography>
              <Typography variant="p-lg">
                Our investment products are structured in accordance with
                Shariah principles, providing a secure and ethically responsible
                path to capital growth. Our investment products are structured
                in accordance with Shariah principles, providing a secure and
                ethically responsible
              </Typography>
            </div>
          </div>

          <div className="grid grid-cols-[423px_auto] gap-5 px-10 py-[72px] bg-[#262626] rounded-sm mt-5">
            <Typography variant="h3" className="max-w-[348px]  text-white">
              Our investment products are structured in accordance with Shariah
              principles
            </Typography>

            <div className="flex gap-5 ">
              <TariffCard name="Gold Next" className="bg-[#464EBD]" />
              <TariffCard name="Standart" className="bg-[#D33131]" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
