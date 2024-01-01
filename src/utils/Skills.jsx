import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import React from 'react'

const Skills = () => {
    const skills = {
      Front: [
        { icon: "logos:react", name: "React" },
        { icon: "skill-icons:javascript", name: "JavaScript" },
        { icon: "skill-icons:typescript", name: "TypeScript" },
        { icon: "teenyicons:nextjs-solid", name: "Next.js" },
        { icon: "skill-icons:html", name: "HTML" },
        { icon: "skill-icons:css", name: "CSS" },
      ],
      Styling: [
        { icon: "devicon:tailwindcss", name: "Tailwind" },
        { icon: "skill-icons:styledcomponents", name: "StyledComponents" },
        { icon: "skill-icons:bootstrap", name: "Bootstrap" },
        { icon: "simple-icons:mui", name: "Material UI" },
        { icon: "devicon:figma", name: "Figma" },
      ],
    };

  return (
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
            width: "20vw",
            height: "20vh",
            overflow:"auto",
            display: "flex",
            flexDirection: "column",
            mx: "2rem",
            padding: "1rem 2rem",
            border: "1px solid lightgray",
            borderRadius: "10px",
          }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              my: "1rem",
              padding: "1rem 2rem",
            }}>
            {category}
          </Typography>
          <Box>
            {skills[category].map((skill, skillIndex) => (
              <Box key={skillIndex}>
                <Box sx={{ display: "flex", my:"1rem" }}>
                  <Icon icon={skill.icon} />
                  <Typography sx={{fontWeight:500, mx:"1rem", alignItems: "center"}}>{skill.name}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Skills