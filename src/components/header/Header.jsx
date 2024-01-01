import React from "react";
import { useState } from "react";
import tw from "tailwind-styled-components";

const Header = ({ setSection, sections, Button }) => {
  const HeaderButton = tw(Button)`
    background:#D46C4F
    mt-4 
    md:mt-8 
    lg:mt-6 
    mx-2.5 
    md:mx-8 
    lg:mx-12 
    px-8 
    hover:text-white
  `;

  const action = " text-white bg-red-300 border-red-300 shadow-inner underline";
  const [isActive, setIsActive] = useState({ 0: true });

  return (
    <header className="w-full pt-5">
      <nav className="w-full text-2xl font-bold flex justify-center text-gray-800 my-2">
        {sections.map((headerButton, idx) => (
          <HeaderButton
            className={isActive[idx] && `${action}`}
            key={headerButton.name}
            onClick={() => {
              setSection(headerButton.component);
              setIsActive((pre) => ({ [idx]: !pre[idx] }));
            }}
          >
            {headerButton.name}
          </HeaderButton>
        ))}
      </nav>
    </header>
  );
};

export default Header;
