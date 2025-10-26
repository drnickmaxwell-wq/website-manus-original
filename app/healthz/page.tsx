"use client";
import React from "react";
export default function Page(){
  if (typeof window === "undefined") return null;
  const s = getComputedStyle(document.documentElement);
  const gradient = s.getPropertyValue("--smh-gradient").trim();
  const text = s.getPropertyValue("--smh-text").trim();
  const gold = s.getPropertyValue("--smh-gold").trim();
  return (
    <div className="container mx-auto px-4 py-10 space-y-3">
      <h1 className="smh-heading text-3xl">Health Check</h1>
      <div>Pathname: <code>{window.location.pathname}</code></div>
      <div>Gradient: <code>{gradient}</code></div>
      <div>Gold: <code>{gold}</code></div>
      <div>Text: <code>{text}</code></div>
    </div>
  );
}
