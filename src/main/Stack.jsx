import React from 'react';
import { Icon } from "@iconify/react";
import Background from '../components/common/Background';

const h1Style = "text-4xl font-extrabold text-gray-900 text-shadow-custom mb-5";
const spanStyle = "text-xl font-semibold text-black text-shadow-custom mb-2";
const iconStyle = "w-8 h-8 mr-2.5"
const liStyle = "flex items-baseline";


const Stack = ({ nextClick }) => {
    return (
      <Background>
        <div className="flex flex-col items-center">
          <div className="text-white font-extrabold text-shadow-custom my-10">
            <h1 className="text-6xl mb-2">Stack</h1>
          </div>
          <div className="bg-white p-10 rounded opacity-80">
            <ul className="">
              <h1 className={h1Style}>Language</h1>
              <li className={liStyle}>
                <Icon className={iconStyle} icon="skill-icons:javascript" />
                <span className={spanStyle}>JavaScript</span>
              </li>
              <li className={liStyle}>
                <Icon className={iconStyle} icon="skill-icons:typescript" />
                <span className={spanStyle}>TypeScript</span>
              </li>
              <li className={liStyle}>
                <Icon className={iconStyle} icon="skill-icons:html" />
                <span className={spanStyle}>HTML</span>
              </li>
              <li className={liStyle}>
                <Icon className={iconStyle} icon="skill-icons:css" />
                <span className={spanStyle}>CSS</span>
              </li>
            </ul>
            <ul className="my-10">
              <h1 className={h1Style}>Framework</h1>
              <li className={liStyle}>
                <Icon className={iconStyle} icon="logos:react" />
                <span className={spanStyle}>React</span>
              </li>
            </ul>
            <ul className="">
              <h1 className={h1Style}>Styling</h1>
              <li className={liStyle}>
                <Icon className={iconStyle} icon="devicon:tailwindcss" />
                <span className={spanStyle}>Tailwindcss</span>
              </li>
              <li className={liStyle}>
                <Icon
                  className={iconStyle}
                  icon="skill-icons:styledcomponents"
                />
                <span className={spanStyle}>Styled-Components</span>
              </li>
              <li className={liStyle}>
                <Icon className={iconStyle} icon="skill-icons:bootstrap" />
                <span className={spanStyle}>Bootstrap</span>
              </li>
              <li className={liStyle}>
                <Icon className={iconStyle} icon="devicon:storybook" />
                <span className={spanStyle}>Storybook</span>
              </li>
            </ul>
          </div>
          {/* 화살표버튼 */}
          <button onClick={nextClick} className=" relative -bottom-20">
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