import React from "react";
import Button from "./atoms/Button";
import MultiStepper from "./MultiStep";
import Step2 from "./steps/step2/Step2";
import SubStep1 from "./steps/step2/subSteps/SubStep1";
import SubStep2 from "./steps/step2/subSteps/SubStep2";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";
import Stepper from "./Example";

const HomeContainer = () => {
  return (
    <div className=" grid grid-cols-12 gap-4">
      <div className=" col-span-8 p-3">
        {/* <Step2 /> */}
        <SubStep1 />
        <SubStep2 />
        <Step3></Step3>
        <Step4 />
      </div>
      <div className=" col-span-4">
        {/* <MultiStepper /> */}
        <Stepper />
      </div>
    </div>
  );
};

export default HomeContainer;
