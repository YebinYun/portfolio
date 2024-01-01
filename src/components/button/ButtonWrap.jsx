import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@mui/material";

const textStyle = "font-semibold ml-4 text-xl text-gray-700 hidden md:block";
const buttonsData = [
  {
    text: "깃허브",
    icon: "fluent-mdl2:git-hub-logo",
    link: "https://github.com/YebinYun",
  },
  {
    text: "벨로그",
    icon: "simple-icons:velog",
    link: "https://velog.io/@yebind",
  },
];

const ButtonWrap = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      {buttonsData.map((button, index) => (
        <Button key={index} onClick={() => window.open(button.link, "_blank")}>
          <div>
            <Icon className="w-8 h-8 text-gray-700" icon={button.icon} />
          </div>
          <span className={textStyle}>{button.text}</span>
        </Button>
      ))}
    </div>
  );
};

export default ButtonWrap;
