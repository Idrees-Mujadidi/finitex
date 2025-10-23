"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: { value: "#1e3a8a" }, // Royal Blue background
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" }, // particle color
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        value: 80,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-royal text-white">
      {/* Animated Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Hero Content */}
      <div className="z-10 relative px-4 mt-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-gradient bg-gradient-to-r from-white via-[#f0f0f0] to-white bg-clip-text text-transparent">
          Empowering Ideas with Technology
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/80">
          FiniteX Digital Solutions — building fast, modern, and scalable web systems.
        </p>
        <a
          href="#services"
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold shadow-md hover:brightness-95 transition"
        >
          Get Started
        </a>
      </div>

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
          animation: gradientFlow 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
