import React from "react";

import Image from "next/image";

import Container from "@/components/common/container";
import NewsSlider from "@/components/common/swiper";
import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";

import Sidebar from "./sidebar";

export default function NewsDetail() {
  return (
    <div>
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

      <section className="py-20">
        <Container
          className="grid grid-cols-[255px_auto] items-start gap-10"
          size="md">
          <Sidebar />
          <div>
            The government’s commitment to clean energy is evident in several
            key initiatives. The Great British Energy company, a publicly owned
            energy provider established in July 2024, has received an additional
            £125 million for 2025-2026, building on the initial £8.3 billion
            capitalisation. This funding is designed to accelerate the
            development of renewable energy infrastructure and position the UK
            as a global leader in green technologies. Moreover, £3.9 billion
            will be allocated to carbon capture projects between 2025-2026. This
            funding will support the UK's decarbonisation efforts, including the
            first round of green hydrogen production contracts. Additionally,
            £163 million will continue to fund the Industrial Energy
            Transformation Fund, which helps high-emission businesses reduce
            their carbon footprint. To increase energy efficiency in homes, the
            government has allocated £3.4 billion to the Warm Homes Plan, a key
            element of its £13.2 billion strategy to improve household energy
            efficiency. These efforts aim to reduce energy consumption and help
            businesses prepare for stricter environmental regulations. The UK’s
            Autumn Budget 2024, announced on October 30, outlines crucial
            investments and policy changes that will impact the energy sector.
            With Chancellor Rachel Reeves aiming to make Britain a “clean energy
            superpower,” the budget lays the foundation for a more sustainable
            energy future. Here’s a brief summary of the key changes in the
            energy sector;     Investment in Clean Energy and Green Technologies
            The government’s commitment to clean energy is evident in several
            key initiatives. The Great British Energy company, a publicly owned
            energy provider established in July 2024, has received an additional
            £125 million for 2025-2026, building on the initial £8.3 billion
            capitalisation. This funding is designed to accelerate the
            development of renewable energy infrastructure and position the UK
            as a global leader in green technologies. Moreover, £3.9 billion
            will be allocated to carbon capture projects between 2025-2026. This
            funding will support the UK's decarbonisation efforts, including the
            first round of green hydrogen production contracts. Additionally,
            £163 million will continue to fund the Industrial Energy
            Transformation Fund, which helps high-emission businesses reduce
            their carbon footprint. To increase energy efficiency in homes, the
            government has allocated £3.4 billion to the Warm Homes Plan, a key
            element of its £13.2 billion strategy to improve household energy
            efficiency. These efforts aim to reduce energy consumption and help
            businesses prepare for stricter environmental regulations. The UK’s
            Autumn Budget 2024, announced on October 30, outlines crucial
            investments and policy changes that will impact the energy sector.
            With Chancellor Rachel Reeves aiming to make Britain a “clean energy
            superpower,” the budget lays the foundation for a more sustainable
            energy future. Here’s a brief summary of the key changes in the
            energy sector;     Investment in Clean Energy and Green Technologies
            The government’s commitment to clean energy is evident in several
            key initiatives. The Great British Energy company, a publicly owned
            energy provider established in July 2024, has received an additional
            £125 million for 2025-2026, building on the initial £8.3 billion
            capitalisation. This funding is designed to accelerate the
            development of renewable energy infrastructure and position the UK
            as a global leader in green technologies. Moreover, £3.9 billion
            will be allocated to carbon capture projects between 2025-2026. This
            funding will support the UK's decarbonisation efforts, including the
            first round of green hydrogen production contracts. Additionally,
            £163 million will continue to fund the Industrial Energy
            Transformation Fund, which helps high-emission businesses reduce
            their carbon footprint. To increase energy efficiency in homes, the
            government has allocated £3.4 billion to the Warm Homes Plan, a key
            element of its £13.2 billion strategy to improve household energy
            efficiency. These efforts aim to reduce energy consumption and help
            businesses prepare for stricter environmental regulations. The UK’s
            Autumn Budget 2024, announced on October 30, outlines crucial
            investments and policy changes that will impact the energy sector.
            With Chancellor Rachel Reeves aiming to make Britain a “clean energy
            superpower,” the budget lays the foundation for a more sustainable
            energy future. Here’s a brief summary of the key changes in the
            energy sector;     Investment in Clean Energy and Green Technologies
          </div>
        </Container>
      </section>

      <section>
        <Container size="md">
          <NewsSlider />
        </Container>
      </section>
    </div>
  );
}
