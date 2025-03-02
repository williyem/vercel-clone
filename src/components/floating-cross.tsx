import { FC } from "react";
import { twJoin } from "tailwind-merge";

const FloatingCross: FC = () => {
  const boxClass = "absolute  aspect-square size-2 md:size-3 border-[#7A7A7A]";
  return (
    <>
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
    </>
  );
};

export default FloatingCross;
