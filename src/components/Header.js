import React from 'react';
import { Link } from 'react-router-dom';
import logo from '..//assets/logo.png'

const Header = () => {
    return (
        <div>
            <Link to='/'><img className='w-52' src={logo} alt="company-logo" /></Link>
        </div>
    );
};

export default Header;