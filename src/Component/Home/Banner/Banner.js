import React from 'react';
import {AiOutlineGithub} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {SiHackerrank} from 'react-icons/si';
import {IoIosOpen} from 'react-icons/io';
import {AiOutlineSelect} from 'react-icons/ai';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import homeImgFour from '../../../../src/images/homeImgFour.png';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    const {text} = useTypewriter({
        words: ['Welcome to my world'],
        loop: 0, // Infinit
      })
    return (
        <div className='py-5'>
            <div className='lg:flex lg:justify-between pt-10'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <p className='text-xl uppercase py-5 text-gray-400 font-serif'>{text} <Cursor/></p>
                    <h1  className='sm:text-4xl lg:text-6xl font-black pt-5'>Hi, I'm Utsha</h1>
                    <div className='slideUp ' style={{color: '#008bff', }}>
                        <h1 className='sm:text-4xl lg:text-6xl font-black font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#08AEEA] to-[#ffddca]' >MERN Dev.</h1>
                        <h1 className='sm:text-4xl lg:text-6xl font-black font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#08AEEA] to-[#ffddca]'>Junior Dev.</h1>
                        <h1 className='sm:text-4xl lg:text-6xl font-black font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#08AEEA] to-[#ffddca]' >Frontend Dev.</h1>
                    </div>
                    <div className='py-5 pt-12 flex'>
                        <a href='https://drive.google.com/file/d/1y-G2gvl13tVpP3dSEp_8p8zoQA9D7QjH/view?usp=sharing' target='_blank' rel='noreferrer' className='transition ease-in-out delay-150 px-5 py-2  text-white rounded-t-lg border-r-2 border-l-2 border-t-2 hover:bg-gray-400 shadow-md shadow-gray-400 flex justify-center items-center mr-3.5 font-bold text-xl duration-300'>Resume <IoIosOpen/></a>
                        <Link to='/contact' className='transition ease-in-out delay-150 px-5 py-2  text-white rounded-t-lg border-r-2 border-l-2 border-t-2 hover:bg-gray-400 shadow-md shadow-gray-400 flex justify-center items-center font-bold text-xl duration-300'>Contact<AiOutlineSelect/></Link>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className='p' data-aos="fade-up"
                        data-aos-duration="3000">
                        <img src={homeImgFour} alt='Empty' width='300px' height='400px'/>
                    </div>
                    <div className='pt-5 flex justify-center items-center lg:relative'>
                        <div className='lg:fixed'>
                            <div><a href='https://github.com/proloypaul/' target='_blank' rel='noreferrer' className='transition ease-in-out delay-100 text-3xl hover:text-blue-500 hover:text-4xl duration-300 '><AiOutlineGithub/></a></div>
                            <div className='py-4'><a href='https://www.linkedin.com/in/utsha-kumar-paul/' target='_blank' rel='noreferrer'  className='transition ease-in-out delay-100 text-3xl hover:text-blue-500 hover:text-4xl duration-300' ><BsLinkedin/></a></div>
                            <div className='pb-4'><a href='https://www.facebook.com/ukp.proloy' target='_blank' rel='noreferrer' className='transition ease-in-out delay-100 text-3xl hover:text-blue-500 hover:text-4xl duration-300'><BsFacebook/></a></div>
                            <div><a href='https://www.hackerrank.com/proloyp23?hr_r=1' target='_blank' rel='noreferrer' className='transition ease-in-out delay-100 text-3xl hover:text-blue-500 hover:text-4xl duration-300'><SiHackerrank/></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;