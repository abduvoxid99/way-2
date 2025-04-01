import React from "react";

import GetInvestment from "@/components/blocks/get-investment";
import Messages from "@/components/blocks/messages";

import Banner from "./banner";
import Purpose from "./purpose";
import WhyWorkUs from "./why-work-us";

export default function About() {
  return (
    <>
      <Banner />
      <Purpose />
      <WhyWorkUs />
      <Messages />
      <GetInvestment className="pt-0" />
    </>
  );
}
