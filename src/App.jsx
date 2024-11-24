import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
      
      {/* Other Sections */}

      
      
    </div>
  );
}

export default App;
