"use client"
import React, { useState } from 'react';

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
          {/* {sampleData.map((problem, index) => (
              <Button key={problem.id}>{problem.problemName}</Button>

          ))} */}
          <input className='bg-white border-2 mb-3 hover:border-gray-100  w-full text-left h-16 text-gray-800 text-lg font-medium px-6 py-2 rounded-[10px] hover:shadow-md  border-gray-300 focus:outline-none focus:border-[#D1D1D1] focus:ring focus:ring-gray-200 focus:ring-opacity-50'/>
          <input
              type="text"
              id="email"
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="peer w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-green-500"
              placeholder=" "
          />
          <label
              htmlFor="email"
              className={`absolute left-3 transition-all duration-300 ease-linear text-gray-600 ${isFocused || value ? 'top-1 text-xs text-green-500' : 'top-1/2 text-lg'
                  }`}
              style={{ transform: isFocused || value ? 'translateY(-50%)' : 'translateY(-50%)' }}
          >
              Your email
          </label>
          {/* <SubStep1 /> */}
      </div>
  )
}

export default Step4
