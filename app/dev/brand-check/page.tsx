"use client";
import React from "react";
const Swatch = ({name, varName}:{name:string; varName:string})=>{
  const style: React.CSSProperties = { background: `var(${varName})`, borderRadius:12, height:64 };
  return (
    <div className="flex items-center gap-4">
      <div style={style} className="w-24 border" />
      <div className="text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-xs text-neutral-500">{varName}</div>
      </div>
    </div>
  );
};
export default function Page(){
  return (
    <main className="min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Brand Tokens — Live</h1>
      <Swatch name="Magenta" varName="--smh-primary-magenta" />
      <Swatch name="Teal"    varName="--smh-primary-teal" />
      <Swatch name="Gold"    varName="--smh-accent-gold" />
      <div className="rounded-xl p-6 border">
        <div className="h-24 w-full rounded-lg smh-gradient-bg" />
        <div className="text-xs mt-3 text-neutral-600">Background above should show your 135° magenta→teal gradient with gold tail.</div>
      </div>
    </main>
  );
}
