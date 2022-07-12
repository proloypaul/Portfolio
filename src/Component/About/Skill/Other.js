import React from 'react';
import {SiRedux} from 'react-icons/si';
import {SiTypescript} from 'react-icons/si';


const Other = () => {
    return (
        <div className='py-10 text-xl'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Redux</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><SiRedux/></div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Typescript</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><SiTypescript/></div>
                </div>
            </div>
        </div>
    );
};

export default Other;