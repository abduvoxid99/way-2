import React from "react";

import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p-lg"
    | "p-md"
    | "p-sm"
    | "p-xs"
    | "caption";
  as?: "h1" | "h2" | "h3" | "p";
}

const Typography: React.FC<TypographyProps> = ({
  as: Tag = "p",
  variant = "p-sm",
  className,
  ...props
}) => {
  const baseStyles = {
    h1: "text-[32px] font-bold leading-[38.4px]",
    h2: "text-[28px] font-bold leading-[33.6px]",
    h3: "text-[24px] font-bold leading-[28.8px]",
    h4: "text-[20px] font-bold leading-[24px]",
    "p-lg": "text-[18px] font-bold leading-[21.6px]",
    "p-md": "text-[18px] font-normal leading-[24.51px]",
    "p-sm": "text-[16px] font-semibold leading-[19.2px]",
    "p-xs": "text-[16px] font-normal leading-[19.2px]",
    caption: "font-normal text-[20px] leading-[24px]",
  };

  return <Tag className={cn(baseStyles[variant], className)} {...props} />;
};

export default Typography;
