import React, { useState } from 'react';

const Contact = () => {
    const [contactData, setContactData] = useState({});
    let [nextStep, setNextStep] = useState(0);

    const handleStepNext = () => {
        setNextStep(++nextStep)
    }
    const handleStepPrevious = () => {
        setNextStep(--nextStep)
    }

    const  handleSuccessMsg = () => {
        setNextStep(6)
    }

    // collect data from user
    const collectContactData = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const allContactData = {...contactData};
        allContactData[field] = value;
        setContactData(allContactData); 

    }

    // console.log("step number: " + nextStep)
    return (
        <div className='pb-10'>
            <div className='pt-20 pb-20 contactContent'>
                { nextStep === 0? <div className='text-center'>
                    <h1 className='text-6xl font-bold'>Hello !</h1>
                    <button className='contactBtn mt-5 mr-2' onClick={() => handleStepNext()}>Get In Touch</button>
                    <span>click Here <span className='text-blue-400'>&#8626;</span></span>
                    <p className='pt-2'>&#128337;Takes 1 minute</p>
                </div>:nextStep === 1? <div className='text-center'>
                    <div className='text-2xl'>{nextStep}<span className='text-blue-400 pt-4'>&rarr;</span> Thanks for reaching out. What's your name ?</div>
                    <div className='py-2'>
                        <input className='inputStyle' placeholder='Enter Your Name' type="text" name='name' onBlur={collectContactData} required/>
                    </div>
                    {contactData.name? <div>
                        <button className='contactBtn mt-5 mr-2'onClick={() => handleStepNext()}>Ok</button>
                        <span>click Okay <span className='text-blue-400'>&#8626;</span></span>
                    </div>: ''}
                    
                </div>: nextStep === 2 ? <div className='text-center'>
                    <div className='text-2xl'>{nextStep}<span className='text-blue-400 pt-4'>&rarr;</span> Give us your email.</div>
                    <div className='py-2'>
                        <input className='inputStyle' placeholder='abc@gamil.com' type="email" name='email' onBlur={collectContactData} required/>
                    </div>
                    {
                        contactData.email? <div>
                        <button className='contactBtn mt-5 mr-2'onClick={() => handleStepNext()}>Ok</button>
                        <span>click Okay <span className='text-blue-400'>&#8626;</span></span>
                    </div>: ''
                    }
                </div>: nextStep === 3? <div className='text-center'>
                    <div className='text-2xl'>{nextStep}<span className='text-blue-400 pt-4'>&rarr; </span>Enter your phone number</div>
                    <div className='py-2'>
                        <input className='inputStyle' placeholder='Enter Number' type="number" name='number' onBlur={collectContactData} required/>
                    </div>
                    {
                        contactData.number? <div>
                        <button className='contactBtn mt-5 mr-2' onClick={() => handleSuccessMsg()} type="submit">Submit</button>
                        <span>click Submit <span className='text-blue-400'>&#8626;</span></span>
                    </div>: '' 
                    }
                    
                </div>: nextStep === 6? <div className='text-center'>
                    <h1 className='text-3xl'>well done! Successfully submited</h1>
                    <p className='py-2 text-2xl font-bold'>Contact With Me</p>
                    <p className='animate-bounce mt-5'><span className='bg-blue-500 font-bold p-2 border-0 rounded-full text-xl'>&darr;</span></p>
                </div>: 0 > nextStep ? setNextStep(0) : setNextStep(0)}
                
            </div>
            <div className='text-right'>
                <button className='contactBtn mr-2' onClick={() => handleStepNext()}>Next &#8827;</button>
                <button className='contactBtn' onClick={() => handleStepPrevious()}>&#8826; Previus</button>
            </div>
        </div>
    );
};

export default Contact;

// https://www.typeform.com/templates/t/online-contact-us/?_gl=1*1vjv398*_up*MQ..&gclid=CjwKCAjw0dKXBhBPEiwA2bmObbBxrzN21vDm0CdRRjbpKIFKoJgfqnPhHznB4_88SoPyoNbGXHZEBxoClXMQAvD_BwE&gclsrc=aw.ds