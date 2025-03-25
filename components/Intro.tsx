import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";


export function Intro() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export function InteractiveHoverButtonDemo() {
  return <InteractiveHoverButton>Resume</InteractiveHoverButton>;
}