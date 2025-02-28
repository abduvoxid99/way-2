import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import clsx from "clsx";
import { useUnit } from "effector-react";

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

import { $pending, formSubmitted } from "./model";
import { api } from "@/shared/api";

interface FormValues extends ApplicationBody {
  policy: boolean;
}

export const InvestmentApplicationForm = () => {
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
      <div className="mx-auto mt-16 flex max-w-[480px] flex-col gap-y-6">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-8">
          <FirstNameField
            invalid={Boolean(form.formState.errors.first_name)}
            {...form.register("first_name", { required: true })}
          />
          {/* <LastNameField
            invalid={Boolean(form.formState.errors.last_name)}
            {...form.register("last_name", { required: true })}
          /> */}
        </div>
        <CountryField
          invalid={Boolean(form.formState.errors.country)}
          {...form.register("country", { required: true })}
        />
        <CityField
          invalid={Boolean(form.formState.errors.country)}
          {...form.register("city", { required: true })}
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
        <EmailField
          invalid={Boolean(form.formState.errors.email)}
          {...form.register("email", { required: true })}
        />
        <MessageField
          invalid={Boolean(form.formState.errors.message)}
          {...form.register("message", { required: true })}
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
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="firstName">Полное имя</Label>
    <Input
      ref={ref}
      id="firstName"
      placeholder="ФИО"
      className={clsx(invalid && "!border-error-600")}
      {...props}
    />
  </FieldWrapper>
));

export const LastNameField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="lastName">Фамилия</Label>
    <Input
      ref={ref}
      id="lastName"
      placeholder="Фамилия"
      className={clsx(invalid && "!border-error-600")}
      {...props}
    />
  </FieldWrapper>
));

export const CityField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="city">Город/регион</Label>
    <Input
      ref={ref}
      id="city"
      placeholder="Напишите..."
      className={clsx(invalid && "!border-error-600")}
      {...props}
    />
  </FieldWrapper>
));

export const CountryField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="country">Страна</Label>
    <Input
      ref={ref}
      id="country"
      placeholder="Страна"
      className={clsx(invalid && "!border-error-600")}
      {...props}
    />
  </FieldWrapper>
));

export const EmailField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="email">Email</Label>
    <Input
      ref={ref}
      type="email"
      id="email"
      placeholder="Ваш@компании.com"
      className={clsx(invalid && "!border-error-600")}
      {...props}
    />
  </FieldWrapper>
));

export const PhoneField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="phone">Номер телефона</Label>
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
));

export const MessageField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper>
    <Label htmlFor="message">Сообщение</Label>
    <Textarea
      ref={ref}
      id="message"
      placeholder="Оставьте сообщение"
      className={clsx("h-[134px]", invalid && "!border-error-600")}
      {...props}
    />
  </FieldWrapper>
));

export const PolicyField = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldProps
>(({ invalid, ...props }, ref) => (
  <FieldWrapper className="!flex-row items-center gap-x-3">
    <Checkbox
      ref={ref}
      id="policy"
      {...props}
      className={clsx(invalid && "!border-error-600")}
    />
    <label htmlFor="policy" className="text-base font-normal text-gray-600">
      Вы соглашаетесь с политикой конфиденциальности
      {invalid && <span className="text-error-600">*</span>}
    </label>
  </FieldWrapper>
));

export const SubmitButton = () => {
  const pending = useUnit($pending);
  return (
    <Button
      appearance="destructive"
      size="xl"
      className="mt-2 h-[50px]"
      disabled={pending}>
      {pending ? (
        <Spinner className="animate-infiniteSpin" />
      ) : (
        "Отправить сообщение"
      )}
    </Button>
  );
};
