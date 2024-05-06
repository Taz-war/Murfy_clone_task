"use client";
import React, { useState, ChangeEvent, FocusEvent } from 'react';
import '@/components/atoms/customCss.css';
import CustomInput from '@/components/atoms/CustomInput';
import CustomAutoComplete from '@/components/atoms/CustomAutoComplete';

const Step4: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleFocus = (): void => setIsFocused(true);
  const handleBlur = (e: FocusEvent<HTMLInputElement>): void => setIsFocused(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setValue(e.target.value);

  return (
    <div className="bg-[#F7F8FC] p-6 mt-5 rounded-xl">
      <h1 className="ml-1 text-2xl mb-3 text-[#005646] font-semibold">
        Personal informations
      </h1>
      <p className="ml-1 text-gray-400 mb-2">
        We need some information to prepare for the repairer to come.
      </p>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <CustomInput label="Your Email" />
        </div>
        <div className="col-span-6">
          <CustomInput label="Name" />
        </div>
        <div className="col-span-6">
          <CustomInput label="First Name" />
        </div>
        <div className="col-span-12">
          <CustomInput label="Address" />
        </div>
        <div className="col-span-12">
          <CustomInput label="Access Information" />
          <p className="text-gray-400 ml-2 text-sm">
            Digicode, intercom, building, floor, etc.
          </p>
        </div>
        <div className="col-span-2">
          <CustomAutoComplete label="Indicative" />
        </div>
        <div className="col-span-10">
          <CustomInput label="Phone Number" />
        </div>
      </div>
      <p className="text-[#005646] ml-3 -mt-1 text-sm">
        In the format +33 X XX XX XX XX
      </p>
      <div className="mt-3">
        <label className="inline-flex items-center cursor-pointer space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 accent-[#F7BDBD] border-[#F7BDBD] hover:accent-[#F7BDBD] rounded"
            checked={isChecked}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked)}
          />
          <span className="text-gray-700 font-medium">
            I would like to receive news and expert tips from Murfy
          </span>
        </label>
      </div>
    </div>
  );
};

export default Step4;
