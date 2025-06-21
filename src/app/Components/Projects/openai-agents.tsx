"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FaGithub, FaPython } from "react-icons/fa";
import {
  SiStreamlit,
  SiOpenai,
  SiTypescript,
  SiReact,
  SiChainlink,
  SiGoogle,
} from "react-icons/si";
import { Projects } from "./agentProjectsData"; 
import { TbRoute } from "react-icons/tb";

// Tech Icons
const techIcons: Record<string, { icon: JSX.Element; label: string }> = {
  react: { icon: <SiReact className="text-cyan-400" />, label: "React" },
  typescript: { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },
  python: { icon: <FaPython className="text-yellow-400" />, label: "Python" },
  openai: { icon: <SiOpenai className="text-white" />, label: "OpenAI" },
  chainlit: { icon: <SiChainlink className="text-green-400" />, label: "Chainlit" },
  streamlit: { icon: <SiStreamlit className="text-pink-400" />, label: "Streamlit" },
  approuter:{ icon: <TbRoute className="text-orange-400" />, label: "App Router" },
  gemini:{ icon: <SiGoogle className="text-blue-400" />, label: "Gemini api" },
};

export default function AgentsProjects() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const displayedProjects = showAll ? Projects : Projects.slice(0, 5);

  return (
    <section
      id="openai-sdk"
      className="bg-gradient-to-r from-black via-blue-900 to-black py-20 text-white"
    >
      <div className="text-center mb-16 px-4" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold text-cyan-300 mb-4">
          OpenAI SDK Agents Projects
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Discover innovative projects built using the{" "}
          <span className="text-cyan-400 font-semibold">OpenAI SDK</span> —
          showcasing intelligent agents that automate tasks using{" "}
          <span className="text-yellow-400">Python</span>,{" "}
          <span className="text-yellow-400">Chainlit</span>,{" "}
          <span className="text-yellow-400">Streamlit</span>, and more.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="relative min-w-[330px] max-w-[300px] h-auto rounded-xl overflow-hidden group"
            data-aos="fade-up"
          >
            {/* Animated border */}
            <div className="animate-snake-border p-[2px] rounded-xl">
              <div className="bg-black/30 backdrop-blur-md h-full rounded-xl flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300">
                <video
                  src={project.video}
                  controls
                  className="w-full h-36 object-cover rounded-t-xl"
                />
                <div className="p-4 flex flex-col gap-2 text-left">
                  <h2 className="text-cyan-300 text-lg font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-300 whitespace-normal break-words">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech?.map((tech: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 border border-blue-400 rounded-full px-2 py-1 text-xs text-blue-200 bg-blue-900/30"
                      >
                        {techIcons[tech]?.icon}
                        {techIcons[tech]?.label}
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center mt-3">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="flex items-center gap-2 border border-cyan-500 text-white text-sm px-3 py-1 rounded-full hover:bg-cyan-700 transition"
                      >
                        {/* Live Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-cyan-400"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 4.5C7.3 4.5 3.5 8.3 3.5 13s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5S16.7 4.5 12 4.5zm0 15c-3.6 0-6.5-2.9-6.5-6.5S8.4 6.5 12 6.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm0-9.5a3 3 0 100 6 3 3 0 000-6z" />
                        </svg>
                        Live
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-white hover:text-cyan-400"
                        aria-label="GitHub Repo"
                      >
                        <FaGithub className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-14 text-center" data-aos="zoom-in">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-6 rounded-lg font-medium transition-transform hover:scale-105"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
}
