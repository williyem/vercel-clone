import React from "react";
import IconButton from "./enterprise-button";
import BuildingSvg from "@/app/assets/icons/building-svg";
import SecuritySvg from "@/app/assets/icons/security-svg";

const ScaleContentSection = () => {
  return (
    <div className=" text-[20px] md:text-[24px] flex border border-t-0 border-x-0 border-[var(--border)] h-[136px] px-6  items-center justify-center  text-center  font-semibold leading-[125%] ">
      <span className="flex gap-x-3  items-center">
        Scale your <IconButton icon={<BuildingSvg />} text="Enterprise" />{" "}
        without compromising{" "}
        <IconButton icon={<SecuritySvg />} text="Security" />
      </span>
    </div>
  );
};

export default ScaleContentSection;
