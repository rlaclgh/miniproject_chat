package com.rlaclgh.server.chat;


import com.rlaclgh.server.entity.Chat;
import com.rlaclgh.server.entity.ChatRoom;
import com.rlaclgh.server.repository.ChatRepository;
import com.rlaclgh.server.repository.ChatRoomRepository;
import java.util.List;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;


@Service
public class ChatService {


  @Autowired
  private ChatRepository chatRepository;

  @Autowired
  private ChatRoomRepository chatRoomRepository;

  @Autowired
  private SimpMessagingTemplate template;

  List<Chat> getChats(Long chatRoomId) {
    return chatRepository.findChatsByChatRoomId(chatRoomId);
  }


  void sendChat(Long chatRoomId, String payload) throws ParseException {


    JSONParser parser = new JSONParser();
    JSONObject jsonObject = (JSONObject) parser.parse(payload);

    String message = jsonObject.get("message").toString();
    String userId = jsonObject.get("userId").toString();

    Chat newChat = new Chat(message, userId, chatRoomId);
    Chat createdChat = chatRepository.save(newChat);

    template.convertAndSend(String.format("/chatRoom/%d", createdChat.getChatRoomId()),
        createdChat);
  }

}
