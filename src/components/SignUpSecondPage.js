import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from './Button';

const SignUpSecondPage = () => {
    return (
        <>

            <h1 className='text-2xl font-bold text-center py-10'>Sign Up Form</h1>
            <form className='space-y-12 flex flex-col items-center justify-center'>


                <div className='flex justify-between items-center w-11/12'>
                    <input type="text" placeholder='+880' className='border-b-2 w-[18%] pl-2 focus:outline-none' />
                    <input type="text" placeholder='1XXXXXXXXX' className='border-b-2 w-[73.66%] pl-5 focus:outline-none' />
                </div>
                <input type="email" placeholder='Write Email Address' className='border-b-2 w-11/12 pl-5 focus:outline-none' />

                <div className='flex items-center space-x-10'>
                    <Link to='/'>
                        <button className='flex items-center space-x-2 text-white bg-green-500 p-3 rounded-lg justify-center'>
                            <p><FaArrowLeft></FaArrowLeft></p>
                            <p>Back</p>
                        </button>
                    </Link>

                    <Link to='/signUpFinalPage'>
                        <Button>
                            <p>Next Step</p>
                            <p><FaArrowRight></FaArrowRight></p>
                        </Button>
                    </Link>
                </div>

            </form>

        </>
    );
};

export default SignUpSecondPage;