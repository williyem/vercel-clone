import React from "react";
import NavItem from "./nav-item";
import AiSvg from "@/app/assets/icons/navigation-icons/products/ai-svg";
import ComposableSvg from "@/app/assets/icons/navigation-icons/solutions/composable-svg";
import MarketingSvg from "@/app/assets/icons/navigation-icons/solutions/marketing-svg";
import MultiTenantSvg from "@/app/assets/icons/navigation-icons/solutions/multi-tenant-svg";
import WebAppSvg from "@/app/assets/icons/navigation-icons/solutions/web-app-svg";
import PlatformSvg from "@/app/assets/icons/navigation-icons/solutions/platform-svg";
import DesignSvg from "@/app/assets/icons/navigation-icons/solutions/design-svg";

const Solutions = () => (
  <div className="grid grid-cols-2 gap-8  w-[520px] text-white p-4">
    <div>
      <h3 className=" text-sm font-semibold text-neutral-400 mb-6">
        Use Cases
      </h3>
      <NavItem
        icon={<AiSvg />}
        title="AI Apps"
        description="Deploy at the speed of AI"
      />
      <NavItem
        icon={<ComposableSvg />}
        title="Composable Commerce"
        description="Power storefronts that convert"
      />
      <NavItem
        icon={<MarketingSvg />}
        title="Marketing Sites"
        description="Launch campaigns fast"
      />
      <NavItem
        icon={<MultiTenantSvg />}
        title="Multi-tenant Platforms"
        description="Scale apps with one codebase"
      />
      <NavItem
        icon={<WebAppSvg />}
        title="Web Apps"
        description="Ship features, not infrastructure"
      />
    </div>

    {/* Users */}
    <div>
      <h3 className=" text-sm font-semibold text-neutral-400 mb-6">Users</h3>
      <NavItem
        icon={<PlatformSvg />}
        title="Platform Engineers"
        description="Automate away repetition"
      />
      <NavItem
        icon={<DesignSvg />}
        title="Design Engineers"
        description="Deploy for every idea"
      />
    </div>
  </div>
);

export default Solutions;
