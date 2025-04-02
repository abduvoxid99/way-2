import React from "react";

import Image from "next/image";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="py-20 bg-[#F7F8F6]">
      <Container size="md">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(510px,1fr))] gap-5">
          <div className="border rounded-sm py-20 px-10 ">
            <Typography
              as="h1"
              variant="h1"
              className="text-[40px] leading-[42px] ">
              Breaking news are waiting you and get your information
            </Typography>
            <Typography
              as="h3"
              className="text-2xl leading-[26px] font-normal mt-10">
              As a trusted partner in the investment world, Way ll Management
              provides exceptional opportunities to grow
            </Typography>

            <div className="flex gap-5 mt-10">
              <Button
                variant={"outline"}
                className="rounded-[30px] h-[34px] border-[#DCE0D7] bg-transparent">
                WAY II
              </Button>
              <Button
                variant={"outline"}
                className="rounded-[30px] h-[34px] border-[#DCE0D7] bg-transparent">
                PASHA Holding
              </Button>
            </div>
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
  );
}
