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
              <span className="py-4">안녕하세요.</span>
              <span className="py-4">프론트엔드 개발자,</span>
              <span className="py-4">윤예빈입니다.</span>
            </div>

            <div className="w-full border-2 border-white my-6" />

            <span className="py-4 text-2xl text-white font-bold">
              방문해주셔서 감사합니다.
            </span>
          </div>
        <ButtonWrap/>
          <Icon
            icon="iconamoon:arrow-up-2"
            color="#444"
            rotate={2}
            width="50"
            height="50"
          />
      </Background>
    );
};

export default Main;