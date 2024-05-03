import React from 'react'
import "@/components/atoms/customCss.css"

interface CustomInputProps {
    label: string; // Expecting a label prop of type string
}

const CustomInput: React.FC<CustomInputProps> = ({label}) => {
    console.log(label)
  return (
      <>  
          <div className="relative float-label-input m-0">
              <input type="text" id="name" placeholder=" " className=" w-full border bg-white hover:border-gray-100 text-left h-16 text-gray-800 text-lg font-medium px-3 py-3 rounded-[10px] hover:shadow-md focus:outline-none focus:shadow-outline  border-gray-300  block appearance-none leading-normal focus:border-[#005646]" />
              <label htmlFor="name" className="absolute top-4 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">{label}</label>
          </div>

      </>

  )
}

export default CustomInput
