import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { lib } from "@/shared/lib";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";
import { Container } from "@/shared/ui";

import divider from "@/../public/images/slash-divider.svg";

import { careers } from "@/mock/career";
import { CareerApplication } from "@/widgets/submit-application/CareerApplication";

const CareerDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const localizedStrings = useLocalizedStrings();
  const { locale } = useRouter();
  const addLocaleSuffix = lib.locale.useAddLocaleSuffix();

  const career = careers.find((c) => c.id === id);

  if (!career) {
    return <div>Career not found</div>;
  }

  return (
    <>
      <section className="pt-20">
        <Container>
          <div>
            <div className="mt-5 flex items-center gap-x-2">
              <Link
                href="/career"
                className="text-sm font-medium text-gray-600">
                {localizedStrings["career"]}
              </Link>
              <Image src={divider} alt="divide" className="size-5" />
              <div className="text-sm font-semibold text-error-700">
                <p className="text-[14px] font-semibold">
                  {career[addLocaleSuffix({ key: "title" })]}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CareerApplication title={career[addLocaleSuffix({ key: "title" })]} />
    </>
  );
};

export default CareerDetails;
