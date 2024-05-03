import React from 'react'
import Button from '../../atoms/Button'
import CustomListBox from '../../atoms/CustomInput'
import SubStep1 from './subSteps/SubStep1'

const sampleData = [
  {
    id: 1,
    problemName: "Nothing lights up"
  },
  {
    id: 2,
    problemName: "The device turns on but does not start"
  },
  {
    id: 3,
    problemName: "Water leak"
  },
  {
    id: 4,
    problemName: "The laundry is poorly washed"
  },
  {
    id: 5,
    problemName: "The washing machine does not empty(does not drain)"
  },
  {
    id: 6,
    problemName: "The device trips the circuit breaker"
  },
  {
    id: 7,
    problemName: "Noise or vibration problem"
  },
  {
    id: 8,
    problemName: "Other"
  },
]

const Step2 = () => {
  return (
    <div className=' bg-[#F7F8FC] p-6 mt-5 rounded-xl'>
      <h1 className=' text-2xl mb-3 text-[#1A8E96] font-semibold'>What is the nature of your breakdown?</h1>
      {sampleData.map((problem, index) => (
        <Button key={problem.id}>{problem.problemName}</Button>
      ))}
      {/* <SubStep1 /> */}
    </div>
  )
}

export default Step2