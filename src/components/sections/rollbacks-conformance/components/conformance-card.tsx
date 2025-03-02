import CircularProgress from "@/components/circular-progress";
import React from "react";

const ConformanceCard = ({ value = 0, text = "", percentage = 0 }) => {
  return (
    <div className="rounded-[6px] w-full p-3 h-[56px] bg-[#ffffff0f] text-[var(--ds-gray-100-value)] flex items-center justify-between">
      <p className="text-xs">{text}</p>

      <div className="flex items-center justify-center gap-x-2">
        {percentage ? (
          <CircularProgress value={percentage} size={20} showValue={false} />
        ) : null}
        <span className="dark:text-white font-semibold">{value || ""}</span>
      </div>
    </div>
  );
};

export default ConformanceCard;
