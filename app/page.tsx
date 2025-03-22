"use client";
import { BackgroundBeams } from "@/components/background-beams";
import Dither from "@/components/Dither";
import Lanyard from "@/components/Lanyard";
import Squares from "@/components/Square";
import React from "react";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          {/* Connect With Me */}
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          {/* content here */}
        </p>
        {/* <input
          type="text"
          placeholder="parthmandawaria@gmail.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        /> */}
      </div>
      <BackgroundBeams />
    </div>
  );
}

export function Ditherbg() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
</div>
  )
}

export function Squarebg() {
  return (
    <Squares 
      speed={0.5} 
      squareSize={40}
      direction='up' // up, down, left, right, diagonal
      borderColor='#fff'
      hoverFillColor='#222'
    />
  )
}

export default function Page() {
  return (
    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
  )
}
