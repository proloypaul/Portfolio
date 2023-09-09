import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Skill = () => {
    return (
        <div className='py-10'>
            <nav className='sm:grid sm:gap-2 sm:grid-cols-2 lg:flex lg:justify-center lg:items-center font-bold text-xl skillNavMobile'>
                <NavLink to='/about/webSkill' className='px-5 py-2  text-white rounded-t-lg border-r-2 border-l-2 border-b-2 hover:bg-slate-400 shadow-md shadow-slate-400' activeClassName="active">Experties</NavLink>
                <NavLink to='/about/programmingSkill' className='px-5 py-2  text-white rounded-t-lg border-r-2 border-l-2 border-b-2 hover:bg-slate-400 shadow-md shadow-slate-400' activeClassName="active">Comportable</NavLink>
                <NavLink to='/about/other' className='px-5 py-2  text-white rounded-t-lg border-r-2 border-l-2 border-b-2 hover:bg-slate-400 shadow-md shadow-slate-400' activeClassName="active">Familier</NavLink>
                <NavLink to='/about/tools' className='px-5 py-2  text-white rounded-t-lg border-r-2 border-l-2 border-b-2 hover:bg-slate-400 shadow-md shadow-slate-400' activeClassName="active">Tools</NavLink>
            </nav>
            <Outlet/>
            
        </div>
    );
};

export default Skill;