"use client";
import Image from "next/image";
// import NewHome from "@/components/Home";
// import Example from "@/components/Example";
import MultiStepper from "@/components/MultiStep";
import Step2 from "@/components/steps/step2/Step2";
import HomeContainer from "@/components/Home";

import CustomAutoComplete from "@/components/atoms/CustomAutoComplete";
import CustomListBox from "@/components/atoms/CustomInput";
import Step1 from "@/components/steps/step1/Step1";
import Step3 from "@/components/steps/step3/Step3";
const options = [
  { id: 1, label: "Apple" },
  { id: 2, label: "Samsung" },
  { id: 3, label: "Google" },
];

export default function Home() {
  return (
    <main>
      {/* <NewHome /> */}
      {/* <CustomSelect options={options} placeholder="Device brand" /> */}
      {/* <MultiStepper />
      <Step2 /> */}
      {/* <CustomAutoComplete />
      <CustomListBox /> */}
      <Step1 />
      {/* <Step3 /> */}
      {/* <HomeContainer /> */}
    </main>
  );
}
