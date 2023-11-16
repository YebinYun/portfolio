import './App.css';
import React from "react";
import Main from './pages/Main';
import Header from './components/header/Header';
import Background from './components/common/Background'

function App() {
  return (
    <Background>
      <Header/>
      <Main/>
    </Background>
  );
}

export default App;
