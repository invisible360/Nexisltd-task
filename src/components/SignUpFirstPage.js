import React from 'react';

import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from './Button';

const SignUpFirstPage = () => {



    return (


        <>
            <h1 className='text-2xl font-bold text-center py-10'>Sign Up Form</h1>
            <form className='space-y-12 flex flex-col items-center justify-center'>


                <input type="text" placeholder='Write First Name' className='border-b-2 w-11/12 pl-5 focus:outline-none' />
                <input type="text" placeholder='Write Last Name' className='border-b-2 w-11/12 pl-5 focus:outline-none' />

                <Link to='/signUpSecondPage'>
                    <Button>
                        <p>Next Step</p>
                        <p><FaArrowRight></FaArrowRight></p>
                    </Button>
                </Link>

                <div className='text-center'>
                    <p className='inline text-slate-600'>Already have an Account? </p> <Link to='/login' className='text-[#1678CB] font-semibold underline'>LOGIN HERE</Link>
                </div>
            </form>
        </>


    );
};

export default SignUpFirstPage;