import Header from "@/components/main_component/header";
import Projects from "@/components/main_component/projects";
import SKills from '@/components/main_component/skills'
import HeroSection from "@/components/main_component/hero_section";
import Contact from "@/components/main_component/contact"


export default function Home() {
  return (
    <>
    <div className="">
      
      <Header />
      
        {/* Main content here */}
        <HeroSection />
        <Projects />
        <SKills />
        <Contact /> 
        </div>    
    </>
    //  Header , Hero Section COmpleted Also Footer.
  );
}

// Color Adjustment are remaining 

