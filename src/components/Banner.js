import React from 'react';
import banner from '../assets/banner.png'
const Banner = () => {
    return (
        <div>
            <img className='w-[90%]' src={banner} alt="Banner" />
        </div>
    );
};

export default Banner;