package com.rlaclgh.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "message"})
public class Chat extends BaseEntity{

  @Id
  @GeneratedValue
  private Long id;

  @Column
  private String message;

  @Column
  private String sender;


  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "chat_room_id", insertable = false, updatable = false)
  private ChatRoom chatRoom;

  @Column(name = "chat_room_id")
  private Long chatRoomId;

  public Chat(String message, String sender, Long chatRoomId) {
    this.message = message;
    this.sender = sender;
    this.chatRoomId = chatRoomId;
  }
}
