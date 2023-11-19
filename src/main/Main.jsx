import React, { useEffect, useState, useRef } from "react";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Stack from "../pages/Stack";

const Main = ({ children }) => {
  const sections = [
    { id: "home", component: <Home /> },
    { id: "portfolio", component: <Portfolio /> },
    { id: "stack", component: <Stack /> },
  ];
  // 현재 표시되고 있는 섹션의 인덱스를 추적하는 useRef
  const index = useRef(0);

  // 지정된 섹션으로 스크롤하는 함수
  function scrollToSection(targetIndex = index.current) {
    index.current = targetIndex;
    const sectionId = sections[targetIndex].id;
    window.scrollTo({
      top:
        document.getElementById(sectionId).getBoundingClientRect().top +
        window.scrollY,
      behavior: "smooth",
    });
  }

  //버튼 이동 함수
  function nextClick() {
    if (index.current < sections.length - 1) {
      scrollToSection(index.current + 1);
    } else {
      scrollToSection(0);
    }
  }

  return (
    <main className="relative h-[90vh]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[90%] h-[85%] border border-red-200 shadow-lg rounded-xl">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Main;