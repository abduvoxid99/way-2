import React from "react";
import clsx from "clsx";

import { Div } from "@/shared/types/element";

export const Container = ({ className, children, ...props }: Div) => (
  <div className={clsx("px-4 sm:px-6 md:px-12 xl:px-28", className)} {...props}>
    {children}
  </div>
);

export const ContainerSm = ({ className, children, ...props }: Div) => (
  <div className={clsx("px-4 sm:px-6 md:px-6 xl:px-12", className)} {...props}>
    {children}
  </div>
);
