import RightFloatingCross from "@/components/bottom-floating-cross";
import FloatingCross from "@/components/floating-cross";
import React from "react";

const ReadyDeploySection = () => {
  return (
    <div className=" relative mt-4 border-t border-b border-[var(--border)] py-10 px-6 md:px-12">
      <FloatingCross />
      <div className="absolute bottom-0 right-0">
        <RightFloatingCross />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left - Main Text */}
        <div className="col-span-2 text-white space-y-4">
          <div className="text-[#a1a1a1]  text-2xl tracking-[-0.96px] leading-[32px]  font-medium ">
            <strong className="text-[#ededed]">Ready to deploy? </strong>
            {/* <p className="">÷ */}
            Start building with a free account. <br />
            Speak to an expert for your{" "}
            <span className="text-[#3B82F6]">Pro</span> or{" "}
            <span className="text-[#A855F7]">Enterprise</span> needs.
            {/* </p> */}
          </div>

          <div className="flex gap-4 flex-wrap text-sm">
            <button className=" outline-btn bg-white text-black font-medium rounded-full px-4 py-2 shadow-sm hover:bg-gray-200 ">
              Start Deploying
            </button>
            <button className="outline-btn ">Talk to an Expert</button>
          </div>
        </div>

        {/* Right - Explore Enterprise */}
        <div className="col-span-1 text-white space-y-4">
          <div className=" font-semibold text-base">
            Explore Vercel Enterprise{" "}
            <span className="text-[#a1a1a1]  leading-relaxed">
              with an interactive product tour, trial, or a personalized demo.
            </span>
          </div>

          <button className="outline-btn">Explore Enterprise</button>
        </div>
      </div>
    </div>
  );
};

export default ReadyDeploySection;
