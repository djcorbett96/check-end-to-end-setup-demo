'use client'

import importScript from "./utils/importScript";
import Setup from "./components/setup";

export default function Home() {
  importScript('https://cdn.checkhq.com/component-initialize.js');
  return (
    <main>
      <div className="w-full text-center text-2xl font-bold">Full Service Setup Component</div>
      <Setup />
    </main>
  );
}
