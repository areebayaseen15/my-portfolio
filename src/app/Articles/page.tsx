"use client";

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Components/navbar';

interface Projects {
  title: string;
  summary?: string;
  img: string;
  link: string;
  time?: string;
  date?: string;
}

const articles: Projects[] = [
  {
    title: "Dependency Injection in FastAPI — Simplify Your Code Like a Pro",
    img: "/Assest/Pictures/dependency.png",
    link: "https://medium.com/p/810b8ce80660",
    date: "May 13, 2025",
    time: "7 min read",
    summary: "Simplify your FastAPI projects using Dependency Injection with practical real-world use."
  },
  {
    title: "Understanding API Parameters in FastAPI: A Beginner-Friendly Guide",
    img: "/Assest/Pictures/fastapi.png",
    link: "https://medium.com/p/1eaeb2dc5d13",
    date: "May 12, 2025",
    time: "5 min read",
    summary: "Clear and beginner-level explanation of how to handle query and path parameters in FastAPI."
  },
  {
    title: "From Rules to Imagination: My Journey into Generative AI",
    img: "/Assest/Pictures/ai.avif",
    link: "https://medium.com/p/e644a13f18ef",
    date: "May 6, 2025"
  }
];

const FeaturedArticles = ({ img, time, title, link, summary }: Projects) => {
  return (
    <li
      className="w-full rounded-2xl border border-cyan-400 bg-black/40 shadow-md overflow-hidden transition-all"
      data-aos="fade-up"
    >
      <Link href={link} target="_blank" className="block w-full">
        <Image
          src={img}
          alt={title}
          width={500}
          height={280}
          className="w-full h-52 sm:h-64 object-cover rounded-t-2xl"
        />
      </Link>

      <div className="p-5 sm:p-6">
        <Link href={link} target="_blank">
          <h2 className="text-xl sm:text-2xl font-bold text-cyan-300 hover:underline mb-2">{title}</h2>
        </Link>
        {summary && <p className="text-sm sm:text-base text-white mb-3">{summary}</p>}
        {time && <span className="text-yellow-400 text-sm font-medium">{time}</span>}
      </div>
    </li>
  );
};

const MovingImage = ({ img, link, title }: Projects) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleMouse = (event: React.MouseEvent) => {
    if (imgRef.current && window.innerWidth >= 768) {
      imgRef.current.style.display = "inline-block";
      imgRef.current.style.left = `${event.pageX + 10}px`;
      imgRef.current.style.top = `${event.pageY - 50}px`;
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
    }
  };

  return (
    <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave} className="relative">
      <h2 className="text-base sm:text-xl font-semibold hover:underline text-white">{title}</h2>
      <Image
        ref={imgRef}
        src={img}
        width={96}
        height={100}
        alt={title}
        className="z-10 w-60 sm:w-96 h-auto hidden absolute rounded-lg pointer-events-none"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }: Projects) => {
  return (
    <li
      className="w-full relative px-4 py-5 rounded-xl my-4 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-black/40 text-white border border-cyan-400 border-r-4 border-b-4"
      data-aos="fade-up"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-yellow-400 text-base sm:text-xl font-semibold pt-3 sm:pt-0">{date}</span>
    </li>
  );
};

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-16 px-4 sm:px-10 md:px-28 pb-32 bg-gradient-to-br from-black via-blue-900 to-black min-h-screen text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-16 text-cyan-300 text-center">
          Words can change the World!
        </h1>

        {/* Featured Articles */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 px-2">
          {articles.slice(0, 2).map((article, i) => (
            <FeaturedArticles
              key={i}
              title={article.title}
              img={article.img}
              link={article.link}
              summary={article.summary}
              time={article.time}
            />
          ))}
        </ul>

        {/* All Articles */}
        <h2 className="font-bold w-full text-3xl sm:text-4xl text-center my-20 text-cyan-300">All Articles</h2>

        <ul>
          {articles.map((article, i) => (
            <Article
              key={i}
              title={article.title}
              img={article.img}
              link={article.link}
              date={article.date}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Page;
