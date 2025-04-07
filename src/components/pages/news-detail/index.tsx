import React from "react";

import Image from "next/image";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";

export default function NewsDetail() {
  return (
    <section className="py-20 bg-[#F7F8F6]">
      <Container size="md">
        <Button variant={"outline"} className="rounded-[30px] h-[34px]">
          Investing
        </Button>
        <Typography className="text-[40px] leading-[120%] mt-5 max-w-[1040px]">
          Breaking news are waiting you and get your information
        </Typography>

        <Image
          className="mt-10 rounded-sm"
          src="https://s3-alpha-sig.figma.com/img/53ca/3bcd/f314dcd949471f78faa8c4d38e5aadba?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CB4T9lJFyCxnbAImaZ34AE1vJn31oyzveGMHSGRC4IEkbUGEjl3tudSjn-QRh5chJW371GvipHD1SDJsckiZLxzeLEzJg7Wts-0W3X-qcWgf-r~~rmmZKJLkA5ObNOOZDh5XzWTxWsbKJz72Zj1VTR9qW6C4UjR7nTaJgp-Xt2ErRHGBf~RBsZhZyhiM92Mp-9-0Wt2uHrVGURyixqBtSwETDlAMC2d~bpE9mogkehdF5g7PS8pPnkxLMeai1ibKgVs6xHmQgGTFU5ZLrSsyvIgE3iAMuu~Et1-3JCmHZzkPJqhlmW3h-XrcPMdzqrD2WvQOy56abAW64Z2pqtQTDA__"
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "505px",
            objectFit: "cover",
          }}
          width={1040}
          height={505}
        />
      </Container>
    </section>
  );
}
