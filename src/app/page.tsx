"use client";
import React, { useState } from "react";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Stack from "../pages/Stack";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Box } from "@mui/material";

export default function Page() {

  const sections = [
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

  const [isSection, setIsSection] = useState(sections[0].component);

  return (
    <Box>
      <Header setSection={setIsSection} sections={sections} />
      <Main isSection={isSection} />
    </Box>
  );
}
