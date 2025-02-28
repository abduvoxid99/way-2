import { cva, cx } from "class-variance-authority";

export const typography = cva("", {
  variants: {
    display: {
      title: "text-4xl font-semibold text-gray-900 xl:text-5xl xl:font-bold",
      subtitle: "text-lg font-normal text-gray-600 xl:text-xl xl:text-gray-900",
    },
  },
});
