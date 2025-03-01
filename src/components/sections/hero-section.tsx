import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="text-white lg:min-h-[717px] flex flex-col items-center justify-center relative">
      <div className="absolute z-0 inset-0 grid grid-cols-12 grid-rows-8 border border-neutral-900 pointer-events-none">
        {Array.from({ length: 12 * 8 }).map((_, i) => {
          const row = Math.floor(i / 12);
          const col = i % 12;

          const insideSpannedArea =
            row >= 1 && row <= 4 && col >= 1 && col <= 10;

          return insideSpannedArea ? null : (
            <div
              key={i}
              className="border border-neutral-900 pointer-events-none z-0"
            ></div>
          );
        })}

        {/* Spanned Content Area (set above the grid lines) */}
        <div className="text-white col-span-10 row-span-4 col-start-2 row-start-2 flex items-center justify-center relative z-[1] pointer-events-auto">
          <div className="mx-auto text-center px-4">
            <h1 className="text-5xl leading-[48px] font-bold mb-6">
              Your complete platform for the web.
            </h1>

            <p className="text-xl leading-[36px] text-[#A1A1A1] ">
              Vercel provides the developer tools and cloud infrastructure
            </p>
            <p className="text-xl leading-[36px] text-[#A1A1A1] mb-8">
              to build, scale, and secure a faster, more personalized web.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button className="bg-white h-12 w-[181px] text-base text-black font-medium py-4 rounded-[100px] flex items-center hover:bg-white/90 border  border-black/50 hover:border-black/60 cursor-pointer">
                <span className="mr-1 text-xl">▲</span> Start Deploying
              </Button>
              <Button
                variant={"outline"}
                className="bg-black h-12 w-[181px] text-base text-white font-medium py-4 rounded-[100px] flex items-center  border-[0.5px]  cursor-pointer"
              >
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
