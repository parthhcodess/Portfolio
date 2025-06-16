"use client";
import React from "react";
import { SkillCloud } from "@/components/SkillsCloud";
import { Intro, ResumeButton } from "@/components/Intro";
import { SocialDock } from "@/components/SocialDock";
import { Skills } from "@/components/Skills";
import { ProjectCard1, ProjectCard2, ProjectCard3, ProjectCard4 } from "@/components/ProjectCards";

export default function Page() {
  return ( 
    <div>
      {/* Hero Section */}
      <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-8">
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
      
      {/* About Me Section */}
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

      {/* Experience Section */}
      <div id="experience" className="flex justify-center items-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4 sm:mb-6">Experience</div>
          <div className="space-y-6">
            {/* Experience Item 1 */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-white">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-400">Hackathon Win</h3>
                  <p className="text-base sm:text-lg font-medium">Hackhound 3.0</p>
                </div>
                <span className="text-sm text-gray-300 font-medium">Feb 2025</span>
              </div>
              <ul className="text-sm sm:text-base space-y-2 text-gray-200">
                <li>• Worked on the project called "Placementor" which helped students to prepare them for placements</li>
                <li>• It was a team project and my work was certainly to contribute in Frontend</li>
                <li>• Won the title of Best Open Source Database AI Product</li>
              </ul>
            </div>

            {/* Add more experience items as needed */}
          </div>
        </div>
      </div>
      
      <div className="py-16 sm:py-24 md:py-36"></div>

      {/* Skills Section - responsive */}
      <div id="skills" className="flex justify-center items-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4 sm:mb-6">Tools I Have Used</div>
          <Skills />
        </div>
      </div>
      <div className="py-16 sm:py-24 md:py-36"></div>

      {/* Projects Section - responsive */}
      <div id="projects" className="flex justify-center items-center">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-4 sm:mb-6">Projects</div>
            {/* Add your project details here */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8"> 
              <ProjectCard4 />
              <ProjectCard1 />
              <ProjectCard3 />
              <ProjectCard2 />
            </div>
        </div>
      </div>

      <div className="py-16 sm:py-28 md:py-40"></div>
      
      <div id="projects" className="flex justify-center items-center">
          <div className="text-xs sm:text-sm font-extrabold text-white text-center mb-4 sm:mb-6 ">Made With 🩷 by Parth </div>
      </div>  

      {/* Additional bottom spacing for SocialDock - responsive */}
      <div className="py-10 sm:py-16 md:py-20"></div>
      
      {/* Add SocialDock back */}
      <SocialDock />
    </div>
  )
}