import React, { useCallback, useState } from "react";
import { MdAdd, MdOutlineMic } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { debounce } from "@/utils/debounce";

const MessageSend = () => {
  const [text, setText] = useState<string>("");

  // Debounced version of handleKeyUp
  const debouncedHandleKeyUp = useCallback(
    debounce((inputValue: string) => {
      setText(inputValue);
    }, 300),
    []
  );

  // Your original handleKeyUp function
  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget as HTMLTextAreaElement;
    const inputValue = textarea.value;
    textarea.style.height = "48px";
    let scrollHeight = textarea.scrollHeight;
    textarea.style.height = `${scrollHeight}px`;
    debouncedHandleKeyUp(inputValue);
  };

  return (
    <div className="flex items-end justify-between px-3 py-2 bg-gray-400 gap-2 sticky bottom-0 left-0">
      <div className="flex items-center basis-[10%] justify-around h-12">
        <BsEmojiSmile size={25} />
        <MdAdd size={26} />
      </div>
      <div className="basis-[85%] flex items-center">
        <textarea
          onKeyUp={handleKeyUp}
          placeholder="Type message.."
          className="h-12 resize-none px-3 pt-3 pb-1 outline-none w-full rounded-md max-h-36"
        ></textarea>
      </div>
      <div className="basis-[5%] w-full flex items-center justify-center text-center bg-gray-500 rounded-md h-12">
        <MdOutlineMic size={26} />
      </div>
    </div>
  );
};

export default MessageSend;
