import { cn } from "../lib/util";
import { Marquee } from "./ui/marquee";
import Image from "next/image";

const techStack = [
  {
    name: "React",
    logo: "/logos/react.svg",
  },
  {
    name: "Next.js",
    logo: "/logos/nextjs.svg",
  },
  {
    name: "TypeScript",
    logo: "/logos/typescript.svg",
  },
  {
    name: "JavaScript",
    logo: "/logos/javascript.svg",
  },
  {
    name: "Python",
    logo: "/logos/python.svg",
  },
  {
    name: "C++",
    logo: "/logos/cpp.svg",
  },
  {
    name: "CSS",
    logo: "/logos/css.svg",
  },
  {
    name: "HTML",
    logo: "/logos/html.svg",
  },
  {
    name: "Node.js",
    logo: "/logos/nodejs.svg",
  },
  {
    name: "Express",
    logo: "/logos/express.svg",
  },
  // {
  //   name: "Firebase",
  //   logo: "/logos/firebase.svg",
  // },
  {
    name: "PostgreSQL",
    logo: "/logos/postgresql.svg",
  },
  {
    name: "Prisma",
    logo: "/logos/prisma.svg",
  },
  {
    name: "MongoDB",
    logo: "/logos/mongodb.svg",
  },
  {
    name: "Git",
    logo: "/logos/git.svg",
  }
  // {
  //   name: "Nginx",
  //   logo: "/logos/nginx.svg",
  // },
  // {
  //   name: "Solidity",
  //   logo: "/logos/solidity.svg",
  // },
  // {
  //   name: "TensorFlow",
  //   logo: "/logos/tensorflow.svg",
  // },
];

const firstRow = techStack.slice(0, techStack.length / 2);
const secondRow = techStack.slice(techStack.length / 2);

const TechCard = ({
  logo,
  name,
}: {
  logo: string;
  name: string;
}) => {
  return (
    <div 
      className={cn(
        "relative h-full w-32 mx-2 flex flex-col items-center justify-center cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Image 
            src={logo} 
            alt={`${name} logo`} 
            width={48} 
            height={48}
            style={{ objectFit: "contain" }}
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div className="text-sm font-medium text-white mt-2">
          {name}
        </div>
      </div>
    </div>
  );
};

export function Skills() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl">
      <Marquee reverse className="[--duration:30s] pb-4">
        {firstRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:30s]">
        {secondRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}
