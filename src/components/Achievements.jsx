import React from "react";
import { ACHIVEMENTS } from "../constants";

function Achievements() {
  return (
    <div className="py-4 px-4 bg-gray-900 rounded-xl h-25">
      <h2 className="text-3xl font-poppins text-center text-white mb-5">
        Achievements
      </h2>
      {ACHIVEMENTS.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg p-6 mb-2 transition-all hover:shadow-xl"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {item.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
