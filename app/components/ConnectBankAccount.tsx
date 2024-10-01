'use client'

import { useEffect } from "react";
import { fetchCompponentUrl } from "../utils/fetchComponentUrl";
import { usePageContext } from "../utils/usePageContext";

let handler: any = undefined;
let loaded: boolean = false;


export default function ConnectBankAccount() {
    const { currentStep, setCurrentStep } = usePageContext();

    function loadComponent(componentLink: string, componentDivId: string) {
        if (loaded) return;
        loaded = true;
        try {
            handler = window.CheckComponent.create({
                link: componentLink,
                onEvent: (event: any, data: any) => {
                    if (event === "check-component-company-connect-bank-account-complete") {
                        handler.close();
                        setCurrentStep("team_setup");
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
            if (handler) {
                handler.close();
            }
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div id="my_component_holder" className="w-full h-[700px]" />
        </div>
    );
};