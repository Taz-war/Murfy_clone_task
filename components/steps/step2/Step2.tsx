"use client"
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

// Define the type for each plan
interface sampleData {
  id:number;
  problemName: string;
}

// Define the array of plans
const sampleData: sampleData[] = [
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
];

// Helper function to concatenate CSS classes
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const Step2 = () => {
  const [selected, setSelected] = useState<sampleData>(sampleData[0]);

  return (
    <div className=' bg-[#F7F8FC] p-6 mt-5 rounded-xl'>
    <h1 className=' text-2xl mb-3 text-[#1A8E96] font-semibold'>What is the nature of your breakdown?</h1>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="space-y-4">
          {sampleData.map((problem) => (
            <RadioGroup.Option
              key={problem.problemName}
              value={problem}
              className={({ checked, active }) =>
                classNames(
                  checked ? 'border-transparent' : 'border-gray-300',
                  active ? 'border-[#1A8E96] ring-1 ring-[#1A8E96]' : '',
                  'relative block bg-white border rounded-xl shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none h-16  hover:bg-[#e6e6e6] hover:border-[#1A8E96]'
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex items-center">
                    <div className="text-md">
                      <RadioGroup.Label as="p" className="font-medium text-gray-700">
                        {problem.problemName}
                      </RadioGroup.Label>
                    </div>
                  </div>
                  
                  <div
                    className={classNames(
                      active ? 'border' : 'border',
                      checked ? 'border-[#1A8E96]' : 'border-transparent',
                      'absolute -inset-px rounded-lg pointer-events-none'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default Step2