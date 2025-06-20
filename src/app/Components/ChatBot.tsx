"use client";
import React, { useState } from "react";
import { MessageCircle } from "lucide-react"; // You can replace with any icon you like

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition-all"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chatbot Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-[320px] h-[420px] bg-blue-900 text-white rounded-xl shadow-2xl overflow-hidden z-50 border border-white">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 z-10 bg-black hover:bg-gray-800 text-white rounded-full p-1 px-2"
          >
            ✖
          </button>

          {/* Chatbase Chatbot Iframe */}
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/1sTltyP9KoJE3iJvfkoBu"
            width="100%"
            height="100%"
            style={{
              border: "none",
              backgroundColor: "#0f172a", 
            }}
            title="Chatbase Chatbot"
          ></iframe>
        </div>
      )}
    </>
  );
}
