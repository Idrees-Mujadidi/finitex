"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. M. Nikmal Kakar",
      role: "CEO & Founder, NK Pharma Health",
      country: "Afghanistan",
      service: "Web Development",
      text: "FiniteX transformed our vision into a high-performance healthcare platform. Exceptional quality and clarity throughout.",
    },
    {
      name: "Farid Azizi",
      role: "Co-Founder, Kabul E-Comm",
      country: "Afghanistan",
      service: "Web Development",
      text: "Our site's speed and usability skyrocketed thanks to FiniteX. Engagement and conversions improved sharply.",
    },
    {
      name: "Amina Rahimi",
      role: "Data Engineer, Kabul Analytics",
      country: "Afghanistan",
      service: "Database Solutions",
      text: "FiniteX designed our database architecture to handle complex queries and scale comfortably.",
    },
    {
      name: "Raj Singh",
      role: "Founder, Delhi Creative Studio",
      country: "India",
      service: "Graphic Design",
      text: "For brand identity and UI/UX, FiniteX delivered designs that just ‘feel right’. Clean, modern, memorable.",
    },
  ];

  // Background particles (same as OurWork)
  const bgParticles = [
    { size: 60, x: 20, y: 30, color: "bg-[#FF6B6B]/20", moveFactor: 0.02 },
    { size: 100, x: 250, y: 120, color: "bg-[#6C63FF]/20", moveFactor: 0.03 },
    { size: 50, x: 500, y: 180, color: "bg-[#FFD93D]/20", moveFactor: 0.04 },
    { size: 80, x: 150, y: 70, color: "bg-[#00C9FF]/20", moveFactor: 0.025 },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-24 px-6 relative overflow-hidden">
      {/* Background Particles */}
      {bgParticles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${p.color}`}
          style={{
            width: p.size,
            height: p.size,
            top: p.y,
            left: p.x,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Fade gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0f172a] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0f172a] to-transparent" />
      </div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Client Testimonials
        </h2>
        <p className="text-slate-300 text-lg">
          Trusted voices from our satisfied clients.
        </p>
      </div>

      {/* One main card */}
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden h-[320px] md:h-[360px]">
          <motion.div
            className="space-y-10 p-10"
            animate={{ y: ["0%", "-100%"] }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="text-center">
                <p className="text-lg text-slate-200 italic mb-4 leading-relaxed">
                  “{t.text}”
                </p>
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-sky-400 mb-1">
                  {t.role}, {t.country}
                </p>
                <span className="text-xs text-slate-500 uppercase tracking-wide">
                  {t.service}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
