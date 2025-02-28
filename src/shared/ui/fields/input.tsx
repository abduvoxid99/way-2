import clsx from "clsx";

import {
  Div,
  Input as InputType,
  Label as LabelType,
  Textarea as TextareaType,
} from "@/shared/types/element";
import React from "react";

export const FieldWrapper = ({ className, children, ...props }: Div) => (
  <div
    className={clsx("flex w-full flex-col gap-y-[6px]", className)}
    {...props}>
    {children}
  </div>
);

export const Label = ({ className, children, ...props }: LabelType) => (
  <label
    className={clsx(className, "text-sm font-medium text-gray-700")}
    {...props}>
    {children}
  </label>
);

export const InputGroup = ({ className, children, ...props }: Div) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-x-3 rounded-lg border border-solid border-gray-300 bg-white px-[14px] py-[10px] transition-colors hover:border-gray-400 [&>input]:border-none [&>input]:p-0",
        className,
      )}
      {...props}>
      {children}
    </div>
  );
};

export const Input = React.forwardRef<HTMLInputElement, InputType>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="text"
      className={clsx(
        className,
        "w-full rounded-lg border border-solid border-gray-300 px-[14px] py-[10px] text-base font-normal outline-none transition-colors placeholder:text-gray-500 hover:border-gray-400 focus-visible:border-gray-600",
      )}
      {...props}
    />
  ),
);

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaType>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        className,
        "w-full resize-none rounded-lg border border-solid border-gray-300 px-[14px] py-[12px] text-base font-normal outline-none transition-colors placeholder:text-gray-500 hover:border-gray-400 focus-visible:border-gray-600",
      )}
      {...props}
    />
  ),
);
