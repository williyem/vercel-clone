import { Book } from "lucide-react";
import React from "react";
import ConformanceCard from "./conformance-card";
import CardOwnerCard from "./card-owner-card";

import { codeOwnerData, conformanceData } from "@/lib/ui-data";
const RollBacksConformanceRight = () => {
  return (
    <div className="space-y-2 basis-1/2 p-12">
      <div className="flex items-center gap-2 dark:text-[#a1a1a1] text-base">
        <Book className="w-4 h-4" />
        <span>Conformance</span>
      </div>
      <div
        className="text-[#ededed] text-2xl mb-8 flex flex-wrap"
        data-size="large"
      >
        <strong>Every deploy is remarkable. </strong>
        <p className="text-[#a1a1a1] tracking-[-0.96px] leading-[32px]  font-medium">
          Keep quality high while maintaining velocity with Enterprise
          Monorepos.
        </p>
      </div>
      <div className=" pt-6 relative bg-ds-background-200  ">
        <div
          className="w-full h-full divide-x-2 divide-[var(--ds-gray-alpha-400)] shadow-[0_0_0_1px_rgba(255,255,255,0.145),0_1px_2px_rgba(0,0,0,0.16)]
 rounded-[12px] relative select-none container-[inline-size] grid grid-cols-2"
        >
          <div className="text-sm p-4">
            <h2>Conformance</h2>
            <div className="gap-y-4 flex flex-col mt-4">
              {conformanceData.map((item, index) => (
                <ConformanceCard
                  key={index}
                  percentage={item.percentage}
                  value={item.value}
                  text={item.text}
                />
              ))}
            </div>
          </div>
          <div className="text-sm p-4 ">
            <h2>Code Owners</h2>
            <div className="gap-y-4 flex flex-col mt-4">
              {codeOwnerData.map((item, index) => (
                <CardOwnerCard
                  key={index}
                  text={item.text}
                  avatars={item.avatars}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollBacksConformanceRight;
