import { useGetChatRooms } from "@/query/chat_room";
import ChatRoomSVG from "@/public/chat_room.svg";
import { DATE_FORMAT, formatDate } from "@/utils/date";

const ChatRooms = () => {
  const { data: chatRooms } = useGetChatRooms();

  if (!chatRooms) return <></>;

  return (
    <>
      {chatRooms.map((chatRoom: any) => {
        return (
          <div
            className="flex shadow p-1 h-16 px-3"
            key={chatRoom.id}
            onClick={() => {}}
          >
            <div className="flex justify-center items-center flex-1">
              <div className="w-10 h-10 rounded-full flex justify-center items-center bg-blue">
                <ChatRoomSVG color="white" width={24} height={24} />
              </div>
              <div className="text-base px-4 flex-1">{chatRoom?.name}</div>
              <div className="text-sm text-gray h-5">
                {formatDate(
                  chatRoom?.createdAt,
                  DATE_FORMAT.FULL_DATE_WITH_TIME
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChatRooms;
