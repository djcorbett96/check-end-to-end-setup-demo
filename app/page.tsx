'use client'

import { useEffect, useState } from "react";
import importScript from "@/lib/importScript";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function App() {
    importScript('https://cdn.checkhq.com/component-initialize.js');

    return (
        <main className="flex h-screen">
            <div className="m-auto text-center items-center flex flex-col gap-4 max-w-lg">
                <h1 className="font-semibold text-3xl pb-4">Welcome DJ's Test Co 3!</h1>
                <h2 className="text-xl pb-4">Let's start by learning more about your business.</h2>
                <Link href="/fullservice" className="w-fit">
                    <Button>Begin</Button>
                </Link>
            </div>
        </main>
    );
}
