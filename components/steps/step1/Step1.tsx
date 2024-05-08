import CustomAutoComplete from "@/components/atoms/CustomAutoComplete";
import React from "react";

const Step1 = () => {
  return (
    <div className=" grid grid-cols-12 p-10">
      <div className=" col-span-8">
        <div className=" mb-3 text-center p-3">
          <h1 className=" text-[#005646] text-4xl font-semibold">Repair</h1>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <CustomAutoComplete
              label={"Device to be repair"}
              borderRadius={"50%"}
            />
          </div>
          <div className="col-span-4">
            <CustomAutoComplete
              label={"Enter your address"}
              type={"location"}
              borderRadius={"50%"}
            />
          </div>
          <div className=" col-span-4">
            <button className="rounded-full bg-[#D7D7D7] p-3 mt-1 text-sm">
              Make an appointment
            </button>
          </div>
          <div className=" col-span-12 justify-center text-center">
            <div className=" w-[50%] text-left mt-6 ml-10">
              <h1 className="text-[#005646] text-3xl font-semibold">
                Indicate the broken device and your address
              </h1>
              <h1 className="text-[#005646] text-xl font-medium mt-5">
                We will then be able to offer you the next availability near you
              </h1>
            </div>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
        </div>
      </div>
      <div className=" col-span-4"></div>
    </div>
  );
};

export default Step1;
