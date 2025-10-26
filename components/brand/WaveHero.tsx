"use client";
import React from "react";
type Props={className?:string;particles?:Array<"gold"|"teal"|"magenta">;filmGrain?:boolean;children?:React.ReactNode;};
export default function WaveHero({className="",particles=["gold","teal"],filmGrain=true,children}:Props){
  return(
    <section className={["relative overflow-hidden smh-gradient-bg smh-wave-mask",className].join(" ")}>
      {particles.includes("gold") && <div aria-hidden className="smh-particles-gold absolute inset-0 pointer-events-none mix-blend-soft-light" />}
      {particles.includes("teal") && <div aria-hidden className="smh-particles-teal absolute inset-0 pointer-events-none mix-blend-soft-light" />}
      {particles.includes("magenta") && <div aria-hidden className="smh-particles-magenta absolute inset-0 pointer-events-none mix-blend-soft-light" />}
      {filmGrain && <div aria-hidden className="smh-film-grain absolute inset-0 pointer-events-none" />}
      <div className="relative isolate">{children}</div>
    </section>
  );
}
