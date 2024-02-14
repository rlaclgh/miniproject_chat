package com.rlaclgh.server.chat_room;


import com.rlaclgh.server.entity.ChatRoom;
import com.rlaclgh.server.repository.ChatRoomRepository;
import com.rlaclgh.server.util.NameGenerator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatRoomService {


  @Autowired
  private ChatRoomRepository chatRoomRepository;

  void createChatRoom() {
    String name = NameGenerator.generateRandomPhrase();
    chatRoomRepository.save(new ChatRoom(name));
  }

  List<ChatRoom> getChatRooms() {
    return chatRoomRepository.findAll();
  }

}
