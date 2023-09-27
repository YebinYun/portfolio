import './App.css';
import Top from './components/common/Top';
import Main from './main/Main';
import Project from './main/Project';

function App() {
  return (
    <main className='relative'>
      <Top/>
      <Main />
      <Project/>
    </main>
  );
}

export default App;
