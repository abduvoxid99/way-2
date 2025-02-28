import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Map, YMaps, Placemark } from "react-yandex-maps";
import { Container } from "@/shared/ui";

import mail from "@/../public/images/mail.svg";
import markerPin from "@/../public/images/marker-pin-red.svg";
import phone from "@/../public/images/phone.svg";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

export default function Contacts() {
  const localizedStrings = useLocalizedStrings();
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>

      <section className="py-16 pt-28 lg:pt-32">
        <Container>
          <div className="text-center text-3xl font-semibold text-gray-900 xl:text-4xl">
            {localizedStrings["contacts_title"]}
          </div>
          <div className="m-auto mt-4 max-w-[768px] text-center text-lg font-normal text-gray-600 xl:text-[20px]">
            {localizedStrings["contacts_subtitle"]}
          </div>
          <div className="border-solid border-b-gray-200 pb-16 xl:flex xl:items-start xl:justify-between xl:pb-24">
            <div className="mt-12 flex max-w-[610px] flex-wrap gap-x-8 gap-y-10 sm:mx-auto xl:mx-0">
              <Contact
                img={<Image src={markerPin} alt="location" />}
                title={localizedStrings["office"]}
                subtitle={localizedStrings["office_address_title"]}
                action={<>{localizedStrings["office_address"]}</>}
              />
              <Contact
                img={<Image src={phone} alt="phone" />}
                title={localizedStrings["phone"]}
                subtitle={localizedStrings["working_times"]}
                action={<a href="tel:+998785555555">+998 78 555 55 55</a>}
              />
              <Contact
                img={<Image src={mail} alt="mail" />}
                title="Email"
                subtitle={localizedStrings["mail_contact_subtitle"]}
                action={
                  <a href="mailto:Info@wayIIgroup.com">Info@wayIIgroup.com</a>
                }
              />
            </div>
            <div
              id={"yandex_map"}
              className="mx-auto mt-12 h-[380px] max-w-[576px] flex-col overflow-hidden lg:mx-auto xl:mx-0 xl:min-w-[576px] xl:rounded-2xl xl:bg-gray-50">
              <YMaps
                query={{
                  load: "package.full",
                  // apikey: "5e5a73bd-6e0a-40f1-ba8e-f0b98d95e75f",
                }}>
                <Map
                  defaultState={{
                    center: [41.305244, 69.305853],
                    zoom: 15,
                  }}
                  width="100%"
                  height="100%">
                  <Placemark geometry={[41.305244, 69.305853]} />
                </Map>
              </YMaps>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

const Contact = ({
  img,
  title,
  subtitle,
  action,
}: {
  img?: React.ReactNode;
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}) => (
  <div className="h-fit w-[182px]">
    {img}
    <div className="mt-4 text-lg font-semibold text-gray-900 xl:text-xl xl:font-bold">
      {title}
    </div>
    <div className="mt-1 text-base font-normal text-gray-600">{subtitle}</div>
    <div className="mt-3 text-base font-semibold text-error-700 xl:font-semibold">
      {action}
    </div>
  </div>
);
