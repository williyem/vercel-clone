import BlueCursorSvg from "@/app/assets/icons/blue-cursor-svg";
import GreenCursorSvg from "@/app/assets/icons/green-cursor-svg";
import RedCursorSvg from "@/app/assets/icons/red-cursor-svg";
import { ArrowUp } from "lucide-react";

interface ChatMessageProps {
  content: string;
  author?: {
    name: string;
    color: "blue" | "red";
  };
  showUpvote?: boolean;
  position?: "left" | "right";
}

export default function ChatMessage({
  content,
  author,
  showUpvote = false,
  position = "left",
}: ChatMessageProps) {
  return (
    <div
      className={`flex items-start  ${
        position === "right" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`flex   items-end gap-2  ${
          position === "left" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {author && (
          <div
            className={
              "flex  my-2.5 mr-6 ml-6 items-center gap-" +
              (position === "left" ? "ml-20" : "mr-26")
            }
          >
            <div
              className={`
                ${author.color === "blue" ? "bg-[#008fff]" : "bg-red-600"} 
                rounded-[6px]  px-1  py-[1px] text-xs  relative 
              `}
            >
              {position === "right" ? null : (
                <span
                  className={`absolute text-red-500  top-[-12px] left-[-15px]           `}
                >
                  <RedCursorSvg />
                </span>
              )}
              <p className="dark:text-black">{author.name}</p>
              {position === "left" ? null : (
                <span
                  className={`absolute top-[-15px] left-12   text-[#008fff]        ${
                    author.color === "blue" ? "text-[#008fff]" : "text-red-600"
                  } `}
                >
                  <BlueCursorSvg />
                </span>
              )}
            </div>
          </div>
        )}
        <div
          className="bg-[var(--ds-background-100)] shadow-sm max-w-[215px] text-xs rounded-[12px] border border-[var(--ds-gray-alpha-400)] leading-5 p-4  flex items-center gap-4"
          style={{ backgroundClip: "padding-box" }}
        >
          <p className="text-white">
            {content.includes("button") ? (
              <>
                Swapped out the{" "}
                <span className="bg-[#1f1f1f] px-2 py-0.5 rounded font-mono">
                  button
                </span>{" "}
                for some variants we needed.
              </>
            ) : (
              content
            )}
          </p>
          {showUpvote && (
            <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
              <ArrowUp className="w-4 h-4 text-black" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
