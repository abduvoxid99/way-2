import { cva, VariantProps } from "class-variance-authority";

import { Button as ButtonType } from "@/shared/types/element";

const button = cva(
  "flex items-center justify-center rounded-lg border border-solid transition-[background-color] duration-100 ease-linear focus:shadow-[0_0_0_4px,0_1px_2px_0_rgb(16_24_40_/_5%)] gap-x-2 disabled:opacity-70 disabled:cursor-not-allowed",
  {
    variants: {
      appearance: {
        secondaryGray:
          "text-gray-700 border-gray-300 bg-white hover:bg-gray-50 font-semibold focus:shadow-gray-100",
        destructive:
          "text-white bg-error-600 focus:shadow-error-100 hover:bg-error-700",
      },
      size: {
        md: "px-4 py-2.5 text-sm",
        xl: "px-5 py-3 text-base",
      },
    },
  },
);

interface ButtonProps extends VariantProps<typeof button>, ButtonType {}

export const Button = ({
  appearance,
  size,
  className,
  children,
  ...props
}: ButtonProps) => (
  <button className={button({ appearance, size, className })} {...props}>
    {children}
  </button>
);
