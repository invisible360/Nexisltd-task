import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '..//assets/logo.png';
import Employee from './Employee';
import Loading from './Loading';

const EmployeeDeatils = () => {

    const { data: attendaceData = [], isLoading } = useQuery({
        queryKey: ['test'],
        queryFn: async () => {
            const res = await fetch('https://test.nexisltd.com/test', {
                headers: {
                    authorization: `Barear ${localStorage.getItem('token')}`,
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <Link to='/'><img className='w-52' src={logo} alt="company-logo" /></Link>
            <div className="container p-2 mx-auto lg:w-1/2 sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight text-white text-center py-2 bg-[#1678CB]">Employee Information</h2>

                <div className='grid grid-cols-1 gap-5'>
                    {
                        Object.values(attendaceData).map((details, i) => <Employee
                            key={i}
                            details={details}
                        ></Employee>)
                    }
                </div>
            </div>

        </div>
    );
};

export default EmployeeDeatils;