import React from "react";
import { BIO } from "../constants";

const Bio = () => {
  return (
    <div className="w-full max-w-4xl px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-2">
        Who am I?
      </h2>
      <div className="space-y-4 text-gray-300 leading-relaxed">
        {BIO.map((paragraph, index) => (
          <p key={index} className="text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Bio;
