"use client"
import React, { useState } from 'react';
import '@/components/atoms/customCss.css'
import CustomInput from '@/components/atoms/CustomInput';
import CustomAutoComplete from '@/components/atoms/CustomAutoComplete';

const Step4 = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleChange = (e) => setValue(e.target.value);
    return (
        <div className=' bg-[#F7F8FC] p-6 mt-5 rounded-xl'>
            <h1 className=' ml-1 text-2xl mb-3 text-[#005646] font-semibold'>Personal informations</h1>
            <p className=' ml-1 text-gray-400 mb-2'>We need some information to prepare for the repairer to come .</p>
            <div className=' grid grid-cols-12 gap-4'>
                <div className=' col-span-12'>
                    <CustomInput label="Your Email" />
                </div>
                <div className=' col-span-6'>
                    <CustomInput label="Name" />
                </div>
                <div className=' col-span-6'>
                    <CustomInput label="First Name" />
                </div>
                <div className=' col-span-12'>
                    <CustomInput label="Address" />
                </div>
                <div className=' col-span-12'>
                    <CustomInput label="Access Information" />
                </div>
                <div className=' col-span-2'>
                    <CustomAutoComplete label='Indicative'/>
                </div>
                <div className=' col-span-10'>
                    <CustomInput label="Phone Number" />
                </div>
            </div>
            
            {/* <SubStep1 /> */}
        </div>
    )
}

export default Step4
