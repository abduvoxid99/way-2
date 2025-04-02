import React from "react";

import NewsCard from "@/components/blocks/components/news-card";
import Container from "@/components/common/container";
import NewTabs from "@/components/common/tabs/news-tabs";
import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";

export default function NewsSection() {
  const newContent = [
    {
      label: "Case Studies",
      content: (
        <>
          <div className="grid grid-cols-3 gap-5">
            {Array.from(Array(9), (_, i) => i + 1).map((item) => (
              <NewsCard key={item} />
            ))}
          </div>
        </>
      ),
    },

    {
      label: "Investing",
      content: (
        <>
          <div className="grid grid-cols-3 gap-5">
            {Array.from(Array(9), (_, i) => i + 1).map((item) => (
              <NewsCard key={item} />
            ))}
          </div>
        </>
      ),
    },
    {
      label: "Updates",
      content: (
        <>
          <div className="grid grid-cols-3 gap-5">
            {Array.from(Array(9), (_, i) => i + 1).map((item) => (
              <NewsCard key={item} />
            ))}
          </div>
        </>
      ),
    },
  ];
  return (
    <section className="py-20">
      <Container size="md">
        <Typography className="font-bold text-[40px] max-w-[640px] mx-auto text-center leading-[120%]">
          Breaking news are waiting you and get your information
        </Typography>
        <NewTabs
          className="mt-[60px]"
          tabs={newContent}
          defaultActiveTab="Case Studies"
        />

        <div className="flex justify-center">
          <Button
            variant={"outline"}
            className="text-[#D33131] w-[178px] h-[56px] font-bold rounded-sm mt-10">
            Load more
          </Button>
        </div>
      </Container>
    </section>
  );
}
