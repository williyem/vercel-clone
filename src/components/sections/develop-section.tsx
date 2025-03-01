import GlobeIconSvg from "@/app/assets/icons/globe-icon-svg";
import GreaterThanUnderscoreSvg from "@/app/assets/icons/greater-than-underscore-svg";
import PushingSvgIcon from "@/app/assets/icons/pushing-svg-icon";
import React from "react";

const DevelopSection = () => {
  return (
    <div className=" text-[32px] border border-[var(--border)] h-[270px] px-6 flex flex-col items-center justify-center  text-center  font-semibold leading-[125%] tracking-[-1.28px]">
      <span className="flex items-center gap-4">
        <p>Develop with your favorite tools</p>
        <GreaterThanUnderscoreSvg />
      </span>
      <span className="flex items-center gap-4">
        <p>Launch globally, instantly</p>
        <GlobeIconSvg />
        Keep pushing
        <PushingSvgIcon />
      </span>
    </div>
  );
};

export default DevelopSection;
