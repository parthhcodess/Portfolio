"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import { SkillCloud } from "@/components/SkillsCloud";
import { Intro, ResumeButton } from "@/components/Intro";
import { SocialDock } from "@/components/SocialDock";

// export function TextGenerateEffectDemo() {
//   return <TextGenerateEffect words={words} />;
// }

export default function Page() {
  return ( 
    <div className="sm:pt-20">
      {/* <div className="h-screen flex justify-center items-center absolute inset-0">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div> */}
      {/* <div className="flex justify-center">
        <TextGenerateEffectDemo />
      </div> */}
      <div className="flex justify-center items-center px-8 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-xl font-light text-indigo-300">HEYAA FOLKS, I AM</div>
            <div className="text-6xl font-bold font-serif mt-2 text-white">PARTH</div>
            <div><Intro /></div>
            <div><ResumeButton /></div>
          </div>
          <div className="w-full md:w-auto fixed md:static">
            <SkillCloud />
          </div>
        </div>
      </div>
      
      {/* Spacer to move About Me section further down */}
      <div className="py-10"></div>
      
      {/* About Me Section */}
      <div className="flex justify-center items-center">
        <div className="container max-w-4xl mx-auto px-8">
          <div className="text-3xl font-extrabold text-white text-center mb-6">About Me</div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-white text-lg">
            {/* Add your personal bio here */}
            <p>Currently I am learning focused on making some good projects and also learning DevOps. The projects that I will be making are of MERN Stack and also using various Frameworks such as NextJS. I am currently participating in different Hackathons and trying to explore my niche. Recently, I have also won a MLH Track Prize in and Hackathon and curious to learn more and gather more network. I am also interested in learning Web3 and created some basic projects in it, and my curiousness to learning and applying drives me more to be a better Developer.</p>
          </div>
        </div>
      </div>

      {/* Spacer to move Tools I Have Used section further down */}
      <div className="py-36"></div>

      {/* Skills Section */}
      <div className="flex justify-center items-center ">
        <div className="container max-w-4xl mx-auto px-8">
          <div className="text-3xl font-extrabold text-white text-center mb-6">Tools I Have Used</div>
        </div>
      </div>
      
      {/* Additional bottom spacing for SocialDock */}
      <div className="py-20"></div>
      
      {/* Add SocialDock back */}
      <SocialDock />
    </div>
  )
}
