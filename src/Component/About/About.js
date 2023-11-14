import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Skill from './Skill/Skill';
import homeImgTwo from '../../../src/images/aboutAvatar.gif'




const About = () => {
    const [clicked, setClicked] = useState(false)
    const {text} = useTypewriter({
        words: ['Javascript', 'React.js', 'Next.js', 'React-router-dom', 'Redux.js', 'Mongoose', 'Express.js', 'Typescript', 'Mongodb'],
        loop: 0, // Infinit
      })

      const handleClick = (isClicked) => {
        setClicked(isClicked)
      }

    //   console.log("clicked ", clicked)
    return (
        <div className='py-10'>
            <div className='textAnimationTwo'>
                <h1 data-aos="fade-up" className='text-4xl font-bold pb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ffddca] to-[#08AEEA]'>About Me</h1>
            </div>
            <div className='lg:flex  lg:justify-between  py-5'>
                <div data-aos="fade-down" className='w-full'>
                    <img src={homeImgTwo} alt='Empty!'width='250px' height='200px'/>
                    <div className='pt-5'>
                        <div>
                            <h1><span className='text-gray-500 font-serif font-bold text-xl'>__Name</span>: Utsha Kumar Paul</h1>
                            <h1><span className='text-gray-500 font-serif font-bold text-xl'>__Phone</span>: (+88) 01309778619</h1>
                        </div>
                        <div>
                            <h1><span className='text-gray-500 font-serif font-bold text-xl'>__Age</span>: 20</h1>
                            <h1><span className='text-gray-500 font-serif font-bold text-xl'>__Address</span>: Dhaka, Bangladesh</h1>
                            <h1><span className='text-gray-500 font-serif font-bold text-xl'>__Profession</span>: MERN Stack Developer</h1>
                        </div>
                        
                    </div>
                </div>
                <div className='w-full flex items-center justify-center text-xl leading-6 text-gray-200 font-serif pt-8 lg:pt-0 tracking-wide leading-relaxed'>
                    <div>
                        <p>I'm Utsha Paul and I Know Some Interesting Tecnology</p>
                        <p><span style={{color: '#008bff', fontWeight: 'bold'}}>{text} <Cursor/></span></p>
                        <p>
                            I am a passionate Front End Developer with knowing some famous frameworks. I love working on challenging projects with learning something new and writing clean code. I want to retain and enhance my skills by working at a company. My keen interest in learning new technology
                        </p>
                    </div>
                </div>
            </div>
            <div className='py-5'>
                <div className='py-5'>
                    <ul className='flex cursor-pointer font-bold text-2xl'>
                        <li className='mr-10 hover:text-blue-500 hover:tracking-widest hover:border-blue-500 hover:transition-all' onClick={() => handleClick(false)}><span className={clicked? "":"text-blue-500 tracking-widest border-blue-500"}>Main Skills</span></li>
                        <li data-aos="flip-left" className='hover:text-blue-500 hover:tracking-widest hover:border-blue-500 hover:transition-all' onClick={() => handleClick(true)}><span className={clicked?"text-blue-500 tracking-widest border-blue-500": ''}>Education</span></li>
                    </ul>
                </div>
                {clicked ?  <div className='text-xl font-bold text-slate-200'>
                    <div>
                        <p>Diploma in Computer Science - <span className='text-slate-400 font-light'>Dhaka Politechnic Institute, Dhaka</span></p>
                        <p className='text-slate-400 font-light'>2019-2020</p>
                    </div>
                    <div className='py-5'>
                        <p>Web development certificate - <span className='text-slate-400 font-light'>Programming Hero, Dhaka</span></p>
                        <p className='text-slate-400 font-light'>2020</p>
                    </div>
                    <div>
                        <p>Diploma in Computer Science - <span className='text-slate-400 font-light'>Dhaka Politechnic Institute, Dhaka</span></p>
                        <p className='text-slate-400 font-light'>2019-2020</p>
                    </div>
                </div>: <h1><Skill/></h1>}
            </div>
        </div>
    );
};

export default About;