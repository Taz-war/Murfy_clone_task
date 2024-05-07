import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react'

type Step = {
    name: string;
    description: string;
    status: 'complete' | 'current' | 'upcoming';
};

const initialSteps: Step[] = [
    {
        name: 'Washing machine repair, Dishwasher',
        description: '121 Rue Manin, 75019 Paris, France',
        status: 'complete',
    },
    {
        name: 'Breakdown',
        description: 'Appliance 1 Washing machine, Appliance 2 Dishwasher',
        status: 'current',
    },
    {
        name: 'Appointment',
        description: 'Saturday May 4, Between 11 a.m. and 4 p.m.',
        status: 'upcoming',
    },
    {
        name: 'Information',
        description: '',
        status: 'upcoming',
    },
    {
        name: 'Validation',
        description: '',
        status: 'upcoming',
    },
    // Add more steps as needed
];

const CustomMenu: React.FC = () => {
    const [steps, setSteps] = useState<Step[]>(initialSteps);
    const [currentStepIndex, setCurrentStepIndex] = useState(() => {
        return steps.findIndex((step) => step.status === 'current');
    });

    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Mount the component
        setIsMounted(true);
        // Trigger the slide-down animation
        const timeoutId = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timeoutId);
    }, []);

    const closeMenu = () => {
        // Trigger the slide-up animation
        setIsVisible(false);
        // Unmount the component after the animation ends
        setTimeout(() => setIsMounted(false), 500);
    };

    const handleNext = () => {
        if (currentStepIndex < steps.length - 1) {
            const newSteps = steps.map((step, index) => {
                if (index === currentStepIndex) {
                    return { ...step, status: 'complete' as 'complete' }; // Explicitly setting the type
                } else if (index === currentStepIndex + 1) {
                    return { ...step, status: 'current' as 'current' }; // Explicitly setting the type
                }
                return step;
            });
            setSteps(newSteps);
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentStepIndex > 0) {
            const newSteps = steps.map((step, index) => {
                if (index === currentStepIndex) {
                    return { ...step, status: 'upcoming' as 'upcoming' }; // Explicitly setting the type
                } else if (index === currentStepIndex - 1) {
                    return { ...step, status: 'current' as 'current' }; // Explicitly setting the type
                }
                return step;
            });

            setSteps(newSteps);
            setCurrentStepIndex(currentStepIndex - 1);
        }
    };

    if (!isMounted) {
        return null;
    }

    return (
        <Transition
            show={isVisible}
            enter="ease-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
            className={"fixed"}
        >


            <div className="bg-white h-full p-4 overflow-y-auto z-50">
                <div className=' max-w-sm'>
                    <div className="p-10">
                        <ol className="relative border-l-2 border-gray-200">
                            {steps.map((step, index) => (
                                <li
                                    key={index}
                                    className={`${step.status === 'upcoming' ? 'mb-3' : 'mb-10'
                                        } ml-4 pl-4 ${index === 0 ? 'pt-2' : ''} ${index === steps.length - 1 ? 'pb-2' : ''
                                        }`}
                                >
                                    <div
                                        className={`absolute w-6 h-6 rounded-full -left-3.5 border-2 ${step.status === 'complete'
                                            ? 'bg-[#1A8E96] border-[#1A8E96]'
                                            : step.status === 'current'
                                                ? 'bg-white border-none'
                                                : 'bg-gray-400 border-gray-400'
                                            } flex items-center justify-center`}
                                    >
                                        {step.status === 'complete' && (
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
                                        {step.status === 'current' && (
                                            <>
                                                <div className="h-1 w-1 mr-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.9s]"></div>
                                                <div className="h-1 w-1 mr-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
                                                <div className="h-1 w-1 bg-gray-400 rounded-full animate-bounce"></div>
                                            </>
                                        )}
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className={`text-md font-semibold text-[#1A8E96]`}>
                                                {step.name}
                                            </h3>
                                            <p className={`text-sm text-gray-500'`}>
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
                                onClick={handlePrev}
                                disabled={currentStepIndex <= 0}
                            >
                                Prev
                            </button>
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                                onClick={handleNext}
                                disabled={currentStepIndex >= steps.length - 1}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </Transition>
    );
};

export default CustomMenu;
