import React from "react";
import { Box } from "@mui/material";

interface MainComponentProps {
  isSection: any;
};

const MainComponent = ({ isSection}: MainComponentProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80vw",
        height: "80vh",
        boxShadow: "5px 5px 10px 5px #eceae8",
        borderRadius: "15px",
        background: "white",
      }}>
      <Box sx={{ width: "100%", height: "100%" }}>{isSection}</Box>
    </Box>
  );
};

export default MainComponent;
