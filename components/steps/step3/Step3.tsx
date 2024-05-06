"use client"
import React, { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon, MapPinIcon,ChevronRightIcon,ChevronLeftIcon } from '@heroicons/react/20/solid';

// Data for demonstration
const data = [
    { date: 'Sunday May 5', slots: ['-', '-'] },
    { date: 'Monday May 6', slots: ['07:00 - 12:00', '12:00 - 17:00'] },
    { date: 'Tuesday May 7', slots: ['07:00 - 12:00', '12:00 - 17:00'] },
    { date: 'Wednesday May 8', slots: ['07:00 - 12:00', '12:00 - 17:00'] },
    { date: 'Thursday May 9', slots: ['07:00 - 12:00', '12:00 - 17:00'] }
];

const Step3: React.FC = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    // Function to move to previous dates
    const handlePrev = () => {
        setVisibleIndex(prev => (prev > 0 ? prev - 1 : 0));
    };

    // Function to move to next dates
    const handleNext = () => {
        setVisibleIndex(prev => (prev < data.length - 3 ? prev + 1 : prev));
    };

    return (
        <div className="max-w-4xl mx-auto mt-6 rounded-xl overflow-hidden">
            <table className="min-w-full bg-[#F7F8FC] rounded-xl shadow">
                <thead>
                    <tr className="text-left text-white font-bold bg-[#005646]">
                        <th className="p-4">
                            <button onClick={handlePrev} disabled={visibleIndex === 0} className="p-1 disabled:opacity-50">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                                </svg> */}
                                <ChevronLeftIcon  className=' w-8 h-8 font-extrabold text-2xl'/>
                            </button>
                        </th>
                        {data.slice(visibleIndex, visibleIndex + 3).map((day, index) => (
                            <th key={index} className="px-4 py-2">{day.date}</th>
                        ))}
                        <th className="p-1">
                            <button onClick={handleNext} disabled={visibleIndex === data.length - 3} className="p-2 disabled:opacity-50">
                                <ChevronRightIcon className=' w-8 h-8 font-extrabold text-2xl' />
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td> {/* Empty cell under the navigation arrow */}
                        {data.slice(visibleIndex, visibleIndex + 3).map((day, index) => (
                            <td key={index} className="px-4 py-2">
                                {day.slots.map((slot, idx) => (
                                    <div key={idx} className="my-3 p-2 bg-white rounded-lg border-[2px] border-white hover:border-[#1C8F97] hover:border-[2px] transition-all">{slot}</div>
                                ))}
                            </td>
                        ))}
                        <td></td> {/* Empty cell under the navigation arrow */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Step3;
