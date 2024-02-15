package com.rlaclgh.server.chat;

import com.rlaclgh.server.entity.Chat;
import java.io.IOException;
import java.security.Principal;
import java.util.List;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chat")
public class ChatController {


  @Autowired
  private ChatService chatService;

  @MessageMapping("chat.{chatRoomId}")
  public void sendChat(@Payload String payload,
      @DestinationVariable Long chatRoomId) throws  ParseException {

    chatService.sendChat( chatRoomId, payload);
  }

  @GetMapping("")
  public List<Chat> getChats(@RequestParam Long chatRoomId) {
    return chatService.getChats(chatRoomId);
  }

}
