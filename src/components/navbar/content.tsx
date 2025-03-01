import React from "react";
import { motion } from "framer-motion";
import { TABS } from "./utils";
import Nub from "./nub";

const Content = ({
  selected,
  dir,
}: {
  selected: number;
  dir: "l" | "r" | null;
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      //   className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-neutral-900 p-4"
      //   className="left-0 top-[calc(100%_+_24px)] w-96 p-4 rounded-lg border border-neutral-600 bg-neutral-900   data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto "
      className="left-0 top-[calc(100%_+_24px)] w-96 p-4  border border-neutral-600 bg-black   data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto       group inline-flex  items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50
"
    >
      <Nub selected={selected} />

      {TABS.map((tab) => (
        <div key={tab.id} className="overflow-hidden">
          {selected === tab.id && (
            <motion.div
              initial={{ x: dir === "l" ? 100 : -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.25 }}
            >
              {tab.Component ? <tab.Component /> : null}
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default Content;
