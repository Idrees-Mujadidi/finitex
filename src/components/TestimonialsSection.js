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
      name: "Yousuf Haqi",
      role: "IT Director, Kandahar Logistics",
      country: "Afghanistan",
      service: "Database Solutions",
      text: "The reliability and performance of our systems improved dramatically after working with FiniteX.",
    },
    {
      name: "Raj Singh",
      role: "Founder, Delhi Creative Studio",
      country: "India",
      service: "Graphic Design",
      text: "For brand identity and UI/UX, FiniteX delivered designs that just ‘feel right’. Clean, modern, memorable.",
    },
    {
      name: "Ahmed Khan",
      role: "CEO, Karachi Hosting Solutions",
      country: "Pakistan",
      service: "Hosting & Domain",
      text: "We entrusted FiniteX with our hosting setup and domain strategy—performance, security and support were top-notch.",
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-24 px-6 relative overflow-hidden">
      {/* Fade gradients for smooth appear/disappear */}
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
