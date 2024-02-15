import { Controller, useForm } from "react-hook-form";
import { Client } from "@stomp/stompjs";
import { useParams, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { IChat } from "@/app/chat/page";

interface FormProps {
  message: string;
  imageUrl: string;
}

interface ChatInputFormProps {
  setChats: Dispatch<SetStateAction<IChat[]>>;
}

const ChatInputForm = (props: ChatInputFormProps) => {
  const { setChats } = props;
  const searchParams = useSearchParams();
  const chatRoomId = searchParams.get("chatRoomId");
  const [client, setClient] = useState<Client | null>(null);

  const { control, getValues, setValue } = useForm<FormProps>({
    defaultValues: {
      message: "",
      imageUrl: "",
    },

    mode: "onChange",
    reValidateMode: "onChange",
  });

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

  if (!client) return <></>;

  return (
    <>
      <div className="flex border-t border-gray-light border-solid pt-2 pb-2">
        <Controller
          name="message"
          control={control}
          render={({ field }) => {
            return (
              <TextareaAutosize
                maxRows={1}
                className="flex-1 outline-none resize-none h-10 text-base bg-gray-light mr-2 ml-2 pr-2 pl-2 rounded-lg p-2"
                placeholder="메시지를 입력해주세요."
                {...field}
              />
            );
          }}
        />
        <div
          className="justify-end items-end flex pb-2 pr-2"
          onClick={() => {
            client.publish({
              destination: `/ws/chat.${chatRoomId}`,
              body: JSON.stringify({
                userId: sessionStorage.getItem("userId"),
                message: getValues("message"),
              }),
            });
            setValue("message", "");
          }}
        >
          전송
        </div>
      </div>
    </>
  );
};

export default ChatInputForm;
