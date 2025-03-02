import React from "react";

const NavItem = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex group cursor-pointer items-start gap-3 mb-5">
      <div className="flex items-center justify-center w-7 h-7 border border-[var(border)] group-hover:bg-white group-hover:text-black  rounded-md">
        <span className="text-lg ">{icon}</span>
      </div>
      <div>
        <h4 className="text-sm font-medium text-white">{title}</h4>
        <p className="text-xs text-neutral-400 group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NavItem;
