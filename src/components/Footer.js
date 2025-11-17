"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const icons = [
    { icon: <FaLinkedin />, href: "https://linkedin.com", color: "#4169E1" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/finitex.digital?", color: "#E4405F" },
    { icon: <FaGithub />, href: "https://github.com", color: "#ffffff" },
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
    <footer className="relative bg-black text-white overflow-hidden pt-16 md:pt-24 pb-12">
      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20 text-center md:text-center">
        {/* Branding */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1">FiniteX</h2>
          <p className="text-white/70 text-center">
            Digital solutions for web, AI, and design.
          </p>
          <div className="flex justify-center gap-4 mt-3">
            {icons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#4169E1]/20 text-white text-lg shadow-md transition-transform"
                whileHover={{
                  scale: 1.2,
                  color: item.color, // hex safe
                  backgroundColor: "#111827", // hex safe
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Quick Links</h3>
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-[#4169E1] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Contact</h3>
          <p className="text-white/70">Email: contact@finitex.com</p>
          <p className="text-white/70">Phone: +93 700 123 456</p>
          <p className="text-white/70">Kabul, Afghanistan</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-12"></div>

      {/* Copyright */}
      <p className="mt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} <span className="font-semibold">FiniteX</span> — All Rights Reserved.
      </p>
    </footer>
  );
}
