"use client";

import HeroSection from "@/components/sections/hero-section";
import DevelopSection from "@/components/sections/deploys-preproduction-section/develop-section";
import DeploysPreproductionSection from "@/components/sections/deploys-preproduction-section/deploys-preproduction-section";
import RollBacksConformance from "@/components/sections/rollbacks-conformance/rollbacks-conformance-section";
import { twJoin } from "tailwind-merge";
import { FC } from "react";
import ScaleContentSection from "@/components/sections/scale-content-section/scale-content-section";
import ReadyDeploySection from "@/components/sections/ready-deploy-section/ready-deploy-section";
// import FrontendObservabilitySection from "@/components/sections/frontend-observability-section/frontend-observability-section";

export default function Home() {
  return (
    <main
      className=" mx-auto   "
      style={{ width: "calc(var(--cellsize) * 13)" }}
    >
      <HeroSection />
      <div
        className="text-white    relative   mx-auto text-lg "
        style={{ width: "calc(var(--cellsize) * 12)" }}
      >
        <BottomFloatingCross />
        <div className="space-y-3 border border-[var(--border)] border-t-0">
          <DevelopSection />
          <DeploysPreproductionSection />
          {/* <FrontendObservabilitySection /> */}
          <RollBacksConformance />
          <ScaleContentSection />
          <ReadyDeploySection />
        </div>
      </div>
    </main>
  );
}

const BottomFloatingCross: FC = () => {
  const boxClass =
    "absolute z-10  aspect-square size-2 md:size-3 border-[#7A7A7A]";

  return (
    <div className="absolute right-0 flex items-center justify-center">
      {/* Inner Cross Box */}
      <div
        aria-hidden={true}
        className={twJoin(boxClass, "-left-px -top-px border-l border-t")}
      />
      <div
        aria-hidden={true}
        className={twJoin(
          boxClass,
          "-left-2 -top-2 border-b border-r md:-left-3 md:-top-3"
        )}
      />
    </div>
  );
};
