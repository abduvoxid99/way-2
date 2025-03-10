import React from "react";

import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";
import FacebookIcon from "@/icons/facebook";
import LinkedinIcon from "@/icons/linkedin";
import TelegramIcon from "@/icons/telegram";
import YouTubeIcon from "@/icons/you-tube";

export default function FooterSocial() {
  return (
    <div>
      <Typography colorVariant="white" variant="p-lg">
        Social Media
      </Typography>

      <div className="grid grid-cols-2 gap-10 max-w-[290px] mt-3">
        <div className="flex flex-col gap-2 items-start">
          <a className="flex gap-3 items-center " href="" target="_blank">
            <Button className="w-[34px] h-[34px] bg-brand-800" size={"icon"}>
              <TelegramIcon />
            </Button>
            <Typography
              className="font-semibold"
              variant="p-lg"
              colorVariant="white">
              Telegram
            </Typography>
          </a>
          <a className="flex gap-3 items-center" href="" target="_blank">
            <Button className="w-[34px] h-[34px] bg-brand-800" size={"icon"}>
              <FacebookIcon />
            </Button>
            <Typography
              className="font-semibold"
              variant="p-lg"
              colorVariant="white">
              Facebook
            </Typography>
          </a>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <a className="flex gap-3 items-center" href="" target="_blank">
            <Button className="w-[34px] h-[34px] bg-brand-800" size={"icon"}>
              <LinkedinIcon />
            </Button>
            <Typography
              className="font-semibold"
              variant="p-lg"
              colorVariant="white">
              Linkedin
            </Typography>
          </a>
          <a className="flex gap-3 items-center" href="" target="_blank">
            <Button className="w-[34px] h-[34px] bg-brand-800" size={"icon"}>
              <YouTubeIcon />
            </Button>
            <Typography
              className="font-semibold"
              variant="p-lg"
              colorVariant="white">
              YouTube
            </Typography>
          </a>
        </div>
      </div>
    </div>
  );
}
