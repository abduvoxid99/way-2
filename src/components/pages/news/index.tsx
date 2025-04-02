import React from "react";

import GetInvestment from "@/components/blocks/get-investment";

import Banner from "./banner";
import NewsSection from "./news-section";

export default function News() {
  return (
    <>
      <Banner />
      <NewsSection />
      <GetInvestment className="pt-0" />
    </>
  );
}
