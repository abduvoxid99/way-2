import { ApplicationForm } from "@/widgets/application-form";
import { ContainerSm } from "@/shared/ui/container";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { Button } from "@/shared/ui";
import Image from "next/image";
import close from "@/../public/images/closeBlack.svg";

interface Props {
  title?: string;
  subtitle?: string;
  onClose?: any;
  handleClose?: () => void;
}

export const SubmitApplication = ({
  title,
  subtitle,
  onClose,
  handleClose,
}: Props) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <section className="relative overflow-hidden bg-gray-50 py-6">
      <ContainerSm>
        <div className="text-center text-4xl font-semibold text-gray-900 xl:font-bold"></div>
        <h3 className="text-center text-[20px] font-bold md:text-[26px]">
          {title ? title : "Оставьте заявку"}
        </h3>
        <div className="my-2 text-center text-[16px] font-normal text-gray-600 md:text-[18px] xl:mt-5 xl:text-[18px]">
          {subtitle ? subtitle : localizedStrings["rules_agreement"]}
        </div>
        <div className="max-h-[75vh]">
          {/* Ensure the modal content is scrollable */}
          <ApplicationForm onClose={onClose} handleClose={handleClose} />
        </div>

        <div
          onClick={onClose}
          className="absolute right-[40px] top-[30px] cursor-pointer">
          <Image alt="" src={close} />
        </div>
      </ContainerSm>
    </section>
  );
};
