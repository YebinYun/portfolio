import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";
import React, { useState } from "react";
 
const Header = ({ setSection, sections }) => {
  const [activeButton, setActiveButton] = useState(sections[0].name);

  const HeaderButtonGroup = styled(ToggleButtonGroup)({
    width: "100vw",
    height: "50px",
    background: "#D46C4F",
    borderBottom: "3px solid #274D5A",
    borderRadius: "0px",
    padding: "0 100px 0 80px"
  })

  const HeaderButton = styled(ToggleButton)({
    height: "100%",
    color: "#FFF",
    fontSize: "18px",
    fontWeight: "900",
    border: "none",
    WebkitTextStroke: "1px #444",
    padding: "0 20px",
    "&.Mui-selected": {
      color: "#FAAC6A",
      background: "#D46C4F",
    },
  });

  return (
    <HeaderButtonGroup
      value={activeButton}
      exclusive
      onChange={(event, newActiveButton) => {
        setActiveButton(newActiveButton);
        setSection(
          sections.find((button) => button.name === newActiveButton).component
        );
      }}>
      {sections.map((headerButton) => (
        <HeaderButton value={headerButton.name}>
          {headerButton.name}
        </HeaderButton>
      ))}
    </HeaderButtonGroup>
  );
};

export default Header;
