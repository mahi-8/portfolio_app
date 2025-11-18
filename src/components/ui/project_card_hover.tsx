
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const projects = [  
  {
    title: "Number Guessing Game",
    description:
      "A fun CLI-based game where the player guesses a randomly generated number using TypeScript and Node.js.",
    link: "https://github.com/mahi-8/python-/tree/main/projects/number_guessing_game",
  },
  {
    title: "Rock, Paper, Scissors Game",
    description:
      "A simple yet engaging Rock, Paper, Scissors game built in Python with random opponent moves.",
    link: "https://github.com/mahi-8/python-/tree/main/projects/rock_paper_scissor",
  },
  {
    title: "Dice Rolling Simulator",
    description:
      "A fun and interactive Dice Rolling Simulator built in Python that generates random dice outcomes every time you roll, making it perfect for beginners learning randomness and game logic.",
    link: "https://github.com/mahi-8/python-/tree/main/projects/dice_rolling_game",
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio website showcasing skills and projects, designed with Next.js, React, and Tailwind CSS.",
  //   link: "#",
  // },
  // {
  //   title: "Data Sweeping App",
  //   description:
  //     "A JavaScript-based utility app for cleaning and analyzing data using array and object manipulation techniques.",
  //   link: "#",
  // },
  
];



export default function ProjectHoverCard() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
          {projects.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              target="_blank"
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </a>
          ))}
        </div>
      
  );
}

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};