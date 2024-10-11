'use client'

import { fetchCompponentUrl } from "@/lib/fetchComponentUrl";
import { usePageContext } from "@/lib/usePageContext";
import { Button } from "@/components/ui/button";

export default function Submission() {
    const { currentStep, setCurrentStep, completedSteps, setCompletedSteps } = usePageContext();
    return (
        <div className="mx-auto w-full flex flex-col items-center max-w-3xl text-center pt-24 gap-6">
            <h1 className="text-2xl">You're almost there! Click below to submit your information for review.</h1>
            <Button className="" onClick={() => {
                setCompletedSteps([...completedSteps, currentStep])
                setCurrentStep(currentStep + 1)
            }}>Submit</Button>
        </div>
    );
};