"use client";

import HeroSection from "@/components/sections/hero-section";
import DevelopSection from "@/components/sections/deploys-preproduction-section/develop-section";
import DeploysPreproductionSection from "@/components/sections/deploys-preproduction-section/deploys-preproduction-section";
import RollBacksConformance from "@/components/sections/rollbacks-conformance/rollbacks-conformance-section";

import ScaleContentSection from "@/components/sections/scale-content-section/scale-content-section";
import ReadyDeploySection from "@/components/sections/ready-deploy-section/ready-deploy-section";
import FrontendObservabilitySection from "@/components/sections/frontend-observability-section/frontend-observability-section";
import RightFloatingCross from "@/components/bottom-floating-cross";
import FloatingCross from "@/components/floating-cross";

export default function Home() {
  return (
    <main className=" relative mx-auto w-full border-[var(--border)] border-t-0 mt-28 max-[768px]:max-w-[calc(var(--cellsize)*8)] max-w-[calc(var(--cellsize)*12)] border">
      <FloatingCross />
      <HeroSection />
      <div className="relative ">
        <RightFloatingCross />
        <DevelopSection />

        <DeploysPreproductionSection />
        <FrontendObservabilitySection />
        <div className="relative">
          <FloatingCross />
          <RollBacksConformance />
        </div>
        <ScaleContentSection />

        <ReadyDeploySection />
      </div>
    </main>
  );
}
