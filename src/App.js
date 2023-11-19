import './App.css';
import React, {useState} from "react";
import Main from './main/Main';
import Header from './components/header/Header';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Stack from "./pages/Stack";

function App() {
  const sections = [
    { name: "Home", id: "home", component: <Home /> },
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
      <Header setSection={setSection} sections={sections} />
      <Main section={section} sections={sections} />
    </div>
  );
}

export default App;
