import React, { useState } from 'react';

const Contact = () => {

    let [nextStep, setNextStep] = useState(0);

    const handleStepNext = () => {
        setNextStep(++nextStep)
    }
    const handleStepPrevious = () => {
        setNextStep(--nextStep)
    }

    console.log("step number: " + nextStep)
    return (
        <div className='pt-20 pb-10'>
            <h1 className='text-4xl font-bold'>Contact</h1>
            <div className='py-40 text-center'>
                {/* { nextStep == 0? <div>
                    <button className='contactBtn mt-5 mr-2'>Get In Touch</button>
                    <span>click Here &#8626;</span>
                </div>:nextStep == 1? <div>
                    <button className='contactBtn mt-5 mr-2'>next 1</button>
                    <span>click Here &#8626;</span>
                </div>: nextStep ==2 ? <div>
                    <button className='contactBtn mt-5 mr-2'>next 2</button>
                    <span>click Here &#8626;</span>
                </div>: <div>Well done</div>} */}
                <div className='text-center'>
                    <h1 className='text-6xl font-bold'>Hello !</h1>
                    <button className='contactBtn mt-5 mr-2'>Get In Touch</button>
                    <span>click Here &#8626;</span>
                    <p className='pt-2'>&#128337;Takes 1 minute</p>
                </div>
            </div>
            <div className='text-right'>
                <button className='contactBtn mr-2' onClick={() => handleStepNext()}>next</button>
                <button className='contactBtn' onClick={() => handleStepPrevious()}>previus</button>
            </div>
        </div>
    );
};

export default Contact;

// https://www.typeform.com/templates/t/online-contact-us/?_gl=1*1vjv398*_up*MQ..&gclid=CjwKCAjw0dKXBhBPEiwA2bmObbBxrzN21vDm0CdRRjbpKIFKoJgfqnPhHznB4_88SoPyoNbGXHZEBxoClXMQAvD_BwE&gclsrc=aw.ds