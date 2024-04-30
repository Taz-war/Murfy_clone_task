import React from 'react'
import "@/components/atoms/customCss.css"
const CustomListBox = () => {
  return (
      <div className="container w-1/3 m-auto p-9 rounded">
          
          <div className="relative float-label-input">
              <input type="text" id="name" placeholder=" " className=" w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"/>
                  <label for="name" className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker">Empty</label>
          </div>

      </div>

  )
}

export default CustomListBox
