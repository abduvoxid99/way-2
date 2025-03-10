import React from "react";

import { SelectTrigger } from "@radix-ui/react-select";

import Typography from "@/components/common/typhography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function FooterForm() {
  return (
    <div className="w-[525px] ml-auto">
      <form action="">
        <div className="p-5 bg-red-50 border-brand-200 rounded-sm">
          <div className="border border-red-800 border-dashed h-[70px] flex justify-center items-center rounded-sm">
            <Typography
              variant="h3"
              className="whitespace-nowrap font-semibold">
              We are waiting your message
            </Typography>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <Typography variant="p-md" className="mt-5">
                <span className="text-brand-300">To:</span> Way 2 Investment
              </Typography>
              <Typography variant="p-md">
                <span className="text-brand-300">Topic:</span> Investment
                advices
              </Typography>
            </div>

            <div>
              <p className="text-sm font-semibold">Fullname</p>
              <Input
                className="h-12 border-brand-100 mt-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Phone number</p>
              <Input
                className="h-12 border-brand-100 mt-2"
                placeholder="Phone number"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">My region or District is</p>
              <Select>
                <SelectTrigger className="w-[180px] bg-white h-12 rounded-sm border border-brand-200">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tashkent</SelectLabel>
                    <SelectItem value="apple">Bukhara</SelectItem>
                    <SelectItem value="banana">Khorezm</SelectItem>
                    <SelectItem value="blueberry">Syrdarya</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="text-sm font-semibold">My message</p>
              <Textarea
                rows={5}
                className=" border-brand-100 mt-2"
                placeholder="Insvestment goal is..."
              />
            </div>
            <div className="flex justify-center mb-[-40px] mt-5">
              <Button
                variant={"destructive"}
                className="w-full max-w-[393px] h-[52px] bg-brand-700 ">
                Send message
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
