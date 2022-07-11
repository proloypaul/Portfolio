import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Skill = () => {
    return (
        <div className='py-10'>
            <nav className='grid gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:w-2/3 text-center'>
                <Link to='/about/webSkill' className='commonBtnOne'>Web</Link>
                <Link to='/about/programmingSkill' className='px-3 commonBtnOne text-center'>Programming</Link>
                <Link to='/about/programmingSkill' className='commonBtnOne'>other</Link>
                <Link to='/about/programmingSkill' className='px-3 commonBtnOne'>Tools</Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Skill;