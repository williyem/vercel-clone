import React from "react";
import DeployLeft from "./components/deploy-left";
import DeployRight from "./components/deploy-right";

const DeploysPreproductionSection = () => {
  return (
    <div className="relative border  border-x-0  border-[var(--border)] divide-x divide-[var(--border)]  min-h-[570px] flex">
      <DeployLeft />

      <DeployRight />
    </div>
  );
};

export default DeploysPreproductionSection;
