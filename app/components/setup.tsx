'use client'

import { useEffect } from "react";
import loadComponent from "../utils/loadComponent";
import { fetchCompponentUrl } from "../utils/fetchComponentUrl";

const Setup = () => {
    const instantiateComponent = async () => {
        const componentLink = await fetchCompponentUrl();
        console.log('componentLink', componentLink);
        loadComponent(componentLink, 'my_component_holder');
    };

    useEffect(() => {
        instantiateComponent();
    }, []);

    return (
        <div>
            <div id="my_component_holder" className="w-full h-screen" />
        </div>
    );
};

export default Setup;