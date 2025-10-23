"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
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

  // Detect scroll for background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 h-20 transition-all duration-500 ${
        scrolled ? "bg-[#4169E1]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 h-full">
        {/* Logo */}
        <div
          className="cursor-pointer h-full flex items-center"
          onClick={() => router.push("/")}
        >
          <Image
            src="/logo.png"
            alt="FiniteX Logo"
            width={220}
            height={100}
            className="object-contain max-h-full"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg h-full items-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                scrolled
                  ? "text-white hover:bg-white hover:text-[#4169E1]"
                  : "text-white hover:bg-white hover:text-[#4169E1]"
              } active:scale-95`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-96 py-4 bg-[#4169E1]/80 backdrop-blur-md"
            : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                router.push(item.href);
                setMenuOpen(false);
              }}
              className="w-3/4 text-center px-4 py-2 rounded-md font-medium transition-all duration-300 text-white hover:bg-white hover:text-[#4169E1] active:scale-95"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
