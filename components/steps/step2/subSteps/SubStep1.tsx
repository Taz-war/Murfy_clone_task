import CustomAutoComplete from '@/components/atoms/CustomAutoComplete';
import React from 'react'

interface DeviceInfoFormProps {
    // You can expand this with more props as needed
}
const SubStep1: React.FC<DeviceInfoFormProps> = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
            <div className="mb-6 bg-[#F7F8FC] p-9 rounded-2xl">
                <h2 className="text-lg font-semibold text-[#005646]">Identify your device</h2>
                <CustomAutoComplete label="Device brand" />
            </div>
            <div className='mb-6 bg-[#F7F8FC] p-9 rounded-2xl'>
                <p className="text-sm text-gray-500 mt-1">Device 1 - Washing machine</p>
                <h3 className="text-xl font-semibold text-[#005646]">Tell us more about your device failure</h3>
                <textarea
                    className="mt-2 w-full p-3 border border-gray-400 rounded focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    rows={3}
                    placeholder="Describe your fault (optional)"
                />
            </div>
        </div>
    );
}

export default SubStep1
