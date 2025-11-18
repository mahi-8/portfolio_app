// /components/data/skills_hover_card.tsx

import SkillsHoverEffect from "@/components/ui/skills_card_hover";
import { FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

// ✅ Rename the function to avoid import conflict
export default function SkillsHoverCardSection() {
  return (
    <div className="max-w-5xl mx-auto ">
      <h2
        className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6 transition duration-500 ease-in-out hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 flex justify-center"
      >
        Skills
      </h2>
      <SkillsHoverEffect skills={skills} />
    </div>
  );
}

export const skills = [
  {
    name: "React",
    icon: <FaReact />,
    description: "Building dynamic, component-based user interfaces for modern web applications.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    description: "Optimized React framework for server-side rendering and static site generation.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    description: "Strongly typed JavaScript, ensuring scalability and maintainable codebases.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description: "Utility-first CSS framework for fast and responsive styling.",
  },
  {
    name: "Python",
    icon: <FaPython />,
    description: "Data analysis, scripting, and backend automation using Python.",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    description: "Version control and collaboration for efficient project management.",
  },
];
