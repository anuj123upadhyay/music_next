"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";


export function BackgroundBoxes() {
  return (
    <div className="h-[40rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-[40rem] bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <p className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white"> Reach out and let us know how we can assist you in your musical journey.</p>
     
    </div>
  );
}
