import { FC } from "react";
import { twJoin } from "tailwind-merge";

const RightFloatingCross: FC = () => {
  const boxClass =
    "absolute z-10  aspect-square size-2 md:size-3 border-[#7A7A7A]";

  return (
    <div className="absolute top-0 right-0 flex items-center justify-center">
      {/* Inner Cross Box */}
      <div
        aria-hidden={true}
        className={twJoin(boxClass, "-left-px -top-px border-l border-t")}
      />
      <div
        aria-hidden={true}
        className={twJoin(
          boxClass,
          "-left-2 -top-2 border-b border-r md:-left-3 md:-top-3"
        )}
      />
    </div>
  );
};

export default RightFloatingCross;
