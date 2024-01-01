"use client";
import React, { ReactElement, useState } from "react";
import Home from "../components/pages/Home";
import Portfolio from "../components/pages/Portfolio";
import About from "../components/pages/About";
import Main from "../components/main/MainComponent";
import Header from "../container/header/HeaderContainer";
import { Box } from "@mui/material";

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
      component: <About />,
    },
    {
      name: "Project",
      component: <Portfolio />,
    },
    {
      name: "Contact",
      component: <></>,
    },
  ];

  const [isSection, setIsSection] = useState<ReactElement>(
    sections[0].component
  );

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        background: "#FBF6F3",
      }}>
      <Header setSection={setIsSection} sections={sections} />
      <Main isSection={isSection} />
    </Box>
  );
}
