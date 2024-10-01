'use client'

import importScript from "../utils/importScript";
import FullServiceSetup from "../components/FullServiceSetup";

export default function App() {
    importScript('https://cdn.checkhq.com/component-initialize.js');
    return (
        <main>
            <FullServiceSetup />
        </main>
    );
}
