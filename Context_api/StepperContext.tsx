"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Step } from '@/components/MultiStep';  // Assuming you have exported the Step type from your Stepper file.

type StepperContextType = {
    steps: Step[];
    currentStepIndex: number;
    goToNextStep: () => void;
    goToPreviousStep: () => void;
};

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const useStepperContext = () => {
    const context = useContext(StepperContext);
    if (context === undefined) {
        throw new Error('useStepperContext must be used within a StepperProvider');
    }
    return context;
};

type StepperProviderProps = {
    children: ReactNode;
    initialSteps: Step[];
};

export const StepperProvider: React.FC<StepperProviderProps> = ({ children, initialSteps }) => {
    const [steps, setSteps] = useState<Step[]>(initialSteps);
    const [currentStepIndex, setCurrentStepIndex] = useState(() => steps.findIndex(step => step.status === "current"));

    const goToNextStep = () => {
        if (currentStepIndex < steps.length - 1) {
            setSteps(prevSteps =>
                prevSteps.map((step, index) => ({
                    ...step,
                    status: index === currentStepIndex + 1 ? "current" : index <= currentStepIndex ? "complete" : "upcoming"
                }))
            );
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const goToPreviousStep = () => {
        if (currentStepIndex > 0) {
            setSteps(prevSteps =>
                prevSteps.map((step, index) => ({
                    ...step,
                    status: index === currentStepIndex - 1 ? "current" : index < currentStepIndex - 1 ? "complete" : "upcoming"
                }))
            );
            setCurrentStepIndex(currentStepIndex - 1);
        }
    };

    return (
        <StepperContext.Provider value={{ steps, currentStepIndex, goToNextStep, goToPreviousStep }}>
            {children}
        </StepperContext.Provider>
    );
};
