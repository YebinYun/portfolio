import React from 'react';
import { Icon } from "@iconify/react";
import Background from '../components/common/Background';

const Stack = ({ nextClick }) => {
    return (
      <Background>
        <div>
          {/* 화살표버튼 */}
          <button onClick={nextClick} className=" relative -bottom-20">
            <Icon
              className={`w-16 h-16 text-white ${`animate-arrow`} `}
              icon="iconamoon:arrow-up-2"
              rotate={2}
            />
          </button>
        </div>
      </Background>
    );
};

export default Stack;