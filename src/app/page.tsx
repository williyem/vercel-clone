"use client";

import HeroSection from "@/components/sections/hero-section";
import DevelopSection from "@/components/sections/develop-section";
import DeploysPreproductionSection from "@/components/sections/deploys-preproduction-section";

export default function Home() {
  return (
    <main className=" mx-auto   ">
      <HeroSection />
      <div
        className="text-white    mx-auto text-lg "
        style={{ width: "calc(var(--cellsize) * 12)" }}
      >
        <div className="space-y-3">
          <DevelopSection />
          <DeploysPreproductionSection />
        </div>
      </div>
    </main>
  );
}
