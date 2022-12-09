import React from 'react';
import ppThumb from '../assets/proflepicthumb.png'
import AttendanceRow from './AttendanceRow';

const Employee = ({ details }) => {
    const { name, profile_pic, position, branch, id, username, attendance } = details;
    return (
        <div className="rounded-md shadow-md">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                    <img src={profile_pic ? ppThumb : profile_pic} alt="pic" title='Fethcing Profle Pic is giving 403 status, Thats why showing a thumbnail' className="object-cover object-center w-24 h-24 rounded-full shadow-sm" />
                    <div className="space-y-1 flex flex-col">
                        <h2 className="text-sm font-semibold leading-none">{name}</h2>
                        <p className="inline-block text-xs leading-none ">Position: <span className='italic'>{position}</span></p>
                        <p className="inline-block text-xs leading-none ">Branch: <span className='italic'>{branch}</span></p>
                        <p className="inline-block text-xs leading-none ">ID: <span className='italic'>{id}</span></p>
                        <p className="inline-block text-xs leading-none ">Username: <span className='italic'>{username}</span></p>
                    </div>
                </div>

            </div>

            <div className="p-3">
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">Attendance Details</summary>
                    <div className="px-4 pb-4">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">

                                <thead className="dark:bg-gray-700">
                                    <tr className="text-left">
                                        <th className="p-3 text-left">Date</th>
                                        <th className="p-3 text-right">Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.entries(attendance).map((attendance, i) => <AttendanceRow
                                            key={i}
                                            attendance={attendance}
                                        ></AttendanceRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default Employee;