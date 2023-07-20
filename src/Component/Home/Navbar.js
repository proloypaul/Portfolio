import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import {FaBlogger} from 'react-icons/fa';
import {GoHome} from 'react-icons/go';
import {AiFillCloseCircle, AiOutlineProject} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {NavLink} from 'react-router-dom';
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
        <div>
            <nav className='flex justify-between items-center py-5'>
                <div className='textAnimation flex justify-center items-center'>
                    <h1 className='text-4xl font-black'>Utsha.dev</h1>
                </div>
                <div>
                    <div onClick={() => handleBar(clicked)} className='sm:flex lg:hidden text-3xl '>{clicked ?<GoThreeBars/> : <AiFillCloseCircle/>}</div>
                    <div className='sm:flex lg:hidden'></div>
                    <ul className={clicked ? 'navSmallStyle': 'lg:flex lg:justify-around w-96 navMobile'} >
                        <li><NavLink to="/" activeclassName='active'><GoHome/>Home </NavLink></li>
                        <li><NavLink to="/about" activeclassName='active'><CgProfile/>About</NavLink></li>
                        <li><NavLink to="/project" activeclassName='active'><AiOutlineProject/>Project</NavLink></li>
                        <li><NavLink to="/blogs" activeclassName='active'><FaBlogger/>Blogs</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;