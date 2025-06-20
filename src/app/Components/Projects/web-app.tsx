"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Projects } from "./webProjectData"; // Your updated project array

export default function WebAppProjects() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const displayedProjects = showAll ? Projects : Projects.slice(0, 5);

  return (
    <div
      id="web-projects"
      className="bg-gradient-to-r from-black via-blue-900 to-black py-20 text-white overflow-hidden"
    >
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold text-cyan-300 mb-4">
          Web App Projects
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore my featured web applications — crafted with powerful tools like Next.js, Stripe, CMS, OpenAI, and more.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-black/30 border border-cyan-400 rounded-xl backdrop-blur-md shadow-md hover:scale-105 transition-transform duration-300 w-[330px] flex flex-col overflow-hidden"
            data-aos="fade-up"
          >
            <video
              src={project.video}
              controls
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-2 text-left">
              <h2 className="text-cyan-300 text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-300">{project.description}</p>
              <div className="flex justify-between items-center mt-3">
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-white bg-cyan-600 hover:bg-cyan-700 text-sm px-3 py-1 rounded"
                >
                  GitHub
                </Link>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-yellow-400 hover:underline text-sm"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
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
