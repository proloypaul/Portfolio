
import React from 'react';
import {IoIosOpen} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';
import {AiFillDownCircle} from 'react-icons/ai';
// import footBallImg from '../../images/Screenshot (39).png'

const Project = () => {
    return (
        <div className='pt-20 pb-10'>
            <h1 data-aos="fade-up-left" className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffddca] to-[#08AEEA]'>Project</h1>
            <div data-aos="fade-up-right" className='text-xl text-center text-slate-400 pt-10 pb-5'>
                <p><span className='text-white font-bold'>Welcome,</span> introducing to my project</p>
                <p>Here is my personal project</p>
                <p> made by own idea!</p>
                <p>FrontEnd and BackEnd</p>
                <p>click <span className='text-blue-500 font-bold underline'>Details</span></p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10 projectBoxs'>
                <div data-aos="flip-right" className='py-3.5 px-5 bg-zinc-900 text-slate-400 border-0 rounded-lg hover:shadow-lg hover:shadow-slate-400' >
                    <h1 className='font-bold text-3xl'>belly_food</h1>
                    <a href='https://belly-food-client.vercel.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline cursor-pointer' style={{backgroundColor: '#008bff'}}>Live<span className='animate-bounce'><IoIosOpen/></span></a>
                    {/* <div className='flex items-center justify-center my-10'>
                        <img src={footBallImg} alt='Empty!' className='h-72 w-full border-o rounded-lg'/>
                    </div> */}
                    <div>
                        <h1 className='text-xl font-bold'>Used Technoloy</h1>
                        <div className='pl-5'>
                            <li className='list-disc'>React</li>
                            <li className='list-disc'>Express</li>
                            <li className='list-disc'>Mongodb</li>
                            <li className='list-disc'>Node</li>
                        </div>
                        <div className='py-5 flex justify-center'>
                            <a href='https://github.com/proloypaul/belly-food-server' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Server <IoIosOpen/></a>
                            <a href='https://github.com/proloypaul/belly-food-client' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className='py-3.5 px-5 bg-zinc-900 text-slate-400 border-0 rounded-lg hover:shadow-lg hover:shadow-slate-400' >
                    <h1 className='font-bold text-3xl'>E-smart</h1>
                    <a href='https://e-smarts.web.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline' style={{backgroundColor: '#008bff'}}>Live <span className='animate-bounce'><IoIosOpen/></span></a>
                    <div>
                        <h1 className='text-xl font-bold'>Used Technoloy</h1>
                        <div className='pl-5'>
                            <li className='list-disc'>React</li>
                            <li className='list-disc'>Bootstrap</li>
                            <li className='list-disc'>Express</li>
                            <li className='list-disc'>Mongodb</li>
                        </div>
                        <div className='py-5 flex justify-center'>
                            <a href='https://github.com/Minhajul-Shobuj/e-smart-server' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Server <IoIosOpen/></a>
                            <a href='https://github.com/Naim-Ahmed-Mamun/e-smarts' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className='py-3.5 px-5 bg-zinc-900 text-slate-400 border-0 rounded-lg hover:shadow-lg hover:shadow-slate-400 ' >
                    <h1 className='font-bold text-3xl'>University Management</h1>
                    <a href='https://drive.google.com/file/d/1wkjWj3T8K1b9PcqiDL5m0QeU5YjcU_5l/view?usp=sharing' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline' style={{backgroundColor: '#008bff'}}>Live <span className='animate-bounce'><IoIosOpen/></span></a>
                    <div>
                        <h1 className='text-xl font-bold'>Used Technoloy</h1>
                        <div className='pl-5'>
                            <li className='list-disc'>Typscript</li>
                            <li className='list-disc'>Mongoose</li>
                            <li className='list-disc'>Express</li>
                            <li className='list-disc'>Mongodb</li>
                        </div>
                        <div className='py-5 flex justify-center'>
                            <a href='https://docs.google.com/document/d/1qxDtut36BNqn_GAFsA97fCGNI4fjzCDHaeJx5At5Ihk/edit?usp=sharing' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Requirement <IoIosOpen/></a>
                            <a href='https://github.com/proloypaul/university-management-server' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold flex justify-center items-center cursor-pointer animate-bounce mt-5'><span className='text-2xl text-blue-500'><AiFillDownCircle/></span> See more</h1>
            </div>
        </div>
    );
};

export default Project;