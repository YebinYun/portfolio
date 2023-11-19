import React, { useEffect, useState, useRef } from "react";
import Intro from '../pages/Intro';
import Project from '../pages/Project';
import Stack from "../pages/Stack";

const Main = () => {
  const sections = [
    { id: "intro", component: <Intro /> },
    { id: "project", component: <Project /> },
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
          <Intro />
          {/* {sections.map((section) => (
        <div key={section.id} id={section.id}>
          {React.cloneElement(section.component, {
            nextClick: nextClick,
          })}
        </div>
      ))} */}
        </div>
      </div>
    </main>
  );
};

export default Main;