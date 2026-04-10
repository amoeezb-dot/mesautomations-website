"use client";

import { useLocale } from "@/context/locale-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-0.5 bg-white/[0.06] border border-white/[0.1] rounded-full p-0.5">
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "px-2.5 py-1 rounded-full text-xs font-bold transition-colors",
          locale === "en"
            ? "bg-white text-black"
            : "text-white/50 hover:text-white"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLocale("de")}
        className={cn(
          "px-2.5 py-1 rounded-full text-xs font-bold transition-colors",
          locale === "de"
            ? "bg-white text-black"
            : "text-white/50 hover:text-white"
        )}
        aria-label="Switch to German"
      >
        DE
      </button>
    </div>
  );
}
