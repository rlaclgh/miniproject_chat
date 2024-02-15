"use client";
import ChatInputForm from "@/components/chat_input_form";
import Chats from "@/components/chats";
import Header from "@/components/header";
import { Client } from "@stomp/stompjs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface IChat {
  id: number;
  sender: string;
  message: string;
  createdAt: string;
  chatRoomId: number;
}

const ChatPage = () => {
  const [client, setClient] = useState<Client | null>(null);
  const searchParams = useSearchParams();
  const chatRoomId = searchParams.get("chatRoomId");

  const [chats, setChats] = useState<IChat[]>([]);

  useEffect(() => {
    const client = new Client({
      brokerURL: process.env.NEXT_PUBLIC_SERVER_WS_URL,
      onConnect: () => {
        client.subscribe(`/chatRoom/${chatRoomId}`, (message) => {
          const parsed: IChat = JSON.parse(message.body);
          setChats((prev) => [...prev, parsed]);
        });
      },
      debug(str) {
        console.log(`debug`, str);
      },
    });

    client.activate();

    setClient(client);

    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <>
      <Header renderCenter={() => <div>채팅방</div>} />

      <Chats chats={chats} />

      {client && <ChatInputForm client={client} />}
    </>
  );
};

export default ChatPage;
