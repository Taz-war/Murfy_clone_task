import React from 'react'
import { CheckCircleIcon, ChevronDoubleRightIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

const SubStep2: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 mt-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-[#005646] mb-5">A simple & effective package</h2>

            <ul className="mb-6 space-y-2  border-b border-gray-300">
                {[
                    "Travel & labor included",
                    "6 month warranty",
                    "Spare parts on quote"
                ].map(item => (
                    <li key={item} className="flex items-center text-gray-700">
                        <div className='relative flex items-center justify-center m-6'>
                            <div className='absolute w-6 h-6 rounded-full bg-[#005646] flex items-center justify-center'>
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-between max-w-lg mx-auto p-6">
                <div className="text-gray-700 text-center">
                    <p className="text-lg">Package without bonus</p>
                    <p className="text-3xl font-bold">€ 110</p>
                </div>

                <ChevronDoubleRightIcon className="w-10 h-10 text-blue-500 mx-4" /> {/* Arrow icon with styling */}

                <div className="text-blue-500 text-center">
                    <p className="text-lg">Package with bonus</p>
                    <p className="text-3xl font-bold">€ 60</p>
                </div>
            </div>

           

            <div className="bg-[#E7F9FE] p-4  items-center justify-between rounded-lg shadow">
                <div className="flex items-center w-full">
                    {/* Replace "Logo.svg" with your actual logo path */}
                    <img src="/path/to/logo.svg" alt="Logo" className="h-6 mr-3" />
                    <span className="text-blue-900 font-bold text-lg">
                        <span className=' text-[#00A5D2]'>Repair bonus applied automatically </span> if your device is repaired
                    </span>
                </div>
                <a href="#repair-bonus" className="flex items-center text-[#1A8E96] hover:text-[#38b9c2] mt-6 cursor-pointer">
                    <InformationCircleIcon className="w-6 h-6 mr-2 bg-inherit text-inherit " /> {/* Heroicon for info */}
                    What is the repair bonus?
                </a>
            </div>


            <div className="flex items-center text-[#005646] mt-10  p-3 rounded-lg ">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" /> {/* Green check icon */}
                <span className="flex-grow">
                    If your device cannot be repaired, your
                    <span className="font-bold text-[#005646]"> €110 initial repair package</span>
                    will be transformed into a voucher valid for our reconditioned devices.
                </span>
            </div>
        </div>
    );
}

export default SubStep2
