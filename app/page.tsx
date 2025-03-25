"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import { SkillCloud } from "@/components/SkillsCloud";
import { SocialDock } from "@/components/SocialDock";
import { Background } from "@/components/BG";
import { Nav } from "@/components/Nav";
import { Intro } from "@/components/Intro";


// export function TextGenerateEffectDemo() {
//   return <TextGenerateEffect words={words} />;
// }

export default function Page() {
  return ( 
    <div className="relative min-h-screen">
      {/* Background layer */}
      <div className="fixed inset-0 z-0">
        <Background />
      </div>
      
      {/* Content layer */}
      <div className="relative z-10 sm:pt-20">
        {/* <div className="h-screen flex justify-center items-center absolute inset-0">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div> */}
        {/* <div className="flex justify-center">
          <TextGenerateEffectDemo />
        </div> */}
        <SocialDock />
        <div className="flex justify-center absolute inset-0 ">
          <Nav />
        </div>
        <div>
          <Intro />
        </div>
        {/* <div>
          <InteractiveHoverButtonDemo />
        </div> */}
        <div>
          <SkillCloud />
        </div>
      </div>
    </div>
  )
}
