import React from "react";

import Link from "next/link";

import Typography from "@/components/common/typhography";
import WhiteLogoIcon from "@/icons/white-logo";

export default function FooterLinks() {
  return (
    <div>
      <WhiteLogoIcon />
      <Typography
        variant="p-xs"
        colorVariant="white"
        className="mt-3 max-w-[380px]">
        As a trusted partner in the investment world, Way ll Management provides
        exceptional opportunities
      </Typography>

      <div className="grid grid-cols-2 justify-between max-w-[267px] mt-10">
        <div className="flex flex-col gap-2">
          <Link
            href={"/home"}
            className="text-white font-medium text-[16px] leading-5 uppercase">
            Home
          </Link>
          <Link
            href={"/about-us"}
            className="text-white font-medium text-[16px] leading-5 uppercase">
            About us
          </Link>
          <Link
            href={"/cherity"}
            className="text-white font-medium text-[16px] leading-5 uppercase">
            Cherity
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href={"/media"}
            className="text-white font-medium text-[16px] leading-5 uppercase">
            Media
          </Link>
          <Link
            href={"/career"}
            className="text-white font-medium text-[16px] leading-5 uppercase">
            Career
          </Link>
        </div>
      </div>
    </div>
  );
}
