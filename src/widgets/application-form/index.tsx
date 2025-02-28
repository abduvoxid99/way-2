import React from "react";
import { Controller, useForm } from "react-hook-form";
import clsx from "clsx";
import { useUnit } from "effector-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  FieldWrapper,
  Label,
  InputGroup,
  Input,
  Textarea,
  Checkbox,
} from "@/shared/ui/fields";
import { Button, Spinner } from "@/shared/ui";
import {
  Input as InputProps,
  Textarea as TextareaProps,
} from "@/shared/types/element";
import { ApplicationBody } from "@/shared/types/api";

import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { $pending, amoCrmFormSubmitted } from "./request-application";

interface FormValues extends ApplicationBody {
  policy: boolean;
}

export const ApplicationForm = ({ onClose, handleClose }: any) => {
  const form = useForm<FormValues>();
  const onSubmitted = useUnit(amoCrmFormSubmitted);

  const submit = async () => {
    const body = form.getValues();

    // @ts-ignore
    delete body["policy"];

    const values = {
      full_name: body.first_name,
      phone_number: body.phone,
      region: `${body.city}, ${body.country}`,
      note: body.message,
      email: body.email,
      platform_type: "website",
    };

    // @ts-ignore
    onSubmitted({ value: values });
    handleClose();
  };

  return (
    <form onSubmit={form.handleSubmit(submit)}>
      <div className="mx-auto mt-0 flex max-h-[60vh] max-w-[480px] flex-col gap-y-6 overflow-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-8">
          <FirstNameField
            invalid={Boolean(form.formState.errors.first_name)}
            {...form.register("first_name", { required: true })}
          />
        </div>
        <CountryField
          invalid={Boolean(form.formState.errors.country)}
          {...form.register("country", { required: true })}
        />
        <CityField
          invalid={Boolean(form.formState.errors.country)}
          {...form.register("city")}
        />
        <PhoneField
          invalid={Boolean(form.formState.errors.phone)}
          {...form.register("phone", {
            required: true,
            validate: (value) => {
              return value.replaceAll(/\D/g, "").length === 9;
            },
          })}
          control={form.control}
        />
        <EmailField
          invalid={Boolean(form.formState.errors.email)}
          {...form.register("email", { required: false })}
        />
        <MessageField
          invalid={Boolean(form.formState.errors.message)}
          {...form.register("message", { required: false })}
        />
        <PolicyField
          invalid={Boolean(form.formState.errors.policy)}
          {...form.register("policy", { validate: (value) => value === true })}
        />
      </div>
      <div className="sticky bottom-0 bg-white py-4">
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
      <Label htmlFor="firstName">{localizedStrings["full_name"]}</Label>
      <Input
        ref={ref}
        id="firstName"
        placeholder={localizedStrings["full_name_placeholder"]}
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
      <Label htmlFor="lastName">{localizedStrings["surname"]}</Label>
      <Input
        ref={ref}
        id="lastName"
        placeholder={localizedStrings["surname"]}
        className={clsx(invalid && "!border-error-600")}
        {...props}
      />
    </FieldWrapper>
  );
});

export const CityField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <FieldWrapper>
      <Label htmlFor="city">{localizedStrings["city"]}</Label>
      <Input
        ref={ref}
        id="city"
        placeholder={localizedStrings["write"]}
        className={clsx(invalid && "!border-error-600")}
        {...props}
      />
    </FieldWrapper>
  );
});

export const CountryField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <FieldWrapper>
      <Label htmlFor="country">{localizedStrings["country"]}</Label>
      <Input
        ref={ref}
        id="country"
        placeholder={localizedStrings["country"]}
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
        <Controller
          name="phone"
          control={props.control}
          rules={{
            required: true,
            validate: (value) => {
              if (!value || !isValidPhoneNumber(value)) {
                return "Invalid phone number";
              }
              return true;
            },
          }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              limitMaxLength={true}
              className="phoneInput"
              international
              defaultCountry="UZ"
              placeholder={localizedStrings["phone_number"]}
            />
          )}
        />
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
      className="sticky bottom-0 h-[50px] w-full"
      disabled={pending}>
      {pending ? (
        <Spinner className="animate-infiniteSpin" />
      ) : (
        localizedStrings["send_request"]
      )}
    </Button>
  );
};
