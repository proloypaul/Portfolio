import React, { useEffect, useState } from 'react';
// import blogJson from '../../../public/blogData.json'
import { IoIosOpen } from 'react-icons/io';

const Blogs = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        console.log("in side effect")
        // const url = `./blogData.json`
        fetch("./blogData.json")
            .then(res => res.json())
            .then(data => setBlogData(data))
    
    }, [])
    
    return (
        <div className='text-xl py-10'>
            {/* <h1 className='text-4xl'>Blogs Comming Soon.....</h1> */}

            <div>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                    {blogData?.map(blog => 
                        <div key={blog.id} className='bg-blue-400 border-0 rounded-tl-lg rounded-br-lg cursor-pointer'>
                            <div className='py-5 px-5 border-0 rounded-tl-full rounded-br-full bg-black text-white my-10 w-full cursor-pointer'>
                                <div className=''>
                                    {/* <img src={blog.img} alt='Empty!' className='border-0 rounded-lg w-full h-64'/> */}
                                    {/* <div className='flex px-5'>
                                        <p>icon1</p>
                                        <p>icon2</p>
                                        <p>icon3</p>
                                        <p>icon4</p>
                                    </div> */}
                                </div>
                                <div className='text-left lg:ml-5 py-5'>
                                    <h1 className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffddca] to-[#08AEEA] text-5xl font-serif text-white pb-5' >{blog.title}</h1>
                                    <p className='font-serif text-salt-400'>{blog.articale.slice(0, 400)}...</p>
                                </div>
                                <div className='font-serif flex items-center justify-between' style={{color: "#008bff"}}>
                                    <p className=''>{blog.topic[0]}</p>
                                    <p className='border-r-4 border-l-4 border-white px-3'>{blog.topic[1]}</p>
                                    <p className=''>{blog.topic[2]}</p>
                                    <a href={blog.visit} target='_blank' rel='noreferrer' className='transition ease-in-out delay-150 px-5 py-2  text-white rounded-t-lg border-r-2 border-l-2 border-t-2 hover:bg-gray-400 shadow-md shadow-gray-400 flex justify-center items-center ml-2 font-bold text-xl duration-300'> Read<IoIosOpen/></a>
                                </div>
                            </div>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;