import React from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import Analytics from "./analytics";
import Banner from "./banner";
import Investment from "./investment";
import Messages from "./messages";
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
    </>
  );
}
