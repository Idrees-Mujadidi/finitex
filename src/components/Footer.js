"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Footer() {
  const icons = [
    { icon: <FaLinkedin />, href: "https://linkedin.com", color: "#0077B5" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/finitex.digital?", color: "#E4405F" },
    { icon: <FaGithub />, href: "https://github.com", color: "#333" },
    { icon: <FaEnvelope />, href: "mailto:contact@finitex.com", color: "#FFD700" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: 25, density: { enable: true, area: 700 } },
      color: { value: ["#4169E1", "#1E40FF", "#A9A9A9"] },
      shape: { type: "circle" },
      opacity: { value: 0.1, random: true },
      size: { value: { min: 2, max: 5 }, random: true },
      move: { enable: true, speed: 0.2, outModes: { default: "bounce" }, random: true },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.5 } },
    },
    detectRetina: true,
  };

  return (
    <footer className="relative bg-white overflow-hidden pt-24 pb-12 text-[#0a1a5c]">
      {/* Background Particles */}
      <Particles
        id="footer-particles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      {/* Floating gradient blobs */}
      <motion.div
        className="absolute top-[-8%] left-[-8%] w-[300px] h-[300px] rounded-full bg-[#4169E1]/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-8%] right-[-8%] w-[250px] h-[250px] rounded-full bg-[#1E40FF]/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Single Glass Card */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto p-8 md:p-12 bg-white/20 backdrop-blur-xl rounded-4xl border border-white/20 shadow-lg flex flex-col md:flex-row justify-between gap-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Branding + Social */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-2">FiniteX</h2>
          <p className="text-[#0a1a5c]/90 mb-4">
            Next-generation digital solutions for web, AI, and design.
          </p>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3 mt-2">
            {icons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue/20 shadow-lg text-[#0a1a5c] text-lg transition-transform"
                whileHover={{ scale: 1.3, color: item.color, backgroundColor: "#ffffff" }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Quick Links</h3>
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#0a1a5c]/90 hover:text-[#4169E1] transition-colors mb-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Contact</h3>
          <p>Email: contact@finitex.com</p>
          <p>Phone: +93 700 123 456</p>
          <p>Kabul, Afghanistan</p>
        </div>
      </motion.div>

      {/* Copyright */}
      <p className="mt-8 text-center text-sm text-[#0a1a5c]/60">
        © {new Date().getFullYear()} <span className="font-semibold">FiniteX</span> — All Rights Reserved.
      </p>
    </footer>
  );
}
