import { useRef } from "react";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowLeftIcon from "@/icons/arrow-left";
import ArrowRightIcon from "@/icons/arrow-right";

type NewsCard = {
  id: number;
  category: string;
  date: string;
  title: string;
};

const newsItems: NewsCard[] = [
  {
    id: 1,
    category: "Finance",
    date: "12.02.2025",
    title: "Our investment structured",
  },
  {
    id: 2,
    category: "Finance",
    date: "12.02.2025",
    title: "Our investment structured",
  },
  {
    id: 3,
    category: "Finance",
    date: "12.02.2025",
    title: "Our investment structured",
  },
  {
    id: 2,
    category: "Finance",
    date: "12.02.2025",
    title: "Our investment structured",
  },
  {
    id: 3,
    category: "Finance",
    date: "12.02.2025",
    title: "Our investment structured",
  },
];

export default function NewsSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold">Read next news</h2>
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="p-2 rounded-md border hover:bg-gray-100 transition">
            <ArrowLeftIcon />
          </button>
          <button
            ref={nextRef}
            className="p-2 rounded-md border hover:bg-gray-100 transition">
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1.2}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}>
        {newsItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-xl p-4 border border-gray-200 transition flex flex-col min-h-[250px]">
              <Image
                src="/images/home/akfa.svg"
                alt="Responsive Image"
                height={100}
                width={100}
              />

              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
