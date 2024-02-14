package com.rlaclgh.server.chat_room;

import com.rlaclgh.server.entity.ChatRoom;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chat_room")
public class ChatRoomController {


  @Autowired
  private ChatRoomService chatRoomService;



  @PostMapping()
  public void createChatRoom(
  ) {
    chatRoomService.createChatRoom();
  }


  @GetMapping()
  public List<ChatRoom> getChatRooms() {
    return chatRoomService.getChatRooms();
  }



}
