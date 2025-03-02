import React, { type ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode; // This allows any SVG or React component
  text: string;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, text }) => {
  return (
    <button className="flex outline-btn items-center justify-between px-2.5 h-10">
      {icon}
      <p className="truncate inline-block px-[6px]">{text}</p>
    </button>
  );
};

export default IconButton;
