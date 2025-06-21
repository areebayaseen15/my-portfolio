'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const line1Projects = [
  {
    title: 'LinkedIn Agent',
    description: 'Posts on LinkedIn using OpenAI Agent SDK.',
    video: '/Assest/Vedios/agent.mp4',
    github: 'https://github.com/your-linkedin-agent-repo',
  },
  {
    title: 'Morant Car Rental Website',
    description: 'Car rental platform using Next.js and Clerk.',
    video: '/Assest/Vedios/Morant-Rental-Car.mp4',
    link: 'https://morant-car-rental-market-place-builder.vercel.app/',
    github: 'https://github.com/your-morant-repo',
  },
  {
    title: 'Ecommerce Shoppers Website',
    description: 'Responsive shop layout using Next.js.',
    video: '/Assest/Vedios/my_shop.mp4',
    link: 'https://my-shop-ecommerce-flax.vercel.app/cart',
    github: 'https://github.com/your-ecommerce-css-repo',
  },
  {
    title: 'On The Trail',
    description: 'A beautiful blog website.',
    video: '/Assest/Vedios/Blog-web.mp4',
    thumbnail: '/Assest/Thumbnails/blog-thumbnail.jpg',
    link: 'https://milestone-3-blog-website-gray.vercel.app/Contact',
    github: 'https://github.com/your-blog-repo',
  },
];

const line2Projects = [
  {
    title: 'Sidcup Golf',
    description: 'Multi-page golf site using custom CSS.',
    video: '/Assest/Vedios/sidcup_Golf.mp4',
    link: 'https://multiple-pages-website-custom-css.vercel.app/',
    github: 'https://github.com/your-sidcup-repo',
  },
  {
    title: 'Pix Resume',
    description: 'Resume builder using TypeScript and HTML.',
    video: '/Assest/Vedios/resume.mp4',
    link: 'https://buildresume123-5y0a67xk7-areeba-yaseens-projects.vercel.app/',
    github: 'https://github.com/areebayaseen15/Resume-Builder/tree/main/Resume-builder-website',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal dev portfolio.',
    video: '/Assest/Vedios/portfolio-tailwind.mp4',
    link: 'https://q2-milestones.vercel.app/',
    github: 'https://github.com/areebayaseen15/Q2-milestones',
  },
  {
    title: 'Virtual Assistant',
    description: 'Built with HTML, CSS, JS & Gemini API.',
    video: '/Assest/Vedios/jarvis.mp4',
    link: 'https://banoqabil-final-project.vercel.app/',
    github: 'https://github.com/your-jarvis-repo',
  },
];

export default function MarqueeProjects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const renderCard = (project: any, index: number, line: string) => (
    <div
      key={`${line}-${index}`}
      className="relative min-w-[330px] max-w-[300px] h-auto rounded-xl overflow-hidden group"
    >
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
            <p className="text-sm text-gray-300">{project.description}</p>
            <div className="flex justify-between items-center mt-2">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-white bg-cyan-600 hover:bg-cyan-700 text-sm px-3 py-1 rounded"
                >
                  View Project
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-white hover:text-cyan-400"
                  aria-label="GitHub Repo"
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

        {/* Marquee Row 1 */}
        <div className="whitespace-nowrap overflow-hidden mb-10 mx-4 md:mx-20">
          <div className="animate-marquee flex gap-8">
            {line1Projects.concat(line1Projects).map((project, index) =>
              renderCard(project, index, 'line1')
            )}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="whitespace-nowrap overflow-hidden mx-4 md:mx-20">
          <div className="animate-marquee-reverse flex gap-8">
            {line2Projects.concat(line2Projects).map((project, index) =>
              renderCard(project, index, 'line2')
            )}
          </div>
        </div>

        {/* View All Projects Button */}
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
