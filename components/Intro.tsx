import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";


export function Intro() {
  const words = [
    {
      text: "I",
      className: "text-3xl",
    },
    {
      text: "AM",
      className: "text-3xl",
    },
    {
      text: "A",
      className: "text-3xl",
    },
    {
      text: "FULLSTACK",
      className: "text-blue-500 dark:text-blue-500 text-3xl",
    },
    {
      text: "DEVELOPER.",
      className: "text-blue-500 dark:text-blue-500 text-3xl",
    },
  ];
  return (
    <div className="flex flex-col items-center md:items-start justify-center h-[4rem] w-full">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export function ResumeButton() {
  return <InteractiveHoverButton>Resume</InteractiveHoverButton>;
}