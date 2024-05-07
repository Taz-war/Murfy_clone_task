"use client"
import React, { useState } from 'react'
import { CheckCircleIcon, ChevronDoubleRightIcon, InformationCircleIcon, CreditCardIcon,GiftIcon } from '@heroicons/react/20/solid';
// import InputMask from 'react-input-mask';
import useInputMask from '@/components/hooks/useInputMask';
import Link from 'next/link';


const Step5: React.FC = () => {
    const [cardDetails, setCardDetails] = useState('');
    const [isActive, setIsActive] = useState<boolean>(false);
    const [promoCode, setPromoCode] = useState<string>('');

    const handleApply = () => {
        // Handle the apply logic here, e.g., making an API call or updating the state.
       
        setIsActive(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCardDetails(event.target.value);
    };
    const cardMask = '9999 9999 9999 9999 99/99 999';
    const inputRef = useInputMask(cardMask);
    return (
        <>
            <div className="max-w-4xl mx-auto p-6 pt-2 mt-4 bg-white rounded-lg shadow">
                <h2 className="text-2xl font-bold text-[#005646] mb-5">Last step to validate your appointment</h2>

                <div className="bg-[#015546] text-white rounded-xl p-7 shadow-lg w-full max-w-2xl ">
                    <h1 className="text-2xl font-semibold text-white mb-3">Pay now</h1>
                    <p className="text-md font-semibold text-white mb-2">
                        Your credit card allows you to confirm the reservation,<span className=' text-[#CBF595]'> no amount will be debited before the end of the appointment</span>
                    </p>
                    <div className="flex space-x-2 mb-4">
                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-8 h-8" />
                        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="w-8 h-8" />
                    </div>
                    <div className="relative mb-4">
                        <CreditCardIcon className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            ref={inputRef}
                            value={cardDetails}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-3 py-2 border-2 rounded-lg text-sm font-medium text-gray-800 border-[#1A8E96] focus:outline-none focus:border-[#005646]"
                            placeholder="Numéro de carte MM/AA CVV"
                        />
                    </div>
                    <p className="text-md font-semibold text-white">
                        <span className=' text-[#CBF595]'>Free cancellation</span> up to 24 hours before the appointment
                    </p>
                    
                </div>

                <div className="flex items-center space-x-2 mt-2">
                    <div
                        className={`flex items-center border rounded-full px-4 py-2 transition-all duration-200 cursor-pointer ${isActive ? 'border-primary bg-white shadow' : 'border-transparent bg-[#F5F7F9]'
                            }`}
                        onClick={() => setIsActive(true)}
                    >
                        <GiftIcon className=' size-6 text-[#1A8E96]' />
                        {!isActive ? (
                            <span className="ml-2 text-[#056f66] text-sm font-semibold">Apply a promo code or sponsorship</span>
                        ) : (
                            <input
                                type="text"
                                value={promoCode}
                                placeholder="Enter promo code"
                                className="outline-none bg-transparent transition-all duration-200 ml-2 w-60"
                                onChange={(e) => setPromoCode(e.target.value)}
                                onBlur={() => setIsActive(true)}
                            />
                        )}
                    </div>
                    {isActive && (
                        <button
                            className="text-primary bg-transparent border-0 outline-none text-[#056f66] font-bold focus:outline-none transition-all duration-200"
                            onClick={handleApply}
                        >
                            Apply
                        </button>
                    )}
                </div>

                <div className=' p-1 border-b-2'>
                    <h2 className="text-2xl font-bold text-[#005646] mb-2 mt-3">To be paid on the day of the appointment</h2>
                    <p className="text-md font-medium text-[#005646] mb-5">On the big day, your signature will trigger the debit on the credit card used for the reservation</p>
                </div>

                <div className="flex items-center justify-between max-w-lg mx-auto p-6">
                    <div className="text-gray-700 text-center">
                        <p className="text-lg text-[#808080] font-medium">Package without bonus</p>
                        <p className="text-3xl font-bold text-[#808080]">€ 110</p>
                    </div>

                    <ChevronDoubleRightIcon className="w-10 h-10 text-[#00A5D2] mx-4" /> {/* Arrow icon with styling */}

                    <div className="text-[#00A5D2] text-center">
                        <p className="text-lg font-medium">Package with bonus</p>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>

                        {/* <InformationCircleIcon className="w-6 h-6 mr-2 bg-inherit text-inherit " /> Heroicon for info */}
                        What is the repair bonus?
                    </a>
                </div>


                <div className="flex items-center  mt-3  p-3 rounded-lg font-medium">
                    <p>By validating, you accept <Link href='#' className=' text-blue-800'>the general conditions of sale</Link> of Murfy.fr.</p>
                </div>
            </div>
        </>
    );
}

export default Step5
