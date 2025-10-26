import React from "react";
export default function IridescentHeading({className="",children}:{className?:string;children:React.ReactNode;}){
  return(<h1 className={["smh-heading tracking-wide [text-shadow:_0_1px_0_rgba(255,255,255,.35)]",className].join(" ")}>{children}</h1>);
}
