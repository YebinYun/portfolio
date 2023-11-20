import React from "react";
import tw from "tailwind-styled-components";

const Header = ({ setSection, sections, Button }) => {
  const HeaderButton = tw(Button)`
    mt-4 
    md:mt-8 
    lg:mt-6 
    mx-2.5 
    md:mx-8 
    lg:mx-12 
    px-8 
    hover:text-white
  `;
  const clickButtonHandler = (button) => {
    setSection(button);
  };

  return (
    <header className="w-full pt-5">
      <nav className="w-full text-2xl font-bold flex justify-center text-gray-800 my-2">
        {sections.map((headerButton) => (
          <HeaderButton
            // className={`btn ${headerItem.id === sections ? "active:" : ""}`}
            key={headerButton}
            onClick={() => clickButtonHandler(headerButton.name)}
          >
            {headerButton.name}
          </HeaderButton>
        ))}
      </nav>
    </header>
  );
};

export default Header;
