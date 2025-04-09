import React, { useCallback, useMemo, useRef, useState } from "react";

import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

import ArrowLeftIcon from "@/icons/arrow-left";
import ArrowRightIcon from "@/icons/arrow-right";
import { cn } from "@/lib/utils";

type LocalizedStringKey = keyof ReturnType<typeof useLocalizedStrings>;

interface CareerItem {
  title: string;
  subtitle: string;
}

interface CSliderProps {
  leftTitle: LocalizedStringKey;
  sliderItems: CareerItem[];
  children?: React.ReactNode;
  className?: string;
}

interface ControlButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
}

const ControlButton: React.FC<ControlButtonProps> = ({ onClick, icon }) => (
  <button
    onClick={onClick}
    className="group w-[48px] h-[48px] border border-[#EDEDED] flex items-center justify-center rounded-[5px] transition-colors hover:border-gray-400">
    <span className="text-[#999] group-hover:text-black transition-colors">
      {icon}
    </span>
  </button>
);

const CSlider: React.FC<CSliderProps> = ({
  leftTitle,
  sliderItems,
  children,
  className,
}) => {
  const localizedStrings = useLocalizedStrings();
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateActiveIndex = useCallback(
    (offset: number) => {
      const newIndex =
        (activeIndex + offset + sliderItems.length) % sliderItems.length;
      setActiveIndex(newIndex);
      setTranslateX(-newIndex * 530);
    },
    [activeIndex, sliderItems.length],
  );

  const localizedTitle = useMemo(
    () => localizedStrings[leftTitle],
    [localizedStrings, leftTitle],
  );

  return (
    <>
      <div className="flex items-end justify-between">
        <div className="max-w-[400px] text-lg font-normal text-gray-600 xl:text-xl">
          {localizedTitle}
        </div>
        <div className="flex justify-end gap-4">
          <ControlButton
            onClick={() => updateActiveIndex(-1)}
            icon={<ArrowLeftIcon />}
          />
          <ControlButton
            onClick={() => updateActiveIndex(1)}
            icon={<ArrowRightIcon />}
          />
        </div>
      </div>

      {children ? (
        <div ref={sliderRef} className={cn(className)}>
          {children}
        </div>
      ) : (
        <div className={cn("max-md:pl-5", className)}>
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-linear gap-5 mt-14"
            style={{ transform: `translateX(${translateX}px)` }}>
            {sliderItems.map((item, index) => (
              <div
                key={index}
                className="mt-5 p-10 min-w-[510px] max-w-[510px] border border-[#EDEDED] rounded-[5px]">
                <span className="block text-2xl font-bold mb-5 text-black">
                  {item.title}
                </span>
                <p className="text-[18px] line-clamp-5">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CSlider;
