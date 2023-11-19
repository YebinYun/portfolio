import './App.css';
import tw from "tailwind-styled-components";
import React, {useState} from "react";
import Main from './main/Main';
import Header from './components/header/Header';
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
  
  const sections = [
    { name: "Home", id: "home", component: <Home Button={Button} /> },
    { name: "Portfolio", id: "portfolio", component: <Portfolio /> },
    { name: "Stack", id: "stack", component: <Stack /> },
  ];

  const [section, setSection] = useState(sections[0].id);

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgb(255, 187, 187) -34.2%, rgba(255, 102, 102, 0.40) 42.5%, rgba(255, 0, 0, 0.00) 223.53%)",
      }}>
      <Header setSection={setSection} sections={sections} Button={Button} />
      <Main section={section} sections={sections} />
    </div>
  );
}

export default App;
