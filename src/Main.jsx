import React from 'react';
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const buttonStyle =
  "flex items-center bg-white px-2.5 py-1 mx-2 rounded-md shadow hover:opacity-70";

const Main = () => {
    const navigate = useNavigate();
    
    
    return (
      <div
        className="w-full h-screen flex justify-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255, 121, 121, 0.68) -34.2%, rgba(255, 102, 102, 0.40) 42.5%, rgba(255, 0, 0, 0.00) 223.53%)",
        }}>
        <div className="w-fit flex flex-col items-center justify-center">
          {/* 인사 문구 */}
          <div>
            <div className="flex flex-col items-center text-6xl  text-white font-extrabold">
              <span>안녕하세요.</span>
              <span>프론트엔드 개발자,</span>
              <span>윤예빈입니다.</span>
            </div>

            <div className="w-full border border-white" />

            <span>방문해주셔서 감사합니다.</span>
          </div>

          {/* 버튼 Wrap */}
          <div className="flex items-center">
            {/* 이력서 버튼 */}
            <butto n className={buttonStyle}>
              <Icon icon="bxs:file-pdf" color="#444" width="40" height="40" />
              <span>이력서</span>
            </butto>

            {/* 깃허브 버튼 */}
            <button
              className={buttonStyle}
              onClick={() =>
                window.open("https://github.com/YebinYun", "_blank")
              }>
              <Icon
                className="m-0.5"
                icon="devicon:git"
                width="36"
                height="36"
              />
              <span>깃허브</span>
            </button>

            {/* 벨로그 버튼 */}
            <button
              className={buttonStyle}
              onClick={() => window.open("https://velog.io/@yebind", "_blank")}>
              <Icon
                className="m-1"
                icon="simple-icons:velog"
                color="#333"
                width="32"
                height="32"
              />
              <span>벨로그</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Main;