import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Other from './Component/About/Skill/Other';
import ProgrammingSkill from './Component/About/Skill/ProgrammingSkill';
import Tools from './Component/About/Skill/Tools';
import WebSkill from './Component/About/Skill/WebSkill';
import Blogs from './Component/Blogs/Blogs';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Home/Navbar';
import Project from './Component/Project/Project';

function App() {
  return (
    <div className='font-mono'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}>
            <Route path="webSkill" element={<WebSkill/>}/>
            <Route path="programmingSkill" element={<ProgrammingSkill/>}/>
            <Route path="other" element={<Other/>}/>
            <Route path="tools" element={<Tools/>}/>
          </Route>
          <Route path="/project" element={<Project/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
