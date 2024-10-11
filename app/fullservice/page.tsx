'use client'

import importScript from "@/lib/importScript";
import FullServiceSetup from "../../components/FullServiceSetup";

export default function App() {
    importScript('https://cdn.checkhq.com/component-initialize.js');
    return (
        <main className="pt-16">
            <FullServiceSetup />
        </main>
    );
}
