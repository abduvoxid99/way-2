import React from "react";

import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Text style variant
   * - `h1`: 32px bold
   * - `h2`: 28px bold
   * - `h3`: 24px bold
   * - `h4`: 20px bold
   * - `p-lg`: 18px bold
   * - `p-md`: 18px normal
   * - `p-sm`: 16px semi-bold
   * - `p-xs`: 16px normal
   * - `caption`: 20px normal
   */
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

  /**
   * The HTML tag to render
   * @default p
   */
  as?: "h1" | "h2" | "h3" | "p";

  /**
   * Text color variant
   * - `white`: white in light mode, black in dark
   * - `black`: black in light mode, white in dark
   * - `error`: error color
   */
  colorVariant?: "white" | "black" | "error";
}

const Typography: React.FC<TypographyProps> = ({
  as: Tag = "p",
  variant = "p-sm",
  colorVariant = "black",
  className,
  ...props
}) => {
  const baseStyles = {
    h1: "text-[32px] font-bold leading-[120%]",
    h2: "text-[28px] font-bold leading-[120%]",
    h3: "text-[24px] font-bold leading-[120%]",
    h4: "text-[20px] font-bold leading-[120%]",
    "p-lg": "text-[18px] font-bold leading-[120%]",
    "p-md": "text-[18px] font-normal leading-[100%]",
    "p-sm": "text-[16px] font-semibold leading-[120%]",
    "p-xs": "text-[16px] font-normal leading-[120%]",
    caption: "font-normal text-[20px] leading-[120%]",
  };

  const colorStyles = {
    white: "text-white dark:text-black",
    error: "text-brand-600",
    black: "text-black dark:text-white",
  };

  return (
    <Tag
      className={cn(baseStyles[variant], colorStyles[colorVariant], className)}
      {...props}
    />
  );
};

export default Typography;
