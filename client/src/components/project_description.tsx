"use client";

const ProjectDescription = () => {
  return (
    <div className="flex items-center h-full flex-col">
      <div className="w-120">
        <div className="text-5xl mb-10 mt-10">miniproject_chat</div>
        <div className="text-2xl my-2">1. 프로젝트 설명</div>
        <div className="text-xl my-2">
          채팅방 생성 및 채팅 기능을 stomp를 이용해 구현했습니다.
        </div>
        <div className="text-xl my-2">
          로그인 기능은 session storage random id 로 대체했습니다.
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
