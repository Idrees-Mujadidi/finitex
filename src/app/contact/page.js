"use client";

import { Suspense, useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion, AnimatePresence } from "framer-motion";

// 🔹 Main Page Component
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center py-20 px-6 relative overflow-hidden">
      <Suspense
        fallback={
          <div className="text-center text-gray-400 text-lg">Loading...</div>
        }
      >
        <ContactContent />
      </Suspense>
    </main>
  );
}

// 🔹 Client-only subcomponent that uses useSearchParams safely
function ContactContent() {
  const formRef = useRef();
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // ✅ Capture service query param
  useEffect(() => {
    const serviceFromURL = searchParams.get("service");
    if (serviceFromURL) setSelectedService(serviceFromURL);
  }, [searchParams]);

  // ✅ EmailJS handler
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", // replace with your EmailJS service ID
        "your_template_id", // replace with your template ID
        formRef.current,
        "your_public_key" // replace with your public key
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          formRef.current.reset();
          setSelectedService("");
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
        }
      );
  };

  // ✅ Particles setup
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.1 },
      size: { value: { min: 2, max: 4 } },
      move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
    },
    interactivity: { events: { onHover: { enable: false } } },
    detectRetina: true,
  };

  return (
    <>
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Main Contact Card */}
      <motion.div
        className="relative z-10 max-w-4xl w-full bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mb-10 text-lg">
          Have a project in mind? Fill out the form below and we’ll get in touch
          with you shortly.
        </p>

        {/* Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label
              htmlFor="service"
              className="block text-sm font-medium text-sky-300 mb-2 tracking-wide"
            >
              Select Service
            </label>

            <div className="relative group">
              <select
                id="service"
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
                className="w-full appearance-none p-3 pr-10 rounded-xl bg-white/10 text-white border border-gray-600 
                 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all 
                 duration-300 cursor-pointer hover:bg-white/20 backdrop-blur-md shadow-sm"
              >
                <option value="" disabled hidden>
                  Choose a service...
                </option>
                <option value="Web Development" className="bg-[#0f172a] text-white">
                  Web Development
                </option>
                <option value="Database Solutions" className="bg-[#0f172a] text-white">
                  Database Solutions
                </option>
                <option value="Graphics Designing" className="bg-[#0f172a] text-white">
                  Graphics Designing
                </option>
                <option value="Hosting & Domain" className="bg-[#0f172a] text-white">
                  Hosting & Domain
                </option>
                <option value="Inquiry" className="bg-[#0f172a] text-white">
                  Other Inquiry
                </option>
              </select>

              {/* Dropdown arrow icon */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 group-hover:text-sky-300 transition-colors duration-300 pointer-events-none">
                ▼
              </span>
            </div>
          </motion.div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
          ></textarea>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 shadow-md ${loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-sky-400 hover:bg-sky-500 text-white"
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      {/* ✅ Floating Animated Toast */}
      <AnimatePresence>
        {sent && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 font-medium"
          >
            ✅ Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
