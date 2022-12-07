import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from './Button';

const SignUpFinalPage = () => {
    return (
        <>

            <h1 className='text-2xl font-bold text-center py-10'>Sign Up Form</h1>
            <form className='space-y-12 flex flex-col items-center justify-center'>


                <input type="password" placeholder='Write Password' className='border-b-2 w-11/12 pl-5 mb-20 focus:outline-none' />

                <div className='flex items-center space-x-10'>

                    {/* Your password must be 8 character */}
                    <Link to='/signUpSecondPage'>
                        <button className='flex items-center space-x-2 text-white bg-green-500 p-3 rounded-lg justify-center'>
                            <p><FaArrowLeft></FaArrowLeft></p>
                            <p>Back</p>
                        </button>
                    </Link>


                    {/* <Button>
                        <input type="Submit" value='Sign Up' />
                    </Button> */}

                    <span>
                        <Button>
                            <input type="submit" value='Sign Up' />
                        </Button>
                    </span>

                </div>

            </form>

        </>
    );
};

export default SignUpFinalPage;