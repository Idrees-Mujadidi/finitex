"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    title: "NK Pharma",
    url: "https://www.nkpharma.health",
    image: "/portfolio/nkpharma-home.png",
    description:
      "NK Pharma delivers trusted pharmaceuticals and medical supplies across Afghanistan. The website showcases products, services, and partnership opportunities in a clean, professional layout.",
  },
  // Add more projects here
];

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setTimeout(() => setProjects(portfolioProjects), 500);
  }, []);

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
      number: { value: 60, density: { enable: true, area: 800 } },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 5 } },
    },
    detectRetina: true,
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full min-h-[120vh] overflow-hidden text-white flex flex-col justify-center bg-[#1e3a8a]">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col gap-12 items-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Portfolio
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-white/80 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Some of the projects I have delivered. Click on the cards to explore live websites.
        </motion.p>

        {/* Portfolio Projects */}
        <div className="flex flex-col gap-12 mt-12 w-full">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={fadeIn}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <span className="text-sm text-white/50 underline hover:text-white transition-colors cursor-pointer">
                  Visit Website
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
