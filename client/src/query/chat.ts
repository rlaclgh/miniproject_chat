import { useQuery } from "@tanstack/react-query";
import Axios from ".";

/**
 * 채팅 리스트
 */

interface GetChatsResponse {
  id: number;
  message: string;
  sender: string;
  createdAt: string;
  chatRoomId: number;
}

const getChats = async (chatRoomId: number) => {
  const data = await Axios({
    method: "get",
    url: `/chat?chatRoomId=${chatRoomId}`,
  });

  return data.data;
};

export const useGetChats = (chatRoomId: number) => {
  return useQuery<GetChatsResponse[]>({
    queryKey: ["chat", chatRoomId],
    queryFn: () => getChats(chatRoomId),
  });
};
