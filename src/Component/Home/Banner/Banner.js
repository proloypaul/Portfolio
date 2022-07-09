import React from 'react';
import './Banner.css';

const Banner = () => {
   
    return (
        <div className='py-5'>
            <div>
                <div className=' absolute'>
                    <p className='text-xl uppercase py-5'>Welcome to my world</p>
                    <h1 className='text-6xl font-black py-5'>Hi, I'm Utsha</h1>
                    <div className='slideUp'>
                        <h1><h1 className='text-6xl font-black' style={{color: '#008bff', }}>Designer.</h1></h1>
                        <h1><h1 className='text-6xl font-black' style={{color: '#008bff', }}>Programmer.</h1></h1>
                        <h1><h1 className='text-6xl font-black' style={{color: '#008bff', }}>Developer.</h1></h1>
                    </div>
                    <div className='py-5'>
                        <button>Resume</button>
                        <button>Hire Me</button>
                    </div>
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Banner;