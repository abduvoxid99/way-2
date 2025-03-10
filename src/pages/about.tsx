import React from "react";

import Container from "@/components/common/container";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        <h1 className="text-[56px] text-center">About page</h1>
      </Container>
    </div>
  );
}

// import React from "react";

// import clsx from "clsx";
// import Head from "next/head";
// import { default as Image, StaticImageData } from "next/image";

// import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
// import { Div } from "@/shared/types/element";
// import { Container } from "@/shared/ui";

// import mission from "@/../public/images/about-mission.png";
// import values from "@/../public/images/about-values.png";
// import alisaHelster from "@/../public/images/alisa_helster.png";
// import annieStanley from "@/../public/images/annie_stanley.png";
// import arrowUpRight from "@/../public/images/arrow-up-right.svg";
// import arrowLeftGray from "@/../public/images/arrow_left_gray.svg";
// import arrowRightGray from "@/../public/images/arrow_right_gray.svg";
// import ceo from "@/../public/images/ceo-way.png";
// import check from "@/../public/images/check-icon.svg";
// import dribbbleIcon from "@/../public/images/dribble_white_icon.svg";
// import johnnyBell from "@/../public/images/johnny_bell.png";
// import linkedinIcon from "@/../public/images/linkedin_white_icon.svg";
// import messageChat from "@/../public/images/message-chat-circle.svg";
// import quoteDown from "@/../public/images/quote-down.png";
// import quoteUp from "@/../public/images/quote-up.png";
// import richWilson from "@/../public/images/rich_wilson.png";
// import telegramIcon from "@/../public/images/telegram_icon.svg";
// import zapFast from "@/../public/images/zap-fast.svg";

// import { SubmitApplication } from "@/widgets/submit-application";

// export default function About() {
//   const localizedStrings = useLocalizedStrings();
//   return (
//     <div>
//       <Head>
//         <title>About us</title>
//       </Head>

//       <section className="py-16 xl:py-24">
//         <Container>
//           <div className="text-center text-3xl font-semibold text-gray-900">
//             {localizedStrings["aboutus_title"]}
//           </div>
//           <div className="mx-auto mt-4 max-w-[768px] text-center text-lg font-normal text-gray-600">
//             {localizedStrings["aboutus_subtitle"]}
//           </div>

//           <Feature
//             icon={<Image src={messageChat} alt="zap fast" />}
//             title={localizedStrings["our_mission"]}
//             subtitle={localizedStrings["our_mission_text"]}
//             items={[
//               localizedStrings["first_mission"],
//               localizedStrings["second_mission"],
//               localizedStrings["third_mission"],
//             ]}
//             image={<Image src={mission} alt="About mission" />}
//           />
//           <Feature
//             icon={<Image src={zapFast} alt="zap fast" />}
//             title={localizedStrings["our_values"]}
//             subtitle={localizedStrings["our_values_subtitle"]}
//             items={[
//               localizedStrings["first_value"],
//               localizedStrings["second_value"],
//               localizedStrings["third_value"],
//             ]}
//             image={<Image src={values} alt="About values" />}
//             className="lg:flex-row-reverse"
//           />
//         </Container>
//       </section>
//     </div>
//   );
// }

// const Feature = ({
//   icon,
//   title,
//   subtitle,
//   items,
//   image,
//   className,
//   ...props
// }: {
//   icon: React.ReactNode;
//   title: string;
//   subtitle: string;
//   items: string[];
//   image: React.ReactNode;
// } & Div) => (
//   <div
//     className={clsx(
//       "mt-12 justify-between lg:flex lg:items-center lg:gap-x-8 xl:mt-24",
//       className,
//     )}
//     {...props}>
//     <div className="max-w-[512px]">
//       <div className="w-fit rounded-full border-8 border-error-50">
//         <div className="flex size-10 items-center justify-center rounded-full bg-error-100">
//           {icon}
//         </div>
//       </div>
//       <div className="mt-6 text-2xl font-semibold text-gray-900">{title}</div>
//       <div className="mt-2 text-base font-normal text-gray-600">{subtitle}</div>
//       <div className="mt-8 flex flex-col gap-y-4">
//         {items.map((item) => (
//           <div key={item} className="flex items-start gap-3 pl-2 xl:pl-4">
//             <div className="flex min-h-7 min-w-7 items-center justify-center rounded-full bg-error-100">
//               <Image src={check} alt="check" />
//             </div>
//             <div className="text-base font-normal text-gray-600">{item}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="mt-10">{image}</div>
//   </div>
// );

