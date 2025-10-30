"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const icons = [
    { icon: <FaLinkedin />, href: "https://linkedin.com", color: "#0077B5" },
    { icon: <FaInstagram />, href: "https://instagram.com", color: "#E4405F" },
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

  return (
    <footer className="relative bg-gradient-to-tr from-[#0a1a5c] to-[#4169E1] text-white overflow-hidden pt-32 pb-16">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#4169E1]/30 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#6C63FF]/30 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Diagonal futuristic overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4169E1]/20 via-transparent to-transparent skew-y-2 transform origin-bottom-right"></div>

      {/* Footer content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Branding + Social */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-extrabold tracking-wide">FiniteX</h2>
          <p className="max-w-xs text-white/80">
            Next-generation digital solutions for web, AI, and design.
          </p>
          <h1 className="text-4xl font-extrabold tracking-wide">Follow Us</h1>
          <div className="flex space-x-4 mt-2">
            {icons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 shadow-lg text-white text-xl transition-transform"
                whileHover={{ scale: 1.3, color: item.color, backgroundColor: "white" }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-[#FFD700] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p>Email: contact@finitex.com</p>
          <p>Phone: +93 700 123 456</p>
          <p>Kabul, Afghanistan</p>
        </div>
      </motion.div>

      {/* Glowing horizontal line */}
      <div className="relative mt-20 w-full flex justify-center">
        <motion.div
          className="h-1 w-2/3 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFFFFF] to-[#FFD700] opacity-70"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} <span className="font-semibold text-white">FiniteX</span> — All Rights Reserved.
      </p>
    </footer>
  );
}
