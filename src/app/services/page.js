"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaCode, FaPaintBrush, FaDatabase, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "#0f172a" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    particles: {
      color: { value: "#38bdf8" },
      links: { color: "#38bdf8", distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1, outModes: { default: "bounce" } },
      number: { value: 50, density: { enable: true, area: 800 } },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 5 } },
    },
    detectRetina: true,
  };

  const services = [
    { title: "Web Development", icon: <FaCode size={40} />, color: "#00BFFF", desc: "Modern, fast, scalable websites." },
    { title: "UI / UX Design", icon: <FaPaintBrush size={40} />, color: "#FF69B4", desc: "Elegant, user-friendly designs." },
    { title: "Database Solutions", icon: <FaDatabase size={40} />, color: "#32CD32", desc: "Secure & high-performance data management." },
    { title: "Domain & Hosting", icon: <FaGlobe size={40} />, color: "#FFD700", desc: "Reliable hosting & domain setup." },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white flex flex-col justify-center">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 gap-8 max-w-7xl mx-auto py-32">
        {/* Hero Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        <br /> Digital Services
        </motion.h1>


        {/* Hero Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          FiniteX Digital Solutions delivers innovative web, UI/UX, database, and hosting solutions to accelerate your business growth.
        </motion.p>

        {/* Call-to-Action */}
        <motion.a
          href="/contact"
          className="mt-6 inline-block bg-white text-black px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 hover:brightness-95 transition-all animate-bounce-slow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Get a Quote
        </motion.a>

        {/* Floating Glassmorphic Service Cards */}
        <div className="relative mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl flex flex-col items-center text-center shadow-xl hover:scale-105 hover:shadow-[0_0_20px] transition-transform duration-300"
              style={{
                backgroundColor: service.color + "22", // semi-transparent color match
                boxShadow: `0 8px 20px ${service.color}55`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
            >
              <div className="flex justify-center mb-2" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
