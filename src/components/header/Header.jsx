import React, { useState } from "react";

const liStyle =
  "md:mx-10 py-2.5 px-12 cursor-pointer rounded transition-all duration-300 hover:bg-[#02801d5e] hover:text-white hover:underline";

const Header = () => {
  const headerItems = [
    { label: "About Me", id: "intro" },
    { label: "Project", id: "project" },
    { label: "Stack", id: "stack" },
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
    <div className="w-full fixed top-0 bg-white z-50">
      <ul className="w-full text-2xl font-bold flex justify-center text-gray-800 my-2">
        {headerItems.map((headerItem) => (
          <li
            key={headerItem.id}
            onClick={() => toggleMenu(headerItem.id)}
            className={liStyle}>
            {headerItem.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
