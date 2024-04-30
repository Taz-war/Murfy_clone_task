"use client"
import Image from "next/image";
import NewHome from '@/components/Home'
import Example from "@/components/Example";
import MultiStepper from "@/components/MultiStep";
import Step2 from "@/components/steps/Step2";
import HomeContainer from "@/components/Home";
import CustomSelect from "@/components/Example";
import CustomAutoComplete from "@/components/atoms/CustomAutoComplete";
const options = [
  { id: 1, label: "Apple" },
  { id: 2, label: "Samsung" },
  { id: 3, label: "Google" }
];

export default function Home() {
  return (
    <main >
      {/* <NewHome /> */}
      {/* <CustomSelect options={options} placeholder="Device brand" /> */}
      {/* <MultiStepper />
      <Step2 /> */}
      <CustomAutoComplete />
      {/* <HomeContainer/> */}
    </main>
  );
}
