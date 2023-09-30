import React, { useState } from "react";

const liStyle =
  "relative mx-10 py-2.5 px-12 cursor-pointer rounded-md transition-all duration-500 buttonHover hover:text-white";

const headerItems = [
  { label: "About Me", id: "about" },
  { label: "Project", id: "project" },
  { label: "Stack", id: "stack" },
];

const Header = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleMenu = (itemId) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
  };

  return (
    <div className="w-screen h-fit fixed top-0 bg-white z-50">
      <ul className="w-full text-2xl font-bold flex justify-center text-gray-800 my-2">
        {headerItems.map((headerItem) => (
          <li
            key={headerItem.id}
            onClick={() => toggleMenu(headerItem.id)}
            className={`${liStyle}`}>
            <span>{headerItem.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
