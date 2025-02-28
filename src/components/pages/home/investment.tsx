import React from "react";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";

import InvestorCard from "./components/investor-card";

export default function Investment() {
  return (
    <section className="py-20">
      <Container size="md" className="flex flex-col items-center gap-20">
        <Typography className="max-w-[840px] mx-auto text-center" variant="h1">
          Understand your customers. Connect teams with insights. Deliver
          experiences that maximize business impact with service
        </Typography>
        <div className="flex">
          <InvestorCard color="blue" className="rotate-[-5deg]" />
          <InvestorCard color="black" className="rotate-[7deg]" />
        </div>

        <Button
          className="w-[217px] h-[56px] text-[#981C1E] font-bold "
          variant={"outline"}>
          GET INVESTMENT
        </Button>
      </Container>
    </section>
  );
}
