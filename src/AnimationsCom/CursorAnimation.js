import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const CursorAnimation = () => {
    return (
        <div>
            <AnimatedCursor
            innerSize={10}
            outerSize={10}
            color='255,255,255'
            outerAlpha={0.2}
            innerScale={0.9}
            outerScale={5}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
            />
        </div>
    );
};

export default CursorAnimation;