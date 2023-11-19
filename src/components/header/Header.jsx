import React, { useState } from "react";

const liStyle =
  "bg-red-100 mt-4 md:mt-8 lg:mt-6 mx-2.5 md:mx-8 lg:mx-12 py-4 px-8 cursor-pointer border border-red-100 shadow-lg rounded-full transition-all duration-300 hover:bg-red-300 hover:border-red-300 hover:text-white hover:shadow-inner hover:underline";

const Header = ({}) => {
  const headerItems = [
    { name: "Home", id: "home" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Stack", id: "stack" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  // 각 섹션으로 스크롤 이동하는 함수
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = (itemId) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
    if (itemId) {
      scrollToSection(itemId);
    }
  };

  return (
    <header className="w-full pt-5">
      <ul className="w-full text-2xl font-bold flex justify-center text-gray-800 my-2">
        {headerItems.map((headerItem) => (
          <li
            key={headerItem.id}
            onClick={() => toggleMenu(headerItem.id)}
            className={liStyle}>
            {headerItem.name}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
