import React from "react";

const liStyle =
  "bg-red-100 mt-4 md:mt-8 lg:mt-6 mx-2.5 md:mx-8 lg:mx-12 py-4 px-8 cursor-pointer border border-red-100 shadow-lg rounded-full transition-all duration-300 hover:bg-red-300 hover:border-red-300 hover:text-white hover:shadow-inner hover:underline";

const Header = ({ setSection, sections }) => {
  const clickItemHandler = (id) => {
    setSection(id);
  };

  return (
    <header className="w-full pt-5">
      <ul className="w-full text-2xl font-bold flex justify-center text-gray-800 my-2">
        {sections.map((headerItem) => (
          <li
            key={headerItem.id}
            onClick={() => clickItemHandler(headerItem.id)}
            className={liStyle}>
            {headerItem.name}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
