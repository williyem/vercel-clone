import GreenCursorSvg from "@/app/assets/icons/green-cursor-svg";
import ChatMessage from "./chat-message";

export default function ChatInterface() {
  return (
    <div className="space-y-6 ">
      <ChatMessage
        content="Swapped out the button for some variants we needed."
        position="left"
      />

      <ChatMessage
        content="How about this instead?"
        author={{ name: "Pranathi", color: "blue" }}
        position="right"
      />

      <ChatMessage
        content="I like it. Does this work with the brand tweaks @mamuso?"
        position="left"
        author={{ name: "Rauno", color: "red" }}
      />

      <div className="relative ">
        <ChatMessage
          content="This looks great!"
          position="right"
          showUpvote={true}
        />
        <span
          className={`absolute bottom-[5px] right-[-25px]   text-teal-500         `}
        >
          <GreenCursorSvg />
        </span>
      </div>
    </div>
  );
}
