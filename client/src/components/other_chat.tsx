import { IChat } from "@/app/chat/page";
import { DATE_FORMAT, formatDate } from "@/utils/date";

interface OtherChatProps {
  chat: IChat;
}

const OtherChat = (props: OtherChatProps) => {
  const { chat } = props;

  return (
    <>
      <div className="mt-2">{chat.sender}</div>
      <div className="flex" id={chat.id.toString()}>
        <div>
          <div className="pl-2 pt-2 pr-2 pb-1 bg-slate-200 rounded-2xl max-w-80 max-h-80 whitespace-pre-line text-base">
            {/* {message?.message} */}
            {chat.message}
          </div>
        </div>
        <div className="items-end justify-end flex pl-2">
          {formatDate(chat?.createdAt, DATE_FORMAT.HOUR_MINUTE)}
        </div>
      </div>
    </>
  );
};

export default OtherChat;
