import React from 'react';
import logo from '..//assets/logo.png'

const Header = () => {
    return (
        <div>
            <img className='w-52' src={logo} alt="company-logo" />
        </div>
    );
};

export default Header;