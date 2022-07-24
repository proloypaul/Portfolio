import React from 'react';
import {TbBrandJavascript} from 'react-icons/tb';
import {TbBrandTailwind} from 'react-icons/tb';
import {SiMaterialui} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt} from 'react-icons/fa';
import {SiFirebase} from 'react-icons/si';
import {FaBootstrap} from 'react-icons/fa';
import {SiMongodb} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';


const WebSkill = () => {
    return (
        <div className='py-10 text-xl'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='py-3.5 px-5 bg-black text-white shadow-md shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Javascript</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><TbBrandJavascript/></div>
                    <div>
                        <div className='w-3/4 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>75%</h1>
                    </div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-md shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>React</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><FaReact/></div>
                    <div>
                        <div className='w-3/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>60%</h1>
                    </div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-md shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Tailwind</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><TbBrandTailwind/></div>
                    <div>
                        <div className='w-4/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>80%</h1>
                    </div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-md shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Meterial</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><SiMaterialui/></div>
                    <div>
                        <div className='w-4/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>80%</h1>
                    </div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-md shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Boostrap</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><FaBootstrap/></div>
                    <div>
                        <div className='w-4/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>80%</h1>
                    </div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-md shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Firebase</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><SiFirebase/></div>
                    <div>
                        <div className='w-1/2 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>50%</h1>
                    </div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-md shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Mongodb</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><SiMongodb/></div>
                    <div>
                        <div className='w-3/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>60%</h1>
                    </div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-md shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Html5</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><AiFillHtml5/></div>
                    <div>
                        <div className='w-4/5 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>80%</h1>
                    </div>
                </div>
                <div className='py-3.5 px-5 bg-black text-white shadow-md shadow-slate-400 border-0 rounded-lg' >
                    <h1 className='font-bold text-2xl text-slate-400'>Css3</h1>
                    <div className='py-3 text-9xl flex justify-center text-slate-400'><FaCss3Alt/></div>
                    <div>
                        <div className='w-3/4 h-2 border-0 rounded-lg' style={{backgroundColor: '#008bff'}}></div>
                        <h1>75%</h1>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default WebSkill;