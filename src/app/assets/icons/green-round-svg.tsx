import React from "react";

const GreenRoundSvg = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="20"
      stroke-width="2"
      viewBox="0 0 100 100"
      width="20"
    >
      <circle
        // style="opacity:0;--stroke-percent:-8"
        cx="50"
        cy="50"
        r="42.5"
        stroke-width="15"
        stroke-dashoffset="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="overflow-visible"
        stroke="var(--ds-gray-alpha-400)"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="42.5"
        stroke-width="15"
        stroke-dashoffset="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="gauge_arc__UGu7u"
        data-geist-progress-circle-fg=""
        stroke="var(--ds-teal-600)"
        // style="opacity:1;--stroke-percent:90"
      ></circle>
    </svg>
  );
};

export default GreenRoundSvg;
