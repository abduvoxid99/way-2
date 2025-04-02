import React from "react";

import NewsCard from "@/components/blocks/components/news-card";
import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";

export default function News() {
  return (
    <section className="pb-20 pt-15">
      <Container size="md">
        <Typography className="max-w-[840px] text-center mx-auto" variant="h1">
          Most of new clients ask question about Investing anf international
          knowladge
        </Typography>

        <div className="grid grid-cols-3 gap-5 mt-20">
          {[1, 2, 3].map((item) => (
            <NewsCard key={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            variant={"outline"}
            className="text-[#D33131] w-[178px] h-[56px] mt-10 font-bold">
            See all news
          </Button>
        </div>
      </Container>
    </section>
  );
}
