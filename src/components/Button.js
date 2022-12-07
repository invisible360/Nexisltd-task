import React from 'react';

const Button = ({children}) => {
    return (
        <div className='bg-[#1678CB] text-white text-xl flex items-center space-x-2 hover:-mb-1 font-semibold px-8 py-4 rounded-xl hover:bg-transparent hover:text-[#1678CB] hover:border-[#1678CB] hover:border-2 drop-shadow-lg'>
            {children}
            
        </div>
    );
};

export default Button;