import React, { useEffect, useState, useRef } from "react";
import Intro from '../main/Intro';
import Project from '../main/Project';
import Stack from "../main/Stack";

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
    <div>
      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          {React.cloneElement(section.component, {
            nextClick: nextClick,
          })}
        </div>
      ))}
    </div>
  );
};

export default Main;