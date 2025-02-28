import Image from "next/image";
import close from "@/../public/images/close.svg";
import { useUnit } from "effector-react";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { Button, Spinner } from "@/shared/ui";
import { $pending } from "../application-form/model";
import Link from "next/link";

export const ModalSuccess = ({ handleClose, onClose }: any) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <section className="relative flex h-[510px] w-[600px] items-center justify-center">
      <div className="my-auto">
        <div className="text-center">
          <div className="text-[36px] font-bold text-[#d92d20]">
            {localizedStrings["success_modal_title"]}
          </div>
          <div className="text-[20px]">
            {localizedStrings["success_modal_subtitle"]}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[red] opacity-[0.7]">
          <Image alt="" src={close} />
        </button>

        <SubmitButton handleClose={handleClose} />
      </div>
    </section>
  );
};

export const SubmitButton = ({ handleClose }: any) => {
  const pending = useUnit($pending);
  const localizedStrings = useLocalizedStrings();
  return (
    <Button
      appearance="destructive"
      size="xl"
      className="mt-12 h-[50px] w-[100%] text-[24px] font-bold"
      disabled={pending}>
      <Link onClick={handleClose} href={"/contacts"}>
        {pending ? (
          <Spinner className="animate-infiniteSpin" />
        ) : (
          localizedStrings["contact_us"]
        )}
      </Link>
    </Button>
  );
};
