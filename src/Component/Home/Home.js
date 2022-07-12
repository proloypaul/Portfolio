import React from 'react';
import About from '../About/About';
import Project from '../Project/Project';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Project></Project>
        </div>
    );
};

export default Home;