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
  const clickItemHandler = (id) => {
    setSection(id);
  };

  return (
    <header className="w-full pt-5">
      <nav className="w-full text-2xl font-bold flex justify-center text-gray-800 my-2">
        {sections.map((headerItem) => (
          <HeaderButton
            key={headerItem.id}
            onClick={() => clickItemHandler(headerItem.id)}>
            {headerItem.name}
          </HeaderButton>
        ))}
      </nav>
    </header>
  );
};

export default Header;
