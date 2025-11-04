"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AboutSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
        }),
    };

    const particlesInit = async (main) => {
        await loadSlim(main);
    };

    const particleOptions = {
        background: { color: "#0b0f1a" },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 120, duration: 0.4 } },
        },
        particles: {
            color: { value: "#ffffff" },
            links: {
                color: "#ffffff",
                distance: 120,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: { enable: true, speed: 0.8, outModes: { default: "bounce" } },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    return (
        <section className="relative w-full min-h-[120vh] overflow-hidden text-white flex flex-col justify-center bg-[#1e3a8a]">
            {/* Particles Background */}
            <Particles
                id="about-particles"
                init={particlesInit}
                options={particleOptions}
                className="absolute inset-0 z-0"
            />

            {/* Main Content */}
            <div
                className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 py-20 md:py-24 text-center md:text-left min-h-[120vh]"
                style={{ minHeight: "100vh" }} // 👈 change this value manually anytime
            >
                {/* Text Section */}
                <motion.div
                    className="flex-1 flex flex-col items-center md:items-start justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        About{" "}
                        <span className="text-[#4169E1]">FiniteX Digital Solutions</span>
                    </h1>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 max-w-xl">
                        We’re a next-generation software company focused on transforming
                        ideas into digital realities. From AI-powered systems to scalable
                        web platforms — we build{" "}
                        <strong>smart, human-centric solutions</strong> that empower Afghan
                        businesses to thrive in a connected world.
                    </p>

                    <motion.a
                        href="/portfolio"
                        className="bg-white text-[#0b0f1a] px-6 sm:px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#4169E1] hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Our Work
                    </motion.a>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="flex-1 flex justify-center items-center relative w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Blue Aura */}
                    <motion.div
                        className="absolute w-[280px] sm:w-[360px] md:w-[480px] h-[280px] sm:h-[360px] md:h-[480px] rounded-full blur-3xl bg-[#4169E1]/40"
                        animate={{
                            opacity: [0.5, 0.8, 0.5],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Floating Blob */}
                    <motion.div
                        className="relative w-[220px] sm:w-[300px] md:w-[420px] h-[220px] sm:h-[300px] md:h-[420px] overflow-hidden shadow-2xl"
                        style={{
                            borderRadius: "60% 40% 70% 30% / 30% 60% 40% 70%",
                            background:
                                "linear-gradient(135deg, rgba(65,105,225,0.3), rgba(255,255,255,0.1))",
                        }}
                        animate={{
                            borderRadius: [
                                "60% 40% 70% 30% / 30% 60% 40% 70%",
                                "40% 60% 30% 70% / 60% 30% 70% 40%",
                                "70% 30% 40% 60% / 40% 70% 30% 60%",
                                "60% 40% 70% 30% / 30% 60% 40% 70%",
                            ],
                            scale: [1, 1.02, 0.98, 1],
                            y: [0, -10, 10, 0],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Image
                            src="/about-photo.jpg"
                            alt="About FiniteX"
                            fill
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 500px"
                            className="object-cover opacity-90"
                        />

                    </motion.div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
                className="text-center mt-10 md:mt-20 pb-16 sm:pb-20 relative z-10 px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
                    Let’s Build Something Great Together
                </h3>
                <p className="text-gray-300 mb-6 max-w-lg mx-auto text-sm sm:text-base">
                    Have a project idea or want to collaborate? We’d love to hear from
                    you.
                </p>
                <motion.a
                    href="/contact"
                    className="bg-[#4169E1] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#2563eb] transition-colors duration-300 inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Contact Us
                </motion.a>
            </motion.div>
        </section>
    );
}

