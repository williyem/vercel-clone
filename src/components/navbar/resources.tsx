import React from "react";
import NavItem from "./nav-item";
import ResourceCenterSvg from "@/app/assets/icons/navigation-icons/resources/resource-center-svg";
import MarketplaceSvg from "@/app/assets/icons/navigation-icons/resources/marketplace-svg";
import TemplatesSvg from "@/app/assets/icons/navigation-icons/resources/templates-svg";
import GuidesSvg from "@/app/assets/icons/navigation-icons/resources/guides-svg";
import PartnerFinderSvg from "@/app/assets/icons/navigation-icons/resources/partner-finder-svg";
import CustomersSvg from "@/app/assets/icons/navigation-icons/resources/customers-svg";
import BlogSvg from "@/app/assets/icons/navigation-icons/resources/blog-svg";
import ChangelogSvg from "@/app/assets/icons/navigation-icons/resources/changelog-svg";
import PressSvg from "@/app/assets/icons/navigation-icons/resources/press-svg";

const Resources = () => (
  <div className="grid grid-cols-2 gap-8 gap-y-24 w-[520px] text-white p-4">
    {/* Left Column - Tools */}
    <div>
      <h3 className="text-sm font-semibold text-neutral-400 mb-6">Tools</h3>
      <NavItem
        icon={<ResourceCenterSvg />}
        title="Resource Center"
        description="Today's best practices"
      />
      <NavItem
        icon={<MarketplaceSvg />}
        title="Marketplace"
        description="Extend and automate workflows"
      />
      <NavItem
        icon={<TemplatesSvg />}
        title="Templates"
        description="Jumpstart app development"
      />
      <NavItem
        icon={<GuidesSvg />}
        title="Guides"
        description="Find help quickly"
      />
      <NavItem
        icon={<PartnerFinderSvg />}
        title="Partner Finder"
        description="Get help from solution partners"
      />
    </div>

    {/* Right Column - Company */}
    <div>
      <h3 className="text-sm font-semibold text-neutral-400 mb-6">Company</h3>
      <NavItem
        icon={<CustomersSvg />}
        title="Customers"
        description="Trusted by the best teams"
      />
      <NavItem
        icon={<BlogSvg />}
        title="Blog"
        description="The latest posts and changes"
      />
      <NavItem
        icon={<ChangelogSvg />}
        title="Changelog"
        description="See what shipped"
      />
      <NavItem
        icon={<PressSvg />}
        title="Press"
        description="Read the latest news"
      />
    </div>
  </div>
);

export default Resources;
