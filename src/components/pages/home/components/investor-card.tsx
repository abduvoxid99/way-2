import React from "react";

import Typography from "@/components/common/typhography";
import { cn } from "@/lib/utils";

const colorScheme = {
  blue: {
    bg: "#464EBD",
    first_text: "#CDD4F0",
    second_text: "#8192D9",
    description: "#8192D9",
  },
  black: {
    bg: "#000",
    first_text: "#fff",
    second_text: "#E0E0E0",
    description: "#545454",
  },
};

export default function InvestorCard({
  className,
  color,
}: {
  className?: string;
  color?: "black" | "blue";
}) {
  const { bg, first_text, second_text, description } =
    colorScheme[color || "blue"];

  return (
    <div
      style={{ backgroundColor: bg }}
      className={cn(
        "rounded-sm p-5 flex flex-col justify-between bg-[#464EBD] w-[270px] h-[310px]",
        className,
      )}>
      <div>
        <Typography
          style={{ color: first_text }}
          variant="h3"
          className="text-[#F2F4FC]">
          + 789
        </Typography>
        <Typography
          style={{ color: second_text }}
          variant="h4"
          className="text-[#CDD4F0]">
          Satisfy Investors
        </Typography>
      </div>
      <Typography style={{ color: description }} className="text-[#8192D9]">
        Our investment products are structured in accordance with Shariah
        principles
      </Typography>
    </div>
  );
}
