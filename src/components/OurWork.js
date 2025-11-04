"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurWork() {
  const projects = [
    {
      title: "NK Pharma Health",
      desc: "A sleek and modern platform for pharmaceutical management and online healthcare services.",
      image: "/portfolio/nkpharma-home.png",
      link: "https://nkpharma.health",
    },
  ];

  // Background particles
  const bgParticles = [
    { size: 60, x: 20, y: 30, color: "bg-[#FF6B6B]/20", moveFactor: 0.02 },
    { size: 100, x: 250, y: 120, color: "bg-[#6C63FF]/20", moveFactor: 0.03 },
    { size: 50, x: 500, y: 180, color: "bg-[#FFD93D]/20", moveFactor: 0.04 },
    { size: 80, x: 150, y: 70, color: "bg-[#00C9FF]/20", moveFactor: 0.025 },
  ];

  // Particle animation around project card
  const cardParticles = [
    { size: 15, x: -30, y: -30, color: "bg-[#00BFFF]/50" },
    { size: 12, x: 80, y: -15, color: "bg-[#FF69B4]/50" },
    { size: 18, x: -25, y: 100, color: "bg-[#32CD32]/50" },
    { size: 14, x: 90, y: 120, color: "bg-[#FFD700]/50" },
  ];

  return (
    <section
      id="our-work"
      className="bg-[#0f172a] text-white py-20 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Background Particles */}
      {bgParticles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${p.color}`}
          style={{
            width: p.size,
            height: p.size,
            top: p.y,
            left: p.x,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Latest Work
        </h2>
        <p className="text-slate-300 text-base md:text-lg mb-12 max-w-3xl mx-auto">
          Showcasing our recent projects, crafted with passion and modern design
          principles.
        </p>

        <div className="flex justify-center relative">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-sky-500/20 shadow-lg hover:shadow-sky-400/30 transition-all duration-300 flex flex-col justify-between cursor-pointer w-full max-w-sm md:max-w-3xl"
              whileHover={{ y: -8, scale: 1.03 }}
            >
              {/* Card Particles */}
              {cardParticles.map((cp, idx) => (
                <motion.div
                  key={idx}
                  className={`absolute rounded-full ${cp.color}`}
                  style={{
                    width: cp.size,
                    height: cp.size,
                    top: cp.y,
                    left: cp.x,
                  }}
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 8, 0],
                  }}
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <div className="overflow-hidden rounded-xl mb-4 md:mb-6 relative w-full h-[250px] md:h-[450px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-3 z-10 relative">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base mb-3 md:mb-4 z-10 relative">
                {project.desc}
              </p>
              <span className="text-sky-400 font-semibold group-hover:text-sky-300 transition z-10 relative text-sm md:text-base">
                Visit Project &rarr;
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
