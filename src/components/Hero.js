"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "#000000ff" } }, // Deep navy
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    particles: {
      color: { value: "#4169e1" },
      links: {
        color: "#4169e1",
        distance: 200,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        outModes: { default: "bounce" },
      },
      number: { value: 80, density: { enable: true, area: 800 } },
      opacity: { value: 0.6 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden text-white">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />



      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 relative px-6 mt-12 max-w-4xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 text-Black-500 leading-tight font-orbitron">
          Where your ideas Meets Execution
        </h1>



        <p className="text-base sm:text-lg md:text-xl mb-8 text-slate-300 max-w-2xl mx-auto leading-relaxed font-roboto">
          FiniteX Digital Solutions empowers your business with cutting-edge{" "}
          <span className="text-sky-400 font-semibold">Web Development</span>,{" "}
          <span className="text-sky-400 font-semibold">Database Systems</span>,{" "}
          <span className="text-sky-400 font-semibold">Graphics Design</span>,
          and{" "}
          <span className="text-sky-400 font-semibold">Hosting Services</span>.
          We transform ideas into scalable digital realities.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="bg-gradient-to-r from-[#4169E1] to-[#3154b8] text-white font-orbitron w-50 sm:w-48 h-14 sm:h-16 flex items-center justify-center rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="border border-white text-white w-50 sm:w-48 h-14 sm:h-16 flex items-center justify-center rounded-2xl font-orbitron hover:bg-[#4169E1] hover:text-white hover:border-[#4169E1] transition-all duration-300"
            >
              Book a Demo
            </a>
          </div>

        </motion.div>

      </motion.div>
      
      {/* Animations */}
      <style jsx global>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientFlow 6s ease infinite;
        }
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
