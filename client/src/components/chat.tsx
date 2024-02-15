"use client";
import MyChat from "./my_chat";
import OtherChat from "./other_chat";
import { IChat } from "@/app/chat/page";

interface ChatProps {
  chat: IChat;
}

const Chat = (props: ChatProps) => {
  const { chat } = props;
  const userId = sessionStorage.getItem("userId");
  if (!userId) return <></>;
  if (chat.sender === userId) return <MyChat chat={chat} />;
  return <OtherChat chat={chat} />;
};

export default Chat;
