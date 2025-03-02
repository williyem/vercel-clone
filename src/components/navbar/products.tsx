import AiSdkSvg from "@/app/assets/icons/navigation-icons/products/ai-sdk-svg";
import AiSvg from "@/app/assets/icons/navigation-icons/products/ai-svg";
import FluidSvg from "@/app/assets/icons/navigation-icons/products/fluid-svg";
import NextjsSvg from "@/app/assets/icons/navigation-icons/products/nextjs-svg";
import ObservabilitySvg from "@/app/assets/icons/navigation-icons/products/observability-svg";
import PreviewSvg from "@/app/assets/icons/navigation-icons/products/preview-svg";
import RenderingSvg from "@/app/assets/icons/navigation-icons/products/rendering-svg";
import SecuritySvg from "@/app/assets/icons/navigation-icons/products/security-svg";
import TurboRepoSvg from "@/app/assets/icons/navigation-icons/products/turbo-repo-svg";
import React from "react";
import NavItem from "./nav-item";

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-8 gap-y-24 w-[700px] text-white p-4">
      <div>
        <h3 className=" text-sm font-semibold text-neutral-400 mb-6">
          DX Platform
        </h3>
        <NavItem
          icon={<PreviewSvg />}
          title="Previews"
          description="Helping teams ship 6× faster"
        />
        <NavItem
          icon={<AiSvg />}
          title="AI"
          description="Powering breakthroughs"
        />
      </div>

      {/* Managed Infrastructure */}
      <div>
        <h3 className=" text-sm font-semibold text-neutral-400 mb-6">
          Managed Infrastructure
        </h3>
        <NavItem
          icon={<FluidSvg />}
          title="Fluid compute"
          description="Servers, in serverless form"
        />
        <NavItem
          icon={<RenderingSvg />}
          title="Rendering"
          description="Fast, scalable, and reliable"
        />
        <NavItem
          icon={<ObservabilitySvg />}
          title="Observability"
          description="Trace every step"
        />
        <NavItem
          icon={<SecuritySvg />}
          title="Security"
          description="Scale without compromising"
        />
      </div>

      {/* Open Source */}
      <div>
        <h3 className=" text-sm font-semibold text-neutral-400 mb-6">
          Open Source
        </h3>
        <NavItem
          icon={<NextjsSvg />}
          title="Next.js"
          description="The native Next.js platform"
        />
        <NavItem
          icon={<TurboRepoSvg />}
          title="Turborepo"
          description="Speed with Enterprise scale"
        />
        <NavItem
          icon={<AiSdkSvg />}
          title="AI SDK"
          description="The AI Toolkit for TypeScript"
        />
      </div>
    </div>
  );
};

// Reusable Product Item Component

export default Products;
