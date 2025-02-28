import clsx from "clsx";

import { Input } from "@/shared/types/element";

import style from "./style.module.css";
import React from "react";

export const Checkbox = React.forwardRef<HTMLInputElement, Input>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={clsx(className, style["custom-checkbox"])}
      {...props}
    />
  ),
);
