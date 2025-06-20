'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

type TabKey = 'education' | 'skills' | 'experience';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activeTab, setActiveTab] = useState<TabKey>('education');

  const tabs: Record<TabKey, JSX.Element> = {
    education: (
      <>
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">🎓 Education</h3>
        <ul className="text-gray-200 text-sm space-y-2">
          <li><strong>GIAC Certified</strong> — Cloud Native For Artificial Intelligence (2024- Present)</li>
          <li><strong>Bano Qabil</strong> — Web development (2024)</li>
          <li><strong>AIOU</strong> — Bachelor's in Commerce (2024)</li>
        </ul>
      </>
    ),
    skills: (
      <>
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">🛠 Skills</h3>
        <ul className="text-gray-200 text-sm space-y-2">
          <li>💡 HTML, CSS, TypeScript</li>
          <li>⚛️ Next.js</li>
          <li>🎨 Tailwind CSS & UI Design</li>
          <li>🧠 OpenAI SDK, Agentic AI Concepts</li>
        </ul>
      </>
    ),
    experience: (
      <>
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">💼 Experience</h3>
        <ul className="text-gray-200 text-sm space-y-2">
          <li>🌐 Built 10+ responsive projects</li>
          <li>📂 CLI Tools, Web Apps, Streamlit apps</li>
          <li>🧪 Hands-on with AI tools</li>
        </ul>
      </>
    ),
  };

  return (
    <section
      id="AboutMe"
      className="relative bg-gradient-to-r from-black via-blue-900 to-black text-white py-20 overflow-hidden"
    >
      {/* Background animation blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full blur-2xl animate-ping z-0" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Left side */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-cyan-400">Me</span>
          </h2>

          <div className="text-cyan-300 font-medium text-lg mb-2">
            <Typewriter
              options={{
                strings: ['"Designing with empathy. Coding with clarity."'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="text-gray-300 text-base leading-relaxed">
            I'm <span className="text-cyan-400 font-semibold">Areeba Yaseen</span>, a front-end developer and AI enthusiast passionate about building responsive and meaningful web experiences.
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            I combine creativity with clean logic to develop elegant interfaces using HTML, CSS, TypeScript, and the power of AI tools.
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded-lg transition hover:scale-105 mt-4"
          >
            Let's Connect
          </a>
        </div>

        {/* Right side */}
        <div data-aos="fade-left">
          <div className="flex justify-start mb-6 space-x-4">
            {(['education', 'skills', 'experience'] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === tab
                    ? 'bg-cyan-600 text-white'
                    : 'bg-black/30 border border-cyan-500 text-cyan-300 hover:bg-cyan-700 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Animated gradient border card */}
<div className="relative group rounded-xl p-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-[length:300%_300%] animate-border overflow-hidden">
  <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 min-h-[180px]">
    {tabs[activeTab]}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
