"use client";

import { type ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  className: string;
}

export default function NewTabs({
  tabs,
  defaultActiveTab,
  className,
}: TabProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0].label);

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                activeTab === tab.label
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50",
              )}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={activeTab === tab.label ? "block" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
