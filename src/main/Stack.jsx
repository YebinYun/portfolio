import React from 'react';
import { Icon } from "@iconify/react";
import Background from '../components/common/Background';
import MouseWheel from '../components/button/MouseWheel';

const wrapStyle =
  "flex flex-col bg-white py-8 px-12 m-5 rounded-md opacity-80 mx-10 lg:-mb-8 lg:w-1/3 lg:py-20 lg:px-20";
const h1Style = "w-full text-4xl font-extrabold text-gray-900 text-shadow-custom";
const divStyle =
  "hidden lg:flex w-full border-2 my-8 opacity-50 rounded-full shadow";
const ulStyle = "flex w-full mt-4 lg:mt-0 lg:mb-8";
const iconStyle = "w-8 h-8 mr-2.5";
const spanStyle = "text-2xl font-semibold text-black text-shadow-custom";


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
    <Background divclassName="w-full lg:mx-96">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col mb-4 items-center text-white font-extrabold text-shadow-custom lg:mb-20">
          <h1 className="text-6xl mb-2">Stack</h1>
          <h2 className="text-2xl">주요 기술 스택을 소개합니다.</h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row content-start">
          {Object.keys(skills).map((category, index) => (
            <div key={index} className={wrapStyle}>
              <h1 className={h1Style}>{category}</h1>
              <div className={divStyle} />
              <div className='w-full grid grid-cols-2 lg:flex lg:flex-col lg:mt-0'>
              {skills[category].map((skill, skillIndex) => (
                <ul key={skillIndex} className={ulStyle}>
                  <li className='flex'>
                    <Icon className={iconStyle} icon={skill.icon} />
                    <span className={spanStyle}>{skill.name}</span>
                  </li>
                </ul>
              ))}
                </div>
            </div>
          ))}
        </div>
        <MouseWheel onClick={nextClick} />
      </div>
    </Background>
  );
};

export default Stack;