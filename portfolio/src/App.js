import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    <main>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
