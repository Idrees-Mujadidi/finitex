"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaCode, FaDatabase, FaPalette, FaServer } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, scalable, lightning-fast websites tailored for your business.",
      icon: <FaCode className="text-[#00BFFF.] text-5xl mb-4" />,
      gradient: "from-[#00BFFF] to-[#4169E1]",
    },
    {
      title: "Database Solutions",
      desc: "Secure, high-performance databases optimized for your data needs.",
      icon: <FaDatabase className="text-[#32CD32] text-5xl mb-4" />,
      gradient: "from-[#32CD32] to-[#92FE9D]",
    },
    {
      title: "Graphics Designing",
      desc: "Creative branding and visuals that define your digital identity.",
      icon: <FaPalette className="text-[#FF69B4] text-5xl mb-4" />,
      gradient: "from-[#FF69B4] to-[#FFD93D]",
    },
    {
      title: "Hosting & Domain",
      desc: "Reliable hosting and top-level domain registration services.",
      icon: <FaServer className="text-[#FFD700] text-5xl mb-4" />,
      gradient: "from-[#FFD700] to-[#DD2476]",
    },
  ];

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    setMouseX(x);
    setMouseY(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const shapes = [
    { size: 80, x: 50, y: 20, color: "bg-[#6C63FF]/20", moveFactor: 0.03 },
    { size: 120, x: 300, y: 100, color: "bg-[#FF6B6B]/20", moveFactor: 0.02 },
    { size: 60, x: 600, y: 50, color: "bg-[#00C9FF]/20", moveFactor: 0.04 },
    { size: 100, x: 800, y: 150, color: "bg-[#FF512F]/20", moveFactor: 0.025 },
  ];

  return (
    <section
      id="services"
      className="bg-white text-black py-28 px-6 relative overflow-hidden"
    >
      {/* Interactive Floating Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.y,
            left: shape.x,
            x: mouseX * shape.moveFactor,
            y: mouseY * shape.moveFactor,
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        />
      ))}

      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold mb-6 text-[#00000]">Our Services</h2>
        <p className="text-gray-700 text-lg mb-16 max-w-3xl mx-auto">
          Delivering excellence through cutting-edge digital solutions and creative innovation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-3xl shadow-xl text-center transform transition-all duration-300 hover:scale-105 flex flex-col justify-between h-full"
              style={{
                background: `linear-gradient(135deg, ${service.gradient})`,
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              }}
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-white/20 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-black">{service.title}</h3>
                <p className="text-black/90 text-sm leading-relaxed mb-6">{service.desc}</p>
              </div>
              <button className="bg-black text-white font-semibold px-6 py-2 rounded-full shadow-md hover:brightness-95 transition mt-auto">
                Request Service
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
