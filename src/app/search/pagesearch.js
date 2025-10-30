"use client";

import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen bg-[#0f172a] text-sky-300 text-lg animate-pulse">
          Loading search results...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
