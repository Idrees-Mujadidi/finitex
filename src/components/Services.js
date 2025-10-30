"use client";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaPalette, FaServer } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      title: "Web Development",
      desc: "Modern, scalable, lightning-fast websites tailored for your business.",
      icon: <FaCode className="text-[#00BFFF] text-4xl" />,
    },
    {
      title: "Database Solutions",
      desc: "Secure, high-performance databases optimized for your data needs.",
      icon: <FaDatabase className="text-[#32CD32] text-4xl" />,
    },
    {
      title: "Graphics Designing",
      desc: "Creative branding and visuals that define your digital identity.",
      icon: <FaPalette className="text-[#FF69B4] text-4xl" />,
    },
    {
      title: "Hosting & Domain",
      desc: "Reliable hosting and top-level domain registration services.",
      icon: <FaServer className="text-[#FFD700] text-4xl" />,
    },
  ];

  // Particle setup
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.1 },
      size: { value: { min: 2, max: 4 } },
      move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
    },
    interactivity: { events: { onHover: { enable: false } } },
    detectRetina: true,
  };

  return (
    <section
      id="services"
      className="bg-[#0f172a] text-white py-28 px-6 relative overflow-hidden font-sans"
    >
      {/* Background Particles */}
      <Particles
        id="services-particles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold mb-6 text-white">
          Our Services
        </h2>
        <p className="text-slate-300 text-lg mb-16 max-w-3xl mx-auto">
          Delivering excellence through cutting-edge digital solutions and
          creative innovation.
        </p>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => router.push("/contact")}
              className="p-8 rounded-3xl text-center flex flex-col justify-between h-full cursor-pointer 
                         transition-all duration-300 hover:scale-105 shadow-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10"
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col items-center">
                <div className="p-5 rounded-full bg-white/10 mb-4 transition-all shadow-md hover:shadow-lg flex items-center justify-center w-20 h-20">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern Gradient Button */}
        <div className="mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/contact")}
            className="relative px-10 py-4 text-lg font-semibold text-white 
               bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 
               rounded-full overflow-hidden shadow-[0_0_20px_rgba(56,189,248,0.4)] 
               transition-all duration-500 group"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 blur-md opacity-50 group-hover:opacity-80 transition duration-500"></div>

            {/* Shiny Reflection Line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

            {/* Text Layer */}
            <span className="relative z-10">Get in Touch</span>

            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
          </motion.button>
        </div>

      </motion.div>
    </section>
  );
}
