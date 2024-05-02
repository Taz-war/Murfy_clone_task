import CustomAutoComplete from '@/components/atoms/CustomAutoComplete';
import React from 'react'

interface DeviceInfoFormProps {
    // You can expand this with more props as needed
}
const SubStep1: React.FC<DeviceInfoFormProps> = () => {
    return (
        <div className=' mt-6'>
            <div className="mb-6 bg-[#F7F8FC] p-12 rounded-2xl">
                <h2 className="text-2xl mb-6 font-semibold text-[#005646]">Identify your device</h2>
                <CustomAutoComplete label="Device brand" />
            </div>
            <div className='mb-6 mt-12 bg-[#F7F8FC] p-12 rounded-2xl'>
                <p className="text-sm text-gray-500 mt-1">Device 1 - Washing machine</p>
                <h3 className="text-2xl font-semibold text-[#005646] mb-4">Tell us more about your device failure</h3>
                <textarea
                    className="mt-2 w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    rows={5}
                    placeholder="Describe your fault (optional)"
                />
            </div>
        </div>
    );
}

export default SubStep1
