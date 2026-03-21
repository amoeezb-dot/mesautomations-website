export const SITE_CONFIG = {
  name: "MES Automation",
  fullName: "MES Automation Consulting & Services",
  tagline: "Powering the Future of Manufacturing — From the Heart of Germany.",
  description:
    "Your trusted partner for end-to-end manufacturing execution and industrial automation. We bridge the gap between your shop floor and enterprise systems.",
  email: "info@mes-automation.de",
  phone: "+49 30 1234 5678",
  address: "Musterstrasse 42, 10115 Berlin, Germany",
  officeHours: "Monday - Friday, 08:00 - 17:00 CET",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
