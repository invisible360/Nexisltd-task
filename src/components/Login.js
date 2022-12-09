import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

const Login = () => {
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);//login data

        const login = {
            "email": data.email,
            "password": data.password
        }

        fetch('https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);//token promise
                if (result.access_token) {
                    localStorage.setItem('token', result.access_token);
                    reset();
                    navigate('/employee');
                    // navigate(from, { replace: true });
                }
                else if (result.error) {
                    toast.error('Incorrect Username or Password');
                    reset();

                }
            })
    }

    return (
        <div>
            <h1 className='text-2xl font-bold text-center py-10'>Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-12 flex flex-col items-center justify-center'>

                <div className='space-y-2 w-11/12'>
                    <input type="email"

                        {
                        ...register("email", {
                            required: "Email Must Required for Login"
                        })
                        }
                        placeholder='Write Email Address' className='border-b-2 w-11/12 pl-5 focus:outline-none' />

                    {errors.email && <p className='text-red-500 text-center'>{errors.password.message}</p>}
                </div>

                <div className='space-y-2 w-11/12 mb-20'>
                    <input type="password"

                        {
                        ...register("password", {
                            required: "Password Must Required for Login",
                            minLength: { value: 8, message: 'Your password must be 8 character' }
                        })
                        }
                        placeholder='Write Password' className='border-b-2 w-11/12 pl-5 focus:outline-none' />

                    {errors.password && <p className='text-red-500 text-center'>{errors.password.message}</p>}
                </div>

                <span>
                    <Button>
                        <input type="submit" value='Login' />
                    </Button>
                </span>

            </form>
            <div className='text-center mt-10'>
                <p className='inline text-slate-600'>Don't have an Account? </p> <Link to='/home' className='text-[#1678CB] font-semibold underline'>SIGN UP HERE</Link>
            </div>
        </div>
    );
};

export default Login;