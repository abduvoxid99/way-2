import React from "react";

import Image from "next/image";

import Typography from "@/components/common/typhography";

export default function NewCard() {
  return (
    <div className="rounded-sm border border-[#EDEDED] p-10">
      <div className="w-full max-w-[250px]">
        <Image
          width={250}
          height={180}
          src="/images/home/user.png"
          alt="akfa"
        />
      </div>

      <div className="mt-5 flex justify-between">
        <p className="text-sm leading-4">Finance</p>
        <p className="text-sm leading-4">12.02.2025</p>
      </div>

      <Typography className="mt-5" variant="h3">
        Our investment structured
      </Typography>
    </div>
  );
}
