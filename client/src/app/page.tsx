"use client";
import ChatRooms from "@/components/chat_rooms";
import Header from "@/components/header";
import { useCreateChatRoom } from "@/query/chat_room";
import { toast } from "react-toastify";

export default function Home() {
  const { mutate: createChatRoom } = useCreateChatRoom({
    onSuccess: () => {
      toast.success("채팅방을 생성했습니다.");
    },
  });

  return (
    <div>
      <Header
        renderCenter={() => <div>채팅방 리스트</div>}
        renderRight={() => (
          <button
            className="bg-blue h-8 pr-2 pl-2 rounded-xl"
            onClick={() => {
              createChatRoom();
            }}
          >
            <span className="text-white text-base">생성</span>
          </button>
        )}
      />

      <ChatRooms />
    </div>
  );
}
