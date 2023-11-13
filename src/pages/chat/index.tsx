import ChatBox from "@/components/ChatBox";
import SideBox from "@/components/SideBox";
import SideNav from "@/components/cards/SideNav";
import React from "react";

const Chat = () => {
  return (
    <div className="h-screen flex">
      <div className="h-full bg-slate-400 basis-[27%]">
        <SideBox />
      </div>
      <div className="h-full bg-green-400 basis-[73%]">
        <ChatBox />
      </div>
    </div>
  );
};

export default Chat;
