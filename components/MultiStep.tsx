import React from 'react';

type Step = {
    name: string;
    description: string;
    status: 'complete' | 'current' | 'upcoming';
};

const steps: Step[] = [
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
    // ... add more steps as needed
];

const MultiStepper: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-700">Plan your repair</h2>
                <span className="text-sm font-medium text-indigo-600">2nd step</span>
            </div>

            <ol className="relative border-l-2 border-gray-200">
                {steps.map((step, index) => (
                    <li key={index} className={`mb-10 ml-4 pl-4 ${index === 0 ? "pt-2" : ""} ${index === steps.length - 1 ? "pb-2" : ""}`}>
                        <div
                            className={`absolute w-4 h-4 rounded-full -left-2.5 border-2 ${step.status === 'complete'
                                    ? 'bg-green-500 border-green-500'
                                    : step.status === 'current'
                                        ? 'bg-indigo-600 border-indigo-600'
                                        : 'bg-white border-gray-300'
                                } flex items-center justify-center`}
                        >
                            {step.status === 'complete' && (
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className={`text-lg font-semibold ${step.status === 'complete' ? 'text-green-500' : 'text-gray-900'}`}>
                                    {step.name}
                                </h3>
                                <p className={`text-sm ${step.status === 'current' ? 'text-indigo-600' : 'text-gray-500'}`}>
                                    {step.description}
                                </p>
                            </div>
                            {step.status === 'current' && (
                                <span className="flex h-3 w-3">
                                    {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span> */}
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                                </span>
                            )}
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
                        <svg className="ml-2 w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h1m0 0h-1V9h1m2 3h.01" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </span>
                    <span className="text-red-500">-100.00€</span>
                </div>
                <div className="flex justify-between items-center mt-6">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold">100.00€</span>
                </div>
            </div>
        </div>
    );
};

export default MultiStepper;
