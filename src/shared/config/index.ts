import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const numberFormat = new Intl.NumberFormat();

const api = {
  BASE_URL: "https://api.admin.u-code.io",
  KEY: process.env.NEXT_PUBLIC_API_KEY,
};

const pagination = {
  ITEMS_PER_PAGE: 20,
};

export const config = {
  font: openSans,
  numberFormat,
  api,
  pagination,
};
