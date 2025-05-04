import React from "react";
import { EDUCATION } from "../constants";

function Education() {
  return (
    <div className="py-5 px-4 bg-gray-900 rounded-xl">
      <h2 className="text-3xl font-poppins text-center text-white mb-1">
        Education
      </h2>
      {EDUCATION.map((edu, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all hover:shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            {edu.degree}
          </h3>
          <h4 className="text-xl text-gray-700 mb-1">{edu.institution}</h4>
          <p className="text-gray-500">
            <strong>Year:</strong> {edu.duration}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Education;
