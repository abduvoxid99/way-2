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
import { Button, Spinner, logo } from "@/shared/ui";
import {
  Input as InputProps,
  Textarea as TextareaProps,
} from "@/shared/types/element";
import { ApplicationBody } from "@/shared/types/api";

import { api } from "@/shared/api";
import Image from "next/image";
import uploadIcon from "@/../public/images/upload-icon.svg";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { $pending, formSubmitted } from "../application-form/model";
import close from "@/../public/images/close.svg";

interface FormValues extends ApplicationBody {
  policy?: boolean;
}

export const ModalApplicationForm = ({
  handleModalSuccess,
  handleClose,
}: any) => {
  const form = useForm<FormValues>();
  const onSubmitted = useUnit(formSubmitted);
  const localizedStrings = useLocalizedStrings();

  const submit = async () => {
    const body = form.getValues();
    delete body.policy;

    await onSubmitted({ value: body });

    localStorage.setItem("formSubmitted", "true");

    handleModalSuccess();
  };

  return (
    <form onSubmit={form.handleSubmit(submit)}>
      <div className="relative mx-auto flex w-[1000px] gap-4 overflow-hidden">
        <div className="mt-[15%] flex w-[48%] flex-col gap-y-6 px-12">
          <h2 className="text-center text-[30px] font-bold text-[#D42427]">
            {localizedStrings["main_modal_title"]}
          </h2>
          <div className="px-4 text-center text-gray-700">
            {localizedStrings["main_modal_subtitle"]}
          </div>
          <div className="flex flex-col gap-4">
            <FirstNameField
              invalid={Boolean(form.formState.errors.first_name)}
              {...form.register("first_name", { required: true })}
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

            <LastNameField
              invalid={Boolean(form.formState.errors.first_name)}
              {...form.register("amount", { required: true })}
            />

            <SubmitButton />
          </div>
        </div>
        <div className="flex h-[93vh] w-[55%] items-center">
          <div className="relative h-[100%] w-[75%] bg-[#D42427] px-6">
            <div className="pt-14">
              <Image
                width={100}
                height={100}
                src={"/logo-white.jpg"}
                alt="logo"
              />
            </div>
            <div className="mt-44 text-[18px] font-bold text-[#fff]">
              {localizedStrings["main_modal_share"]}
              <span className="block text-[#101828]">Akfa Aluminium Group</span>
            </div>
            <div className="absolute bottom-4 max-w-[80%] text-[8px] text-[#fff]">
              {localizedStrings["main_modal_acceptance"]}
            </div>
          </div>
          <div className="relative h-full w-[100%]">
            <Image
              alt=""
              src="/images/modal.jpg"
              layout="fill"
              objectFit="cover"
              className="absolute h-[100%] w-[100%]"
            />
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-20 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[red] opacity-[0.7]">
              <Image alt="" src={close} />
            </button>
          </div>
        </div>
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
      <Input
        ref={ref}
        id="first_name"
        placeholder={localizedStrings["full_name_and"]}
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
      <Input
        ref={ref}
        id="amount"
        placeholder={localizedStrings["main_modal_investition"]}
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

export const SubmitButton = () => {
  const pending = useUnit($pending);
  const localizedStrings = useLocalizedStrings();
  return (
    <Button
      appearance="destructive"
      size="xl"
      className="mt-2 h-[50px] w-full"
      disabled={pending}>
      {pending ? (
        <Spinner className="animate-infiniteSpin" />
      ) : (
        localizedStrings["send"]
      )}
    </Button>
  );
};
