import Image from "next/image";
import { Container, logo } from "@/shared/ui";
import appStore from "@/../public/images/donwload_app_store.svg";
import googlePlay from "@/../public/images/donwload_google_play.svg";
import twitter from "@/../public/images/x-icon.svg";
import linkedin from "@/../public/images/linkedin-icon.svg";
import facebook from "@/../public/images/facebook-icon.svg";
import telegram from "@/../public/images/telegram-icon.svg";
import youtube from "@/../public/images/youtube-icon.svg";
import dribble from "@/../public/images/dribbble_icon.svg";
import instagram from "@/../public/images/instagram-icon.svg";
import whatsup from "@/../public/images/whatsup-icon.svg";
import * as Dialog from "@radix-ui/react-dialog";
import {
  AboutUs,
  Contact,
  InvestmentProducts,
  Portfolio,
  Charity,
  SelectNavigation,
} from "./nav";
import { SubmitApplication } from "../submit-application";
import { useEffect, useState } from "react";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { useRouter } from "next/router";
import { MainModal } from "../main-modal";

interface Props {
  showForm: boolean;
  onClose: () => void;
  handleClose: () => void;
}

export const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();
  const localizedStrings = useLocalizedStrings();

  const handleClose = () => {
    setShowForm(false);

    router.replace(router.asPath.replace(/\/submit$/, "/success"), undefined, {
      shallow: true,
    });
  };

  const modalClose = () => {
    setShowForm(false);

    router.replace(router.asPath.replace(/\/submit$/, "/"), undefined, {
      shallow: true,
    });
  };

  const handleOpen = () => {
    setShowForm(true);
    const newUrl = router.asPath.endsWith("/submit")
      ? router.asPath
      : `${router.asPath}/submit`;
    router.replace(newUrl, undefined, { shallow: true });
  };

  useEffect(() => {
    if (router.asPath.endsWith("/submit")) {
      setShowForm(true);
    }
  }, [router.asPath]);

  return (
    <div className="pb-12">
      <Container>
        <section className="px- border-t-[1px] py-[60px] text-center">
          <button
            className="w-full rounded-md border bg-red-500 p-3 py-3 text-lg font-bold text-white shadow-lg lg:w-[376px]"
            onClick={handleOpen}>
            {localizedStrings["make_request"]}
          </button>
        </section>
      </Container>
      <Container>
        <div className="sm:flex sm:items-center sm:justify-between sm:pb-12">
          <div>
            {logo}
            <div className="mt-6 w-[343px] text-base font-normal text-gray-600">
              {localizedStrings["financial_condition"]}
            </div>
            <nav className="mt-8 hidden lg:block">
              <ul className="flex gap-x-6">
                <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8">
                  <AboutUs />
                  <InvestmentProducts />
                </div>
                <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8">
                  <Portfolio />
                  <Charity />
                  <SelectNavigation />
                  <Contact />
                </div>
              </ul>
            </nav>
          </div>

          <div className="mb py-12">
            <div className="mb-3 mt-3 text-base font-semibold text-error-700 xl:font-semibold">
              <a href="tel:+998785555555">+998 78 555 55 55</a>
            </div>
            <div className="text-base font-medium text-error-700">
              {localizedStrings["our_apps"]}
            </div>
            <div className="mt-4 flex gap-x-4 gap-y-2 sm:flex-col">
              <a href="https://apps.apple.com/us/app/way-invest/id6550898454">
                <Image src={appStore} alt="Download from app store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=uz.udevs.wayll_client_mobile">
                <Image src={googlePlay} alt="Download from google play" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-t-gray-200 pt-8 sm:flex sm:flex-row-reverse sm:items-end sm:justify-between">
          <div className="flex gap-x-[24px]">
            <a target="_blank" href="https://www.instagram.com/way_ll_group/">
              <Image src={instagram} alt="Instagram" />
            </a>
            <a target="_blank" href="https://x.com/way_ll_group">
              <Image src={twitter} alt="Twitter" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/wayllgroup/">
              <Image src={linkedin} alt="Linkedin" />
            </a>
            {/* <Image src={whatsup} alt="Wahtsup" /> */}
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61559928718806">
              <Image src={facebook} alt="Facebook" />
            </a>
            <a target="_blank" href="https://t.me/wayllgroup">
              <Image src={telegram} alt="Telegram" />
            </a>
            <a href="https://youtu.be/03vyF9hgRHc">
              <Image src={youtube} alt="Youtube" />
            </a>
            {/* <Image src={dribble} alt="Dribbble" /> */}
          </div>

          <div className="mt-6 text-base font-normal text-[#70707B]">
            © 2024 ООО WAY II {localizedStrings["rights_reserved"]}
          </div>
        </div>
      </Container>

      <ModalComponent
        showForm={showForm}
        handleClose={handleClose}
        onClose={modalClose}
      />
    </div>
  );
};

const ModalComponent = ({ showForm, onClose, handleClose }: Props) => {
  const localizedStrings = useLocalizedStrings();

  return (
    <Dialog.Root open={showForm} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent w-[80%] md:w-[550px]">
          <SubmitApplication
            title={localizedStrings["make_request"]}
            subtitle={localizedStrings["request_subtitle"]}
            onClose={onClose}
            handleClose={handleClose}
          />
          <Dialog.Close asChild></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
