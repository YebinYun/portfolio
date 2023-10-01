import React from 'react';
import Background from "../components/common/Background";
import { Swiper, SwiperSlide } from "swiper/react";
import MouseWheel from '../components/button/MouseWheel';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const buttonStyle =
  "border rounded text-lg font-semibold text-gray-800 shadow ";

const Project = ({ nextClick }) => {
  const projectList = [
    {
      img: "http://localhost:3000/Portfolio" + "/img/삐삐.webp",
      title: "삐삐",
      subTitle:
        "인테리어 추천 커뮤니티 웹사이트는 다기능 온라인 플랫폼을 제공. 사용자들이해시태그 기능으로 특정 주제나 제품 정보를 쉽게 찾을 수 있으며, GPS 기반 인테리어 가게 추천과 팔로우/팔로워 기능도 포함한 웹 커뮤니티 사이트",
      gitHub: "https://github.com/YebinYun/seb45_main_027",
      link: "https://bbibbiapp.click/",
      style: "cursor-not-allowed",
    },
    {
      img: "http://localhost:3000/Portfolio" + "/img/빈진우.gif",
      title: "빈진우",
      subTitle:
        "운동 트레커_프로젝트 (Exercise Tracker) - 사용자의 위치를 기반으로 헬스장을 알려주고, 다양한 운동종류들을 리스트로 보여준 뒤 사용자가 선택하여 해당 날짜에 운동 기록을 할수 있는 운동 트레커 개발.",
      gitHub: "https://github.com/YebinYun/exercise-tracker-app",
      link: "https://dpftlel21.github.io/exercise-tracker-app/",
    },
    {
      img: "http://localhost:3000/Portfolio" + "/img/오늘뭐먹지.질문지.gif",
      title: "오늘 뭐 먹지 ver. 질문지",
      subTitle:
        "현재 날씨와 시간에 맞춰 알맞은 배경화면을 보여주며, 선택지를 참고하여 설문 결과를 보여주며, 결과는 사용자의 위치를 기반으로 메뉴를 추천하여 무얼 먹을까 고민을 덜어주는 사용자 친화적 웹사이트 개발.",
      gitHub: "https://github.com/YebinYun/what-eat-today",
      link: "https://yebinyun.github.io/what-eat-today/",
    },
    {
      img: "http://localhost:3000/Portfolio" + "/img/오늘뭐먹지.룰렛.png",
      title: "오늘 뭐 먹지 ver. 룰렛",
      subTitle:
        "사용자가 선택한 서울시 상세 지역구의 음식 종목을 바탕으로 인기 메뉴를 추천하고, 만족도 높은식당을 소개해 주며, 해당 식당의 후기까지 검색 가능한 랜덤 룰렛 형식의 웹사이트를 개발.",
      gitHub: "https://github.com/YebinYun/lunch-recomandation",
      link: "https://yebinyun.github.io/lunch-recomandation/",
    },
  ];

  return (
    <Background divclassName="w-full mx-96">
      <div className="flex flex-col items-center text-white font-extrabold text-shadow-custom mb-20">
        <h1 className="text-6xl mb-2.5">Project List</h1>
        <h2 className="text-2xl">지금까지 진행했던 프로젝트 입니다.</h2>
      </div>
      {/* 프로젝트 캐러셀 */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        {projectList.map((list, idx) => (
          <SwiperSlide key={idx}>
            <img src={list.img} alt="프로젝트 이미지" />
            <div className="bg-white flex flex-col items-center py-12">
              <h1 className="text-gray-800 font-bold text-3xl mb-4">
                {list.title}
              </h1>
              <h2 className="text-gray-600 font-semibold text-xl mb-4 px-20">
                {list.subTitle}
              </h2>
              <div className="mt-4 flex">
                <button
                  onClick={() => window.open(list.gitHub, "_blank")}
                  className={`${buttonStyle} buttonHover`}>
                  GitHub 보러가기
                </button>
                <button
                  onClick={() => window.open(list.link, "_blank")}
                  className={`${buttonStyle} buttonHover ${list.style}`}>
                  사이트 보러가기
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 마우스 휠 버튼 */}
      <MouseWheel onClick={nextClick} />
    </Background>
  );
};

export default Project;