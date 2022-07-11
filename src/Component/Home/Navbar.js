import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import {GoEyeClosed} from 'react-icons/go';
import {FaBlogger} from 'react-icons/fa';
import {GoHome} from 'react-icons/go';
import {AiOutlineProject} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';

import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const handleBar = (clicked) => {
        // console.log(clicked)
        if(clicked){
            setClicked(false)
        }else{
            setClicked(true)
        }
    }
    // console.log(clicked)
    return (
        <div className='py-5'>
            <nav className='flex justify-between py-5'>
                <div className='textAnimation'>
                    <h1 className='text-4xl font-black'>UtshaPaul.</h1>
                </div>
                <div>
                    <div onClick={() => handleBar(clicked)} className='sm:flex lg:hidden text-3xl pb-5'>{clicked ?<GoThreeBars/> : <GoEyeClosed/>}</div>
                    <div className='sm:flex lg:hidden'></div>
                    <ul className={clicked ? 'navSmallStyle': 'lg:flex lg:justify-around w-96 navMobile'} >
                        <li className='active'><Link to="/"><GoHome/> Home</Link></li>
                        <li><Link to="/about"><CgProfile/> About</Link></li>
                        <li><Link to="/project"><AiOutlineProject/> Project</Link></li>
                        <li><Link to="/blogs"><FaBlogger/> Blogs</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;