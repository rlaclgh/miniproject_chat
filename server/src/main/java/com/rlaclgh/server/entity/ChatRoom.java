package com.rlaclgh.server.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "name"})
public class ChatRoom extends BaseEntity {

  @Id
  @GeneratedValue
  private Long id;


  @Column
  private String name;


  @JsonIgnore
  @OneToMany(mappedBy = "chatRoom")
  List<Chat> chats = new ArrayList<>();

  public ChatRoom(String name) {
    this.name = name;
  }
}
