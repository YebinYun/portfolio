"use client";
import React, { ReactElement, useState } from "react";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Stack from "../pages/Stack";
import Main from "../components/main/Main";
import Header from "../container/header/HeaderContainer";

interface Section {
  name: string;
  component: ReactElement;
}

export default function Page(): ReactElement {
  const sections: Section[] = [
    {
      name: "Home",
      component: <Home />,
    },
    {
      name: "About",
      component: <Stack />,
    },
    {
      name: "Project",
      component: <Portfolio />,
    },
    {
      name: "Contact",
      component: <Portfolio />,
    },
  ];

  const [isSection, setIsSection] = useState<ReactElement>(
    sections[0].component
  );

  return (
    <>
      <Header setSection={setIsSection} sections={sections} />
      <Main isSection={isSection} />
    </>
  );
}
