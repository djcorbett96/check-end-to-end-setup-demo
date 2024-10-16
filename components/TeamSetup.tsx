'use client'

import { useEffect } from "react";
import { fetchCompponentUrl } from "@/lib/fetchComponentUrl";
import { usePageContext } from "@/lib/usePageContext";

let handler: any = undefined;
let loaded: boolean = false;


export default function TeamSetup() {
    const { currentStep, setCurrentStep, completedSteps, setCompletedSteps } = usePageContext();

    function loadComponent(componentLink: string, componentDivId: string) {
        if (loaded) return;
        loaded = true;
        try {
            handler = window.CheckComponent.create({
                link: componentLink,
                onEvent: (event: any, data: any) => {
                    if (event === "check-component-team-setup-complete") {
                        handler.close();
                        setCompletedSteps([...completedSteps, currentStep])
                        setCurrentStep(currentStep + 1)
                    }
                }
            });
            handler.open();
            const componentElement = document.getElementById(
                'check-component-embedded-div',
            );
            if (componentElement) {
                const componentHolder = document.getElementById(componentDivId);
                componentHolder.appendChild(componentElement);
            }
        } catch (err) {
            console.error('Error loading component', err);
        }
    };

    const instantiateComponent = async () => {
        const body = {
            "email": "tony@checkhq.com"
        }
        const componentLink = await fetchCompponentUrl("team_setup", body);
        loadComponent(componentLink, 'my_component_holder');
    };

    useEffect(() => {
        instantiateComponent();
        return () => {
            if (handler) {
                handler.close();
                loaded = false;
            }
        };
    }, []);

    return (
        <div className="">
            <div id="my_component_holder" className="w-full h-[700px]" />
        </div>
    );
};