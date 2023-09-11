import React from 'react';
import {DiGit} from 'react-icons/di';
import {DiHeroku} from 'react-icons/di';
import {SiNetlify} from 'react-icons/si';
import {SiVisualstudiocode} from 'react-icons/si';
import {SiVercel} from 'react-icons/si';

const Tools = () => {
    return (
        <div className='py-10 text-xl'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 skillBoxs'>
                <div data-aos="flip-left" className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Git</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><DiGit/></div>
                </div>
                <div data-aos="flip-down" className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Visual Studio</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><SiVisualstudiocode/></div>
                </div>
                <div data-aos="flip-right" className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>HeroKu</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><DiHeroku/></div>
                </div>
                <div data-aos="flip-left" className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Netlify</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><SiNetlify/></div>
                </div>
                <div data-aos="flip-right" className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Vercel</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><SiVercel/></div>
                </div>
            </div>
        </div>
    );
};

export default Tools;