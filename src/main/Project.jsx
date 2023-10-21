import React from 'react';
import Background from "../components/common/Background";
import MouseWheel from '../components/button/MouseWheel';


const buttonStyle =
  "border rounded text-base font-semibold text-gray-800 shadow ";

const Project = ({ nextClick }) => {
  const projectList = [
    {
      img: "https://yebinyun.github.io/Portfolio/" + "/img/삐삐.webp",
      title: "인테리어 추천 커뮤니티 웹사이트",
      gitHub: "https://github.com/YebinYun/seb45_main_027",
      link: "",
      linkMsg: "서버 종료",
      style: "cursor-not-allowed",
    },
    {
      img: "https://yebinyun.github.io/Portfolio/" + "/img/빈진우.gif",
      title: "운동 기록 Exercise Tracker",
      gitHub: "https://github.com/YebinYun/exercise-tracker-app",
      link: "https://dpftlel21.github.io/exercise-tracker-app/",
      linkMsg: "사이트 보러가기",
    },
    {
      img:
        "https://yebinyun.github.io/Portfolio/" + "/img/오늘뭐먹지.질문지.gif",
      title: "메뉴 추천 웹 사이트 ver.질문지",
      gitHub: "https://github.com/YebinYun/what-eat-today",
      link: "https://yebinyun.github.io/what-eat-today/",
      linkMsg: "사이트 보러가기",
    },
    {
      img: "https://yebinyun.github.io/Portfolio/" + "/img/오늘뭐먹지.룰렛.png",
      title: "메뉴 추천 웹 사이트 ver.룰렛",
      gitHub: "https://github.com/YebinYun/lunch-recomandation",
      link: "https://yebinyun.github.io/lunch-recomandation/",
      linkMsg: "사이트 보러가기",
    },
  ];

  return (
    <Background divclassName="h-full w-full">
      <div className="flex flex-col items-center text-white font-extrabold text-shadow-custom mb-20">
        <h1 className="text-6xl mb-2.5">Project List</h1>
        <h2 className="text-2xl">지금까지 진행했던 프로젝트 입니다.</h2>
      </div>
      <div className="w-full flex flex-col justify-center lg:flex-row px-4">
        {projectList.map((list, idx) => (
          <nav key={idx} className="flex lg:flex-col mx-4 ">
            <img
              src={list.img}
              alt="프로젝트 이미지"
              className="w-60 h-36 lg:w-full lg:h-full rounded-l-lg lg:rounded-t-lg"
            />
            <div className="w-full h-36 mb-4 bg-white rounded-r-lg lg:rounded-tr-none lg:rounded-b-lg flex flex-col items-center justify-center lg:py-12 lg:mb-0 lg:h-fit">
              <h1 className="text-gray-900 font-bold text-2xl lg:mb-4">
                {list.title}
              </h1>
              <div className="mt-4 flex">
                <button
                  onClick={() => window.open(list.gitHub, "_blank")}
                  className={`${buttonStyle} buttonHover`}>
                  프로젝트 설명
                </button>
                <button
                  onClick={() => list.link && window.open(list.link, "_blank")}
                  className={`${buttonStyle} buttonHover ${list.style}`}>
                  {list.linkMsg}
                </button>
              </div>
            </div>
          </nav>
        ))}
      </div>

      {/* 마우스 휠 버튼 */}
      <MouseWheel onClick={nextClick} />
    </Background>
  );
};

export default Project;