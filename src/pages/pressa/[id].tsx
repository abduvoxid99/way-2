import { useUnit } from "effector-react";
import Image from "next/image";
import Link from "next/link";

import { lib } from "@/shared/lib";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { Button, Container } from "@/shared/ui";

import { $pending, $post } from "@/model/pressa-detail";

import copy from "@/../public/images/copy.svg";
import facebook from "@/../public/images/facbook_icon.svg";
import linkedin from "@/../public/images/linkedin_icon.svg";
import divider from "@/../public/images/slash-divider.svg";
import twitter from "@/../public/images/twitter_icon.svg";

export default function PressaDetail() {
  const [post, pending] = useUnit([$post, $pending]);
  const formatByLocale = lib.dates.useFormatByLocale();
  const addLocaleSuffix = lib.locale.useAddLocaleSuffix();
  const localizedStrings = useLocalizedStrings();

  if (pending || !post) {
    return (
      <Container>
        <section className="mx-auto max-w-[720px] pt-10 xl:pt-[50px]">
          <div className="h-60 w-full rounded-xl bg-skeleton" />
          <div className="mt-6 h-4 w-full rounded-xl bg-skeleton" />
          <div className="mt-4 h-4 w-full rounded-xl bg-skeleton" />
          <div className="mt-4 h-4 w-full rounded-xl bg-skeleton" />
          <div className="mt-4 h-4 w-full rounded-xl bg-skeleton" />
        </section>
      </Container>
    );
  }

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(
      () => {
        console.log("Link copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy: ", err);
      },
    );
  };

  return (
    <section className="pt-24">
      <Container>
        <div className="relative h-60 w-full">
          <Image
            src={post.photo}
            alt="News"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="mt-5 flex items-center gap-x-2">
          <Link href="/pressa" className="text-sm font-medium text-gray-600">
            {localizedStrings["pressa_nav"]}
          </Link>
          <Image src={divider} alt="divide" className="size-5" />
          <div
            className="text-sm font-semibold text-error-700"
            dangerouslySetInnerHTML={{
              __html: post[addLocaleSuffix({ key: "content" })],
            }}
          />
        </div>

        <section className="mx-auto max-w-[720px] pt-10 xl:pt-[50px]">
          <div
            className="text-2xl font-semibold text-gray-900 xl:text-3xl"
            dangerouslySetInnerHTML={{
              __html: post[addLocaleSuffix({ key: "content" })],
            }}
          />
          <div
            className="mt-4 text-base font-normal text-gray-600 [&>*]:my-4 [&>ul]:list-disc [&>ul]:pl-10 [&_img]:rounded-xl"
            dangerouslySetInnerHTML={{
              __html: post[addLocaleSuffix({ key: "toc" })],
            }}
          />

          <div className="mt-5 pb-16 pt-6">
            <div className="border-b border-solid border-b-gray-200 text-sm font-semibold text-error-700">
              {formatByLocale(post.date_of_issue, "dd LLL yyyy")}
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <div className="mt-6 text-base font-semibold text-gray-500">
                {localizedStrings["share_post"]}
              </div>
              <div className="mt-6 flex items-center gap-x-3">
                <Button
                  onClick={copyToClipboard}
                  appearance="secondaryGray"
                  size="md">
                  <Image src={copy} alt="Copy" className="size-5" />
                  {localizedStrings["copy_link"]}
                </Button>
                <a target="_blank" href="https://x.com/way_ll_group">
                  <Button
                    appearance="secondaryGray"
                    size="md"
                    className="!p-2.5">
                    <Image src={twitter} alt="Twitter" className="size-5" />
                  </Button>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61559928718806">
                  <Button
                    appearance="secondaryGray"
                    size="md"
                    className="!p-2.5">
                    <Image src={facebook} alt="Facebook" className="size-5" />
                  </Button>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/wayllgroup/">
                  <Button
                    appearance="secondaryGray"
                    size="md"
                    className="!p-2.5">
                    <Image src={linkedin} alt="Linkedin" className="size-5" />
                  </Button>
                </a>
                {/* <a href="https://www.linkedin.com/company/wayllgroup/">
                  <Button
                    appearance="secondaryGray"
                    size="md"
                    className="!p-2.5">
                    <Image src={telegram} alt="Linkedin" className="size-5" />
                  </Button>
                </a> */}
              </div>
            </div>
          </div>
        </section>
        {/* <SubmitApplication /> */}
      </Container>
    </section>
  );
}
