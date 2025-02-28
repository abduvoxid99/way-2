import { Container } from "@/shared/ui/container";
import { InvestmentApplicationForm } from "../application-form/InvestApplicationForm";

interface Props {
  title?: string;
  subtitle?: string;
}

export const InvestmentSubmitApplication = ({ title, subtitle }: Props) => (
  <section className="py-16 xl:py-12">
    <Container>
      <div className="text-center text-4xl font-semibold text-gray-900 xl:font-bold"></div>
      <h3 className="text-center text-[36px] font-bold">
        {title ? title : "Оставьте заявку"}
      </h3>
      <div className="mt-4 text-center text-[18px] font-normal text-gray-600 xl:mt-5">
        {subtitle ? subtitle : "Оставьте заявку и мы свяжемся с вами"}
      </div>
      {/* <div className="max-h-[75vh] overflow-auto p-4"> */}
      <InvestmentApplicationForm />
      {/* </div> */}
    </Container>
  </section>
);
