import React from "react";
import { SKILLS } from "../constants"; // adjust the import path as needed

function Skills() {
  return (
    <section id="skills" className="py-12 rounded-2xl bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <div>{skill.icon}</div>
              <p className="mt-4 text-lg font-semibold">{skill.name}</p>
              <p className="text-sm text-gray-400">{skill.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
