import React from "react";

import GetInvestment from "@/components/blocks/get-investment";
import Messages from "@/components/blocks/messages";

import Analytics from "./analytics";
import Banner from "./banner";
import FAQ from "./faq";
import Investment from "./investment";
import News from "./news";
import Services from "./services";
import StackCards from "./stack-cards";

export default function Home() {
  return (
    <>
      <Banner />
      <Analytics />
      <StackCards />
      <Services />
      <Messages />
      <Investment />
      <GetInvestment />
      <FAQ />
      <News />
    </>
  );
}
