import React from 'react';
import Background from '../components/common/Background';
import ButtonWrap from '../components/button/ButtonWrap';
import MouseWheel from '../components/button/MouseWheel';

const Intro = ({ nextClick }) => {
  return (
    <Background>
      {/* 인사 문구 */}
      <div className="w-full flex flex-col items-center text-shadow-custom">
        <div className="flex flex-col items-center text-white font-extrabold">
          <h1 className="text-6xl">안녕하세요.</h1>
          <ul className="flex flex-col md:flex-row items-center text-4xl py-16">
            <li className="mr-2.5 title-word bg-white px-2.5 py-1 rounded-md">
              미래에 대한 열정을 갖춘
            </li>
            <li className="mt-4 md:mt-0">프론트엔드 개발자,</li>
          </ul>
          <h2 className="text-4xl">윤예빈입니다.</h2>
        </div>

        <div className="w-full border-2 border-white my-16 opacity-50 rounded-full shadow" />

        <span className="pb-3 md:pb-16 text-2xl text-white font-bold text-shadow-custom">
          방문해주셔서 감사합니다.
        </span>
      </div>
      <ButtonWrap />
      <MouseWheel onClick={nextClick} />
    </Background>
  );
};

export default Intro;