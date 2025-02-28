import React from "react";
import clsx from "clsx";

import { Container, logo } from "@/shared/ui";
import { Div } from "@/shared/types/element";

import {
  AboutUs,
  InvestmentProducts,
  Portfolio,
  Contact,
  SelectLanguage,
  SelectNavigation,
  Charity,
  ScrollButton,
} from "./nav";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const onBurgerClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle("modal-open");
  };

  const onCloseBurgerClick = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-white">
      <Container className="flex items-center justify-between py-4 lg:py-6">
        {logo}
        <Burger isActive={mobileMenuOpen} onClick={onBurgerClick} />
        <DesktopMenu />
        <SelectLanguage className="hidden lg:flex" />
      </Container>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onCloseBurgerClick={onCloseBurgerClick}
      />
    </header>
  );
};

const Burger = ({ isActive, ...props }: Div & { isActive: boolean }) => (
  <div
    className="relative z-10 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-y-[3px] lg:hidden"
    {...props}>
    <div
      className={clsx(
        "h-[2px] w-[18px] bg-gray-700 transition-transform duration-300 ease-out",
        isActive && "rotate-45",
      )}
    />
    <div
      className={clsx(
        "h-[2px] w-[18px] bg-gray-700 transition-transform duration-300 ease-out",
        isActive && "absolute -rotate-45",
      )}
    />
    <div
      className={clsx("h-[2px] w-[18px] bg-gray-700", isActive && "hidden")}
    />
  </div>
);

const DesktopMenu = () => (
  <nav className="hidden lg:block">
    <ul className="flex items-center gap-x-8">
      <AboutUs />
      <InvestmentProducts />
      {/* <Portfolio /> */}
      <Charity />
      <div className="">
        <SelectNavigation />
      </div>
      <Contact />
      <ScrollButton />
    </ul>
  </nav>
);

const MobileMenu = ({
  isOpen,
  onCloseBurgerClick,
}: {
  isOpen: boolean;
  onCloseBurgerClick: () => void;
}) => (
  <div
    className={clsx(
      "absolute top-0 z-[1] h-screen w-full bg-white py-4 transition-transform duration-300 ease-out",
      !isOpen && "-translate-x-full",
    )}>
    <div className="h-10" />
    <Container className="border-b border-solid border-b-gray-200 py-6">
      <nav className="left-3">
        <ul className="[&_li]:py-3 [&_li]:text-gray-900">
          <AboutUs onClick={onCloseBurgerClick} />
          <InvestmentProducts onClick={onCloseBurgerClick} />
          {/* <Portfolio onClick={onCloseBurgerClick} /> */}
          <Charity />
          <div className="my-2 ml-[9px] py-[6px] lg:my-0 lg:py-0">
            <SelectNavigation />
          </div>
          <Contact onClick={onCloseBurgerClick} />
        </ul>
      </nav>
    </Container>
    <div className="block px-3 md:hidden md:px-0">
      <SelectLanguage className="mt-6" />
    </div>

    <div className="hidden md:block">
      <Container>
        <SelectLanguage className="mt-6" />
      </Container>
    </div>
  </div>
);
