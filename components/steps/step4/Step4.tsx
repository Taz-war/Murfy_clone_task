"use client";
import React, { useState } from "react";
import "@/components/atoms/customCss.css";
import CustomInput from "@/components/atoms/CustomInput";
import CustomAutoComplete from "@/components/atoms/CustomAutoComplete";

const Step4 = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => setValue(e.target.value);
  return (
    <div className=" bg-[#F7F8FC] p-6 mt-5 rounded-xl">
      <h1 className=" ml-1 text-2xl mb-3 text-[#005646] font-semibold">
        Personal informations
      </h1>
      <p className=" ml-1 text-gray-400 mb-2">
        We need some information to prepare for the repairer to come .
      </p>
      <div className=" grid grid-cols-12 gap-4">
        <div className=" col-span-12">
          <CustomInput label="Your Email" />
        </div>
        <div className=" col-span-6">
          <CustomInput label="Name" />
        </div>
        <div className=" col-span-6">
          <CustomInput label="First Name" />
        </div>
        <div className=" col-span-12">
          <CustomInput label="Address" />
        </div>
        <div className="col-span-12">
          <CustomInput label="Access Information" />
          <p className="text-gray-400 ml-2 text-sm">
            Digicode, intercom, building, floor, etc.
          </p>
        </div>
        <div className=" col-span-2">
          <CustomAutoComplete label="Indicative" />
        </div>
        <div className=" col-span-10">
          <CustomInput label="Phone Number" />
        </div>
      </div>
      <p className="text-[#005646] ml-3 -mt-1 text-sm">
        In the format +33 X XX XX XX XX
      </p>
      <div className=" mt-3">
        <div className="flex items-center">
          <label className="relative flex cursor-pointer items-center p-1 rounded-sm">
            <input
              type="checkbox"
              className="peer cursor-pointer appearance-none relative h-5 w-5 bg-white dark:bg-gray-100/25 border-2 border-gray-900 transition-all checked:border-[#F7BDBD] checked:bg-[#F7BDBD] rounded-sm"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
          <span
            className="text-gray-700 font-medium"
            onClick={(e) => setIsChecked((prev) => !prev)}
          >
            I would like to receive news and expert tips from Murfy
          </span>
        </div>
      </div>
      {/* <SubStep1 /> */}
    </div>
  );
};

export default Step4;
