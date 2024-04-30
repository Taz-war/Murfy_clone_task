import React from 'react'
import Button from './atoms/Button'
import MultiStepper from './MultiStep'
import Step2 from './steps/Step2'

const HomeContainer = () => {
  return (
    <div className=' grid grid-cols-2 gap-4'>
      <div>
        <Step2 />
      </div>
      <div>
        <MultiStepper />
      </div>
    </div>
  )
}

export default HomeContainer
