package com.rlaclgh.server.chat_room;

import org.springframework.beans.factory.annotation.Autowired;
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



}
