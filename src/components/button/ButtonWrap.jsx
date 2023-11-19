import React from "react";
import { Icon } from "@iconify/react";

const textStyle = "font-semibold md:ml-4 text-xl text-gray-700 hidden md:block";
const liStyle =
  "bg-red-100 mx-10 py-4 px-4 md:px-8 cursor-pointer border border-red-100 shadow-lg rounded-full transition-all duration-300 hover:bg-red-300 hover:border-red-300 hover:text-white hover:shadow-inner hover:underline";

const buttonsData = [
  {
    text: "깃허브",
    icon: "fluent-mdl2:git-hub-logo",
    color: "#444",
    width: 25,
    height: 25,
    link: "https://github.com/YebinYun",
  },
  {
    text: "벨로그",
    icon: "simple-icons:velog",
    color: "#444",
    width: 25,
    height: 25,
    link: "https://velog.io/@yebind",
  },
];

const ButtonWrap = () => {
  return (
    <div className="flex items-center justify-center py-10 mt-20">
      {buttonsData.map((button, index) => (
        <button
          key={index}
          className={`flex items-center ${liStyle}`}
          onClick={() => window.open(button.link, "_blank")}>
          <div className="">
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
