import React from "react";

import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";
import CallIcon from "@/icons/call";
import MessageIcon from "@/icons/message";

export default function FooterContact() {
  return (
    <div>
      <div>
        <Typography variant="h1" colorVariant="white">
          Write to us!
        </Typography>
        <Typography
          className="mt-5 font-semibold"
          colorVariant="white"
          variant="h3">
          We are ready to help you build happiness
        </Typography>
      </div>
      <div>
        <div className="flex gap-3 items-center">
          <Button className="w-[34px] h-[34px] bg-brand-800" size={"icon"}>
            <CallIcon />
          </Button>
          <Typography variant="p-lg" colorVariant="white">
            <a href="tel:+998 78 555 55 55">+998 (78) 555 - 55 - 55</a>
          </Typography>
        </div>
        <div className="flex gap-3 items-center mt-2">
          <Button className="w-[34px] h-[34px] bg-brand-800" size={"icon"}>
            <MessageIcon />
          </Button>
          <Typography variant="p-lg" colorVariant="white">
            <a href="mailto:Way2Invest@gmail.com">Way2Invest@gmail.com</a>
          </Typography>
        </div>
      </div>
    </div>
  );
}
