import React from 'react';
import {TbBrandReactNative} from 'react-icons/tb';
import {DiMongodb} from 'react-icons/di';
import {FaPython} from 'react-icons/fa';

const ProgrammingSkill = () => {
    return (
        <div className='py-10 text-xl'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>React Native</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><TbBrandReactNative/></div>
                    <div>
                        <div className='w-2/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>40%</h1>
                    </div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Mongoose</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><DiMongodb/></div>
                    <div>
                        <div className='w-2/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>40%</h1>
                    </div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-lg shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Python</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><FaPython/></div>
                    <div>
                        <div className='w-2/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>40%</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgrammingSkill;