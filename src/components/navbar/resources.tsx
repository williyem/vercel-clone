import React from "react";
import { ArrowRight } from "lucide-react";

const Resources = () => (
  <div className="w-[600px]">
    <p className="text-neutral-400">Explore our resources</p>
    <button className="mt-4 flex items-center gap-1 text-sm text-indigo-300">
      View more <ArrowRight />
    </button>
  </div>
);

export default Resources;
