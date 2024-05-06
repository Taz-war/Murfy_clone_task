"use client";
import React, { useState } from "react";
import "@/components/atoms/customCss.css";

interface CustomInputProps {
  label: string; // Expecting a label prop of type string
}

const CustomInput: React.FC<CustomInputProps> = ({ label }) => {
  const [query, setQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  console.log(label);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="relative float-label-input">
      <input
        type="text"
        id="name"
        placeholder=" "
        className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 h-16 px-3 appearance-none leading-normal hover:border-white hover:shadow-lg focus:border-2 focus:border-[#004656]"
      />
      <label
        htmlFor="name"
        className="absolute left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-grey-darker"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
