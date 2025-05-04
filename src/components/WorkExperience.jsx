import React from "react";
import { EXPERIENCES } from "../constants";

function WorkExperience() {
  return (
    <div className="py-8 px-4 bg-gray-900">
      <h2 className="text-4xl font-poppins text-center text-white mb-8">
        Work Experience
      </h2>
      {EXPERIENCES.map((experience, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-all"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            {experience.title}
          </h3>
          <h4 className="text-xl text-gray-700">{experience.company}</h4>
          <p className="text-md text-gray-500 mt-2">
            <strong>Duration:</strong> {experience.duration}
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            {experience.description.map((desc, idx) => (
              <li key={idx} className="list-disc pl-6">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
