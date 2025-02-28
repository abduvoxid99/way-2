import React from "react";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-20">
      <Container size="md">
        <Typography className="text-center" variant="h1">
          Most of new clients ask question about Investing anf international
          knowladge
        </Typography>

        <Accordion type="single" collapsible className="w-full pt-20">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What investment instruments does WAY II offer?
            </AccordionTrigger>
            <AccordionContent>
              {`Advanced analytics reporting of investments" refers to using
              sophisticated data analysis techniques Advanced analytics
              reporting of investments" refers to using sophisticated data
              analysis techniques`}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What investment instruments does WAY II offer?
            </AccordionTrigger>
            <AccordionContent>
              {`Advanced analytics reporting of investments" refers to using
              sophisticated data analysis techniques Advanced analytics
              reporting of investments" refers to using sophisticated data
              analysis techniques`}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What investment instruments does WAY II offer?
            </AccordionTrigger>
            <AccordionContent>
              {`Advanced analytics reporting of investments" refers to using
              sophisticated data analysis techniques Advanced analytics
              reporting of investments" refers to using sophisticated data
              analysis techniques`}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </section>
  );
}
