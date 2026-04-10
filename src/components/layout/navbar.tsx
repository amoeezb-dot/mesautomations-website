"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Wrench,
  Briefcase,
  User,
  Mail,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/context/locale-context";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

interface NavItem {
  readonly key: string;
  readonly label: { readonly en: string; readonly de: string };
  readonly url: string;
  readonly icon: LucideIcon;
}

const navItems: readonly NavItem[] = [
  { key: "home",       label: { en: "Home",       de: "Startseite" }, url: "/",         icon: Home },
  { key: "services",   label: { en: "Services",   de: "Leistungen" }, url: "/services", icon: Wrench },
  { key: "experience", label: { en: "Experience", de: "Erfahrung"  }, url: "/projects", icon: Briefcase },
  { key: "about",      label: { en: "About",      de: "Über mich"  }, url: "/about",    icon: User },
  { key: "contact",    label: { en: "Contact",    de: "Kontakt"    }, url: "/contact",  icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const activeKey = useMemo(() => {
    const match = navItems.find((item) => item.url === pathname);
    return match ? match.key : navItems[0].key;
  }, [pathname]);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Desktop pill nav ─────────────────────────────────── */}
      <div className="hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 z-[200] pt-6 h-max items-center gap-3">
        <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {navItems.map((item) => {
            const isActive = activeKey === item.key;
            return (
              <Link
                key={item.key}
                href={item.url}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
              >
                {item.label[locale]}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>

        <LanguageSwitcher />
      </div>

      {/* ── Mobile hamburger button ──────────────────────────── */}
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        className="fixed top-4 right-4 z-[210] md:hidden p-2 rounded-full bg-background/5 border border-border backdrop-blur-lg"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? (
          <X size={22} className="text-foreground" />
        ) : (
          <Menu size={22} className="text-foreground" />
        )}
      </button>

      {/* ── Mobile overlay menu ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] md:hidden bg-[#030303]/95 backdrop-blur-md flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = activeKey === item.key;
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.url}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 text-2xl font-semibold transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-foreground/60 hover:text-foreground"
                      )}
                    >
                      <Icon size={24} strokeWidth={2} />
                      {item.label[locale]}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.25 }}
                className="mt-2"
              >
                <LanguageSwitcher />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
