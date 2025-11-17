"use client";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const stats = [
    { label: "Projects Completed", value: 20 },
    { label: "Happy Clients", value: 18 },
    { label: "Team Members", value: 5 },
    { label: "Years Experience", value: 4 },
  ];

  return (
    <section className="relative py-12 px-4 bg-black overflow-hidden">
      {/* Top fade to slightly transparent to blend with hero */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-0"></div>

      {/* Right side royal blue glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[450px] h-[400px] bg-blue-700 rounded-full blur-[160px] opacity-38 pointer-events-none z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <StatItem
              key={i}
              value={item.value}
              label={item.label}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const animate = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="text-center fade-up">
      <div
        className="text-4xl md:text-5xl font-bold 
        bg-gradient-to-r from-[#4169E1] to-[#1C398E] 
        bg-clip-text text-transparent mb-1"
      >
        {count}+
      </div>
      <div className="text-sm text-gray-300 font-medium">{label}</div>
    </div>
  );
}
