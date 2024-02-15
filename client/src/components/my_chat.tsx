import { IChat } from "@/app/chat/page";
import { DATE_FORMAT, formatDate } from "@/utils/date";

interface MyChatProps {
  chat: IChat;
}
const MyChat = (props: MyChatProps) => {
  const { chat } = props;

  return (
    <div className="items-end" id={chat.id.toString()}>
      <div className="flex mt-2 mb-2 justify-end">
        <div className="items-end justify-end flex pr-2">
          {formatDate(chat?.createdAt, DATE_FORMAT.HOUR_MINUTE)}
        </div>
        <div>
          <div className="pl-2 pt-2 pr-2 pb-1 bg-blue text-white rounded-2xl max-w-80 max-h-80 whitespace-pre-line">
            {chat.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChat;
