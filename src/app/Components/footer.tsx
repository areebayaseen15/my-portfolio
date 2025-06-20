"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import Typewriter from "typewriter-effect";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-black text-white body-font py-2 border-t border-cyan-400">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex items-center mb-4 sm:mb-0">
          <p className="ml-3 text-xl md:text-2xl font-bold text-cyan-300">
            {isClient && (
              <Typewriter
                options={{
                  strings: ["Contact me through"],
                  autoStart: true,
                  loop: true,
                }}
              />
            )}
          </p>
        </div>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center">
          <Link
  href="https://www.facebook.com/profile.php?id=61573553843640"
  className="text-cyan-300 hover:text-blue-500 transition-transform transform hover:scale-110 duration-300 mx-3"
  target="_blank"
>
  <FaFacebookF className="h-5 w-5" />
</Link>
<Link
  href="https://www.instagram.com/areebaquraishii15/"
  className="text-cyan-300 hover:text-pink-500 transition-transform transform hover:scale-110 duration-300 mx-3"
  target="_blank"
>
  <GrInstagram className="h-5 w-5" />
</Link>
<Link
  href="https://www.linkedin.com/in/areeba-yaseen-6523552b5/"
  className="text-cyan-300 hover:text-blue-400 transition-transform transform hover:scale-110 duration-300 mx-3"
  target="_blank"
>
  <FaLinkedinIn className="h-5 w-5" />
</Link>
<Link
  href="https://github.com/areebayaseen15"
  className="text-cyan-300 hover:text-white transition-transform transform hover:scale-110 duration-300 mx-3"
  target="_blank"
>
  <FaGithub className="h-5 w-5" />
</Link>
<Link
  href="https://twitter.com/yourprofile"
  className="text-cyan-300 hover:text-gray-400 transition-transform transform hover:scale-110 duration-300 mx-3"
  target="_blank"
>
  <FaXTwitter className="h-5 w-5" />
</Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
