import React from "react";

import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";

import MessageCard from "./components/message-card";

export default function Messages() {
  return (
    <section className="py-20">
      <Container size="md">
        <Typography className="max-w-[840px] mx-auto text-center" variant="h1">
          Satisfy clients review about us, they give us some message and CTA
        </Typography>
        <div className="grid grid-cols-3 gap-5 mt-20">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <MessageCard key={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
