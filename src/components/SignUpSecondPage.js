import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useAppState from '../hook/useAppState';
import Button from './Button';

const SignUpSecondPage = () => {

    const [state, setState] = useAppState();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            phone: state.phone,
            email: state.email
        }
    })

    const navigate = useNavigate();

    const saveData = data => {
        setState({ ...state, ...data });
        navigate('/signUpFinalPage')
    }


    return (
        <>
            <h1 className='text-2xl font-bold text-center py-10'>Sign Up Form</h1>

            <form onSubmit={handleSubmit(saveData)} className='space-y-12 flex flex-col items-center justify-center'>

                <div className='flex flex-col justify-between items-center w-11/12 space-y-2'>
                    <div>
                        <input type="text" placeholder='+880' disabled className='border-b-2 w-[18%] focus:outline-none text-center' />

                        <input type="text"

                            {
                            ...register("phone", {
                                required: "This field is required",
                                minLength: { value: 10, message: "Phone Number must be 10 Digit" },
                            })
                            }

                            placeholder='1XXXXXXXXX' className='border-b-2 w-[73.66%] ml-5 focus:outline-none' />
                    </div>

                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}

                </div>

                <div className='space-y-2 w-11/12'>
                    <input type="email"
                        {
                        ...register("email", {
                            required: "This field is required",
                        })
                        }

                        placeholder='Write Email Address' className='border-b-2 w-11/12 pl-5 focus:outline-none' />

                    {errors.email && <p className='text-red-500 text-center'>{errors.email.message}</p>}

                </div>


                <div className='flex items-center space-x-10'>
                    <Link to='/home'>
                        <span className='flex items-center space-x-2 text-white bg-green-500 p-3 rounded-lg justify-center'>
                            <p><FaArrowLeft></FaArrowLeft></p>
                            <p>Back</p>
                        </span>
                    </Link>

                    <span>
                        <Button>
                            <input type="submit" value='Next Step' />
                            <p><FaArrowRight></FaArrowRight></p>
                        </Button>
                    </span>

                </div>
            </form>

        </>
    );
};

export default SignUpSecondPage;