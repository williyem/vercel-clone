import React from "react";
import { BarChart2, Home, PieChart } from "lucide-react";

const Solutions = () => (
  <div className="grid grid-cols-3 divide-x divide-neutral-700 w-[600px]">
    {[Home, BarChart2, PieChart].map((Icon, idx) => (
      <a
        key={idx}
        href="#"
        className="flex flex-col items-center text-neutral-400 hover:text-neutral-50"
      >
        <Icon className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Solution {idx + 1}</span>
      </a>
    ))}
  </div>
);

export default Solutions;
