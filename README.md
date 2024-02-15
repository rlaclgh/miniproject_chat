## 설명

채팅방 생성 및 채팅 기능을 stomp를 이용해 구현했습니다.   
로그인 기능 -> session storage random id 로 대체

## 실행결과

<img src="https://github.com/rlaclgh/miniproject_chat/assets/46914232/390293a0-5ccd-4ad7-b4f9-0df619ab9654" width="450px"></img>

## 실행방법

```

docker compose up -d --build

```

## 기술스택

- client: Nextjs, @stomp/stompjs, react-query
- server: Spring boot, stomp
- db : Postgre
