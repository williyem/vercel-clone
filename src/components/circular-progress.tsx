import React from "react";

interface CircularProgressProps {
  value: number; // example: 90
  size?: number; // size of outer circle (default 32px)
  strokeColor?: string; // progress color
  bgColor?: string; // inner background color
  textColor?: string; // text color
  showValue?: boolean; //
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 32,
  strokeColor = "#14B8A6",
  bgColor = "#000",
  textColor = "text-teal-500",
  showValue = true,
}) => {
  const conicBackground = `conic-gradient(
    ${strokeColor} 0% ${value}%, 
    rgba(243, 244, 246, 0.2) 55% 100%
  )`;

  return (
    <div
      className="flex items-center justify-center rounded-full font-bold"
      style={{
        width: size,
        height: size,
        background: conicBackground,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full ${textColor}`}
        style={{
          width: size - 6,
          height: size - 6,
          backgroundColor: bgColor,
        }}
      >
        {showValue ? value : null}
      </div>
    </div>
  );
};

export default CircularProgress;
