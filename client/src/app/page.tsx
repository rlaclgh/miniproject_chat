"use client";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header
        renderCenter={() => <div>채팅방 리스트</div>}
        renderRight={() => (
          <button
            className="bg-blue h-8 pr-2 pl-2 rounded-xl"
            onClick={() => {}}
          >
            <span className="text-white text-base">생성</span>
          </button>
        )}
      />
    </div>
  );
}
