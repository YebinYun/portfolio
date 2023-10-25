import React from 'react';
import Background from '../components/common/Background';
import ButtonWrap from '../components/button/ButtonWrap';
import MouseWheel from '../components/button/MouseWheel';

const textStyle =
  "text-xl my-3 mx-2 md:text-4xl text-center leading-[2rem] md:leading-[3.5rem]";

const Intro = ({ nextClick }) => {
  return (
    <Background
      mainclassName="h-screen"
      customStyle={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255, 121, 121, 0.68) -34.2%, rgba(255, 102, 102, 0.40) 42.5%, rgba(255, 0, 0, 0.00) 223.53%)",
      }}>
      {/* 인사 문구 */}
      <div className="w-full flex flex-col items-center text-shadow-custom mt-20">
        <div className="flex flex-col items-center text-white font-extrabold">
          <h1 className="text-4xl md:text-5xl mb-5">안녕하세요.</h1>
          <h2 className={textStyle}>
            프로그램의 시각적 표현에 개입하여 즉시 처리하는 점이 저의 적극적인
            성향과 잘 어우러집니다.
          </h2>
          <nav className={textStyle}>
            <span className="mr-2.5 title-word bg-white px-2.5 py-1 rounded-md">
              풍부한 경험과 미래에 대한 열정을 갖춘
            </span>
            <span className="mr-2.5">프론트엔드 개발 신입</span>
            <span>윤예빈입니다.</span>
          </nav>
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