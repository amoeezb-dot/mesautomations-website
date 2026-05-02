"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Locale = "en" | "de";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getInitialLocale(): Locale {
  const saved = localStorage.getItem("locale");
  if (saved === "en" || saved === "de") return saved;
  return navigator.language.startsWith("de") ? "de" : "en";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");

  useEffect(() => {
    setLocale(getInitialLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function handleSetLocale(l: Locale) {
    setLocale(l);
    localStorage.setItem("locale", l);
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}