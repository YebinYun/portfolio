import React from 'react';
import { Icon } from "@iconify/react";
import Background from '../components/common/Background';

const h1Style = "text-4xl font-extrabold text-gray-900 text-shadow-custom";
const spanStyle = "text-2xl font-semibold text-black text-shadow-custom";
const iconStyle = "w-8 h-8 mr-2.5"
const liStyle = "flex mb-8";
const ulStyle = "-mb-8 bg-white p-20 rounded-md opacity-80 h-full w-1/3 mx-10"
const divStyle =
  "w-full border-2 my-8 opacity-50 rounded-full shadow";


const skills = {
  Language: [
    { icon: "skill-icons:javascript", name: "JavaScript" },
    { icon: "skill-icons:typescript", name: "TypeScript" },
    { icon: "skill-icons:html", name: "HTML" },
    { icon: "skill-icons:css", name: "CSS" },
  ],
  Framework: [
    { icon: "logos:react", name: "React" },
  ],
  Styling: [
    { icon: "devicon:tailwindcss", name: "Tailwind" },
    { icon: "skill-icons:styledcomponents", name: "StyledComponents" },
    { icon: "skill-icons:bootstrap", name: "Bootstrap" },
    { icon: "devicon:storybook", name: "Storybook" },
  ],
};
  

const Stack = ({ nextClick }) => {
  return (
    <Background divclassName="w-full mx-96">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-white font-extrabold text-shadow-custom mb-20">
          <h1 className="text-6xl mb-2">Stack</h1>
          <h2 className="text-2xl">주요 기술 스택을 소개합니다.</h2>
        </div>
        <div className="w-full flex content-start">
          {Object.keys(skills).map((category, index) => (
            <ul key={index} className={ulStyle}>
              <h1 className={h1Style}>{category}</h1>
              <div className={divStyle} />
              {skills[category].map((skill, skillIndex) => (
                <li key={skillIndex} className={liStyle}>
                  <Icon className={iconStyle} icon={skill.icon} />
                  <span className={spanStyle}>{skill.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
        {/* 화살표버튼 */}
        <button onClick={nextClick} className="relative -bottom-20">
          <Icon
            className={`w-16 h-16 text-white ${`animate-arrow`} `}
            icon="iconamoon:arrow-up-2"
          />
        </button>
      </div>
    </Background>
  );
};

export default Stack;