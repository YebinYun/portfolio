import React from 'react';
import { Icon } from "@iconify/react";

const MouseWheel = ({ onClick }) => {
  return (
    <div>
      {/* 마우스 휠 버튼 */}
      <button onClick={onClick} className=" relative -bottom-20">
        <Icon
          className={`w-16 h-16 text-white ${`animate-arrow`} `}
          icon="iconoir:mouse-scroll-wheel"
        />
      </button>
    </div>
  );
};

export default MouseWheel;