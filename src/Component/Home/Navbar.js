import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import {AiOutlineClose} from 'react-icons/ai';
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
                <div>
                    <h1 className='text-3xl font-bold'>UtshaPaul</h1>
                </div>
                <div>
                    <div onClick={() => handleBar(clicked)} className='sm:flex lg:hidden text-3xl pb-5'>{clicked ?<GoThreeBars/> : <AiOutlineClose/>}</div>
                    <div className='sm:flex lg:hidden'></div>
                    <ul className={clicked ? 'navSmallStyle': 'lg:flex lg:justify-around w-96 navMobile'} >
                        <li className='active'><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>

            <div>
                <p>WelCome To My World</p>

            </div>
        </div>
    );
};

export default Navbar;