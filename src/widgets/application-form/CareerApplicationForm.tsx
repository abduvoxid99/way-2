import React from "react";

import clsx from "clsx";
import { useUnit } from "effector-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

import {
  Checkbox,
  FieldWrapper,
  Input,
  InputGroup,
  Label,
  Textarea,
} from "@/shared/ui/fields";

import { api } from "@/shared/api";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { ApplicationBody } from "@/shared/types/api";
import {
  Input as InputProps,
  Textarea as TextareaProps,
} from "@/shared/types/element";
import { Button, Spinner } from "@/shared/ui";

import uploadIcon from "@/../public/images/upload-icon.svg";

import { $pending, formSubmitted } from "./model";

interface FormValues extends ApplicationBody {
  policy?: boolean;
}

export const CareerApplicationForm = () => {
  const form = useForm<FormValues>();
  const onSubmitted = useUnit(formSubmitted);

  const submit = async () => {
    const body = form.getValues();
    // @ts-ignore
    delete body["policy"];
    onSubmitted({ value: body });
  };

  return (
    <form onSubmit={form.handleSubmit(submit)}>
      <div className="mx-auto mt-16 flex max-w-[480px] flex-col gap-y-6 rounded bg-white p-6">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-8">
          <FirstNameField
            invalid={Boolean(form.formState.errors.first_name)}
            {...form.register("first_name", { required: true })}
          />
          <LastNameField
            invalid={Boolean(form.formState.errors.last_name)}
            {...form.register("last_name", { required: true })}
          />
        </div>
        <EmailField
          invalid={Boolean(form.formState.errors.email)}
          {...form.register("email", { required: true })}
        />
        <PhoneField
          invalid={Boolean(form.formState.errors.phone)}
          {...form.register("phone", {
            required: true,
            validate: (value) => {
              return value.replaceAll(/\D/g, "").length === 9;
            },
          })}
        />
        <MessageField
          invalid={Boolean(form.formState.errors.message)}
          {...form.register("message", { required: true })}
        />
        <FileUploadField
          invalid={Boolean(form.formState.errors?.file)}
          {...form.register("file", { required: true })}
        />
        <PolicyField
          invalid={Boolean(form.formState.errors.policy)}
          {...form.register("policy", { validate: (value) => value === true })}
        />
        <SubmitButton />
      </div>
    </form>
  );
};

interface FieldProps {
  invalid: boolean;
}

export const FirstNameField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <FieldWrapper>
      <Label htmlFor="firstName">{localizedStrings["first_name"]}</Label>
      <Input
        ref={ref}
        id="firstName"
        placeholder={localizedStrings["first_name"]}
        className={clsx(invalid && "!border-error-600")}
        {...props}
      />
    </FieldWrapper>
  );
});

export const LastNameField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <FieldWrapper>
      <Label htmlFor="lastName">{localizedStrings["last_name"]}</Label>
      <Input
        ref={ref}
        id="lastName"
        placeholder={localizedStrings["last_name"]}
        className={clsx(invalid && "!border-error-600")}
        {...props}
      />
    </FieldWrapper>
  );
});

export const EmailField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <FieldWrapper>
      <Label htmlFor="email">Email</Label>
      <Input
        ref={ref}
        type="email"
        id="email"
        placeholder={localizedStrings["yourEmail"]}
        className={clsx(invalid && "!border-error-600")}
        {...props}
      />
    </FieldWrapper>
  );
});

export const PhoneField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <FieldWrapper>
      <Label htmlFor="phone">{localizedStrings["phone_number"]}</Label>
      <InputGroup className={clsx(invalid && "!border-error-600")}>
        <span>+998</span>
        <InputMask
          id="phone"
          mask="(99)999-99-99"
          placeholder="(00)000-00-00"
          {...props}>
          <Input ref={ref} />
        </InputMask>
      </InputGroup>
    </FieldWrapper>
  );
});

export const MessageField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps & FieldProps
>(({ invalid, ...props }, ref) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <FieldWrapper>
      <Label htmlFor="message">{localizedStrings["sms"]}</Label>
      <Textarea
        ref={ref}
        id="message"
        placeholder={localizedStrings["leave_sms"]}
        className={clsx("h-[134px]", invalid && "!border-error-600")}
        {...props}
      />
    </FieldWrapper>
  );
});

export const FileUploadField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <FieldWrapper className="!flex-col items-center justify-center rounded-md border border-solid border-[#D0D5DD] p-6 text-center">
      <div className="flex flex-col items-center gap-y-2">
        <Image src={uploadIcon} alt="upload" className="h-[40px] w-[40px]" />
        <input
          ref={ref}
          type="file"
          id="file"
          className={clsx("hidden", invalid && "!border-error-600")}
          {...props}
        />
        <Label
          htmlFor="file"
          className="cursor-pointer font-normal text-[#475467]">
          <span className="font-[600] text-[#C75A51]"> Click to upload</span> or
          {localizedStrings["drag_drop"]}
        </Label>
        <span className="text-[14px] text-sm font-normal text-[#475467]">
          .doc, PDF or JPG (max. 800x400px)
        </span>
      </div>
    </FieldWrapper>
  );
});

export const PolicyField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <FieldWrapper className="!flex-row items-center gap-x-3">
      <Checkbox
        ref={ref}
        id="policy"
        {...props}
        className={clsx(invalid && "!border-error-600")}
      />
      <label htmlFor="policy" className="text-base font-normal text-gray-600">
        {localizedStrings["rules_agreement"]}
        {invalid && <span className="text-error-600">*</span>}
      </label>
    </FieldWrapper>
  );
});

export const SubmitButton = () => {
  const pending = useUnit($pending);
  const localizedStrings = useLocalizedStrings();
  return (
    <Button
      appearance="destructive"
      size="xl"
      className="mt-2 h-[50px]"
      disabled={pending}>
      {pending ? (
        <Spinner className="animate-infiniteSpin" />
      ) : (
        localizedStrings["send_request"]
      )}
    </Button>
  );
};
