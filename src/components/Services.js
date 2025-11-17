"use client";

import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaPalette, FaServer } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const categories = [
    { name: "Graphics Design", icon: <FaPalette /> },
    { name: "Web Development", icon: <FaCode /> },
    { name: "Database Solutions", icon: <FaDatabase /> },
    { name: "Hosting & Domain", icon: <FaServer /> },
  ];

  const services = {
    "Graphics Design": {
      title: "Graphics Design",
      desc: "Creative visuals, branding, posters, and digital identity that stands out.",
      image: "/graphics.jpg",
    },
    "Web Development": {
      title: "Web Development",
      desc: "Modern, fast, responsive websites built with the latest technologies.",
      image: "/website.jpg",
    },
    "Database Solutions": {
      title: "Database Solutions",
      desc: "Secure, high-performance databases tailored for your business.",
      image: "/database.png",
    },
    "Hosting & Domain": {
      title: "Hosting & Domain",
      desc: "Reliable hosting services and domain registrations at the best prices.",
      image: "/hosting.png",
    },
  };

  const [active, setActive] = useState("Graphics Design");

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-700 rounded-full blur-[180px] opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold mb-4">Our Services.</h2>
        <p className="text-gray-300 max-w-2xl">
          We deliver versatile design, branding and the latest tech solutions.
        </p>

        {/* Category buttons */}
        <div className="flex gap-6 mt-10 overflow-x-auto pb-3 snap-x snap-mandatory hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl border snap-start transition-all duration-300
                ${active === cat.name
                  ? "bg-blue-700 text-white border-blue-500 shadow-lg shadow-blue-700/40"
                  : "bg-blue-700/50 border-blue-500/50 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/40"
                }`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="whitespace-nowrap font-medium">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Service details */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid md:grid-cols-2 gap-12 items-center p-10 rounded-3xl bg-blue-900/20 border border-blue-700/30 shadow-[0_0_40px_rgba(30,64,255,0.3)]"
        >
          {/* Text content */}
          <div>
            <h3 className="text-4xl font-bold mb-4">{services[active].title}</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">{services[active].desc}</p>

            <button
              onClick={() => router.push("/contact")}
              className="bg-white text-black font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 
                hover:bg-gradient-to-r hover:from-[#4169E1] hover:to-[#3154b8] 
                hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-700/40"
            >
              Contact Us 💌
            </button>
          </div>

          {/* Image content */}
          <div className="flex justify-center">
            <div className="w-full max-w-[320px] aspect-[3/4] overflow-hidden rounded-3xl shadow-xl relative">
              <Image
                src={services[active].image} // local path
                alt={services[active].title}
                fill
                className="object-contain"
                priority={true}        // ✅ ensures eager loading for above-the-fold images
                sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 320px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
