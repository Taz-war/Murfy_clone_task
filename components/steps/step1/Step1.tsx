import CustomAutoComplete from '@/components/atoms/CustomAutoComplete'
import React from 'react'

const Step1 = () => {
  return (
    <div className=' container p-10'>
        <div className='grid grid-cols-12 gap-4'>
            <div className=' col-span-5'>
                <CustomAutoComplete label={'Device to be repair'} borderRadius={"50%"}/>
            </div>
            <div className=' col-span-5'><CustomAutoComplete  label={'Enter your address'} type={"location"} borderRadius={"50%"}/></div>
            <div className=' col-span-2'>
                
            </div>
        </div>
    </div>
  )
}

export default Step1