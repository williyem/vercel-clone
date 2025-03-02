import { LineChart } from "lucide-react";
import React from "react";

const FrontendObservabilitySection = () => {
  return (
    <section className="border-t border-b border-[var(--border)] bg-black text-white py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400">
            <LineChart className="w-4 h-4" />
            <span className="text-sm">Frontend Observability</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight leading-snug">
            Privacy-friendly, lightweight Analytics.
          </h2>

          <p className="text-gray-400 text-lg">
            Upgrade your post-launch workflow with actionable, real-time
            insights.
          </p>
        </div>

        {/* Chart (Placeholder - Ideally you'd use a real charting library) */}
        <div className="relative w-full h-48 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
          {/* Mock Chart Line */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
          >
            {/* Blue Line */}
            <polyline
              points="0,160 50,150 100,120 150,140 200,80 250,110 300,70 350,100 400,60"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
            />
            {/* Green Line */}
            <polyline
              points="0,180 50,170 100,150 150,160 200,130 250,140 300,100 350,110 400,90"
              fill="none"
              stroke="#14B8A6"
              strokeWidth="2"
            />
          </svg>

          {/* Data Tooltip (Mockup) */}
          <div className="absolute right-10 top-20 bg-black text-white text-xs rounded-md shadow-lg p-2 space-y-1 border border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Views</span>
              <span className="font-semibold">5,218</span>
              <span className="text-blue-400">+53%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Clicks</span>
              <span className="font-semibold">2,005</span>
              <span className="text-green-400">+13%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendObservabilitySection;
