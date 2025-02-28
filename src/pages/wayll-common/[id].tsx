import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { wayll_common } from "@/mock/wayll-common";
import { Container, Button } from "@/shared/ui";
import { SubmitApplication } from "@/widgets/submit-application";

import divider from "@/../public/images/slash-divider.svg";
import copy from "@/../public/images/copy.svg";
import twitter from "@/../public/images/twitter_icon.svg";
import facebook from "@/../public/images/facbook_icon.svg";
import linkedin from "@/../public/images/linkedin_icon.svg";
import finance from "@/../public/images/finance.png";
import islamic from "@/../public/images/islamic.png";
import wayll_invest from "@/../public/images/wayll_investition.png";
import { lib } from "@/shared/lib";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

export default function PressaDetail() {
  const router = useRouter();
  const { id } = router.query;
  const addLocaleSuffix = lib.localeWithRu.useAddLocaleSuffixWitRu();
  const localizedStrings = useLocalizedStrings();

  const wayll = wayll_common?.find((item) => item?.id === id);

  if (!wayll) return <div>Content not found</div>;

  const getImageSrc = () => {
    switch (wayll.id) {
      case "1":
        return finance;
      case "2":
        return islamic;
      case "3":
        return wayll_invest;
      default:
        return finance;
    }
  };

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
        <div className="mt-5 flex items-center gap-x-2">
          <Link href="/" className="text-sm font-medium text-gray-600">
            {localizedStrings["home"]}
          </Link>
          <Image src={divider} alt="divide" className="size-5" />
          <div className="text-sm font-semibold text-error-700">
            {wayll?.[addLocaleSuffix({ key: "title" })]}
          </div>
        </div>

        <section className="mx-auto max-w-[720px] pt-10 xl:pt-[50px]">
          <div className="text-2xl font-semibold text-gray-900 xl:text-3xl">
            {wayll?.[addLocaleSuffix({ key: "title" })]}
          </div>
          <div
            className="mt-4 text-base font-normal text-gray-600 [&>*]:my-4 [&>ul]:list-disc [&>ul]:pl-10 [&_img]:rounded-xl"
            dangerouslySetInnerHTML={{
              __html: wayll?.[addLocaleSuffix({ key: "description" })],
            }}
          />
          <div className="relative my-8 h-[480px] w-full">
            <Image
              src={getImageSrc()}
              alt="Image"
              layout="fill"
              className="object-fill"
            />
          </div>

          <div
            className="mt-4 text-base font-normal text-gray-600 [&>*]:my-4 [&>ul]:list-disc [&>ul]:pl-10 [&_img]:rounded-xl"
            dangerouslySetInnerHTML={{
              __html: wayll?.[addLocaleSuffix({ key: "descriptionLow" })],
            }}
          />
          <div className="mt-5 pb-16 pt-6">
            <div className="border-b border-solid border-b-gray-200 text-sm font-semibold text-error-700">
              {wayll?.[addLocaleSuffix({ key: "date" })]}
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
                <Button appearance="secondaryGray" size="md" className="!p-2.5">
                  <Image src={twitter} alt="Twitter" className="size-5" />
                </Button>
                <Button appearance="secondaryGray" size="md" className="!p-2.5">
                  <Image src={facebook} alt="Facebook" className="size-5" />
                </Button>
                <Button appearance="secondaryGray" size="md" className="!p-2.5">
                  <Image src={linkedin} alt="Linkedin" className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* <SubmitApplication /> */}
      </Container>
    </section>
  );
}
