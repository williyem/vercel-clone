import { Terminal } from "lucide-react";
import React from "react";

const DeployLeft = () => {
  return (
    <div className="space-y-2 basis-1/2 p-12">
      <div className="flex items-center gap-2 text-[#a1a1a1] text-base">
        <Terminal size={18} />
        <span>Git-connected Deploys</span>
      </div>
      <div className="text-[#ededed] text-2xl mb- " data-size="large">
        <strong>From localhost to https, in seconds. </strong>
        <p className="text-[#a1a1a1] tracking-[-0.96px] leading-[32px]  font-medium">
          Deploy from Git or your CLI.
        </p>
      </div>
      <div className=" pt-6 relative ">
        <div className="max-w-[350px] space-y-1.5 gap-3 overflow-hidden bg-[var(--ds-background-200)] bg-clip-padding border border-[var(--ds-gray-alpha-400)] rounded-[12px] p-3 shadow-[var(--ds-shadow-small)]">
          <div className=" w-full flex gap-x-1 mb-3">
            <div className="w-2 h-2 rounded-[50%] bg-[var(--ds-gray-alpha-400)]"></div>
            <div className="w-2 h-2 rounded-[50%] bg-[var(--ds-gray-alpha-400)]"></div>
            <div className="w-2 h-2 rounded-[50%] bg-[var(--ds-gray-alpha-400)]"></div>
          </div>
          <div className="font-mono text-xs leading-4  font-normal tracking-normal">
            <span className=" text-[var(--ds-gray-100-value)]">
              ▲ ~ vercel-site/{" "}
            </span>
            git push
          </div>
          <div className="font-mono text-xs leading-4  font-normal tracking-normal">
            <span className=" text-[var(--ds-gray-1000-value)] vercel-text-gradient">
              Enumerating objects: 1, done.
            </span>
          </div>
          <div className="font-mono text-xs leading-4  font-normal tracking-normal">
            <span className=" text-[var(--ds-gray-1000-value)] vercel-text-gradient">
              Counting objects: 100% (1/1), done.
            </span>
          </div>
          <div className="font-mono text-xs leading-4  font-normal tracking-normal">
            <span className=" text-[var(--ds-gray-1000-value)] vercel-text-gradient">
              Writing objects: 100% (1/1), 72 bytes, done.
            </span>
          </div>
          <div className="font-mono text-xs leading-4  font-normal tracking-normal">
            <span className=" text-[var(--ds-gray-1000-value)] vercel-text-gradient">
              Total 1 (delta 0), reused 0 (delta 0).
            </span>
          </div>
          <div className="font-mono text-xs leading-4  font-normal tracking-normal">
            <span className=" text-[var(--ds-gray-1000-value)] vercel-text-gradient">
              To github.com:vercel/vercel-site.git
            </span>
          </div>
          <div className="font-mono text-xs leading-4  font-normal tracking-normal">
            <span className=" text-[var(--ds-gray-1000-value)] vercel-text-gradient">
              &nbsp;&nbsp;&nbsp;21326a9..81663c3 main -&gt; main
            </span>
          </div>
        </div>

        <div className="max-w-[350px] absolute top-[188px] left-[105px] space-y-1.5 gap-3 overflow-hidden bg-[var(--ds-background-100)] bg-clip-padding border border-[var(--ds-gray-alpha-400)] rounded-[12px] p-3 shadow-[var(--ds-shadow-small)]">
          <div className="mb-3 relative flex w-full items-center justify-center ">
            <div className="absolute left-0   flex gap-x-1 ">
              <div className="w-2 h-2 rounded-[50%] bg-red-500"></div>
              <div className="w-2 h-2 rounded-[50%] bg-blue-500"></div>
              <div className="w-2 h-2 rounded-[50%] bg-teal-500"></div>
            </div>
            <div className="flex gap-x-1">
              <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                <path
                  clip-rule="evenodd"
                  d="M9.5 6V7H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5Z"
                  fill="#a1a1a1"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <p className="text-xs dark:text-[#a1a1a1]"> vercel.com</p>
            </div>
          </div>

          <span className="outlined-text_text__WDMgT  leading-[0.83] font-semibold tracking-[-0.075em] w-full z-10 absolute top-[26%] left-[-2px] text-center text-4xl">
            What will you ship?
          </span>
          <svg
            className="deploy-visual_grid__roLF7"
            fill="none"
            height="144"
            viewBox="0 0 312 144"
            width="312"
          >
            <rect
              height="181"
              stroke="#FFFFFF1A"
              width="311"
              x="0.5"
              y="0.5"
            ></rect>
            <g filter="url(#filter1_d_1086_110200)">
              <path
                clip-rule="evenodd"
                d="M155.5 78L200 156H111L155.5 78Z"
                fill="var(--ds-background-100)"
                fill-rule="evenodd"
              ></path>
              <path
                clip-rule="evenodd"
                d="M155.5 78L200 156H111L155.5 78Z"
                fill-rule="evenodd"
                stroke="var(--ds-gray-500)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DeployLeft;
