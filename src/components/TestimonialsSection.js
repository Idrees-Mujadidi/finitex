"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Testimonials data outside the component for stable reference
const testimonialsData = [
  {
    name: "Dr. M. Nikmal Kakar",
    role: "CEO & Founder, NK Pharma Health",
    country: "Afghanistan",
    service: "Web Development",
    text: "FiniteX transformed our vision into a high-performance healthcare platform. Exceptional clarity and top-tier execution.",
  },
  {
    name: "Farid Azizi",
    role: "Co-Founder, Kabul E-Comm",
    country: "Afghanistan",
    service: "Web Development",
    text: "Our website’s speed, structure, and user flow improved dramatically. FiniteX elevated our entire business.",
  },
  {
    name: "Raj Singh",
    role: "Founder, Delhi Creative Studio",
    country: "India",
    service: "Graphic Design",
    text: "For brand identity and UI/UX, FiniteX delivered clean, modern, emotionally engaging design work.",
  },
];

export default function TestimonialsSection({ testimonials = testimonialsData }) {
  const [index, setIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]); // Depend only on stable length

  const stagger = ["left", "right", "left"];
  const position = stagger[index % stagger.length];

  const handleDragEnd = (e, info) => {
    if (info.offset.x < -70) {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else if (info.offset.x > 70) {
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section className="relative w-full py-32 min-h-[850px] bg-black text-white overflow-hidden">
      {/* Blue Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320">
          <path
            fill="#0A3AFF"
            fillOpacity="0.18"
            d="M0,64L60,85.3C120,107,240,149,360,154.7C480,160,600,128,720,117.3C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128L1440,128V0H0Z"
          />
        </svg>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Client Testimonials
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mt-3">
          Real experiences. Real business impact.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            dragConstraints={{ left: 0, right: 0 }}
            initial={{ opacity: 0, x: position === "left" ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: position === "left" ? 60 : -60 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="cursor-grab active:cursor-grabbing flex flex-col items-center text-center"
          >
            <p className="text-2xl md:text-3xl leading-relaxed font-light text-white mb-10 max-w-3xl">
              “{testimonials[index].text}”
            </p>

            <div className="text-lg">
              <h3 className="text-white font-semibold text-2xl">
                {testimonials[index].name}
              </h3>
              <p className="text-gray-300 mt-1">
                {testimonials[index].role} — {testimonials[index].country}
              </p>
              <p className="text-blue-400 font-semibold mt-2 uppercase tracking-wider text-sm">
                {testimonials[index].service}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
