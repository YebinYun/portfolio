import React from "react";
import { Icon } from "@iconify/react";

const textStyle = "font-semibold md:ml-6 text-xl text-gray-700";

const buttonsData = [
  {
    text: "이력서",
    icon: "bxs:file-pdf",
    color: "#444",
    width: 40,
    height: 40,
  },
  {
    text: "깃허브",
    icon: "devicon:git",
    color: "#000", // 변경 가능
    width: 36,
    height: 36,
    link: "https://github.com/YebinYun",
  },
  {
    text: "벨로그",
    icon: "simple-icons:velog",
    color: "#333",
    width: 32,
    height: 32,
    link: "https://velog.io/@yebind",
  },
];

const ButtonWrap = () => {
  return (
    <div className="flex items-center py-10">
      {buttonsData.map((button, index) => (
        <button
          key={index}
          className="buttonHover shadowStyle"
          onClick={() => window.open(button.link, "_blank")}>
          <div className="hidden md:block">
            <Icon
              icon={button.icon}
              color={button.color}
              width={button.width}
              height={button.height}
            />
          </div>
          <span className={textStyle}>{button.text}</span>
        </button>
      ))}
    </div>
  );
};

export default ButtonWrap;
