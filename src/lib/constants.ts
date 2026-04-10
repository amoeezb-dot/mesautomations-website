export const SITE_CONFIG = {
  name: "MES Automation",
  tagline: "MES & Manufacturing IT Solutions for Industrial Production",
  description:
    "Supporting automotive and semiconductor environments with reliable systems, integration, and data.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzerklärung", href: "/datenschutz" },
] as const;
