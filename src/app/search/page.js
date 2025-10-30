"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense, useMemo } from "react";
import Link from "next/link";
import { siteData } from "@/data/siteContent";

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const handler = setTimeout(() => {
      const normalized = query.toLowerCase();

      const allItems = [
        ...siteData.services.map((s) => ({ ...s, category: "Service" })),
        ...siteData.portfolio.map((p) => ({ ...p, category: "Portfolio" })),
        ...(siteData.contact
          ? siteData.contact.map((c) => ({ ...c, category: "Contact" }))
          : []),
      ];

      const filtered = allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(normalized) ||
          (item.desc && item.desc.toLowerCase().includes(normalized))
      );

      setResults(filtered);
      setLoading(false);
    }, 400); // debounce delay 400ms

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 md:px-16 bg-[#0f172a] text-white">
      <h1 className="text-3xl font-bold mb-8">
        Results for{" "}
        <span className="text-sky-400">
          "{query || initialQuery}"
        </span>
      </h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>

      {loading ? (
        <p className="text-sky-300 animate-pulse">Searching...</p>
      ) : results.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="p-6 bg-white/10 rounded-xl backdrop-blur-md border border-sky-500/20 shadow-lg hover:shadow-sky-400/30 transition-all duration-300 block hover:scale-[1.02]"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-sky-400 font-semibold">
                  {item.category}
                </span>
                <h2 className="text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-slate-400 mt-4">No results found.</p>
      )}

      <div className="mt-12 flex justify-center">
        <button
          onClick={() => router.push("/")}
          className="bg-sky-400 text-[#0f172a] font-semibold px-6 py-3 rounded-full shadow-lg hover:brightness-105 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default function SearchPageWrapper() {
  return (
    <Suspense fallback={<p className="text-sky-300 text-center mt-10">Loading...</p>}>
      <SearchResults />
    </Suspense>
  );
}
