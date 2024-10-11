'use client'

import { useEffect } from "react";
import { fetchCompponentUrl } from "@/lib/fetchComponentUrl";
import { usePageContext } from "@/lib/usePageContext";

let handler: any = undefined;
let loaded: boolean = false;


export default function ConnectBankAccount() {
    const { currentStep, setCurrentStep, completedSteps, setCompletedSteps } = usePageContext();

    function loadComponent(componentLink: string, componentDivId: string) {
        if (loaded) return;
        loaded = true;
        try {
            handler = window.CheckComponent.create({
                link: componentLink,
                onEvent: (event: any, data: any) => {
                    if (event === "check-component-company-connect-bank-account-complete") {
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
        const componentLink = await fetchCompponentUrl("connect_bank_account", body);
        loadComponent(componentLink, 'my_component_holder');
    };

    useEffect(() => {
        instantiateComponent();
        return () => {
            console.log("this is a cleanup function")
            if (handler) {
                console.log("closing handler")
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