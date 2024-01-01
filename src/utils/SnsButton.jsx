import React from "react";
import { Icon } from "@iconify/react";
import { Box, Button, Typography } from "@mui/material";

const buttonsData = [
  {
    text: "깃허브",
    icon: "fluent-mdl2:git-hub-logo",
    link: "https://github.com/YebinYun",
  },
  {
    text: "벨로그",
    icon: "simple-icons:velog",
    link: "https://velog.io/@yebind",
  },
];

const SnsButton = () => {
  return (
    <Box>
      {buttonsData.map((button, index) => (
        <Button
          key={index}
          sx={{
            color: "#444",
            fontSize: "18px",
            mx: "2rem",
            padding: "0.5rem 1rem",
            boxShadow: "5px 5px 10px lightgray;",
          }}
          onClick={() => window.open(button.link, "_blank")}>
          <Box>
            <Icon icon={button.icon} />
          </Box>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "12px", marginLeft: "0.5rem" }}>
            {button.text}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default SnsButton;
