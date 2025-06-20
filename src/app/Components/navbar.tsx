'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("/");

  useEffect(() => {
    // Set active link on initial load
    if (typeof window !== "undefined") {
      setActiveLink(window.location.hash || "/");
    }
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#AboutMe" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Articles", href: "/Articles" },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-blue-900 to-black shadow-lg sticky top-0 z-50">
      <header className="text-white">
        <div className="container mx-auto flex items-center justify-between p-4 md:px-8">
          {/* Logo */}
          <div className="text-2xl font-bold font-mono tracking-wide">
            <Link href="/" scroll={false} className="flex items-center space-x-1 hover:text-cyan-400 transition duration-300">
              <span>&lt;</span>
              <span>Areeba</span>
              <span className="text-cyan-400">Yaseen</span>
              <span>/&gt;</span>
            </Link>
          </div>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-base font-medium">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  scroll={false}
                  onClick={() => handleLinkClick(link.href)}
                  className={`hover:text-cyan-300 transition duration-300`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-cyan-400 transition-all duration-300 ${
                      activeLink === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 space-y-2 flex flex-col items-start text-base font-medium">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  scroll={false}
                  onClick={() => handleLinkClick(link.href)}
                  className="hover:text-cyan-300 transition duration-300"
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-cyan-400 transition-all duration-300 ${
                      activeLink === link.href
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

export default Navbar;
