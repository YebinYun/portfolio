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
  "mx-2 p-2 border rounded text-lg font-semibold text-gray-800 shadow hover:text-white hover:bg-red-400 hover:opacity-50";

const Project = ({ nextClick }) => {
  const projectList = [
    {
      title: "삐삐",
      subTitle: "인테리어 추천 커뮤니티",
      gitHub: "https://github.com/YebinYun/seb45_main_027",
      link: "https://bbibbiapp.click/",
    },
    {
      title: "빈진우",
      subTitle: "운동 트레커_프로젝트",
      gitHub: "https://github.com/YebinYun/exercise-tracker-app",
      link: "https://dpftlel21.github.io/exercise-tracker-app/",
    },
    {
      title: "오늘 뭐 먹지 ver. 질문지",
      subTitle: "메뉴 추천",
      gitHub: "https://github.com/YebinYun/what-eat-today",
      link: "https://yebinyun.github.io/what-eat-today/",
    },
    {
      title: "오늘 뭐 먹지 ver. 룰렛",
      subTitle: "메뉴 추천",
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
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
            <div className="bg-white flex flex-col items-center py-12">
              <h1>{list.title}</h1>
              <h2>{list.subTitle}</h2>
              <div className="mt-4">
                <button
                  onClick={() => window.open(list.gitHub, "_blank")}
                  className={buttonStyle}>
                  GitHub 보러가기
                </button>
                <button
                  onClick={() => window.open(list.link, "_blank")}
                  className={buttonStyle}>
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