"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setShowSearch(false); // ✅ hide search bar after searching
      setMenuOpen(false); // ✅ also close mobile menu if open
      setQuery("");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[#0f172a]/80 shadow-lg shadow-sky-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 h-20">
        {/* Logo */}
        <div
          className="cursor-pointer h-full flex items-center"
          onClick={() => router.push("/")}
        >
          <Image
            src="/logo.png"
            alt="FiniteX Logo"
            width={180}
            height={70}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Nav + Search */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              className="relative px-3 py-2 rounded-md transition-all duration-300 
                         hover:bg-sky-400/10 hover:text-sky-400"
            >
              {item.name}
            </button>
          ))}

          {/* Search Bar */}
          <div className="relative">
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="text-sky-400 hover:text-white transition-all duration-300"
            >
              <FiSearch className="text-2xl" />
            </button>

            <AnimatePresence>
              {showSearch && (
                <motion.form
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "200px" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSearch}
                  className="absolute right-0 top-full mt-2 bg-white/10 backdrop-blur-md rounded-full overflow-hidden flex items-center border border-sky-400/40 shadow-sky-500/20 shadow-md"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="bg-transparent px-4 py-2 text-sm text-white focus:outline-none w-full placeholder:text-slate-300"
                  />
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-sky-400 text-3xl focus:outline-none hover:text-white transition-all duration-300"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#0f172a]/95 backdrop-blur-md shadow-lg shadow-sky-500/10 py-6"
          >
            <div className="flex flex-col items-center space-y-6 text-lg font-medium text-white">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    router.push(item.href);
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 rounded-md transition-all duration-300 
                             hover:bg-sky-400/10 hover:text-sky-400"
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Search */}
              <form
                onSubmit={handleSearch}
                className="flex items-center gap-2 bg-white/10 border border-sky-400/30 rounded-full px-4 py-2 w-3/4"
              >
                <FiSearch className="text-sky-400 text-xl" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="bg-transparent text-white w-full placeholder:text-slate-400 focus:outline-none text-sm"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
