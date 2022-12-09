import React from 'react';

const AttendanceRow = ({ attendance }) => {

    return (
        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
            <td className="p-3 text-left">
                <p>{attendance[0]}</p>
            </td>
            <td className="p-3 text-right">
                <p>{attendance[1].status}</p>
            </td>
        </tr>
    );
};

export default AttendanceRow;