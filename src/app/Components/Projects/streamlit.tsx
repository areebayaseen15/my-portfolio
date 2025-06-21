"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { StreamlitProjects } from "./streamlitProjectData";
import { FaGithub } from "react-icons/fa"; // GitHub icon

export default function StreamlitAppProjects() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const displayedProjects = showAll
    ? StreamlitProjects
    : StreamlitProjects.slice(0, 8);

  return (
    <div
      id="streamlit"
      className="bg-gradient-to-r from-black via-blue-900  py-20 px-4 text-white"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold text-cyan-300 mb-4">
          My Streamlit Apps
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          These apps were built using Python and Streamlit. Hosted on Streamlit Community Cloud.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="border-b border-gray-700 py-4 hover:bg-white/5 transition px-4 rounded flex justify-between items-center"
            data-aos="fade-up"
          >
            <div>
              <Link href={project.link} target="_blank">
                <p className="text-lg font-medium text-cyan-400 hover:underline">
                  {project.repo}
                </p>
                <p className="text-sm text-gray-400">
                  {project.branch} ∙ {project.path}
                </p>
              </Link>
            </div>

            {project.github && (
              <Link href={project.github} target="_blank" className="text-white hover:text-gray-300 text-xl">
                <FaGithub />
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center" data-aos="zoom-in">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-6 rounded-lg font-medium transition hover:scale-105"
        >
          {showAll ? "Show Less" : "View All Streamlit Projects"}
        </button>
      </div>
    </div>
  );
}
