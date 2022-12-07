import React from 'react';

import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from './Button';

const SignUp = () => {



    return (
        <div className='shadow-lg py-8 md:py-32'>

            <h1 className='text-2xl font-bold text-center'>Sign Up Form</h1>
            <form className='space-y-12 my-16 flex flex-col items-center justify-center'>

                <input type="text" placeholder='Write First Name' className='border-b-2 w-11/12 pl-5 focus:outline-none' />
                <input type="text" placeholder='Write Last Name' className='border-b-2 w-11/12 pl-5 focus:outline-none' />

                <Link>
                    <Button>
                        <p>Next Step</p>
                        <p><FaArrowRight></FaArrowRight></p>
                    </Button>
                </Link>

            </form>

            <div className='text-center'>
                <p className='inline text-slate-600'>Already have an Account? </p> <Link className='text-[#1678CB] font-semibold underline'>LOGIN HERE</Link>
            </div>


        </div>
    );
};

export default SignUp;