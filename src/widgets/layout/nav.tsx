import React, { useEffect, useState } from "react";

import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { lib } from "@/shared/lib";
import { Locale } from "@/shared/lib/locale";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { Div, Li as LiType } from "@/shared/types/element";

import chevronDown from "@/../public/images/chevron-down.svg";
import language from "@/../public/images/language.svg";

export const AboutUs = ({ onClick }: { onClick?: () => void }) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <Link href="/about" onClick={onClick}>
      <Li activePath="/about">{localizedStrings["aboutus_nav"]}</Li>
    </Link>
  );
};

export const InvestmentProducts = ({ onClick }: { onClick?: () => void }) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <Link href="/investment-products" onClick={onClick}>
      <Li activePath="/investment-products">
        {localizedStrings["products_nav"]}
      </Li>
    </Link>
  );
};

export const Shariah = ({ onClick }: { onClick?: () => void }) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <Link href="/shariah" onClick={onClick}>
      <Li activePath="/shariah"></Li>
    </Link>
  );
};

export const Pressa = ({ onClick }: { onClick?: () => void }) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <Link href="/pressa" onClick={onClick}>
      <Li activePath="/pressa">{localizedStrings["pressa_nav"]}</Li>
    </Link>
  );
};

export const Portfolio = ({ onClick }: { onClick?: () => void }) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <Link href="/portfolio" onClick={onClick}>
      <Li activePath="/portfolio">{localizedStrings["portfolio_nav"]}</Li>
    </Link>
  );
};

export const Contact = ({ onClick }: { onClick?: () => void }) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <Link href="/contacts" onClick={onClick}>
      <Li activePath="/contacts">{localizedStrings["contacts_nav"]}</Li>
    </Link>
  );
};

export const Charity = ({ onClick }: { onClick?: () => void }) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <Link href="/charity" onClick={onClick}>
      <Li activePath="/charity">{localizedStrings["charity_nav"]}</Li>
    </Link>
  );
};

export const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();
  const localizedStrings = useLocalizedStrings();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    if (router.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setShowButton(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return (
    <div>
      {showButton && (
        <Link href={"/invest"}>
          {/* <div
          className="mt-3 rounded-full bg-[#D42427] p-[10px] shadow md:mt-0"
          style={{
            boxShadow: "0px 0px 6px 0px #00000026",
          }}> */}
          <button className="w-full rounded-full border-2 border-white bg-red-600 px-6 py-2 font-bold text-white transition">
            {localizedStrings["make_invest_button"]}
          </button>
          {/* </div> */}
        </Link>
      )}
    </div>
  );
};

const langName: { [Key in Locale]: string } = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

export const SelectLanguage = ({ className, ...props }: Div) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const lang = router.locale as Locale;

  const onLangSelect = (lang: Locale) => {
    lib.cookies.setCookie("NEXT_LOCALE", lang);
    router.replace(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      { locale: lang },
    );
    setOpen(false);
  };

  return (
    <Popover.Root open={open} onOpenChange={(open) => setOpen(open)}>
      <Popover.Trigger asChild>
        <div
          className={clsx(
            "ml-2 flex w-[140px] cursor-pointer items-center justify-center gap-2 text-base font-semibold text-gray-600 [&>.chevron]:data-[state=open]:rotate-180",
            className,
          )}
          {...props}>
          <Image src={language} alt="language" className="size-5" />
          {langName[lang]}
          <Image
            src={chevronDown}
            alt="down"
            className="chevron size-5 transition-transform"
          />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={2 * 4}
          className="z-10 rounded-lg bg-white p-2 shadow outline-none will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade">
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              lang === "uz" && "bg-gray-100",
            )}
            onClick={() => onLangSelect("uz")}>
            UZ
          </div>
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              lang === "ru" && "bg-gray-100",
            )}
            onClick={() => onLangSelect("ru")}>
            RU
          </div>
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              lang === "en" && "bg-gray-100",
            )}
            onClick={() => onLangSelect("en")}>
            EN
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export const SelectNavigation = ({ className, ...props }: Div) => {
  const [open, setOpen] = React.useState(false);
  const localizedStrings = useLocalizedStrings();
  const [selectedOption, setSelectedOption] = React.useState("R&D");
  const router = useRouter();

  const onOptionSelect = (option: string) => {
    setSelectedOption(option);
    setOpen(false);

    // Navigate to the selected option page
    switch (option) {
      // case "Be invested":
      //   router.push("/be-invested");
      //   break;
      case "Pressa":
        router.push("/pressa");
        break;
      case "Career":
        router.push("/career");
        break;
      case "Invest":
        router.push("/invest");
        break;
      case "FAQ":
        router.push("/faq");
        break;
      default:
        break;
    }
  };

  return (
    <Popover.Root open={open} onOpenChange={(open) => setOpen(open)}>
      <Popover.Trigger asChild>
        <div
          className={clsx(
            "mx-[8px] flex w-[40px] cursor-pointer items-center justify-center gap-2 text-base font-semibold text-[#101728] lg:text-[#475476] [&>.chevron]:data-[state=open]:rotate-180",
            className,
          )}
          {...props}>
          {localizedStrings["media_nav"]}
          <Image
            src={chevronDown}
            alt="down"
            className="chevron size-5 transition-transform"
          />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={2 * 4}
          className="z-50 rounded-lg bg-white p-2 shadow outline-none will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade">
          {/* <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              selectedOption === "Be invested" && "bg-gray-100",
            )}
            onClick={() => onOptionSelect("Be invested")}>
            Получить инвестиции
          </div> */}
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              selectedOption === "Pressa" && "bg-gray-100",
            )}
            onClick={() => onOptionSelect("Pressa")}>
            {localizedStrings["pressa_nav"]}
          </div>
          {/* <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              selectedOption === "Invest" && "bg-gray-100",
            )}
            onClick={() => onOptionSelect("Invest")}>
            Инвестировать
          </div> */}
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              selectedOption === "Career" && "bg-gray-100",
            )}
            onClick={() => onOptionSelect("Career")}>
            {localizedStrings["career_nav"]}
          </div>
          <div
            className={clsx(
              "cursor-pointer rounded-md px-5 py-2.5 hover:bg-gray-100",
              selectedOption === "FAQ" && "bg-gray-100",
            )}
            onClick={() => onOptionSelect("FAQ")}>
            FAQ
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const Li = ({
  activePath,
  className,
  children,
  ...props
}: LiType & { activePath: string }) => {
  const router = useRouter();
  const isActive = router.pathname === activePath;
  return (
    <li
      className={clsx(
        className,
        "text-base font-semibold",
        isActive ? "!text-error-700" : "text-gray-600",
      )}
      {...props}>
      {children}
    </li>
  );
};
