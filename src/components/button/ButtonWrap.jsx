import React from 'react';
import { Icon } from "@iconify/react";

const textStyle = "font-semibold ml-6 text-xl text-gray-700";
  
const ButtonWrap = () => {
    return (
      <div className="flex items-center py-10">
        {/* 이력서 버튼 */}
        <butto n className="buttonHover shadowStyle">
          <Icon icon="bxs:file-pdf" color="#444" width="40" height="40" />
          <span className={textStyle}>이력서</span>
        </butto>

        {/* 깃허브 버튼 */}
        <button
          className="buttonHover shadowStyle"
          onClick={() => window.open("https://github.com/YebinYun", "_blank")}>
          <Icon className="m-0.5" icon="devicon:git" width="36" height="36" />
          <span className={textStyle}>깃허브</span>
        </button>

        {/* 벨로그 버튼 */}
        <button
          className="buttonHover shadowStyle"
          onClick={() => window.open("https://velog.io/@yebind", "_blank")}>
          <Icon
            className="m-1"
            icon="simple-icons:velog"
            color="#333"
            width="32"
            height="32"
          />
          <span className={textStyle}>벨로그</span>
        </button>
      </div>
    );
};

export default ButtonWrap;