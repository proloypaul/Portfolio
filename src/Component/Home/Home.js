import React from 'react';
import About from '../About/About';
import WebSkill from '../About/Skill/WebSkill';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Banner from './Banner/Banner';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <WebSkill></WebSkill>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;