"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

// Your tsProjects array remains the same
import { tsProjects } from "./tsProjectsData"; // (optional) move your project array to a separate file for cleanliness

export default function CliProjects() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const displayedProjects = showAll ? tsProjects : tsProjects.slice(0, 5);

  return (
    <div
      id="ts-projects"
      className="bg-gradient-to-r from-black via-blue-900 to-black py-20 text-white overflow-hidden"
    >
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold text-cyan-300 mb-4">
          TypeScript CLI Projects
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          These TypeScript CLI projects are built with performance, logic, and
          real-time interaction in mind.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {displayedProjects.map((tsProjects, index) => (
          <div
            key={index}
            className="bg-black/30 border border-cyan-400 rounded-xl backdrop-blur-md shadow-md hover:scale-105 transition-transform duration-300 w-[300px] flex flex-col overflow-hidden"
            data-aos="fade-up"
          >
            <Image
              src={tsProjects.image}
              alt={tsProjects.title}
              width={300}
              height={180}
              className="object-cover w-full h-36 rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-2 text-left">
              <h2 className="text-cyan-300 text-lg font-semibold">
                {tsProjects.title}
              </h2>
              <p className="text-sm text-gray-300">{tsProjects.description}</p>
              <div className="text-yellow-400 text-xs mt-1">
                ▶ {tsProjects.npx}
              </div>
              <div className="flex justify-between items-center mt-3">
                <Link
                  href={tsProjects.github}
                  target="_blank"
                  className="text-white bg-cyan-600 hover:bg-cyan-700 text-sm px-3 py-1 rounded"
                >
                  GitHub
                </Link>
                <Link
                  href={tsProjects.github}
                  target="_blank"
                  aria-label="GitHub Repo"
                  className="text-white hover:text-cyan-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008.01 10.96c.58.11.79-.25.79-.56v-2.2c-3.26.71-3.95-1.57-3.95-1.57a3.12 3.12 0 00-1.3-1.7c-1.06-.72.08-.71.08-.71a2.48 2.48 0 011.81 1.22 2.51 2.51 0 003.43 1 2.53 2.53 0 01.75-1.59c-2.6-.3-5.33-1.3-5.33-5.81a4.54 4.54 0 011.21-3.14 4.24 4.24 0 01.11-3.09s.98-.31 3.2 1.2a11.07 11.07 0 015.84 0c2.22-1.51 3.2-1.2 3.2-1.2a4.24 4.24 0 01.11 3.09 4.53 4.53 0 011.21 3.14c0 4.53-2.73 5.51-5.34 5.8a2.83 2.83 0 01.81 2.2v3.27c0 .31.21.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Toggle Button */}
      <div className="mt-14 text-center" data-aos="zoom-in">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-6 rounded-lg font-medium transition hover:scale-105"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </div>
  );
}
