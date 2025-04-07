import React from "react";

import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";
import FacebookIcon from "@/icons/facebook";
import LinkedinIcon from "@/icons/linkedin";
import TelegramIcon from "@/icons/telegram";
import YouTubeIcon from "@/icons/you-tube";

export default function Sidebar() {
  return (
    <div className="px-10 py-10 border border-[#EDEDED] flex flex-col gap-5 rounded-sm">
      <div>
        <Typography variant="p-lg" className="text-[#999999]">
          Post on
        </Typography>
        <Typography className="mt-2" variant="p-lg">
          February 12, 2025
        </Typography>
      </div>
      <div className="h-[1px] bg-[#EDEDED] mx-[-20px]"></div>

      <div>
        <Typography variant="p-lg" className="text-[#999999]">
          Share this post
        </Typography>

        <div className="flex gap-3 items-center mt-2">
          <Button className="w-[34px] h-[34px] bg-black" size={"icon"}>
            <TelegramIcon />
          </Button>
          <Button className="w-[34px] h-[34px] bg-black" size={"icon"}>
            <LinkedinIcon />
          </Button>
          <Button className="w-[34px] h-[34px] bg-black" size={"icon"}>
            <YouTubeIcon />
          </Button>
          <Button className="w-[34px] h-[34px] bg-black" size={"icon"}>
            <FacebookIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
