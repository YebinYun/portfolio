import "./App.css";
import tw from "tailwind-styled-components";
import React, { useState } from "react";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Stack from "./pages/Stack";

function App() {
  const Button = tw.button`
  bg-red-100
  mx-10
  py-4
  px-4
  md:px-8
  cursor-pointer
  border
  border-red-100
  shadow-lg
  rounded-full
  transition-all
  duration-300
  hover:bg-red-300
  hover:border-red-300
  hover:shadow-inner
  hover:underline
  flex 
  items-center 
`;
  const TitleText = tw.h1`
  text-[3rem] 
  md:text-[4rem] 
  lg:text-[5rem] 
  text-center 
  text-white 
  font-extrabold
  `;

  const sections = [
    {
      name: "Home",
      component: <Home Button={Button} TitleText={TitleText} />,
    },
    {
      name: "Portfolio",
      component: <Portfolio Button={Button} TitleText={TitleText} />,
    },
    {
      name: "Stack",
      component: <Stack TitleText={TitleText} />,
    },
  ];

  const [section, setSection] = useState(sections[0].component);

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgb(255, 187, 187) -34.2%, rgba(255, 102, 102, 0.40) 42.5%, rgba(255, 0, 0, 0.00) 223.53%)",
      }}
    >
      <Header setSection={setSection} sections={sections} Button={Button} />
      <Main section={section} />
    </div>
  );
}

export default App;
