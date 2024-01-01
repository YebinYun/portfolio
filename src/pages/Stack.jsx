import React from "react";
import tw from "tailwind-styled-components";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";

const Wrap = tw.div`
  p-8 
  rounded-md 
  opacity-80 
  shadow-lg 
  border-2 
  border-red-100
`;
const H2 = tw.h2`
  font-extrabold 
  text-shadow-custom 
  text-4xl  
  text-gray-900 
`;
const Line = tw.div`
  hidden 
  w-full 
  border-2 
  border-red-200 
  my-8 
  opacity-50 
  rounded-full 
  shadow
  lg:flex 
`;
const Ul = tw.ul`
  flex 
  mt-6 
  lg:mt-0 
  lg:mb-8
`;
const Li = tw.li`
  flex 
  border-2 
  border-red-50 
  bg-red-100 
  shadow 
  p-4 
  rounded-lg
`;
const Span = tw.span`
  text-2xl 
  font-semibold 
  text-black 
  text-shadow-custom
`;
const iconStyle = "w-8 h-8 mr-2.5";
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
const Stack = () => {
  return (
    <div className="h-[60vh] w-[80vw] flex flex-col">
      <Box>Stack</Box>
      <div className="w-full grid grid-rows-3 gap-10 2xl:grid-cols-3 2xl:grid-rows-none ">
        {Object.keys(skills).map((category, index) => (
          <Wrap key={index}>
            <H2>{category}</H2>
            <Line />
            <div className="w-full grid grid-cols-1 lg:flex lg:flex-col">
              {skills[category].map((skill, skillIndex) => (
                <Ul key={skillIndex}>
                  <Li>
                    <Icon className={iconStyle} icon={skill.icon} />
                    <Span>{skill.name}</Span>
                  </Li>
                </Ul>
              ))}
            </div>
          </Wrap>
        ))}
      </div>
    </div>
  );
};

export default Stack;
