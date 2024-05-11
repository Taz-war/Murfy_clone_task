"use client";
import React, { useState, useEffect, createContext } from "react";
import Button from "./atoms/Button";
import MultiStepper from "./MultiStep";
import Step2 from "./steps/step2/Step2";
import SubStep1 from "./steps/step2/subSteps/SubStep1";
import SubStep2 from "./steps/step2/subSteps/SubStep2";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";
import Stepper from "./Example";
import Step5 from "./steps/step5/Step5";
import Step1 from "./steps/step1/Step1";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// const serviceSchema = z.object({
//   categoryId: z.string(),
//   categoryName: z.string(),
//   steps: z
//     .array(
//       z.union([
//         z.object({ category: z.string().nullable() }),
//         z.object({ problem: z.string().nullable() }),
//         z.object({ brand: z.string().nullable() }).optional(),
//       ])
//     )
//     .nullable(),
// });

export type ServiceSchema = {
  id: string;
  serviceName: string;
  has_brand: boolean;
  initial_price_ttc: number;
  is_service_personne: true;
  brand_description: string;
  brands: string[];
  categoryId: string;
};

export type ResumeContextType = {
  services: Record<string, ServiceSchema[]>;
  setServices: (arg: Record<string, ServiceSchema[]>) => void;
  currentState: number;
  setCurrentState: (arg: number) => void;
};

export const ResumeContext = createContext<ResumeContextType>({
  services: {},
  setServices: (arg: Record<string, ServiceSchema[]>) => null,
  currentState: 0,
  setCurrentState: (arg: number) => null,
});

const schema = z.object({
  //category info
  categoryId: z.string(),
  categoryName: z.string(),
  //service info
  serviceName: z.string().nullable(),
  serviceId: z.string().nullable(),

  //brand
  has_brand: z.boolean().nullable(),
  brand: z.string().nullable(),
  //price
  initial_price_ttc: z.number().nullable(),
  is_service_personne: z.boolean().nullable(),
});
const SignUpSchema = z.object({
  // email: z.string().email(),
  // password: z.string().min(3).max(20),
  address: z.string({ message: "This is required field" }),
  services: z.array(schema),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const HomeContainer = ({
  categories,
}: {
  categories: { name: string; id: string }[];
}) => {
  const [services, setServices] = useState<Record<string, ServiceSchema[]>>({});
  const [currentState, setCurrentState] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) =>
    console.log("HELLO", data);
  return (
    <ResumeContext.Provider
      value={{
        services,
        setServices,
        currentState,
        setCurrentState,
      }}
    >
      services---{JSON.stringify(watch("services"))}
      address---{watch("address")}
      currentState---{currentState}
      <button
        onClick={() => {
          console.log({ categories, services });
        }}
      >
        GET
      </button>
      <div className="grid grid-cols-12 gap-4">
        {/* <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input className="input" placeholder="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          className="input"
          placeholder="password"
          {...register("password")}
        />

        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">submit!</button>
      </form> */}
        <div className={`col-span-12 md:col-span-7 lg:col-span-8`}>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <Step1 watch={watch} control={control} categories={categories} />
            <button type="submit">submit!</button>
            {/* <Step2 />
          <SubStep1 />
          <SubStep2 />
          <Step3></Step3>
          <Step4 />
          <Step5 /> */}
          </form>
        </div>
        <div className="hidden md:block md:col-span-5 lg:col-span-4">
          <Stepper />
        </div>
      </div>
    </ResumeContext.Provider>
  );
};

export default HomeContainer;
