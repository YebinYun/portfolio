import React from 'react';
import { Icon } from "@iconify/react";
import Background from "../components/common/Background";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Project = ({ nextClick }) => {
  return (
    <Background>
      <div className="flex flex-col items-center text-white font-extrabold text-shadow-custom my-10">
        <h1 className="text-6xl mb-2">Project List</h1>
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
        <SwiperSlide className="w-full">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>

      {/* 화살표버튼 */}
      <button onClick={nextClick} className=" relative -bottom-20">
        <Icon
          className={`w-16 h-16 text-white ${`animate-arrow`} `}
          icon="iconamoon:arrow-up-2"
          rotate={2}
        />
      </button>
    </Background>
  );
};

export default Project;