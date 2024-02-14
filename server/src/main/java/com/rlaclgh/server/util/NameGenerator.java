package com.rlaclgh.server.util;

import java.util.Random;

public class NameGenerator {

  private static final String[] adjectives = {
      "훌륭한", "아름다운", "행복한", "멋진", "창의적인",
      "활기찬", "유쾌한", "따뜻한", "격렬한", "자신감 있는",
      "즐거운", "밝은", "강력한", "정열적인", "호의적인",
      "귀여운", "화려한", "발전된", "낭만적인", "진정한",
      "협력적인", "인정받는", "지혜로운", "자유로운", "우아한",
      "긍정적인", "참신한", "신뢰할 만한", "놀라운", "즉각적인"
  };

  private static final String[] objects = {
      "꽃다발", "책", "음반", "펜", "가방",
      "옷", "화분", "과일 바구니", "엑서사이즈 볼", "퍼즐",
      "휴대전화", "노트북", "포트폴리오", "조각상", "빵",
      "모자", "액자", "유리병", "도자기", "자전거",
      "악기", "화장품", "컴퓨터", "시계", "안경",
      "장난감", "캔디", "가방", "매트리스", "의자"
  };

  public static String generateRandomPhrase() {
    Random random = new Random();
    String adjective = adjectives[random.nextInt(adjectives.length)];
    String object = objects[random.nextInt(objects.length)];
    return adjective + " " + object;
  }

}
