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
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className='font-mono'>
      <BrowserRouter>
      {/* particles start */}
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#00000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      {/* particles finshed */}
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
