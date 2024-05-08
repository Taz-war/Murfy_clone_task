import CustomAutoComplete from '@/components/atoms/CustomAutoComplete'
import React from 'react'

const Step1 = () => {
  return (
    <div className=' grid grid-cols-12 p-10'>
      <div className=' col-span-8'>
        <div className=' mb-3 text-center p-3'>
          <h1 className=' text-[#005646] text-4xl font-semibold'>Repair</h1>
        </div>
        <div className='grid grid-cols-12 gap-4'>
          <div className=' col-span-4'>
            <CustomAutoComplete label={'Device to be repair'} borderRadius={"50%"} />
          </div>

          <div className=' col-span-4'><CustomAutoComplete label={'Enter your address'} type={"location"} borderRadius={"50%"} /></div>

          <div className=' col-span-4'>
            <button className="rounded-full bg-[#D7D7D7] p-3 mt-1 text-sm">Make an appointment</button>
          </div>

          <div className=' col-span-12 justify-center text-center'>
            <div className=' w-[50%] text-left mt-6 ml-10'>
              <h1 className='text-[#005646] text-3xl font-semibold'>Indicate the broken device and your address</h1>
              <h1 className='text-[#005646] text-xl font-medium mt-5'>We will then be able to offer you the next availability near you</h1>

              
            </div>
          </div>

          <div className=' col-span-8 justify-center'>
            <div className="relative bg-[#E7F9FA] text-primary p-4 pl-12 mt-4 rounded-lg shadow-sm">
              <div
                className="absolute top-0 -left-3 -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-primary bg-[#1A8E96] text-white py-1 px-2 rounded shadow-md text-xs font-semibold"
                style={{ transform: 'rotate(-8deg)' }}
              >
                THE +
              </div>
              <div className="font-medium mb-1 text-[#1A8E96]">Up to <span className=' font-extrabold'>€50 per device</span> repaired with the <span className=' font-extrabold'>Repair Bonus!</span></div>
              <a href="#" className="text-[#1A8E96] underline decoration-[#1A8E96]">+ info</a>
            </div>
          </div>

          
        </div>

        
      </div>
      <div className=' col-span-4'></div>
    </div>
  )
}

export default Step1