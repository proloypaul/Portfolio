
import React from 'react';
import {IoIosOpen} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';
import {AiFillDownCircle} from 'react-icons/ai';
import belly_foodImg from '../../images/belly-foodPic.png'
import e_smartImg from '../../images/e-smartPic.png'
import cowHutImg from '../../images/cowHutPic.png'
import imageGellaryPic from '../../images/image-galleryPic.png'
import bikeHouseImg from '../../images/bikerHousePic.png'
import nikeShowImg from '../../images/nikeShowPic.png'
import { Carousel } from '@material-tailwind/react';
import { ProjectDescription } from './ProjectDescription';

// const projectApi = [
//     {
//         img: "",
//         name: "belly_food",
//         technology: ["React", "Node", "Material-Tailwind", "MongoDB", "Redux"],
//         links: ["https://belly-food-client.vercel.app/", "https://github.com/proloypaul/belly-food-client", "https://github.com/proloypaul/belly-food-server"],
//         description: ["Users will be able to visit the website through login and register", "Users can purchase our delicious foods submit some data and delete their purchase order. Users also can give their reviews about the product", "Admin can manage all orders, add other products, manage products, and make an admin. login Email: admin1234@gmail.com, Password: admin1234@"]
//     }
// ]
const projectDescriptionData = [
    {
        title: "belly_food",
        description: ["Users will be able to visit the website through login and register", "Users can purchase our delicious foods submit some data and delete their purchase order. Users also can give their reviews about the product", "Admin can manage all orders, add other products, manage products, and make an admin. login Email: admin1234@gmail.com, Password: admin1234@"],
        technology: ["React", "Node"]
    }
]

