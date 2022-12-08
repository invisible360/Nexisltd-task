import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpConfirm = () => {
    const navigate = useNavigate();

    // const state = useAppState();
    // console.log(state[0]);
    
    // useEffect(() => {
        //     navigate(0);
        // }, [navigate])
        //ekhan theke server a pathabo
        // navigate(0) server a pathanor por page refresh kore dibo

    return (
        <div className='text-center my-20'>
            <h1 className='text-xl font-bold text-green-600 mb-10'>Congratulations! You are Successfully Signed Up.</h1>
            <span>Go to <button onClick={() => navigate('/login')} className='text-blue-600 font-semibold underline'>LOGIN PAGE</button></span>
        </div>
    );
};

export default SignUpConfirm;