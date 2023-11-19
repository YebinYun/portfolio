import './App.css';
import React from "react";
import Main from './main/Main';
import Header from './components/header/Header';

function App() {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgb(255, 187, 187) -34.2%, rgba(255, 102, 102, 0.40) 42.5%, rgba(255, 0, 0, 0.00) 223.53%)",
      }}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