const Project = () => {

    const [open, setOpen] = React.useState(false);
    const [projectExplain, setProjectExplain] = React.useState('')

    const handleOpen = (project) => {
        setOpen(!open)
        if(project === "projectOne"){
            setProjectExplain("projectOne")
        }
    };


    return (
        <div className='pt-20 pb-10'>
            <h1 data-aos="fade-up-left" className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffddca] to-[#08AEEA]'>Project</h1>
            <div data-aos="fade-up-right" className='text-xl text-center text-gray-500 pt-10 pb-5 font-serif'>
                <p><span className='text-white font-bold'>Welcome,</span> introducing to my project</p>
                <p>Here is my personal project</p>
                <p> made by own idea!</p>
                <p>FrontEnd and BackEnd</p>
                <p>click <span className='text-blue-500 font-bold underline'>Details</span></p>
            </div>
            <Carousel
                className="rounded-xl"
                // autoplay={true}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                    <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                    />
                ))}
                </div>
            )}
            >
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10 projectBoxs'>
                    <div data-aos="flip-right" className='transition ease-in-out delay-150 py-3.5 px-5 bg-black-900 text-gray-400 font-serif border-0 rounded-lg hover:shadow-lg hover:shadow-pink-400 duration-300' >
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-3xl'>belly_food</h1>
                            <span className='text-2xl text-blue-600 cursor-pointer'onClick={() => handleOpen("projectOne")}><IoIosOpen/></span>
                        </div>
                        {/* <a href='https://belly-food-client.vercel.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline cursor-pointer' style={{backgroundColor: '#008bff'}}>Live<span className='animate-bounce'><IoIosOpen/></span></a> */}
                        <div className='flex items-center justify-center my-10'>
                            <img src={belly_foodImg} alt='Empty!' width="400px" className='border-0 rounded-lg'/>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <div className='pl-5 hover:text-white'>
                                <li className='list-disc'>React</li>
                                <li className='list-disc'>Node</li>
                                <li className='list-disc'>Redux</li>
                                <li className='list-disc'>Material-Tailwind</li>
                                <li className='list-disc'>MongoDB</li>
                            </div>
                            <div className='py-5 flex justify-center'>
                                <a href='https://belly-food-client.vercel.app/' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Live <IoIosOpen/></a>
                                <a href='https://github.com/proloypaul/belly-food-server' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Server <BsGithub/></a>
                                <a href='https://github.com/proloypaul/belly-food-client' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='py-3.5 px-5 text-gray-400 border-0 rounded-lg hover:shadow-lg hover:shadow-pink-400 font-serif' >
                        <h1 className='font-bold text-3xl'>E-smart</h1>
                        {/* <a href='https://e-smarts.web.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline' style={{backgroundColor: '#008bff'}}>Live <span className='animate-bounce'><IoIosOpen/></span></a> */}
                        <div className='flex items-center justify-center my-10'>
                            <img src={e_smartImg} alt='Empty!' width="400px" className='border-0 rounded-lg'/>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <div className='pl-5 hover:text-white'>
                                <li className='list-disc'>React</li>
                                <li className='list-disc'>Bootstrap</li>
                                <li className='list-disc'>Node</li>
                                <li className='list-disc'>Express</li>
                                <li className='list-disc'>MongoDB</li>
                            </div>
                            <div className='py-5 flex justify-center'>
                                <a href='https://e-smarts.web.app/' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Live <IoIosOpen/></a>
                                <a href='https://github.com/Minhajul-Shobuj/e-smart-server' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Server <BsGithub/></a>
                                <a href='https://github.com/Naim-Ahmed-Mamun/e-smarts' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" className='py-3.5 px-5 text-gray-400 border-0 rounded-lg hover:shadow-lg hover:shadow-pink-400 font-serif' >
                        <h1 className='font-bold text-3xl'>Cow Hut(Backend)</h1>
                        {/* <a href='https://l2a3-cow-hut-backend-assignment-proloypaul.vercel.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline' style={{backgroundColor: '#008bff'}}>Server Live <span className='animate-bounce'><IoIosOpen/></span></a> */}
                        <div className='flex items-center justify-center my-10'>
                            <img src={cowHutImg} alt='Empty!' width="400px" className='border-0 rounded-lg'/>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <div className='pl-5 hover:text-white'>
                                <li className='list-disc'>Typscript</li>
                                <li className='list-disc'>Mongoose</li>
                                <li className='list-disc'>Node</li>
                                <li className='list-disc'>MongoDB</li>
                            </div>
                            <div className='py-5 flex justify-center'>
                                <a href='https://l2a3-cow-hut-backend-assignment-proloypaul.vercel.app/' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Live <IoIosOpen/></a>
                                <a href='https://github.com/proloypaul/Cow-hut-serverSite' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Server <BsGithub/></a>
                                <a href='https://github.com/proloypaul/Cow-hut-serverSite' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10 projectBoxs'>
                    <div data-aos="flip-right" className='transition ease-in-out delay-150 py-3.5 px-5 bg-black-900 text-gray-400 font-serif border-0 rounded-lg hover:shadow-lg hover:shadow-pink-400 duration-300' >
                        <h1 className='font-bold text-3xl'>Images Gallery</h1>
                        {/* <a href='https://belly-food-client.vercel.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline cursor-pointer' style={{backgroundColor: '#008bff'}}>Live<span className='animate-bounce'><IoIosOpen/></span></a> */}
                        <div className='flex items-center justify-center my-10'>
                            <img src={imageGellaryPic} alt='Empty!' width="400px" className='border-0 rounded-lg'/>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <div className='pl-5 hover:text-white'>
                                <li className='list-disc'>React</li>
                                <li className='list-disc'>Javascript(ES6)</li>
                                <li className='list-disc'>React Drag and Drop</li>
                                <li className='list-disc'>Html and Css</li>
                                <li className='list-disc'>Responsiveness(all Device)</li>
                            </div>
                            <div className='py-5 flex justify-center'>
                                <a href='https://image-gallary-task-utshapaul.vercel.app/' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Live <IoIosOpen/></a>
                                <a href='https://github.com/proloypaul/React-js-developer-task' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='py-3.5 px-5 text-gray-400 border-0 rounded-lg hover:shadow-lg hover:shadow-pink-400 font-serif' >
                        <h1 className='font-bold text-3xl'>biker-house</h1>
                        {/* <a href='https://e-smarts.web.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline' style={{backgroundColor: '#008bff'}}>Live <span className='animate-bounce'><IoIosOpen/></span></a> */}
                        <div className='flex items-center justify-center my-10'>
                            <img src={bikeHouseImg} alt='Empty!' width="400px" className='border-0 rounded-lg'/>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <div className='pl-5 hover:text-white'>
                                <li className='list-disc'>Html</li>
                                <li className='list-disc'>Css</li>
                                <li className='list-disc'>Bootstrap</li>
                                <li className='list-disc'>Reponsiveness(all Device)</li>
                            </div>
                            <div className='py-5 flex justify-center'>
                                <a href='https://biker-house.vercel.app/' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Live <IoIosOpen/></a>
                                <a href='https://github.com/Naim-Ahmed-Mamun/e-smartshttps://github.com/proloypaul/biker-House' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" className='py-3.5 px-5 text-gray-400 border-0 rounded-lg hover:shadow-lg hover:shadow-pink-400 font-serif' >
                        <h1 className='font-bold text-3xl'>Nike Show</h1>
                        {/* <a href='https://l2a3-cow-hut-backend-assignment-proloypaul.vercel.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline' style={{backgroundColor: '#008bff'}}>Server Live <span className='animate-bounce'><IoIosOpen/></span></a> */}
                        <div className='flex items-center justify-center my-10'>
                            <img src={nikeShowImg} alt='Empty!' width="400px" className='border-0 rounded-lg'/>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <div className='pl-5 hover:text-white'>
                                <li className='list-disc'>Html5</li>
                                <li className='list-disc'>Css3</li>
                                <li className='list-disc'>Bootstrap</li>
                                <li className='list-disc'>Responsiveness(all Device)</li>
                            </div>
                            <div className='py-5 flex justify-center'>
                                <a href='https://nike-show.vercel.app/' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Live <IoIosOpen/></a>
                                <a href='https://github.com/proloypaul/nike-show' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10 projectBoxs'>
                    <div data-aos="flip-right" className='transition ease-in-out delay-150 py-3.5 px-5 bg-black-900 text-gray-400 font-serif border-0 rounded-lg hover:shadow-lg hover:shadow-pink-400 duration-300' >
                        <h1 className='font-bold text-3xl'>belly_food</h1>
                        {/* <a href='https://belly-food-client.vercel.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline cursor-pointer' style={{backgroundColor: '#008bff'}}>Live<span className='animate-bounce'><IoIosOpen/></span></a> */}
                        <div className='flex items-center justify-center my-10'>
                            <img src={belly_foodImg} alt='Empty!' width="400px" className='border-0 rounded-lg'/>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <div className='pl-5 hover:text-white'>
                                <li className='list-disc'>React</li>
                                <li className='list-disc'>Node</li>
                                <li className='list-disc'>Redux</li>
                                <li className='list-disc'>Material-Tailwind</li>
                                <li className='list-disc'>MongoDB</li>
                            </div>
                            <div className='py-5 flex justify-center'>
                                <a href='https://belly-food-client.vercel.app/' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Live <IoIosOpen/></a>
                                <a href='https://github.com/proloypaul/belly-food-server' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Server <BsGithub/></a>
                                <a href='https://github.com/proloypaul/belly-food-client' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='py-3.5 px-5 text-gray-400 border-0 rounded-lg hover:shadow-lg hover:shadow-pink-400 font-serif' >
                        <h1 className='font-bold text-3xl'>E-smart</h1>
                        {/* <a href='https://e-smarts.web.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline' style={{backgroundColor: '#008bff'}}>Live <span className='animate-bounce'><IoIosOpen/></span></a> */}
                        <div className='flex items-center justify-center my-10'>
                            <img src={e_smartImg} alt='Empty!' width="400px" className='border-0 rounded-lg'/>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <div className='pl-5 hover:text-white'>
                                <li className='list-disc'>React</li>
                                <li className='list-disc'>Bootstrap</li>
                                <li className='list-disc'>Node</li>
                                <li className='list-disc'>Express</li>
                                <li className='list-disc'>MongoDB</li>
                            </div>
                            <div className='py-5 flex justify-center'>
                                <a href='https://e-smarts.web.app/' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Live <IoIosOpen/></a>
                                <a href='https://github.com/Minhajul-Shobuj/e-smart-server' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Server <BsGithub/></a>
                                <a href='https://github.com/Naim-Ahmed-Mamun/e-smarts' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" className='py-3.5 px-5 text-gray-400 border-0 rounded-lg hover:shadow-lg hover:shadow-pink-400 font-serif' >
                        <h1 className='font-bold text-3xl'>Cow Hut(Backend)</h1>
                        {/* <a href='https://l2a3-cow-hut-backend-assignment-proloypaul.vercel.app/' target='_blank' rel='noreferrer' className='my-10 py-5 mx-16 border-0 rounded-md text-white font-bold text-xl flex justify-center items-center text-slate-400 cursor-pointer hover:underline' style={{backgroundColor: '#008bff'}}>Server Live <span className='animate-bounce'><IoIosOpen/></span></a> */}
                        <div className='flex items-center justify-center my-10'>
                            <img src={cowHutImg} alt='Empty!' width="400px" className='border-0 rounded-lg'/>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Used Technology</h1>
                            <div className='pl-5 hover:text-white'>
                                <li className='list-disc'>Typscript</li>
                                <li className='list-disc'>Mongoose</li>
                                <li className='list-disc'>Node</li>
                                <li className='list-disc'>MongoDB</li>
                            </div>
                            <div className='py-5 flex justify-center'>
                                <a href='https://l2a3-cow-hut-backend-assignment-proloypaul.vercel.app/' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Live <IoIosOpen/></a>
                                <a href='https://github.com/proloypaul/Cow-hut-serverSite' target='_blank' rel='noreferrer' className='commonBtnTwo flex items-center mr-2'>Server <BsGithub/></a>
                                <a href='https://github.com/proloypaul/Cow-hut-serverSite' target='_blank' rel='noreferrer' className='commonBtnTwo'><BsGithub/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
            
            <div className='pt-10'>
                <h1 className='text-xl font-bold flex justify-center items-center cursor-pointer animate-bounce mt-5'><span className='text-2xl text-blue-500'><AiFillDownCircle/></span> See more</h1>
            </div>
            {projectExplain === "projectOne"? <ProjectDescription open={open} handleOpen={handleOpen}  projectData={projectDescriptionData[0]}/>: ''}
        </div>
    );
};

export default Project;