import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useAppState from '../hook/useAppState';
import Button from './Button';

const SignUpFinalPage = () => {

    const [state, setState] = useAppState();

    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate();

    const saveData = data => {
        setState({ ...state, ...data });
        // console.info(state);

        const user =
        {
            "first_name": state.firstName,
            "last_Name": state.lastName,
            "phone_number": state.phone,
            "email": state.email,
            "password": data.password
        }

        console.log(user);


        fetch('https://test.nexisltd.com/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.sucess) {
                    toast.success('User added Successfuly');
                    navigate('/signUpConfirm');
                    navigate(0);
                }
            })
    }

    return (
        <>
            <h1 className='text-2xl font-bold text-center py-10'>Sign Up Form</h1>

            <form onSubmit={handleSubmit(saveData)} className='space-y-12 flex flex-col items-center justify-center'>

                <div className='space-y-2 w-11/12'>
                    <input type="password"
                        {
                        ...register("password", {
                            required: "This field is required",
                            minLength: { value: 8, message: 'Your password must be 8 character' }
                        })
                        }

                        placeholder='Write Password' className='border-b-2 w-11/12 pl-5 focus:outline-none' />

                    {errors.password && <p className='text-red-500 text-center'>{errors.password.message}</p>}
                </div>

                <div className='flex items-center space-x-10'>
                    <Link to='/signUpSecondPage'>
                        <span className='flex items-center space-x-2 text-white bg-green-500 p-3 rounded-lg justify-center'>
                            <p><FaArrowLeft></FaArrowLeft></p>
                            <p>Back</p>
                        </span>
                    </Link>

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