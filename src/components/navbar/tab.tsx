import { useRouter } from "next/navigation"; // If using Next.js
import React, { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

const Tab = ({
  children,
  tab,
  link,
  handleSetSelected,
  selected,
}: {
  children: ReactNode;
  tab: number;
  link?: string;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link); // Navigate if the tab has a link
    } else {
      handleSetSelected(tab); // Otherwise, open dropdown
    }
  };

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => !link && handleSetSelected(tab)}
      onClick={handleClick}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? "bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      {!link && (
        <ChevronDown
          className={`transition-transform w-3 ${
            selected === tab ? "rotate-180" : ""
          }`}
        />
      )}
    </button>
  );
};

export default Tab;
