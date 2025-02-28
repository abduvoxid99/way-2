import { Container } from "@/shared/ui";
import { CareerApplicationForm } from "../application-form/CareerApplicationForm";
import { useLocalizedStrings } from "@/shared/lib/useLocaliizedString";

interface Props {
  title: string;
}

export const CareerApplication = ({ title }: Props) => {
  const localizedStrings = useLocalizedStrings();
  return (
    <section className="py-6 xl:py-6">
      <Container>
        <div className="text-center text-4xl font-semibold text-gray-900 xl:font-bold"></div>
        <h3 className="text-center text-[36px] font-bold">{title}</h3>
        <div className="mt-4 text-center text-[18px] font-normal text-gray-600 xl:mt-5">
          {/* {localizedStrings["career_reach"]} */}
        </div>
        <CareerApplicationForm />
      </Container>
    </section>
  );
};
