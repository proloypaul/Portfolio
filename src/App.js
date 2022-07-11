import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import ProgrammingSkill from './Component/About/Skill/ProgrammingSkill';
import WebSkill from './Component/About/Skill/WebSkill';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Project from './Component/Project/Project';

function App() {
  return (
    <div className='font-mono'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}>
            <Route path="webSkill" element={<WebSkill/>}/>
            <Route path="programmingSkill" element={<ProgrammingSkill/>}/>
          </Route>
          <Route path="/project" element={<Project/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
