import React from "react";

import Typography from "@/components/common/typhography";
import UzsIcon from "@/icons/uzs";
import { cn } from "@/lib/utils";

export default function TariffCard({
  className,
  name,
}: {
  className?: string;
  name?: string;
}) {
  return (
    <div className={cn("p-[5px] rounded-sm", className)}>
      <div className="px-3 py-2.5 bg-white/20 rounded-sm">
        <Typography variant="h3" className="text-white">
          {name}
        </Typography>
      </div>
      <div className="p-5 whitespace-nowrap flex flex-col gap-3">
        <div className="flex gap-5">
          <Typography variant="p-sm" className="text-white">
            Lot price:
          </Typography>
          <Typography variant="p-sm" className="text-white flex gap-1">
            71 414 420 <UzsIcon />
          </Typography>
        </div>
        <div className="flex gap-5">
          <Typography variant="p-sm" className="text-white">
            Deadline:
          </Typography>
          <Typography variant="p-sm" className="text-white flex gap-1">
            71 414 420 <UzsIcon />
          </Typography>
        </div>
      </div>
    </div>
  );
}
