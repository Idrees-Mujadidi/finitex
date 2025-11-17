"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurWork() {
  const project = {
    title: "NK Pharma",
    desc: "A sleek and modern platform for pharmaceutical management and online healthcare services.",
    image: "/portfolio/nkpharma-home.png",
    link: "https://nkpharma.health",
  };

  const cardParticles = [
    { size: 12, x: -20, y: -20, color: "bg-[#00BFFF]/40" },
    { size: 14, x: 180, y: -15, color: "bg-[#FF69B4]/40" },
    { size: 16, x: -25, y: 220, color: "bg-[#32CD32]/40" },
    { size: 10, x: 200, y: 120, color: "bg-[#FFD700]/40" },
  ];

  return (
    <section className="bg-black text-white py-24 px-4 md:px-6 relative overflow-hidden">
      <motion.div
        className="relative max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          Latest Work
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-12 text-center">
          We design, develop, and implement projects using the latest technologies.
        </p>

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-sky-500/50 transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-center md:items-stretch w-full max-w-6xl mx-auto"
          whileHover={{ y: -6, scale: 1.02 }}
        >
          {/* Animated Particles */}
          {cardParticles.map((cp, idx) => (
            <motion.div
              key={idx}
              className={`absolute rounded-full ${cp.color}`}
              style={{ width: cp.size, height: cp.size, top: cp.y, left: cp.x }}
              animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
              transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 50vw"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
            <p className="text-slate-300 text-base md:text-lg mb-6">{project.desc}</p>
            <span className="text-sky-400 font-semibold text-base hover:text-sky-300 transition">
              Visit Project &rarr;
            </span>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
