import React from 'react';
import { Icon } from "@iconify/react";
import MouseWheel from '../components/button/MouseWheel';

const wrapStyle = "p-8 rounded-md opacity-80 shadow-lg border-2 border-red-100";
const h1Style = "w-full text-4xl font-extrabold text-gray-900 text-shadow-custom";
const divStyle =
  "hidden lg:flex w-full border-2 border-red-200 my-8 opacity-50 rounded-full shadow";
const ulStyle = "flex w-full mt-6 lg:mt-0 lg:mb-8";
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
    <div mainclassName="h-screen" divclassName="h-full w-full">
      <div className="w-full mt-96 md:mt-[400px] lg:mt-0">
        <div className="flex justify-center mb-20">
          <h1 className="font-extrabold text-shadow-custom text-6xl mb-4 text-red-300">
            Stack
          </h1>
        </div>
        <div className="w-full grid grid-rows-3 gap-10 2xl:grid-cols-3 2xl:grid-rows-none ">
          {Object.keys(skills).map((category, index) => (
            <div key={index} className={wrapStyle}>
              <h1 className={h1Style}>{category}</h1>
              <div className={divStyle} />
              <div className="w-full grid grid-cols-1 lg:flex lg:flex-col">
                {skills[category].map((skill, skillIndex) => (
                  <ul key={skillIndex} className={ulStyle}>
                    <li className="flex border-2 border-red-50 bg-red-100 shadow p-4 rounded-lg">
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
    </div>
  );
};

export default Stack;