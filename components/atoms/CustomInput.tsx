"use client"
import React, { useState } from 'react'
import "@/components/atoms/customCss.css"

interface CustomInputProps {
    label: string; // Expecting a label prop of type string
}

const CustomInput: React.FC<CustomInputProps> = ({label}) => {
    const [query, setQuery] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    console.log(label)
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
  return (
      <>  
          <div className="relative float-label-input m-0">
              <input type="text" onFocus={handleFocus} onBlur={handleBlur} id="name" placeholder=" " className=" m-0 w-full border bg-white hover:border-gray-100 text-left h-16 text-gray-800 text-lg font-medium px-3 py-3 rounded-[10px] hover:shadow-md focus:outline-none focus:shadow-outline  border-gray-300  block appearance-none leading-normal focus:border-[#005646]" />
              <label htmlFor="name" className={`absolute left-3 transition-all duration-200 ease-in-out text-sm pointer-events-none ${isFocused || query ? 'top-4 text-gray-400 text-sm left-1' : 'top-1/2 -translate-y-1/2 text-gray-400'}`}>{label}</label>
          </div>

      </>

  )
}

export default CustomInput
