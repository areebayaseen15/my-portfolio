"use client";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [isClient, setIsClient] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kvhc49p",
        "template_25qe1fc",
        form.current!,
        "UbcKso0NnD7G7CIvf"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="relative z-10">
      <section className="relative text-white body-font bg-gradient-to-r from-black via-blue-900 to-black overflow-hidden animated-bg-blur">
        <div className="relative z-10 container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-5 space-x-2">
              <span className="text-cyan-400">Contact</span>
              <span className="text-white">Me</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
              {isClient && (
                <Typewriter
                  options={{
                    strings: ["Contact me if you have any queries."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              )}
            </p>
          </div>

          <div className="max-w-2xl w-full mx-auto">
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full sm:w-1/2" data-aos="fade-right">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-black/30 backdrop-blur-sm border border-cyan-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-white py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 rounded"
                    />
                  </div>
                </div>

                <div className="p-2 w-full sm:w-1/2" data-aos="fade-left">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-black/30 backdrop-blur-sm border border-cyan-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-white py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 rounded"
                    />
                  </div>
                </div>

                <div className="p-2 w-full" data-aos="fade-up">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full bg-black/30 backdrop-blur-sm border border-cyan-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-white py-2 px-4 resize-none transition duration-300 ease-in-out transform hover:scale-105 rounded"
                    />
                  </div>
                </div>

                <div className="p-2 w-full" data-aos="zoom-in">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>

            <div
              className="p-2 w-full pt-8 mt-8 border-t border-cyan-400 text-center"
              data-aos="fade-up"
            >
              <p className="leading-normal my-5 text-gray-300">
                <FaEnvelope className="inline mr-2" /> areebayaseen15@gmail.com
              </p>
              <p className="leading-normal my-3 text-gray-300">
                <FaMapMarkerAlt className="inline mr-2" /> Bheempura, Karachi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
