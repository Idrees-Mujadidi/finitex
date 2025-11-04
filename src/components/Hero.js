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
    background: { color: { value: "#0f172a" } }, // Deep navy
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    particles: {
      color: { value: "#38bdf8" },
      links: {
        color: "#38bdf8",
        distance: 150,
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/40 to-[#0f172a] z-[1]" />

      {/* Floating Decorative Lights */}
      <div className="absolute -top-20 -left-32 w-96 h-96 bg-sky-500/20 blur-[120px] rounded-full animate-pulse-slow z-[0]" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-600/20 blur-[130px] rounded-full animate-pulse-slow z-[0]" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 relative px-6 mt-12 max-w-4xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent animate-gradient leading-tight">
          Where your ideas Meets Execution
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
          <a
            href="#services"
            className="bg-gradient-to-r from-sky-400 to-blue-600 text-black font-semibold px-10 py-4 rounded-2xl shadow-lg hover:scale-105 hover:shadow-sky-500/30 transition-all duration-300"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="border border-sky-400 text-sky-400 px-10 py-4 rounded-2xl font-semibold hover:bg-sky-400 hover:text-black transition-all duration-300"
          >
            Book a Demo
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 z-10 cursor-pointer"
      >
        <a href="#services" className="flex flex-col items-center text-sky-400">
          <ChevronDown className="w-8 h-8" />
          <span className="text-sm font-light">Scroll Down</span>
        </a>
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
