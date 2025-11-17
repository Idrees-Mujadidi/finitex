"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[75%] lg:w-[60%] transition-all duration-500`}
    >
      {/* Main Header Bar */}
      <div
        className={`flex items-center justify-between px-6 h-14 rounded-full border backdrop-blur-xl transition-all duration-500
        ${scrolled ? "bg-[#0f172a]/70 border-white/15" : "bg-white/5 border-white/10"}`}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/Logo.png" // Use the latest logo
            alt="FiniteX Logo"
            width={100} // Smaller logo for production
            height={60}
            className="object-contain w-auto h-auto"
            priority
            loading="eager"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 text-sm font-saans">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              className="px-4 py-2 rounded-full text-white hover:text-black transition-all duration-200 hover:bg-white active:bg-white active:text-black"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="flex flex-col md:hidden justify-center gap-[6px] group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="md:hidden mt-3 w-full bg-[#4169e1]/90 backdrop-blur-xl rounded-2xl font-orbitron font-bold border border-white/10 py-6"
          >
            <div className="flex flex-col items-center space-y-5 text-white text-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    router.push(item.href);
                    setMenuOpen(false);
                  }}
                  className="hover:text-sky-400 transition-all"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
