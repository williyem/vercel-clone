import BookSvg from "@/app/assets/icons/book-svg";
import React from "react";

const RollBacksConformanceRight = () => {
  return (
    <div className="space-y-2 basis-1/2 p-12">
      <div className="flex items-center gap-2 dark:text-[#a1a1a1] text-base">
        <BookSvg />
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
      <div className=" pt-6 relative ">{/* <ChatInterface /> */}</div>
    </div>
  );
};

export default RollBacksConformanceRight;
