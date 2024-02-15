package com.rlaclgh.server.repository;

import com.rlaclgh.server.entity.Chat;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {



  List<Chat> findChatsByChatRoomId(Long chatRoomId);

}
