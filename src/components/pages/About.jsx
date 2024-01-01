import React from "react";
import "animate.css";
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";

const skills = {
  Language: [
    { icon: "skill-icons:javascript", name: "JavaScript" },
    { icon: "skill-icons:typescript", name: "TypeScript" },
    { icon: "skill-icons:html", name: "HTML" },
    { icon: "skill-icons:css", name: "CSS" },
  ],
  Framework: [{ icon: "logos:react", name: "React" }],
  Styling: [
    { icon: "devicon:tailwindcss", name: "Tailwind" },
    { icon: "skill-icons:styledcomponents", name: "StyledComponents" },
    { icon: "skill-icons:bootstrap", name: "Bootstrap" },
    { icon: "devicon:figma", name: "Figma" },
  ],
};

const About = () => {
  return (
    <Box sx={{ width: "100%", padding: "5rem 0" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box class="animate__animated animate__bounce animate__slow">
          <Typography
            sx={{
              color: "#274D5A",
              fontSize: "40px",
              fontWeight: "bold",
            }}>
            ABOUT
          </Typography>
        </Box>
        <Box
          sx={{
            width: "70px",
            height: "4px",
            background: "#274D5A",
            textAlign: "center",
          }}
        />
      </Box>

      <Box
        sx={{
          margin: "5rem 0",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}>
        {Object.keys(skills).map((category, index) => (
          <Box
            key={index}
            sx={{
              height: "10vh",
              display: "flex",
              flexDirection: "column",
              mx: "2rem",
              padding: "1rem 2rem",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "bold", my: "1rem" }}>
              {category}
            </Typography>
            <Box>
              {skills[category].map((skill, skillIndex) => (
                <Box key={skillIndex}>
                  <Box sx={{ display: "flex" }}>
                    <Icon icon={skill.icon} />
                    <Typography>{skill.name}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default About;
