import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import Header from '../components/Header';

const SignUpLayout = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-5 mt-10'>
            <div className='md:col-span-8'>
                <Header></Header>
                <Banner></Banner>
            </div>
            <div className='md:col-span-4'>

                <div className='shadow-lg h-full pb-5 md:pt-20'>

                    

                        <Outlet></Outlet>


                </div>

            </div>

        </div>
    );
};

export default SignUpLayout;