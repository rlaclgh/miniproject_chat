"use client";
import ChatInputForm from "@/components/chat_input_form";
import Chats from "@/components/chats";
import Header from "@/components/header";
import { Client } from "@stomp/stompjs";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export interface IChat {
  id: number;
  sender: string;
  message: string;
  createdAt: string;
  chatRoomId: number;
}

const ChatPage = () => {
  const [chats, setChats] = useState<IChat[]>([]);

  return (
    <Suspense>
      <Header renderCenter={() => <div>채팅방</div>} />

      <Chats chats={chats} />

      <ChatInputForm setChats={setChats} />
    </Suspense>
  );
};

export default ChatPage;
