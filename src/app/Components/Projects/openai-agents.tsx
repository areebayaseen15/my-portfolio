"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Projects } from "./agentProjectsData";

export default function AgentsProjects() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const displayedProjects = showAll ? Projects : Projects.slice(0, 5);

  return (
    <section
      id="openai-sdk"
      className="relative bg-gradient-to-r from-black via-blue-900 to-black py-20 text-white overflow-hidden"
    >
      {/* === Animated Background Blobs === */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full blur-2xl animate-ping z-0" />

      {/* === Content === */}
      <div className="relative z-10">
        <div className="text-center mb-16 px-4" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-cyan-300 mb-4">
            OpenAI SDK Agents Projects
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover innovative projects built using the{" "}
            <span className="text-cyan-400 font-semibold">OpenAI SDK</span> —
            showcasing intelligent agents that automate tasks, interact with
            users, and perform complex operations using tools like{" "}
            <span className="text-yellow-400">Python</span>,{" "}
            <span className="text-yellow-400">Chainlit</span>, and{" "}
            <span className="text-yellow-400">Streamlit</span>. These projects
            highlight real-world use cases of agent-based AI development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-black/30 border border-cyan-400 rounded-xl backdrop-blur-md shadow-md 
              hover:scale-105 transition-transform duration-300 w-[330px] flex flex-col overflow-hidden 
              group"
              data-aos="fade-up"
            >
              {/* === Border Animation Effect (Snake Style) === */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400">
                <div className="absolute w-full h-full border-2 border-cyan-400 rounded-xl animate-borderSpin z-[-1]" />
              </div>

              <video
                src={project.video}
                controls
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col gap-2 text-left">
                <h2 className="text-cyan-300 text-lg font-semibold">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-white bg-cyan-600 hover:bg-cyan-700 text-sm px-3 py-1 rounded"
                  >
                    GitHub
                  </Link>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-yellow-400 hover:underline text-sm"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* === View All Button === */}
        <div className="mt-14 text-center" data-aos="zoom-in">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-6 rounded-lg font-medium transition-transform hover:scale-105"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
}
