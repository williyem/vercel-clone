import LockIconSvg from "@/app/assets/icons/lock-icon-svg";
import { Lock, Terminal } from "lucide-react";
import React from "react";
import DeployLeft from "./deploys-preproduction-section/deploy-left";
import DeployRight from "./deploys-preproduction-section/deploy-right";

const DeploysPreproductionSection = () => {
  return (
    <div className="relative border border-[var(--border)] divide-x divide-[var(--border)]  min-h-[570px] flex">
      <DeployLeft />

      <DeployRight />
    </div>
  );
};

export default DeploysPreproductionSection;
