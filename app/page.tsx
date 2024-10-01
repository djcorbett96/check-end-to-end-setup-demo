'use client'

import importScript from "./utils/importScript";
import Link from "next/link";

export default function App() {
    importScript('https://cdn.checkhq.com/component-initialize.js');
    return (
        <main className="flex h-screen">
            <div className="m-auto text-center">
                <h1 className="font-bold text-3xl pb-4">Productized Setup Demo</h1>
                <Link href="/fullservice">
                    <button className="px-6 py-2 rounded-md bg-[#0053B8] text-white font-bold hover:bg-[#1E293B]">Begin</button>
                </Link>
            </div>
        </main>
    );
}
