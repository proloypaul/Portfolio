import React from 'react';
import {TbBrandReactNative} from 'react-icons/tb';
import { SiNextdotjs, SiRedux } from 'react-icons/si';

const ProgrammingSkill = () => {
    return (
        <div className='py-10 text-xl'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 skillBoxs'>
                <div data-aos="flip-left" className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>React Native</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><TbBrandReactNative/></div>
                    <div>
                        <div className='w-3/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>60%</h1>
                    </div>
                </div>
                <div data-aos="flip-up" className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Redux</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><SiRedux/></div>
                    <div>
                        <div className='w-3/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>50%</h1>
                    </div>
                </div>
                <div data-aos="flip-right" className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Next</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><SiNextdotjs/></div>
                    <div>
                        <div className='w-3/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>50%</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgrammingSkill;