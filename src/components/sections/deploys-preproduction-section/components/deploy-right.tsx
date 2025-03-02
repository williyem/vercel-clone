import { Terminal } from "lucide-react";
import React from "react";
import ChatInterface from "./chat-interface";

const DeployRight = () => {
  return (
    <div className="space-y-2 basis-1/2 max-sm:mt-28 p-12">
      <div className="flex items-center gap-2 text-[#a1a1a1] text-base">
        <Terminal size={18} />
        <span>Collaborative pre-production</span>
      </div>
      <div
        className="text-[#ededed] text-2xl mb-8 flex flex-wrap"
        data-size="large"
      >
        <strong>Every deploy is remarkable. </strong>
        <p className="text-[#a1a1a1] tracking-[-0.96px] leading-[32px]  font-medium">
          Chat with your team on real, production-grade UI, not just designs.
        </p>
      </div>
      <div className=" pt-6 relative ">
        <ChatInterface />
      </div>
    </div>
  );
};

export default DeployRight;
