"use client";
import { Suspense } from "react";
import { useRef, useState, useCallback, useEffect, Suspense } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const selectedServiceFromURL = searchParams.get("service") || "";
  const [selectedService, setSelectedService] = useState(
    selectedServiceFromURL
  );

  useEffect(() => {
    if (selectedServiceFromURL) setSelectedService(selectedServiceFromURL);
  }, [selectedServiceFromURL]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "#1e3a8a" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      move: { enable: true, speed: 1, outModes: { default: "bounce" } },
      number: { value: 60, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
          setSelectedService("");
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message. Try again!");
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <section className="relative w-full min-h-[120vh] flex flex-col items-center justify-center overflow-hidden text-white px-6 py-20 md:py-28">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-stretch">
        <motion.div
          className="flex flex-col justify-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] transition-all h-full"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-white/80 text-center mb-10 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Have a project in mind? Let’s collaborate and bring your ideas to
            life.
          </p>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="p-4 rounded-xl bg-white/15 border border-white/30 focus:border-white/60 outline-none text-white placeholder-white/70 transition-all hover:bg-white/20"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="p-4 rounded-xl bg-white/15 border border-white/30 focus:border-white/60 outline-none text-white placeholder-white/70 transition-all hover:bg-white/20"
              />
            </div>

            <select
              name="user_quota"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
              className="p-4 rounded-xl bg-white text-gray-800 border border-white/30 focus:border-blue-500 outline-none cursor-pointer transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              <option value="">Select a Quote Type</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphics Designing">Graphics Designing</option>
              <option value="Database Solutions">Database Solutions</option>
              <option value="Hosting & Domain">Hosting & Domain</option>
              <option value="Custom Request">Custom Request</option>
            </select>

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message..."
              required
              className="p-4 rounded-xl bg-white/15 border border-white/30 focus:border-white/60 outline-none text-white placeholder-white/70 resize-none transition-all hover:bg-white/20"
            ></textarea>

            <motion.button
              type="submit"
              disabled={loading}
              className="mt-4 bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold shadow-lg flex items-center justify-center gap-3 hover:scale-105 hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 disabled:opacity-60"
              whileTap={{ scale: 0.95 }}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-t-transparent border-blue-900 rounded-full animate-spin" />
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center text-center h-full"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-80 h-96 sm:w-[400px] sm:h-[450px]"
          >
            <Image
              src="/developer-illustration.jpg"
              alt="Developer Illustration"
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px"
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.p
        className="relative z-10 mt-16 text-center text-white/90 font-light tracking-wide text-sm sm:text-base max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        ✨ Thank you for visiting us at{" "}
        <span className="font-semibold">FiniteX Digital Solutions</span>.
        <br />
        We look forward to creating something extraordinary together.
      </motion.p>
    </section>
  );
}

// 👇 Wrap with Suspense to satisfy Next.js requirement
export default function ContactPage() {
  return (
    <Suspense
      fallback={<div className="text-center py-20 text-white">Loading...</div>}
    >
      <ContactForm />
    </Suspense>
  );
}
