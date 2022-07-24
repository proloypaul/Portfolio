import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Skill from './Skill/Skill';



const About = () => {
    const [clicked, setClicked] = useState(false)
    const {text} = useTypewriter({
        words: ['Javascript', 'React', 'React-router-dom', 'Tailwind', 'Material-Ui', 'Boostrap', 'Mongodb', 'Express.js', 'Html5', 'CSS3'],
        loop: 0, // Infinit
      })

      const handleClick = (isClicked) => {
        setClicked(isClicked)
      }

      console.log("clicked ", clicked)
    return (
        <div className='py-10'>
            <h1 className='text-4xl font-bold'>About Me</h1>
            <div className='lg:flex  lg:justify-between  py-5'>
                <div className='w-full'>
                    <img src='https://i.ibb.co/GvYtn28/pic2-removebg-preview.png' alt='Empty!' className=' w-1/2 border-2 rounded-full'/>
                    <div className='pt-5'>
                        <div>
                            <h1><span className='text-slate-400 font-bold text-xl'>__Name</span>: Utsha Kumar Paul</h1>
                            <h1><span className='text-slate-400 font-bold text-xl'>__Phone</span>: (+88) 01309778619</h1>
                        </div>
                        <div>
                            <h1><span className='text-slate-400 font-bold text-xl'>__Age</span>: 21</h1>
                            <h1><span className='text-slate-400 font-bold text-xl'>__Address</span>: Dhaka, Bangladesh</h1>
                            <h1><span className='text-slate-400 font-bold text-xl'>__Profession</span>: Frontend Web development</h1>
                        </div>
                        
                    </div>
                </div>
                <div className='w-full flex items-center justify-center text-xl leading-6 text-slate-400'>
                    <div>
                        <p>I'm Utsha and I Know Some Interesting Tecnology <span style={{color: '#008bff', fontWeight: 'bold'}}>{text} <Cursor/></span></p>
                        <p>
                            I am a passionate Front End Developer with knowing some famous frameworks. I love working on chanllenging projects with learning something new and writting clean code. I want to retain and enhance my skills by working at an Institute. My keen interest in learning new technology
                        </p>
                    </div>
                </div>
            </div>
            <div className='py-5'>
                <div className='py-5'>
                    <ul className='flex cursor-pointer font-bold text-2xl'>
                        <li className='mr-10 text-blue-500 border-b-2 border-blue-500 ' onClick={() => handleClick(false)}>Main Skills</li>
                        <li className='hover:text-blue-500 hover:border-b-2 hover:border-blue-500' onClick={() => handleClick(true)}>Education</li>
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