"use client";
import React, { useState } from "react";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Stack from "../pages/Stack";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { Box, Button, styled } from "@mui/material";

export default function Page() {

    const HeaderButton = styled(Button)`
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
    `
    
    const TitleText = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    `

  const sections = [
    {
      name: "Home",
      component: <Home Button={HeaderButton} TitleText={TitleText} />,
    },
    {
      name: "Portfolio",
      component: <Portfolio Button={HeaderButton} TitleText={TitleText} />,
    },
    {
      name: "Stack",
      component: <Stack TitleText={TitleText} />,
    },
  ];

  const [isSection, setSection] = useState(sections[0].component);

  return (
    <Box>
      <Header setSection={setSection} sections={sections} Button={Button} />
      <Main isSection={isSection} />
    </Box>
  );
}
