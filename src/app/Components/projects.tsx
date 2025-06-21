'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';

// Tech icon + label mapping
const techIcons: Record<
  string,
  { icon: JSX.Element; label: string }
> = {
  html: { icon: <FaHtml5 className="text-orange-500" />, label: 'HTML' },
  css: { icon: <FaCss3Alt className="text-blue-500" />, label: 'CSS' },
  js: { icon: <FaJs className="text-yellow-400" />, label: 'JavaScript' },
  react: { icon: <FaReact className="text-cyan-400" />, label: 'React' },
  nextjs: { icon: <SiNextdotjs className="text-white" />, label: 'Next.js' },
  typescript: { icon: <SiTypescript className="text-blue-400" />, label: 'TypeScript' },
  tailwind: { icon: <SiTailwindcss className="text-teal-300" />, label: 'Tailwind' },
};

const line1Projects = [
  {
    title: 'LinkedIn Agent',
    description: 'Automates LinkedIn posting using OpenAI Agent SDK with serverless architecture and async scheduling.',
    video: '/Assest/Vedios/linkdin-agent.mp4',
    github: 'https://github.com/your-linkedin-agent-repo',
    tech: ['react', 'nextjs', 'typescript'],
  },
  {
    title: 'Morant Car Rental Website',
    description: 'Car rental platform with secure authentication using Clerk, modern UI using Tailwind, and dynamic listings.',
    video: '/Assest/Vedios/Morant-Rental-Car.mp4',
    link: 'https://morant-car-rental-market-place-builder.vercel.app/',
    github: 'https://github.com/your-morant-repo',
    tech: ['nextjs', 'tailwind'],
  },
  {
    title: 'Ecommerce Shoppers Website',
    description: 'E-commerce layout using Next.js with fully responsive design and dynamic cart system integration.',
    video: '/Assest/Vedios/my_shop.mp4',
    link: 'https://my-shop-ecommerce-flax.vercel.app/cart',
    github: 'https://github.com/your-ecommerce-css-repo',
    tech: ['nextjs', 'tailwind'],
  },
  {
    title: 'On The Trail',
    description: 'Clean and elegant blog website built with vanilla stack focusing on layout, accessibility, and performance.',
    video: '/Assest/Vedios/Blog-web.mp4',
    thumbnail: '/Assest/Thumbnails/blog-thumbnail.jpg',
    link: 'https://milestone-3-blog-website-gray.vercel.app/Contact',
    github: 'https://github.com/your-blog-repo',
    tech: ['html', 'css', 'js'],
  },
];

const line2Projects = [
  {
    title: 'Sidcup Golf',
    description: 'Multi-page responsive golf website built with HTML, CSS, and JS with animations and custom effects.',
    video: '/Assest/Vedios/sidcup_Golf.mp4',
    link: 'https://multiple-pages-website-custom-css.vercel.app/',
    github: 'https://github.com/your-sidcup-repo',
    tech: ['html', 'css', 'js'],
  },
  {
    title: 'Pix Resume',
    description: 'Resume builder with live preview using HTML, CSS, and TypeScript. Responsive and styled cleanly.',
    video: '/Assest/Vedios/resume.mp4',
    link: 'https://buildresume123-5y0a67xk7-areeba-yaseens-projects.vercel.app/',
    github: 'https://github.com/areebayaseen15/Resume-Builder/tree/main/Resume-builder-website',
    tech: ['html', 'css', 'typescript'],
  },
  {
    title: 'Portfolio Website',
    description: 'Developer portfolio using Tailwind, Next.js, AOS animations, and responsive layout for all screens.',
    video: '/Assest/Vedios/portfolio-tailwind.mp4',
    link: 'https://q2-milestones.vercel.app/',
    github: 'https://github.com/areebayaseen15/Q2-milestones',
    tech: ['nextjs', 'tailwind'],
  },
  {
    title: 'Virtual Assistant',
    description: 'Personal assistant built with Gemini API. Interactive interface with HTML/CSS/JS frontend.',
    video: '/Assest/Vedios/jarvis.mp4',
    link: 'https://banoqabil-final-project.vercel.app/',
    github: 'https://github.com/your-jarvis-repo',
    tech: ['html', 'css', 'js'],
  },
];

export default function MarqueeProjects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const renderCard = (project: any, index: number, line: string) => (
    <div
      key={`${line}-${index}`}
      className="relative w-[270px] sm:w-[300px] md:w-[330px] h-auto shrink-0 rounded-xl overflow-hidden group">

      <div className="animate-snake-border p-[2px] rounded-xl">
        <div className="bg-black/30 backdrop-blur-md h-full rounded-xl flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300">
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            poster={project.thumbnail}
            className="w-full h-36 object-cover rounded-t-xl"
          />

          <div className="p-4 flex flex-col gap-2 text-left">
            <h2 className="text-cyan-300 text-lg font-semibold">{project.title}</h2>
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
  {/* Live icon */}
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
  );

  return (
    <div
      id="projects"
      className="relative bg-gradient-to-r from-black via-blue-900 to-black py-20 text-white overflow-hidden"
    >
      {/* Background animation blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full blur-2xl animate-ping z-0" />

      <div className="relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">My</span>{' '}
            <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These projects represent milestones in my front-end journey. Hover to explore.
          </p>
        </div>

        {/* Marquee Rows */}
{/* Line 1 Projects Marquee */}
<div className="overflow-hidden mb-10 mx-4 md:mx-20">
  <div className="animate-marquee inline-flex flex-nowrap gap-4 sm:gap-6 md:gap-8">
    {line1Projects.concat(line1Projects).map((project, index) =>
      renderCard(project, index, 'line1')
    )}
  </div>
</div>


{/* Line 2 Projects Marquee */}
<div className="overflow-hidden mx-4 md:mx-20">
  <div className="animate-marquee-reverse inline-flex flex-nowrap gap-4 sm:gap-6 md:gap-8">
    {line2Projects.concat(line2Projects).map((project, index) =>
      renderCard(project, index, 'line2')
    )}
  </div>
</div>

        {/* View All Button */}
        <div className="mt-12 text-center" data-aos="zoom-in">
          <Link
            href="/projects/cli-based"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-6 rounded-lg font-medium transition hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
