import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Skill = () => {
    return (
        <div className='py-10'>
            <nav className='sm:grid sm:gap-2 sm:grid-cols-2 lg:flex lg:justify-center lg:items-center font-bold text-xl skillNavMobile'>
                <Link to='/about/webSkill' className='px-5 py-2 bg-white text-black border-0 rounded-full hover:bg-slate-400'>Experties</Link>
                <Link to='/about/programmingSkill' className='px-5 py-2 bg-white text-black border-0 rounded-full hover:bg-slate-400'>Comportable</Link>
                <Link to='/about/programmingSkill' className='px-5 py-2 bg-white text-black border-0 rounded-full hover:bg-slate-400'>Familier</Link>
                <Link to='/about/programmingSkill' className='px-5 py-2 bg-white text-black border-0 rounded-full hover:bg-slate-400'>Tools</Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Skill;