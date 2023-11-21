import React from "react";

const Project = ({ Button, TitleText }) => {
  const projectList = [
    {
      img: "https://yebinyun.github.io/portfolio/" + "/img/삐삐.webp",
      title: "인테리어 추천 커뮤니티 웹사이트",
      gitHub: "https://github.com/YebinYun/seb45_main_027",
      link: "",
      linkMsg: "서버 종료",
      style: "cursor-not-allowed",
    },
    {
      img: "https://yebinyun.github.io/portfolio/" + "/img/빈진우.gif",
      title: "운동 기록 Exercise Tracker",
      gitHub: "https://github.com/YebinYun/exercise-tracker-app",
      link: "https://dpftlel21.github.io/exercise-tracker-app/",
      linkMsg: "사이트 보러가기",
    },
    {
      img:
        "https://yebinyun.github.io/portfolio/" + "/img/오늘뭐먹지.질문지.gif",
      title: "메뉴 추천 웹 사이트 ver.질문지",
      gitHub: "https://github.com/YebinYun/what-eat-today",
      link: "https://yebinyun.github.io/what-eat-today/",
      linkMsg: "사이트 보러가기",
    },
    {
      img: "https://yebinyun.github.io/portfolio/" + "/img/오늘뭐먹지.룰렛.png",
      title: "메뉴 추천 웹 사이트 ver.룰렛",
      gitHub: "https://github.com/YebinYun/lunch-recomandation",
      link: "https://yebinyun.github.io/lunch-recomandation/",
      linkMsg: "사이트 보러가기",
    },
  ];

  return (
    <div className=" relative top-40">
      <div className="flex justify-center my-20">
        <TitleText>Project List</TitleText>
      </div>

      <div>
        {projectList.map((list, idx) => (
          <nav key={idx} className="flex flex-col my-10">
            <img
              src={list.img}
              alt="프로젝트 이미지"
              className="hidden md:block w-full h-full rounded-t-lg"
            />
            <div className="bg-white rounded-lg md:rounded-b-lg flex flex-col items-center justify-center py-12 shadow">
              <h1 className="text-gray-900 font-bold text-2xl lg:mb-4">
                {list.title}
              </h1>
              <div className="mt-4 flex">
                <Button onClick={() => window.open(list.gitHub, "_blank")}>
                  프로젝트 설명
                </Button>
                <Button
                  onClick={() => list.link && window.open(list.link, "_blank")}
                >
                  {list.linkMsg}
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
