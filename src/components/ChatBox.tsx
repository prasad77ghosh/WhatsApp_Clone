import React from "react";
import ManContNav from "./cards/ManContNav";
import MessageSend from "./cards/MessageSend";
import MessageCont from "./cards/MessageCont";

const ChatBox = () => {
  return (
    <div className="h-full bg-yellow-300 flex flex-col justify-between">
      <ManContNav />
      <MessageCont />
      <MessageSend />
    </div>
  );
};

export default ChatBox;
