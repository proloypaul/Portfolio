import React from 'react';
import {AiOutlineGithub} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {IoIosOpen} from 'react-icons/io';
import {AiOutlineSelect} from 'react-icons/ai';
import homeImgOne from '../../../../src/images/homeImg.png';
import './Banner.css';

const Banner = () => {
   
    return (
        <div className='py-5'>
            <div className='lg:flex lg:justify-between'>
                <div>
                    <p className='text-xl uppercase py-5 text-slate-400'>Welcome to my world</p>
                    <h1 className='text-6xl font-black pt-5'>Hi, I'm Utsha</h1>
                    <div className='slideUp' style={{color: '#008bff', }}>
                        <h1 className='text-6xl font-black' >Programmer.</h1>
                        <h1 className='text-6xl font-black'>Junior Developer.</h1>
                        <h1 className='text-6xl font-black' >Frontend Dev.</h1>
                    </div>
                    <div className='py-5 pt-12 flex'>
                        <a href='lkdjflk' target='_blank' className='commonBtnTwo mr-3.5 flex justify-between items-center'>Resume <IoIosOpen/></a>
                        <a href='llkdklfd' className='commonBtnTwo flex justify-between items-center'>Contact<AiOutlineSelect/></a>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div>
                        <img src={homeImgOne} alt='Empty' width='300px' height='400px'/>
                    </div>
                    <div className='pt-5 flex justify-center items-center lg:relative'>
                        <div className='lg:fixed'>
                            <div><a href='https://github.com/proloypaul/' className='transition ease-in-out delay-100 text-3xl hover:text-blue-500 hover:text-4xl duration-300 '><AiOutlineGithub/></a></div>
                            <div className='py-4'><a href='https://github.com/proloypaul/' className='transition ease-in-out delay-100 text-3xl hover:text-blue-500 hover:text-4xl duration-300'><BsLinkedin/></a></div>
                            <div className='pb-4'><a href='https://github.com/proloypaul/' className='transition ease-in-out delay-100 text-3xl hover:text-blue-500 hover:text-4xl duration-300'><AiOutlineTwitter/></a></div>
                            <div><a href='https://github.com/proloypaul/' className='transition ease-in-out delay-100 text-3xl hover:text-blue-500 hover:text-4xl duration-300'><BsInstagram/></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;