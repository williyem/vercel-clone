import Image, { StaticImageData } from "next/image";
import React from "react";

type CardOwnerCardProps = {
  text: string;
  avatars: StaticImageData[];
};

const CardOwnerCard: React.FC<CardOwnerCardProps> = ({
  text = "",
  avatars,
}) => {
  return (
    <div className="rounded-[6px] w-full p-3 h-[56px] bg-[#ffffff0f] text-[var(--ds-gray-100-value)] flex items-center justify-between">
      <p className="text-xs">{text}</p>

      <div className="flex items-center justify-center gap-x-2">
        <div className="flex -space-x-3">
          {avatars.map((src, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full overflow-hidden border border-black"
            >
              <Image
                src={src}
                alt={`Avatar ${index + 1}`}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardOwnerCard;
