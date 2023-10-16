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
  // 현재 스크롤 중인지 여부를 나타내는 상태
  const [isScrolling, setIsScrolling] = useState(false);
  // 현재 표시되고 있는 섹션의 인덱스를 추적하는 useRef
  const index = useRef(0);
  // 스크롤 발생 시 다음 이벤트가 발생할 수 있도록 허용하기 전에, 일정 시간을 기다리는 디바운스를 구현
  let debounceTimeout = null;

  //  휠 이벤트가 발생할 때 실행되는 함수
  function onWheel(e) {
    e.preventDefault();

    if (isScrolling) return;

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
      if (e.deltaY < 0 && index.current > 0) {
        index.current -= 1;
      } else if (e.deltaY > 0 && index.current < sections.length - 1) {
        index.current += 1;
      }

      scrollToSection();
      setIsScrolling(true);

      setTimeout(() => {
        setIsScrolling(false);
      }, 0); // <- setTimeout
    }, 250); // <- debounceTimeout
  }



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

  // 마운트될 때 wheel 이벤트 리스너를 추가하고, 언마운트될 때는 제거
  useEffect(() => {
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="">
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