import React from 'react';
import './Banner.css';

const Banner = () => {
   
    return (
        <div className='py-5'>
            <div className='lg:flex lg:justify-between'>
                <div>
                    <p className='text-xl uppercase py-5'>Welcome to my world</p>
                    <h1 className='text-6xl font-black py-5'>Hi, I'm Utsha</h1>
                    <div className='slideUp' style={{color: '#008bff', }}>
                        <h1><h1 className='text-6xl font-black' >Designer.</h1></h1>
                        <h1><h1 className='text-6xl font-black'>Developer.</h1></h1>
                        <h1><h1 className='text-6xl font-black' >Programmer.</h1></h1>
                    </div>
                    <div className='py-5'>
                        <button>Resume</button>
                        <button>Hire Me</button>
                    </div>
                    
                </div>
                <div>
                    <h1>Img porsion here</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;