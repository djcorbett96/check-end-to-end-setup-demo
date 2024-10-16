'use client'

import { useContext, useState } from "react";
import ConnectBankAccount from "../../components/ConnectBankAccount";
import importScript from "@/lib/importScript";
import { PageContextProvider } from "@/lib/usePageContext";
import TeamSetup from "../../components/TeamSetup";
import Submission from "../../components/Submission";
import TaxSetup from "../../components/TaxSetup";
import FilingAuthorization from "../../components/FilingAuthorization";
import OnboardingFlow from "../../components/SelfServiceProgressTracker";
import ProgressTracker from "../../components/SelfServiceProgressTracker";
import Complete from "../../components/Complete";
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import React from "react";
import GettingStarted from "@/components/GettingStarted";
import { Separator } from "@/components/ui/separator";

const Step1 = () => {
    return (
        <div className="p-6">
            <GettingStarted />
        </div>
    )
}
const Step2 = () => {
    return (
        < div className="p-6" >
            <ConnectBankAccount />
        </div >
    )
}
const Step3 = () => {
    return (
        < div className="p-6" >
            <TeamSetup />
        </div >
    )
}
const Step4 = () => {
    return (
        < div className="p-6" >
            <TaxSetup />
        </div >
    )
}
const Step5 = () => {
    return (
        < div className="p-6" >
            <FilingAuthorization />
        </div >
    )
}
const Step6 = () => {
    return (
        < div className="p-6" >
            <Submission />
        </div >
    )
}
const Step7 = () => {
    return (
        <div className="p-6">
            <Complete />
        </div >
    )
}

const steps = [
    { id: 1, title: 'Getting Started', component: Step1 },
    { id: 2, title: 'Connect Bank Account', component: Step2 },
    { id: 3, title: 'Team Setup', component: Step3 },
    { id: 4, title: 'Tax Setup', component: Step4 },
    { id: 5, title: 'Filing Authorization', component: Step5 },
    { id: 6, title: 'Submission', component: Step6 },
    { id: 7, title: 'Complete', component: Step7 },
]

const Sidebar = ({ currentStep, completedSteps, onStepClick }) => (
    <div className="flex">
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Payroll Setup</h2>
            <ul>
                {steps.map((step) => {
                    const isCompleted = completedSteps.includes(step.id)
                    const isCurrent = currentStep === step.id
                    const isClickable = isCompleted || isCurrent || step.id === Math.max(...completedSteps) + 1

                    return (
                        <li
                            key={step.id}
                            className={`mb-4 flex items-center ${isCurrent ? 'text-blue-600 font-semibold' : isCompleted ? 'text-green-600' :
                                'text-gray-600'
                                }`}
                        >
                            <div className={`w-6 h-6 mr-3 rounded-full flex items-center justify-center
              ${isCurrent ? 'border-2 border-blue-600' : isCompleted ? 'bg-green-600' :
                                    isClickable ? 'border border-gray-800' :
                                        'border border-gray-400'}
            `}>
                                {isCompleted && (
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            <button
                                onClick={() => onStepClick(step.id)}
                                disabled={!isClickable}
                                className={`focus:outline-none ${isClickable ? 'hover:underline' : 'opacity-50 cursor-not-allowed'}`}
                            >
                                {step.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
        <Separator orientation="vertical" className="h-full" />
    </div>
)

export default function SelfService() {
    importScript('https://cdn.checkhq.com/component-initialize.js');
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    const handleStepClick = (stepId) => {
        if (completedSteps.includes(stepId) || stepId === currentStep || stepId === Math.max(...completedSteps) + 1) {
            setCurrentStep(stepId)
        }
    }

    const CurrentStepComponent = steps.find(step => step.id === currentStep)?.component

    return (
        <PageContextProvider value={{ currentStep, setCurrentStep, completedSteps, setCompletedSteps }}>
            <div className="flex pt-16">
                <Sidebar
                    currentStep={currentStep}
                    completedSteps={completedSteps}
                    onStepClick={handleStepClick}
                />
                <div className="flex-1 flex flex-col">
                    <main className="flex-1">
                        {CurrentStepComponent && <CurrentStepComponent />}
                    </main>
                </div>
            </div>
        </PageContextProvider>
    )
}