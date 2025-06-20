'use client';

import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-blue-900 to-black text-white overflow-hidden">
      {/* === Animated Gradient Blobs === */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 opacity-30 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute top-1/4 right-[-150px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-2xl rounded-full animate-ping z-0" />
      <div className="absolute bottom-[-120px] left-1/3 w-[350px] h-[350px] bg-cyan-300 opacity-10 blur-2xl rounded-full animate-spin-slow z-0" />

      {/* === Hero Content === */}
      <div
        className="relative z-10 text-center max-w-3xl px-6 py-12"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-cyan-400">Areeba Yaseen</span>
        </h1>

        {/* Typewriter Text */}
        <div className="text-xl md:text-2xl font-medium text-cyan-200 mb-6">
          <Typewriter
            options={{
              strings: [
                "Front-End Developer",
                "Aspiring Agentic AI Developer",
                "Creative Web Explorer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
          I'm passionate about building responsive, modern web interfaces and exploring AI-powered experiences. My work blends clean code, clear logic, and a design-first approach — always learning, always growing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/Assest/Cv/Areeba (1).pdf" target="_blank">
            <button className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-lg font-medium transition hover:scale-105">
              Download CV
            </button>
          </Link>
          <Link href="#projects">
            <button className="bg-transparent border border-cyan-400 px-6 py-2 rounded-lg text-cyan-300 hover:bg-cyan-600 hover:text-white transition hover:scale-105">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
