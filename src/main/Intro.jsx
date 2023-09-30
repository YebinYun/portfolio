import React from 'react';
import { Icon } from "@iconify/react";
import Background from '../components/common/Background';
import ButtonWrap from '../components/button/ButtonWrap';

const Intro = ({ nextClick }) => {
  return (
    <Background>
      {/* 인사 문구 */}
      <div className="w-full flex flex-col items-center text-shadow-custom">
        <div className="flex flex-col items-center text-white font-extrabold">
          <h1 className="text-6xl">안녕하세요.</h1>
          {/* <span className="text-4xl pt-16">끊임없이 연구하며 소통하는</span> */}
          <h2 className="py-16 text-4xl title-word">
            끊임없이 연구하며 소통하는 프론트엔드 개발자,
          </h2>
          <h2 className="text-4xl">윤예빈입니다.</h2>
        </div>

        <div className="w-full border-2 border-white my-16 opacity-50 rounded-full shadow" />

        <span className="pb-16 text-2xl text-white font-bold text-shadow-custom">
          방문해주셔서 감사합니다.
        </span>
      </div>

      {/* 사이트버튼 */}
      <ButtonWrap />
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

export default Intro;