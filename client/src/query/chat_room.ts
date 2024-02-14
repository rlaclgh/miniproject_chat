import {
  MutationFunction,
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import Axios from ".";

/**
 * 채팅방 생성
 */

const createChatRoom: MutationFunction<AxiosResponse> = () => {
  return Axios({
    method: "post",
    url: "/chat_room",
  });
};

export const useCreateChatRoom = (options?: UseMutationOptions) => {
  return useMutation({
    mutationFn: createChatRoom,
    ...options,
  });
};

/**
 * 채팅방 리스트 불러오기
 */

const getChatRooms = async () => {
  const data = await Axios({
    method: "get",
    url: `/chat_room`,
  });

  return data.data;
};

export const useGetChatRooms = () => {
  return useQuery({
    queryKey: ["chat_room"],
    queryFn: getChatRooms,
  });
};
