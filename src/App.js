import './App.css';
import React from "react";
import Top from './components/common/Top';
import Main from './pages/Main';
import Header from './components/header/Header';

function App() {
  

  return (
    <main className='relative'>
      <Header/>
      <Top/>
      <Main/>
    </main>
  );
}

export default App;
