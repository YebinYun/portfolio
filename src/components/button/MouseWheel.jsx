import React from 'react';
import { Icon } from "@iconify/react";

const MouseWheel = ({ onClick }) => {
  return (
    <div className="mt-20  hidden md:flex justify-center">
      {/* 마우스 휠 버튼 */}
      <button onClick={onClick} className="">
        <Icon
          className={`w-16 h-16 text-red-400 ${`animate-arrow`} `}
          icon="iconoir:mouse-scroll-wheel"
        />
      </button>
    </div>
  );
};

export default MouseWheel;