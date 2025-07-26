import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Bio from "./components/Bio";

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Bio />
          <Skills />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Left side: Work Experience */}
          <div className="col-span-1 h-full">
            <WorkExperience />
          </div>

          {/* Right side: Achievements and Education */}
          <div className="col-span-1 grid grid-rows-2 gap-8 h-full">
            <div className="h-full">
              <Education />
            </div>
            <div className="h-full">
              <Achievements />
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default App;

