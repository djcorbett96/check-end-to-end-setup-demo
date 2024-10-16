'use client'

import { useEffect } from "react";
import { fetchCompponentUrl } from "@/lib/fetchComponentUrl";
import { usePageContext } from "@/lib/usePageContext";
import { useRouter } from 'next/navigation'

let handler: any = undefined;
let loaded: boolean = false;


export default function FullServiceSetup() {
    const router = useRouter();

    function loadComponent(componentLink: string, componentDivId: string) {
        if (loaded) return;
        loaded = true;
        try {
            handler = window.CheckComponent.create({
                link: componentLink,
                onEvent: (event: any, data: any) => {
                    console.log(event);
                    if (event === "check-component-new-to-payroll-indicated") {
                        handler.close();
                        router.push('/selfservice')
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
            "signer_name": "Tony Stark",
            "signer_title": "CEO",
            "email": "tony@checkhq.com"
        }
        const componentLink = await fetchCompponentUrl("full_service_setup_submission", body);
        console.log(componentLink);
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