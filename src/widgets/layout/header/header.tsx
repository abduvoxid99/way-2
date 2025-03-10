import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import WhiteLogoIcon from "@/icons/white-logo";

import Links from "./links";
import TopHeader from "./top-header";

export default function Header() {
  return (
    <>
      <TopHeader />
      <header className="w-full bg-brand-800 sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <Link href="/" className="z-10 cursor-pointer">
            <WhiteLogoIcon />
          </Link>
          <Links />

          <Button variant={"secondary"} className="uppercase">
            Leave a request
          </Button>
        </div>
      </header>
    </>
  );
}
