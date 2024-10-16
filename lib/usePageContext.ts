import { createCtx } from './createContext';

type PageContextType = {
    currentStep: number;
    setCurrentStep: (data: number) => void;
    completedSteps: number[];
    setCompletedSteps: (data: number[]) => void;
};

// Setup LocatorProvider to pass the [selected, hovered, focused]Ids between Marker interactions and LocatorCard interactions
export const [usePageContext, PageContextProvider] = createCtx<PageContextType>(
    'Attempted to call usePageContext outside of PageContextProvider'
);