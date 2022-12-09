import { useQuery } from '@tanstack/react-query';
import React from 'react';
import logo from '..//assets/logo.png';
import Loading from './Loading';

const AttendanceTable = () => {

    const { data: attendaceData = [], isLoading } = useQuery({
        queryKey: ['test'],
        queryFn: async () => {
            const res = await fetch('https://test.nexisltd.com/test', {
                headers: {
                    authorization: `Barear ${localStorage.getItem('token')}`,
                }
            });
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <img className='w-52' src={logo} alt="company-logo" />
                <h2 className="mb-4 text-2xl font-semibold leading-tight text-white text-center py-2 bg-[#1678CB]">Attendance Information</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-lg">

                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3 text-left">Date</th>
                                <th className="p-3 text-center">Employee Name</th>
                                <th className="p-3 text-right">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(attendaceData).map((tr, i) => <tr key={i} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3 text-left">
                                        <p>11/7/2016</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>Tom Hanks</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>Present</p>

                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AttendanceTable;