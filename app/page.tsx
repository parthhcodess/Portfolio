"use client";
import React from "react";
import { SkillCloud } from "@/components/SkillsCloud";
import { Intro, ResumeButton } from "@/components/Intro";
import { SocialDock } from "@/components/SocialDock";
import { Skills } from "@/components/Skills";
import { ProjectCard1, ProjectCard2, ProjectCard3 } from "@/components/ProjectCards";

export default function Page() {
  return ( 
    // Increase top padding specifically for mobile
    <div className="pt-16 sm:pt-10 md:pt-20">
      {/* Add more top padding to this section on mobile */}
      <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 py-12 sm:py-12 md:py-16 mt-8 sm:mt-0">
        <div className="container max-w-6xl flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
          <div className="text-center md:text-left w-full md:w-1/2 flex flex-col items-center md:items-start">
            <div className="text-base sm:text-lg md:text-xl font-light text-indigo-300">HEYAA FOLKS, I AM</div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mt-2 text-white">PARTH</div>
            <div className="w-full overflow-x-hidden">
              <Intro />
            </div>
            <div className="mt-4 p-2 sm:p-0">
              <ResumeButton />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-auto">
            <SkillCloud />
          </div>
        </div>
      </div>

      {/* Spacer - responsive */}
      <div className="py-6 sm:py-8 md:py-10"></div>
      
      {/* About Me Section - responsive */}
      <div id="about" className="flex justify-center items-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4 sm:mb-6">About Me</div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-white text-sm sm:text-base md:text-lg break-words">
            <p className="text-pretty">Currently I am learning focused on making some good projects and also learning DevOps. The projects that I will be making are of MERN Stack and also using various Frameworks such as NextJS. I am currently participating in different Hackathons and trying to explore my niche. Recently, I have also won a MLH Track Prize in and Hackathon and curious to learn more and gather more network. I am also interested in learning Web3 and created some basic projects in it, and my curiousness to learning and applying drives me more to be a better Developer.</p>
          </div>
        </div>
      </div>

      {/* Spacer - responsive */}
      <div className="py-16 sm:py-24 md:py-36"></div>

      {/* Skills Section - responsive */}
      <div id="skills" className="flex justify-center items-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4 sm:mb-6">Tools I Have Used</div>
          <Skills />
        </div>
      </div>
      
      {/* Spacer - responsive */}
      <div className="py-16 sm:py-24 md:py-36"></div>

      {/* Projects Section - responsive */}
      <div id="projects" className="flex justify-center items-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4 sm:mb-6">Projects</div>
            {/* Add your project details here */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8"> 
              <ProjectCard1 />
              <ProjectCard3 />
              <ProjectCard2 />
            </div>
        </div>
      </div>

      {/* Additional bottom spacing for SocialDock - responsive */}
      <div className="py-10 sm:py-16 md:py-20"></div>
      
      {/* Add SocialDock back */}
      <SocialDock />
    </div>
  )
}