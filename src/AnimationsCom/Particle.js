import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

const Particle = () => {

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
        <div>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                // color: {
                //     value: "#000000",
                // },
                // },
                fpsLimit: 120,
                interactivity: {
                events: {
                    onClick: {
                    enable: false,
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
                    duration: 0.2,
                    },
                },
                },
                particles: {
                color: {
                    value: "#fff",
                },
                links: {
                    color: "#008bff",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "",
                    enable: true,
                    outModes: {
                    default: "bounce",
                    },
                    random: true,
                    speed: 4,
                    straight: false,
                },
                number: {
                    density: {
                    enable: false,
                    area: 800,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.2,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5},
                },
                },
                detectRetina: true,
            }}
            />
        </div>
    );
};

export default Particle;