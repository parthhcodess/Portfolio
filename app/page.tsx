"use client";
import React from "react";
import { SkillCloud } from "@/components/SkillsCloud";
import { Intro, ResumeButton } from "@/components/Intro";
import { SocialDock } from "@/components/SocialDock";
import { Skills } from "@/components/Skills";
import { ProjectCard1, ProjectCard2, ProjectCard3, ProjectCard4 } from "@/components/ProjectCards";

export default function Page() {
  return ( 
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="min-h-screen flex justify-center items-center px-3 sm:px-6 md:px-8 pt-20 sm:pt-16">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          <div className="text-center md:text-left w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4">
            <div className="text-sm sm:text-base md:text-xl font-light text-indigo-300 tracking-wide">HEYAA FOLKS, I AM</div>
            <div className="text-3xl sm:text-4xl md:text-6xl font-bold font-serif text-white leading-tight">PARTH</div>
            <div className="w-full max-w-md md:max-w-none overflow-hidden">
              <Intro />
            </div>
            <div className="mt-4">
              <ResumeButton />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="w-full max-w-sm md:max-w-none">
              <SkillCloud />
            </div>
          </div>
        </div>
      </div>
      
      {/* About Me Section */}
      <div id="about" className="flex justify-center items-center py-8 sm:py-12">
        <div className="container max-w-4xl mx-auto px-3 sm:px-6 md:px-8">
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center mb-6 sm:mb-8">About Me</div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 text-white text-sm sm:text-base md:text-lg break-words">
            <p className="text-pretty leading-relaxed">Currently I am learning focused on making some good projects and also learning DevOps. The projects that I will be making are of MERN Stack and also using various Frameworks such as NextJS. I am currently participating in different Hackathons and trying to explore my niche. Recently, I have also won a MLH Track Prize in and Hackathon and curious to learn more and gather more network. I am also interested in learning Web3 and created some basic projects in it, and my curiousness to learning and applying drives me more to be a better Developer.</p>
          </div>
        </div>
      </div>

      {/* Spacer - responsive */}
      <div className="py-16 sm:py-24 md:py-36"></div>

      {/* Experience Section */}
      <div id="experience" className="flex justify-center items-center py-8 sm:py-12">
        <div className="container max-w-4xl mx-auto px-3 sm:px-6 md:px-8">
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center mb-6 sm:mb-8">Experience</div>
          <div className="space-y-4 sm:space-y-6">
            {/* Experience Item 1 */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 text-white">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-400">Hackathon Win</h3>
                  <p className="text-sm sm:text-base md:text-lg font-medium">Hackhound 3.0</p>
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">Feb 2025</span>
              </div>
              <ul className="text-xs sm:text-sm md:text-base space-y-2 text-gray-200 leading-relaxed">
                <li>• Worked on the project called Placementor which helped students to prepare them for placements</li>
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
      <div id="skills" className="flex justify-center items-center py-8 sm:py-12">
        <div className="container max-w-4xl mx-auto px-3 sm:px-6 md:px-8">
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center mb-6 sm:mb-8">Tools I Have Used</div>
          <div className="w-full overflow-hidden">
            <Skills />
          </div>
        </div>
      </div>
      <div className="py-16 sm:py-24 md:py-36"></div>

      {/* Projects Section - responsive */}
      <div id="projects" className="flex justify-center items-center py-8 sm:py-12">
        <div className="container max-w-6xl mx-auto px-3 sm:px-6 md:px-8">
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center mb-6 sm:mb-8">Projects</div>
            {/* Add your project details here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 sm:gap-6 md:gap-8"> 
              <ProjectCard4 />
              <ProjectCard1 />
              <ProjectCard3 />
              <ProjectCard2 />
            </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 md:py-20"></div>
      
      <div className="flex justify-center items-center py-4">
          <div className="text-xs sm:text-sm font-extrabold text-white text-center">Made With 🩷 by Parth </div>
      </div>  

      {/* Additional bottom spacing for SocialDock - responsive */}
      <div className="py-16 sm:py-20 md:py-24"></div>
      
      {/* Add SocialDock back */}
      <SocialDock />
    </div>
  )
}