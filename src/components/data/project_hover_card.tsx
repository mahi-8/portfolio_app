// ✅ Fix: import HoverEffect as default, not named
import HoverEffect from "@/components/ui/project_card_hover";
import { NavbarButton } from "../ui/navBar";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      {/* For Gradient Text */}
      <h2  className="text-3xl font-bold text-center 
               text-gray-800 dark:text-white mb-6
               transition duration-500 ease-in-out
               hover:scale-105 hover:text-transparent 
               hover:bg-clip-text hover:bg-gradient-to-r 
               hover:from-pink-400 hover:to-purple-500 flex justify-center" >
        Projects
      </h2>
      {/* ✅ HoverEffect is default export */}
      {/* Cast props to any to satisfy TypeScript when imported component has no prop types */}
      <HoverEffect {...({ items: projects } as any)} />
    </div>
  );
}

export const projects = [  
  {
    title: "Number Guessing Game",
    description:
      "A fun CLI-based game where the player guesses a randomly generated number using TypeScript and Node.js.",
     href: "https://github.com/mahi-8/python-/tree/main/projects/number_guessing_game",
   
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
  

];

//  Projects will be added when It will be created and deployed

