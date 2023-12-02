import { Avatar } from '@material-tailwind/react';
import React from 'react';

const BlogDetails = () => {
    return (
        <div>
            <div>
                <div className='flex mr-5'>
                    <Avatar
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                        withBorder={true}
                        className="p-0.5"
                    />
                    <div>
                        <p>Utsha Paul</p>
                        <p>MERN Stack Developer</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;