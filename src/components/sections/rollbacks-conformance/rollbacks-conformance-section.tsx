import React from "react";
import RollBacksConformanceLeft from "./components/Rollbacks-conformance-left";
import RollBacksConformanceRight from "./components/Rollbacks-conformance-right";

const RollBacksConformance = () => {
  return (
    <div className="relative border border-[var(--border)] divide-x divide-[var(--border)]  min-h-[570px] flex">
      <RollBacksConformanceLeft />

      <RollBacksConformanceRight />
    </div>
  );
};

export default RollBacksConformance;
