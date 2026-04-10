"use client";

import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS, LEGAL_LINKS } from "@/lib/constants";
import { useLocale } from "@/context/locale-context";

const NAV_LABELS: Record<string, { en: string; de: string }> = {
  "/":         { en: "Home",       de: "Startseite" },
  "/services": { en: "Services",   de: "Leistungen" },
  "/projects": { en: "Experience", de: "Erfahrung"  },
  "/about":    { en: "About",      de: "Über mich"  },
  "/contact":  { en: "Contact",    de: "Kontakt"    },
};

const TAGLINE = {
  en: "MES & Manufacturing IT Solutions for Industrial Production",
  de: "MES & Manufacturing-IT-Lösungen für die industrielle Produktion",
};

const ALL_RIGHTS = {
  en: "All rights reserved.",
  de: "Alle Rechte vorbehalten.",
};

const LEGAL_LABELS: Record<string, { en: string; de: string }> = {
  "/impressum":   { en: "Impressum",        de: "Impressum" },
  "/datenschutz": { en: "Data Protection",  de: "Datenschutzerklärung" },
};

export function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="border-t border-white/[0.08] bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground max-w-sm text-center md:text-left">
            {TAGLINE[locale]}
          </p>

          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {NAV_LABELS[link.href]?.[locale] ?? link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 pt-4 border-t border-white/[0.04] flex flex-wrap items-center justify-center gap-3">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-muted-foreground/70 hover:text-foreground border border-white/[0.12] hover:border-white/[0.3] rounded-md px-3 py-1.5 transition-colors"
            >
              {LEGAL_LABELS[link.href]?.[locale] ?? link.label}
            </Link>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-white/[0.06] text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. {ALL_RIGHTS[locale]}
        </div>
      </div>
    </footer>
  );
}
