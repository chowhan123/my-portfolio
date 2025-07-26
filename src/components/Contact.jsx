import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

function Contact() {
  return (
    <footer className="w-full bg-black bg-opacity-80 py-6 px-4 text-center rounded-xl mt-12">
      <div className="flex justify-center items-center gap-6 mb-4">
        {SOCIAL_MEDIA_LINKS.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
            aria-label={`social-link-${index}`}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <p className="text-sm text-gray-400 mb-1">
        Contact:{" "}
        <a
          href="mailto:santhoshnaik6929@gmail.com"
          className="underline hover:text-white"
        >
          santhoshnaik6929@gmail.com
        </a>
      </p>
      <p className="text-xs text-gray-500 font-light">
        © {new Date().getFullYear()} Santhosh Chauhan. All rights reserved.
      </p>
    </footer>
  );
}

export default Contact;
