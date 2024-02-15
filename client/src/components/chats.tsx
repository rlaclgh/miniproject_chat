import { DATE_FORMAT, formatDate } from "@/utils/date";
import Chat from "./chat";
import { IChat } from "@/app/chat/page";
import { useSearchParams } from "next/navigation";
import { useGetChats } from "@/query/chat";

interface ChatsProps {
  chats: IChat[];
}

const Chats = (props: ChatsProps) => {
  const { chats } = props;
  const searchParams = useSearchParams();
  const chatRoomId = searchParams.get("chatRoomId") || "";

  const { data: beforeChats } = useGetChats(parseInt(chatRoomId));

  const allChats = [...(beforeChats || []), ...chats];
  return (
    <div
      className="overflow-y-scroll z-10 flex-1 pl-4 pr-4"
      style={{ height: "calc(100vh - 105px)" }}
    >
      {allChats.map((chat, index) => {
        let needDate = false;
        if (index === 0) {
          needDate = true;
        } else {
          const prevCreatedAt = allChats[index - 1].createdAt;
          const currCreatedAt = chat.createdAt;

          const prevDate = formatDate(prevCreatedAt, DATE_FORMAT.FULL_DATE);
          const currDate = formatDate(currCreatedAt, DATE_FORMAT.FULL_DATE);

          if (prevDate != currDate) needDate = true;
        }
        return (
          <>
            {needDate && (
              <div className="m-auto text-center text-sm p-2">
                {formatDate(chat.createdAt, DATE_FORMAT.FULL_DATE)}
              </div>
            )}

            <Chat chat={chat} key={chat.id} />
          </>
        );
      })}
    </div>
  );
};

export default Chats;
