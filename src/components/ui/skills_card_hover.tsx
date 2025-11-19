// /components/ui/skills_card_hover.tsx
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

export default function SkillsHoverEffect({ skills }: { skills: { name: string; icon: ReactNode; description: string }[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {skills.map((item, idx) => (
        <div
          key={idx}
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

          <SkillCard>
            <SkillIcon>{item.icon}</SkillIcon>
            <SkillTitle>{item.name}</SkillTitle>
            <SkillDescription>{item.description}</SkillDescription>
          </SkillCard>
        </div>
      ))}
    </div>
  );
}

export const SkillCard = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 p-4 flex flex-col items-center text-center">{children}</div>
    </div>
  );
};

export const SkillIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="text-4xl mb-4 text-pink-400">{children}</div>
);

export const SkillTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-zinc-100 font-bold tracking-wide text-lg">{children}</h4>
);

export const SkillDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{children}</p>
);

