'use client'

import { fetchCompponentUrl } from "@/lib/fetchComponentUrl";
import { usePageContext } from "@/lib/usePageContext";
import { Button } from "@/components/ui/button";

export default function GettingStarted() {
    const { currentStep, setCurrentStep, setCompletedSteps, completedSteps } = usePageContext();
    return (
        <div className="mx-auto w-full flex flex-col items-center max-w-3xl text-center pt-24 gap-6">
            <h2 className="text-2xl font-semibold">Get ready for your first payroll.</h2>
            <p>You've indicated that this will be your first time paying people. Let's get you set up!</p>
            <Button onClick={() => {
                setCompletedSteps([...completedSteps, currentStep])
                setCurrentStep(currentStep + 1)
            }}>Get Started</Button>
        </div>
    );
};