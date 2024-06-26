"use client";
import React, { useState, useEffect } from "react";
import Button from "./atoms/Button";
import MultiStepper from "./MultiStep";
import Step2 from "./steps/step2/Step2";
import SubStep1 from "./steps/step2/subSteps/SubStep1";
import SubStep2 from "./steps/step2/subSteps/SubStep2";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";
// import Stepper from "./Example";
import Step5 from "./steps/step5/Step5";
import Step1 from "./steps/step1/Step1";
import Stepper from "./MultiStep";
import Example from "./Example";
import { useStepperContext } from "@/Context_api/StepperContext";

const HomeContainer: React.FC = () => {
  const { steps, currentStepIndex, goToNextStep, goToPreviousStep } = useStepperContext();
  console.log(currentStepIndex)
  useEffect(() => {
    console.log("Step index updated in Step1 component:", currentStepIndex);
  }, [currentStepIndex]);
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className={`col-span-12 md:col-span-7 lg:col-span-8`}>
        {/* <Step1 /> */}
        {currentStepIndex === 0 ? <Step1 />: currentStepIndex === 1 ? <Step2 /> : currentStepIndex === 2 ? <Step3 /> : currentStepIndex === 3 ? <Step4 /> : <Step5 />}
        
        {/* <SubStep1 />
        <SubStep2 /> */}
        {/* <Example /> */}
      </div>
      <div className="hidden md:block md:col-span-5 lg:col-span-4">
        {currentStepIndex != 0 && (
        <Stepper />
        )}
      </div>
    </div>
  );
};

export default HomeContainer;
