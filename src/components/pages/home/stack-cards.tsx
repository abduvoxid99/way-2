import { useEffect, useState } from "react";

import Image from "next/image";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";

interface Card {
  id: number;
  title: string;
  description: string;
  color?: string;
  bgColor?: string;
}

const items: Card[] = [
  {
    id: 1,
    title: "High-yield investment plans.",
    description:
      "Our investment products are structured in accordance with Shariah principles, providing a secure and ethically responsible path to capital growth.",
    color: "#2A9D8F",
    bgColor: "#D2EDC5",
  },
  {
    id: 2,
    title: "Benefits of the WAY II application.",
    description:
      "Our investment products are structured in accordance with Shariah principles, providing a secure and ethically responsible path to capital growth.",
    color: "#6372CE",
    bgColor: "#CDD4F0",
  },
  {
    id: 3,
    title: "WAY Investment affiliate programs",
    description:
      "Our investment products are structured in accordance with Shariah principles, providing a secure and ethically responsible path to capital growth.",
    color: "#E64D4D",
    bgColor: "#FBCDCD",
  },
];

const StackCards = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex justify-center min-h-screen ">
      <Container size="md" className="relative pb-96">
        <Typography
          as="h1"
          variant="h1"
          className="max-w-4xl mx-auto text-center ">
          Understand your customers. Connect teams with insights. Deliver
          experiences that maximize business impact with service
        </Typography>
        {items.map((item, index) => {
          const offset = (index + 1) * 20;
          return (
            <div
              key={item.id}
              className="sticky left-0 grid grid-cols-2 gap-6 right-0 mx-auto w-full shadow bg-[#F7F8F6] rounded-lg mb-5 transition-all duration-300 h-[468px] p-10"
              style={{
                top: `${offset}px`,
                transform: `translateY(${scrollY * 0.1}px)`,
              }}>
              <div className="flex flex-col py-[72px] items-start gap-5">
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="bg-[#E8F7E1] py-2 px-4 rounded">
                  <p
                    style={{ color: item.color }}
                    className="font-bold text-[18px] leading-[21.6px] text-[#60A93E] ">
                    {item.title}
                  </p>
                </div>

                <h3 className="font-bold text-[28px] leading-[33.6px]">
                  {item.title}
                </h3>
                <p className="font-normal text-[18px] leading-[24.51px]">
                  {item.description}
                </p>
              </div>
              <div>
                <div className="w-full max-w-[466px] ml-auto ">
                  <Image
                    src="/images/home/stack-card-1.png"
                    alt="Responsive Image"
                    width={466}
                    height={388}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default StackCards;
