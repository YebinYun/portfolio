import React from 'react';
import ButtonWrap from '../components/button/ButtonWrap';

const Intro = () => {
  return (
    <div>
      {/* 인사 문구 */}
      <div className="w-full flex flex-col items-center text-shadow-custom mt-20">
        <div className="flex flex-col items-center text-white font-extrabold">
          <h1 className="text-[5rem] mb-5 text-center">Frontend Developer</h1>
          <p className="max-w-5xl font-medium text-[1.5rem] my-3 mx-2 text-center">
            프로그램의 시각적 표현에 개입하여 즉시 처리하는 점이 저의 적극적인
            성향과 잘 어우러집니다. 적극적이고 협력적인 성향으로, 팀 내에서의
            원활한 커뮤니케이션과 협업을 중요하게 생각합니다. 다양한 배경과
            전문성을 가진 동료들과 소통하며, 함께 목표를 달성하는 것을 즐깁니다.
          </p>
        </div>

        <div className="w-2/3 border-2 border-white my-16 opacity-50 rounded-full shadow" />

        <span className="pb-3 md:pb-16 text-2xl text-white font-bold text-shadow-custom">
          방문해주셔서 감사합니다.
        </span>
      </div>
      <ButtonWrap />
    </div>
  );
};

export default Intro;