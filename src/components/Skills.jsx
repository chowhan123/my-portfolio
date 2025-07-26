import React from "react";
import { SKILLS } from "../constants"; // adjust the import path as needed

function Skills() {
  return (
    <section id="skills" className="py-12 bg-gray-900 text-white rounded-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-wide">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 md:p-4 bg-gray-800 rounded-xl shadow-md hover:shadow-cyan-400/50 transform hover:scale-[1.03] transition duration-300 cursor-pointer"
                title={`${skill.name} - ${skill.experience}`}
              >
                <div className="bg-cyan-700/20 rounded-full p-2 md:p-3 mb-2 text-cyan-400 hover:text-cyan-300 transition-colors text-2xl md:text-3xl">
                  {skill.icon}
                </div>
                <p className="text-sm md:text-base font-semibold tracking-wide text-center">
                  {skill.name}
                </p>
                <p className="text-xs text-gray-400 mt-1 text-center">{skill.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

