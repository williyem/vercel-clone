import AnticlockwiseSvg from "@/app/assets/icons/anticlockwise-svg";
import RollbackLinkerSvg from "@/app/assets/icons/rollback-linker-svg";
import RollBackSvg from "@/app/assets/icons/rollback-svg";
import { RotateCw } from "lucide-react";
import React from "react";

const RollBacksConformanceLeft = () => {
  return (
    <div className="space-y-2 basis-1/2 p-12">
      <div className="flex items-center gap-2 text-[#a1a1a1] text-base">
        <RotateCw size={18} />
        <span>Instant Rollbacks</span>
      </div>
      <div className="text-[#ededed] text-2xl mb- " data-size="large">
        <strong>Go ahead, deploy on Friday. </strong>
        <p className="text-[#a1a1a1] tracking-[-0.96px] leading-[32px]  font-medium">
          Instantly rollback to a working deployment.
        </p>
      </div>
      <div className=" pt-6 relative ">
        <div className=" text-white py-8 space-y-1">
          {/* Previous Deployment (Successful) */}
          <div
            style={{ backgroundClip: "padding-box" }}
            className="relative justify-between gap-x-6 items-center  w-fit  p-4   bg-[var(--ds-background-100)]  text-sm flex  gap-2 rounded-[12px] border border-[var(--ds-gray-alpha-400)] leading-5"
          >
            <div className="flex  flex-col gap-2">
              <div className="flex  w-full justify-between">
                <span className="text-[var(--ds-gray-100-value)]">
                  vercel-site/<span className="text-white">jvjb4ynna</span>
                </span>
                <span className="text-[var(--ds-gray-100-value)] text-xs">
                  1d ago
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--ds-gray-100-value)]">
                  <RollBackSvg />
                </span>
                <span className="dark:text-white">ba5f55f</span>
                <span className="dark:text-white">Update bento box design</span>
              </div>
            </div>

            <div
              className="  flex items-center justify-center w-8 h-8 rounded-full font-bold "
              style={{
                background: `conic-gradient(
                  #14B8A6 0% 90%, 
                  rgba(243, 244, 246, 0.2) 55% 100%
                )`,
              }}
            >
              <div className="flex items-center  text-teal-500 justify-center w-7 h-7 rounded-full bg-black">
                90
              </div>
            </div>

            {/* <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-6 w-0.5 bg-green-500"></div> */}
          </div>
          <div className="w-full my-[-120px] flex items-center justify-center">
            <div className=" flex items-center justify-center relative">
              <span className="w-[30px] h-[30px] text-[#a1a1a1] border-[0.5px] border-[#a1a1a1]/40  bg-black flex items-center justify-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+6px)] shadow ">
                <AnticlockwiseSvg />
              </span>
              <RollbackLinkerSvg />
            </div>
          </div>
          <div
            style={{ backgroundClip: "padding-box" }}
            className="relative  gap-x-6   w-fit ml-auto justify-between items-center border-dashed   p-4   bg-[var(--ds-background-100)]  text-sm flex  gap-2 rounded-[12px] border border-[var(--ds-gray-alpha-400)] leading-5"
          >
            <div className="flex  flex-col gap-2">
              <div className="flex  w-full justify-between">
                <span className="text-neutral-400">
                  vercel-site/<span className="text-white">gigj178pv</span>
                </span>
                <span className="text-neutral-500 text-xs">10m ago</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--ds-gray-100-value)]">
                  <RollBackSvg />
                </span>
                <span className="dark:text-white">bx012mm</span>
                <span className="dark:text-white">
                  Fix ESLint error on query
                </span>
              </div>
            </div>

            <div
              className=" flex items-center justify-center w-8 h-8 rounded-full font-bold text-red-500"
              style={{
                background: `conic-gradient(
                  #ef4444 0% 55%, 
                  rgba(243, 244, 246, 0.2) 55% 100%
                )`,
              }}
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-black">
                55
              </div>
            </div>

            {/* <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-6 w-0.5 bg-green-500"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollBacksConformanceLeft;
