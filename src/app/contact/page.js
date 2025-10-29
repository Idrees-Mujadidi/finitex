"use client";

import { Suspense, useRef, useState, useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

function ContactContent() {
  const searchParams = useSearchParams();
  const particleInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white text-gray-900 overflow-hidden">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particleInit}
        options={{
          background: { color: { value: "#ffffff" } },
          fpsLimit: 60,
          interactivity: {
            events: { onClick: { enable: true, mode: "push" }, resize: true },
            modes: { push: { quantity: 4 } },
          },
          particles: {
            color: { value: "#1c398e" },
            links: { color: "#1c398e", distance: 150, enable: true },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      {/* Contact Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-10 bg-white/80 rounded-2xl shadow-lg max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-semibold mb-4 text-[#1c398e]">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-6">
          Let’s build something amazing together. Fill out the form below.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c398e]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c398e]"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c398e]"
            rows="4"
          />
          <button
            type="submit"
            className="bg-[#1c398e] text-white py-3 rounded-lg hover:bg-[#172e73] transition-colors"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}

// ✅ Wrap the component in Suspense to fix the useSearchParams error
export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
