import React from "react";

const Project = ({ Button, TitleText }) => {
  const projectList = [
    {
      img: "삐삐.webp",
      title: "인테리어 추천 커뮤니티 웹사이트",
      gitHub: "seb45_main_027",
      style: "cursor-not-allowed",
    },
    {
      img: "빈진우.gif",
      title: "운동 기록 Exercise Tracker",
      gitHub: "exercise-tracker-app",
      link: "https://dpftlel21.github.io/exercise-tracker-app/",
    },
    {
      img: "오늘뭐먹지.질문지.gif",
      title: "메뉴 추천 웹 사이트 ver.질문지",
      gitHub: "what-eat-today",
      link: "https://yebinyun.github.io/what-eat-today/",
    },
    {
      img: "오늘뭐먹지.룰렛.png",
      title: "메뉴 추천 웹 사이트 ver.룰렛",
      gitHub: "lunch-recomandation",
      link: "https://yebinyun.github.io/lunch-recomandation/",
    },
  ];
  return (
    <div className="h-[60vh] lg:h-[60vh] w-[80vw] flex flex-col">
      <TitleText>Project List</TitleText>
      <div className="flex flex-col lg:flex-row py-8 ">
        {projectList.map((list, idx) => (
          <nav key={idx} className="flex flex-col my-10 lg:my-0 lg:mx-10">
            <img
              src={`https://yebinyun.github.io/portfolio/img/${list.img}`}
              alt="프로젝트 이미지"
              className="md:block w-full h-full rounded-t-lg"
            />
            <div className="flex flex-col items-center justify-center bg-white py-6 shadow rounded-b-lg">
              <h1 className="text-gray-900 font-bold text-xl">{list.title}</h1>
              <div className="mt-4 flex">
                <Button
                  onClick={() =>
                    window.open(
                      `https://github.com/YebinYun/${list.gitHub}`,
                      "_blank"
                    )
                  }
                >
                  프로젝트 설명
                </Button>
                <Button
                  onClick={() => list.link && window.open(list.link, "_blank")}
                >
                  {list.link ? "사이트 보러가기" : "서버종료"}
                </Button>
              </div>
            </div>
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Project;
