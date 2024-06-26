import { useStepperContext } from "@/Context_api/StepperContext";
import React, { useState, useEffect } from "react";

export  type Step = {
    name: string;
    description: string;
    status: "complete" | "current" | "upcoming";
};



const Stepper: React.FC = () => {
    const { steps, currentStepIndex, goToNextStep, goToPreviousStep } = useStepperContext();

    return (
        <div
            id="multistepper"
            className=" -mt-[56px] top-[0.38rem] right-0 bg-white p-0 rounded-[15px]  shadow-2xl  overflow-hidden"
        >
            <div className="flex justify-between  p-4 h-14 bg-[#005646]">
                <h2 className="text-lg font-semibold text-white">Plan your repair</h2>
                <span className="text-lg font-semibold text-[#A4E7DB]">
                    {currentStepIndex + 1} step
                </span>
            </div>

            <div className=" p-10">
                <ol className="relative border-l-2 border-gray-200">
                    {steps.map((step, index) => (
                        <li
                            key={index}
                            className={` ${step.status === "upcoming" ? "mb-3" : "mb-10"
                                } ml-4 pl-4`}
                        >
                            <div
                                className={`absolute w-6 h-6 rounded-full -left-3.5 border-2 ${step.status === "complete"
                                        ? "bg-[#1A8E96] border-[#1A8E96]"
                                        : step.status === "current"
                                            ? "bg-white border-none"
                                            : "bg-gray-400 border-gray-400"
                                    } flex items-center justify-center`}
                            >
                                {step.status === "complete" && (
                                    <svg
                                        className="w-3 h-3 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                )}
                                {step.status === "current" && (
                                    <>
                                        <div className="h-1 w-1 mr-1 bg-gray-400 rounded-full animate-bounce " style={{ animationDelay: '-1.2s' }}></div>
                                        <div className="h-1 w-1 mr-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '-0.6s' }}></div>
                                        <div className="h-1 w-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                    </>
                                )}
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <h3 className={`text-md font-semibold text-[#1A8E96]`}>
                                        {step.name}
                                    </h3>
                                    <p className={`text-sm text-gray-500'}`}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="border-t-2 border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                        <span>Washing machine package</span>
                        <span>110.00€</span>
                    </div>
                    <div className="flex justify-between items-center my-3">
                        <span>Second package Dishwasher</span>
                        <span>90.00€</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="flex items-center">
                            Repair Bonus
                            <svg
                                className="ml-2 w-4 h-4 text-blue-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h1m0 0h-1V9h1m2 3h.01"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </span>
                        <span className="text-red-500">-100.00€</span>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-lg font-semibold">100.00€</span>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                        onClick={goToPreviousStep}
                        disabled={currentStepIndex <= 0}
                    >
                        Prev
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                        onClick={goToNextStep}
                        disabled={currentStepIndex >= steps.length - 1}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stepper;
