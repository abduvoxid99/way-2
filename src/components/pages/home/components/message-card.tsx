import React from "react";

import Typography from "@/components/common/typhography";

export default function MessageCard() {
  return (
    <div className="rounded-sm border border-[#EDEDED] p-10">
      <Typography variant="p-md">
        Advanced analytics reporting of investments refers and Advanced
        analytics reporting of investments refers and
      </Typography>

      <div className="flex gap-3 mt-5">
        <img
          className="w-[50px] h-[50px] object-cover rounded-full"
          src="/images/home/user.png"
          alt="akfa"
        />
        <div className="flex flex-col gap-1">
          <Typography variant="h4">Alex Lennon</Typography>
          <Typography variant="p-xs">Investor</Typography>
        </div>
      </div>
    </div>
  );
}
