"use client";
import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiSanity,
  SiStreamlit,
  SiFastapi,
  SiPython,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { AiFillOpenAI } from "react-icons/ai";
import { LuFigma } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const skills = [
    {
      icon: <FaHtml5 className="text-orange-500 h-10 w-10" />,
      name: "HTML",
      desc: "Building structured and semantic web pages.",
    },
    {
      icon: <FaCss3Alt className="text-blue-500 h-10 w-10" />,
      name: "CSS",
      desc: "Crafting beautiful and responsive designs.",
    },
    {
      icon: <SiJavascript className="text-yellow-400 h-10 w-10" />,
      name: "JavaScript",
      desc: "Enhancing interactivity on the web.",
    },
    {
      icon: <SiTypescript className="text-blue-400 h-14 w-10" />,
      name: "TypeScript",
      desc: "Adding type safety to JavaScript.",
    },
    {
      icon: <RiNextjsFill className="text-white h-10 w-10" />,
      name: "Next.js",
      desc: "Building fast and scalable React applications.",
    },
    {
      icon: <RiTailwindCssLine className="text-cyan-300 h-14 w-10" />,
      name: "Tailwind CSS",
      desc: "Utility-first styling for sleek UIs.",
    },
    {
      icon: <LuFigma className="text-pink-300 h-10 w-10" />,
      name: "Figma",
      desc: "Designing user interfaces and prototypes.",
    },
    {
      icon: <SiSanity className="text-pink-400 h-10 w-10" />,
      name: "Sanity CMS",
      desc: "Managing structured content with ease.",
    },
    {
      icon: <SiFastapi className="text-green-300 h-10 w-10" />,
      name: "FastAPI",
      desc: "Fast, modern backend APIs with Python.",
    },
    {
      icon: <SiPython className="text-green-500 h-10 w-10" />,
      name: "Python",
      desc: "General-purpose scripting and automation.",
    },
    {
      icon: <SiStreamlit className="text-red-300 h-10 w-10" />,
      name: "Streamlit",
      desc: "Quickly turning Python scripts into web apps.",
    },
    {
      icon: <AiFillOpenAI className="text-green-200 h-10 w-10" />,
      name: "OpenAI SDK",
      desc: "Creating intelligent AI-powered apps.",
    },
  ];

  return (
    <div
      id="skill"
      className="relative bg-gradient-to-r from-black via-blue-900 to-black py-24 text-white overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-cyan-400 opacity-20 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-10 blur-2xl rounded-full animate-ping z-0" />

      <section className="body-font relative z-10">
        <div className="container px-5 mx-auto text-center">
         <h1 className="text-4xl font-bold mb- space-x-2">
            <span className="text-cyan-400">Tech</span>
            <span className="text-white">Stack </span>

          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 mb-12">
            Skilled in HTML, CSS, TypeScript, and Next.js, with expertise in
            building responsive and scalable web applications. Passionate about
            delivering high-quality solutions and staying up-to-date with the
            latest web development trends and technologies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 place-items-center">
            {skills.map((skill, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="relative p-4 w-64 flex flex-col items-center text-center bg-black/30 backdrop-blur-md rounded-lg border border-cyan-400 shadow-lg transition-transform transform hover:scale-105 group"
              >
                {/* Animated Border Dot Effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-dashed border-cyan-500 opacity-0 group-hover:opacity-100 animate-[spin_4s_linear_infinite] pointer-events-none" />

                <div className="mb-4 transition-transform transform group-hover:rotate-6">
                  {skill.icon}
                </div>
                <h2 className="text-cyan-300 text-md font-semibold mb-2">
                  {skill.name}
                </h2>
                <p className="text-gray-300 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
