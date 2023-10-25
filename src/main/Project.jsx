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
      <div className="w-full h-full">
        <div className="flex justify-center my-20">
          <h1 className="font-extrabold text-shadow-custom text-6xl mb-4 text-red-300">
            Project List
          </h1>
        </div>

        <div className="w-full grid lg:grid-cols-2 gap-10 pb-20">
          {projectList.map((list, idx) => (
            <nav key={idx} className="flex flex-col">
              <img
                src={list.img}
                alt="프로젝트 이미지"
                className="w-full h-full rounded-t-lg"
              />
              <div className="w-full h-full bg-white rounded-b-lg flex flex-col items-center justify-center py-12 shadow">
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
                    onClick={() =>
                      list.link && window.open(list.link, "_blank")
                    }
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
      </div>
    </Background>
  );
};

export default Project;