// const Carousel = () => {
//   const ref = React.useRef<HTMLDivElement | null>(null);

//   const onPreviousClick = () => {
//     const cardWidth = window.innerWidth >= 1280 ? 384 : 280;
//     const gapX = window.innerWidth >= 1280 ? 24 : 32;
//     // @ts-ignore
//     ref.current?.scroll?.(ref.current?.scrollLeft - cardWidth - gapX, 0);
//   };

//   const onNextClick = () => {
//     const cardWidth = window.innerWidth >= 1280 ? 384 : 280;
//     const gapX = window.innerWidth >= 1280 ? 24 : 32;
//     // @ts-ignore
//     ref.current?.scroll?.(ref.current?.scrollLeft + cardWidth + gapX, 0);
//   };

//   return (
//     <Container className="mt-20 !pr-0 xl:mt-16">
//       <div
//         className="transi flex gap-x-6 overflow-hidden scroll-smooth pr-4 xl:gap-x-8"
//         ref={ref}>
//         <TeamMember
//           imageSrc={alisaHelster}
//           name="Alisa Hester"
//           position="Founder & CEO"
//           about="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
//         />
//         <TeamMember
//           imageSrc={richWilson}
//           name="Rich Wilson"
//           position="Engineering Manager"
//           about="Lead engineering teams at Figma, Pitch, and Protocol Labs."
//         />
//         <TeamMember
//           imageSrc={annieStanley}
//           name="Annie Stanley"
//           position="Product Manager"
//           about="Former PM for Airtable, Medium, Ghost, and Lumi."
//         />
//         <TeamMember
//           imageSrc={johnnyBell}
//           name="Johnny Bell"
//           position="Frontend Developer"
//           about="Former frontend dev for Linear, Coinbase, and Postscript."
//         />
//       </div>

//       <div className="mt-8 flex gap-x-4">
//         <div
//           className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-solid border-gray-200"
//           onClick={onPreviousClick}>
//           <Image src={arrowLeftGray} className="size-5" alt="previous" />
//         </div>
//         <div
//           className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-solid border-gray-200"
//           onClick={onNextClick}>
//           <Image src={arrowRightGray} className="size-5" alt="next" />
//         </div>
//       </div>
//     </Container>
//   );
// };

// const TeamMember = ({
//   imageSrc,
//   name,
//   position,
//   about,
// }: {
//   imageSrc: string | StaticImageData;
//   name: string;
//   position: string;
//   about: string;
// }) => (
//   <div className="relative flex h-[432px] min-w-[280px] items-end xl:h-[480px] xl:min-w-96">
//     <Image
//       src={imageSrc}
//       alt={name}
//       fill
//       className="-z-10 object-cover object-top"
//     />
//     <div className="w-full border-t border-solid border-t-[#FFFFFF80] px-5 pb-8 pt-6 backdrop-blur-md">
//       <div className="flex items-center justify-between text-2xl font-semibold text-white">
//         {name}
//         <Image src={arrowUpRight} alt="Arrow up right" />
//       </div>
//       <div className="mt-3 text-base font-semibold text-white">{position}</div>
//       <div className="mt-1 text-sm font-normal text-white">{about}</div>
//       <div className="mt-6 flex gap-x-5">
//         <Image src={telegramIcon} alt="telegram" className="size-5" />
//         <Image
//           src={linkedinIcon}
//           alt="linkedin"
//           className="[g]:fill-white size-5"
//         />
//         <Image src={dribbbleIcon} alt="dribble" className="size-5" />
//       </div>
//     </div>
//   </div>
// );

// const FinancesFeature = ({
//   icon,
//   title,
//   subtitle,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   subtitle: string;
// }) => (
//   <div className="max-w-[343px] rounded-[10px] bg-gray-50 p-5 sm:max-w-[286px]">
//     <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-error-50">
//       {icon}
//     </div>
//     <div className="mt-12 text-lg font-semibold text-gray-900">{title}</div>
//     <div className="mt-1 text-base font-normal text-gray-600">{subtitle}</div>
//   </div>
// );
