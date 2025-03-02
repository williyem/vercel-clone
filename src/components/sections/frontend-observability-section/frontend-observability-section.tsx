import RightFloatingCross from "@/components/bottom-floating-cross";
import { LineChart } from "lucide-react";
import React from "react";

const FrontendObservabilitySection = () => {
  return (
    <section className="relative border-[var(--border)] bg-[var(--ds-background-100)] h-[440px] mt-0 border-y text-white py-12 px-6 md:px-12">
      <RightFloatingCross />
      <div
        className=" h-full "
        style={{
          backgroundImage: 'url("/analytics-large-dark.avif")',
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className=" flex items-center gap-2 text-[#a1a1a1] text-base">
              <LineChart className="w-4 h-4" />
              <span className="">Frontend Observability</span>
            </div>
            <div className="text-[#ededed] text-2xl mb- " data-size="large">
              <strong> Privacy-friendly, lightweight Analytics. </strong>
              <p className="text-[#a1a1a1] tracking-[-0.96px] leading-[32px]  font-medium">
                Upgrade your post-launch workflow with actionable, real-time
                insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendObservabilitySection;
