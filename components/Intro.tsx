import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";


export function Intro() {
  const words = [
    {
      text: "I",
      className: "text-xl sm:text-2xl md:text-3xl", // Responsive text size
    },
    {
      text: "AM",
      className: "text-xl sm:text-2xl md:text-3xl",
    },
    {
      text: "A",
      className: "text-xl sm:text-2xl md:text-3xl",
    },
    {
      text: "FULLSTACK",
      className: "text-blue-500 dark:text-blue-500 text-xl sm:text-2xl md:text-3xl",
    },
    {
      text: "DEVELOPER.",
      className: "text-blue-500 dark:text-blue-500 text-xl sm:text-2xl md:text-3xl",
    },
  ];
  return (
    <div className="flex flex-col items-center md:items-start justify-center min-h-[4rem] w-full overflow-visible">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export function ResumeButton() {
  const handleClick = () => {
    window.open('/ParthResume.pdf', '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div onClick={handleClick}>
      <InteractiveHoverButton>Resume</InteractiveHoverButton>
    </div>
  );
}