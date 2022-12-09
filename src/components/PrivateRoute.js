import React from 'react';
import { Link } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    if (!localStorage.getItem('token')) {
        return <h1 className='text-center font-bold text-3xl my-16 text-red-600'>Please <Link to='/login' className='text-blue-500'>Login</Link> to See Employee Details!!!</h1>
    }

    if (localStorage.getItem('token')) {
        return children
    }

};

export default PrivateRoute;