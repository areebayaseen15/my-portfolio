"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaStripe,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiClerk,
  SiOpenai,
  SiContentful,
} from "react-icons/si"; // For CMS (Contentful) or replace with another if needed
import { Projects } from "./webProjectData";

export const techIcons: Record<string, { icon: JSX.Element; label: string }> = {
  html: { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
  css: { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
  js: { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
  typescript: { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },
  react: { icon: <FaReact className="text-cyan-400" />, label: "React" },
  nextjs: { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
  tailwind: { icon: <SiTailwindcss className="text-teal-300" />, label: "Tailwind" },
  stripe: { icon: <FaStripe className="text-purple-400" />, label: "Stripe" },
  clerk: { icon: <SiClerk className="text-pink-400" />, label: "Clerk" },
  openai: { icon: <SiOpenai className="text-green-300" />, label: "OpenAI" },
  cms: { icon: <SiContentful className="text-sky-400" />, label: "CMS" },
};

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
            className="bg-black/30 border border-cyan-400 rounded-xl backdrop-blur-md shadow-md hover:scale-105 transition-transform duration-300 w-[280px] sm:w-[300px] md:w-[330px] flex flex-col overflow-hidden"
            data-aos="fade-up"
          >
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

              {/* Tech Stack Icons */}
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

              {/* Buttons */}
              <div className="flex justify-between items-center mt-3">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 border border-cyan-500 text-white text-sm px-3 py-1 rounded-full hover:bg-cyan-700 transition"
                  >
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
                  >
                    <FaGithub className="w-5 h-5" />
                  </Link>
                )}
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
