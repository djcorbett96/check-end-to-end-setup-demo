import React, { useState } from 'react';

const ProgressTracker = ({ steps, currentStep, onStepClick }) => {
    return (
        <div className="w-full mx-auto">
            <div className="flex flex-col justify-between">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}
                    >
                        <button
                            onClick={() => index < currentStep && onStepClick(index)}
                            className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${index < currentStep ? 'bg-blue-600 border-blue-600 cursor-pointer hover:bg-blue-700' :
                                index === currentStep ? 'border-blue-600' : 'border-gray-300'
                                } ${index > currentStep ? 'cursor-not-allowed' : ''}`}
                            disabled={index > currentStep}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-check ${index <= currentStep ? 'text-white' : 'text-gray-400'}`}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </button>
                        <div className="text-xs font-medium uppercase mt-2">{step}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressTracker;