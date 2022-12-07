import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Login = () => {


    return (
        <div>
            <h1 className='text-2xl font-bold text-center py-10'>Login Form</h1>
            <form className='space-y-12 flex flex-col items-center justify-center'>


                <input type="email" placeholder='Write Email Address' className='border-b-2 w-11/12 pl-5 focus:outline-none' />
                <input type="password" placeholder='Write Password' className='border-b-2 w-11/12 pl-5 mb-20 focus:outline-none' />

                <span>
                    <Button>
                        <input type="submit" value='Login' />
                    </Button>
                </span>

                <div className='text-center'>
                    <p className='inline text-slate-600'>Don't have an Account? </p> <Link to='/home' className='text-[#1678CB] font-semibold underline'>SIGN UP HERE</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;