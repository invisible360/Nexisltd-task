import React from 'react';
import { useForm } from 'react-hook-form';

import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import useAppState from '../hook/useAppState';
import Button from './Button';

const SignUpFirstPage = () => {
    const [state, setState] = useAppState();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            firstName: state.firstName,
            lastName: state.lastName
        }
    })

    const navigate = useNavigate();

    const saveData = data => {
        setState({ ...state, ...data });
        navigate('/signUpSecondPage');
        reset()
    }


    return (

        <>
            <h1 className='text-2xl font-bold text-center py-10'>Sign Up Form</h1>

            <form onSubmit={handleSubmit(saveData)} className='space-y-12 flex flex-col items-center justify-center'>

                <div className='space-y-2 w-11/12'>
                    <input type="text"
                        {
                        ...register("firstName", { required: "This field is required" })
                        }
                        placeholder='Write First Name' className='border-b-2 w-11/12 pl-5 focus:outline-none' />

                    {errors.firstName && <p className='text-red-500 text-center '>{errors.firstName.message}</p>}
                </div>

                <div className='space-y-2 w-11/12'>
                    <input type="text"
                        {
                        ...register("lastName", { required: "This field is required" })
                        }
                        placeholder='Write Last Name' className='border-b-2 w-11/12 pl-5 focus:outline-none' />

                    {errors.lastName && <p className='text-red-500 text-center'>{errors.lastName.message}</p>}
                </div>

                <span>
                    <Button>
                        <input type="submit" value='Next Step' />
                        <p><FaArrowRight></FaArrowRight></p>
                    </Button>
                </span>

            </form>

            <div className='text-center my-8'>
                <p className='inline text-slate-600'>Already have an Account? </p> <Link to='/login' className='text-[#1678CB] font-semibold underline'>LOGIN HERE</Link>
            </div>

        </>


    );
};

export default SignUpFirstPage;