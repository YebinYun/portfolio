import React from 'react';
import { Icon } from "@iconify/react";
import Background from '../components/common/Background';
import ButtonWrap from '../components/button/ButtonWrap';


const Main = () => {
    return (
      <Background>
        {/* 인사 문구 */}
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center text-6xl text-white font-extrabold">
            <span>안녕하세요.</span>
            <span className="py-16">프론트엔드 개발자,</span>
            <span>윤예빈입니다.</span>
          </div>

          <div className="w-full border-2 border-white my-16" />

          <span className="pb-16 text-2xl text-white font-bold">
            방문해주셔서 감사합니다.
          </span>
        </div>

        {/* 사이트버튼 */}
        <ButtonWrap />
        {/* 화살표버튼 */}
        <button className=" relative -bottom-20">
          <Icon
            className={`w-16 h-16 text-white ${`animate-arrow`} `}
            icon="iconamoon:arrow-up-2"
            rotate={2}
          />
        </button>
      </Background>
    );
};

export default Main;