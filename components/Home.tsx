"use client"
import React, { useState, useEffect } from "react";
import Button from "./atoms/Button";
import MultiStepper from "./MultiStep";
import Step2 from "./steps/step2/Step2";
import SubStep1 from "./steps/step2/subSteps/SubStep1";
import SubStep2 from "./steps/step2/subSteps/SubStep2";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";
import Stepper from "./Example";

const HomeContainer: React.FC = () => {
  const [showStepper, setShowStepper] = useState<boolean>(true);

  // Custom function to update the visibility of the Stepper
  const handleResize = () => {
    const shouldShow = window.innerWidth >= 950; // Custom screen width (1024px as an example)
    setShowStepper(shouldShow);
  };

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Add resize listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);
  return (
    <div className=" grid grid-cols-12 gap-4 p-3">
      {/* <div className="col-span-12 md:col-span-8"> */}
      <div className={`col-span-${showStepper ? "8" : "12"}`}>
        {/* <Step2 /> */}
        {/* <SubStep1 /> */}
        {/* <SubStep2 /> */}
        {/* <Step3></Step3> */}
        <Step4 />
      </div>
      {showStepper && (
        <div className="col-span-4">
          <Stepper />
        </div>
      )}
      {/* <div className=" hidden md:col-span-4 md:block">
        <MultiStepper />
        <Stepper />
      </div> */}
    </div>
  );
};

export default HomeContainer;
