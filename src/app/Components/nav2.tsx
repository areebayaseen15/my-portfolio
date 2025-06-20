'use client';

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "CLI Based", href: "/projects/cli-based" },
    { name: "Web App", href: "/projects/web-app" },
    { name: "Streamlit", href: "/projects/streamlit" },
    { name: "Openai SDK", href: "/projects/openai-sdk" },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-blue-900 to-black shadow-md sticky top-0 z-50">
      <header className="text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <div className="text-2xl font-bold font-mono tracking-wide">
            <Link
              href="/"
              className="flex items-center space-x-1 hover:text-cyan-400 transition duration-300"
            >
              <span>&lt;</span>
              <span>My</span>
              <span className="text-cyan-400">Work</span>
              <span>/&gt;</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-base font-medium">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`transition duration-300 ${
                    pathname === link.href ? "text-cyan-300" : "text-white"
                  } hover:text-cyan-300`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-cyan-400 transition-all duration-300 ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 flex flex-col items-start text-base font-medium bg-black/90 backdrop-blur-md">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`transition duration-300 ${
                    pathname === link.href ? "text-cyan-300" : "text-white"
                  } hover:text-cyan-300`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-cyan-400 transition-all duration-300 ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar2;
