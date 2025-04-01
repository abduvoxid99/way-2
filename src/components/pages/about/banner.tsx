import React from "react";

import Image from "next/image";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";
import BlackLogoIcon from "@/icons/black-logo";

export default function Banner() {
  return (
    <section className="py-20 bg-[#F7F8F6]">
      <Container size="md">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(510px,1fr))] gap-5">
          <div className="border rounded-sm py-20 px-10 ">
            <Typography
              as="h1"
              variant="h1"
              className="text-[40px] leading-[42px] ">
              About Company Partner with business today.
            </Typography>
            <Typography
              as="h3"
              className="text-2xl leading-[26px] font-normal mt-10">
              As a trusted partner in the investment world, Way ll Management
              provides exceptional opportunities to grow
            </Typography>
          </div>

          <div className="w-full max-w-[510px] max-md:mx-auto rounded-sm">
            <Image
              src="https://s3-alpha-sig.figma.com/img/8311/05fd/a6c28806550628d15697a83a49743a13?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jk1YJKJVii9yuutdH8L13cnjAGGwB6lqyAB3zmdblMmQWFyMWAQWychflHqBjpSDZ4uXcUy74IFjtX1mbd8iPcoM9lIatnst1dyHmJyJTakRV2t8aPb0r0tU9KwBQpaJSXu6qQkZSvuA4Vq2q7rQVWRYUI948-K~gob1DyE61QRJSleR6gRC0w39RMKAu3XfwoNUznSw2s3-LRR4-K8gVa1JEbOsYQN6q3hAna0mHDg4bc24MeBd3n8REtRMLcsU5hTkOXHgWkmvoqybamqQzF4xIVuFcLmN7bAfg8oQ3u08JTFGh4qaYKgccrwdBxr2oJVb4Up~0j9xBUMfeeYplQ__"
              alt="Responsive Image"
              style={{
                height: "100%",
              }}
              width={510}
              height={431}
            />
          </div>
        </div>

        <div className="mt-20">
          <Typography variant="h3" className="font-semibold text-center">
            Way ll Management provides
          </Typography>
          <div className="flex justify-center items-center gap-20 mt-10">
            {[1, 2, 3, 4, 5, 6].map((el) => (
              <BlackLogoIcon />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
