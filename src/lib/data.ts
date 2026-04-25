import {
  Factory,
  Layers,
  Workflow,
  BarChart3,
  Code2,
  Headset,
  type LucideIcon,
} from "lucide-react";

type L = { readonly en: string; readonly de: string };

// ── Services ──────────────────────────────────────────────────────────

export interface Service {
  readonly id: number;
  readonly title: L;
  readonly description: L;
  readonly icon: LucideIcon;
}

export const SERVICES: readonly Service[] = [
  {
    id: 1,
    title: {
      en: "MES & Manufacturing Systems",
      de: "MES & Fertigungssysteme",
    },
    description: {
      en: "Configuration and optimization of MES workflows, production tracking, and traceability in automotive and semiconductor environments.",
      de: "Konfiguration und Optimierung von MES-Workflows, Produktionsverfolgung und Rückverfolgbarkeit in Automobil- und Halbleiterumgebungen.",
    },
    icon: Factory,
  },
  {
    id: 2,
    title: {
      en: "SAP & Shopfloor Integration",
      de: "SAP & Shopfloor-Integration",
    },
    description: {
      en: "Integration of MES with SAP (PP/MM) and PLC-controlled systems, ensuring consistent production data and reliable system communication.",
      de: "Integration von MES mit SAP (PP/MM) und SPS-gesteuerten Systemen für konsistente Produktionsdaten und zuverlässige Systemkommunikation.",
    },
    icon: Layers,
  },
  {
    id: 3,
    title: {
      en: "Industrial Automation & Data Flow",
      de: "Industrielle Automatisierung & Datenfluss",
    },
    description: {
      en: "Design and implementation of data flows between production equipment, MES, and backend systems for stable and scalable manufacturing operations.",
      de: "Gestaltung und Implementierung von Datenflüssen zwischen Produktionsanlagen, MES und Backend-Systemen für stabile und skalierbare Fertigungsabläufe.",
    },
    icon: Workflow,
  },
  {
    id: 4,
    title: {
      en: "Production Data & Dashboards",
      de: "Produktionsdaten & Dashboards",
    },
    description: {
      en: "Development of Power BI and Grafana dashboards for real-time production monitoring, diagnostics, and decision support.",
      de: "Entwicklung von Power BI- und Grafana-Dashboards zur Echtzeit-Produktionsüberwachung, Diagnose und Entscheidungsunterstützung.",
    },
    icon: BarChart3,
  },
  {
    id: 5,
    title: {
      en: "Custom Automation & Scripting",
      de: "Maßgeschneiderte Automatisierung & Scripting",
    },
    description: {
      en: "Python-based automation, API integrations, and data processing scripts to support engineering workflows and reduce manual effort.",
      de: "Python-basierte Automatisierung, API-Integrationen und Datenverarbeitungsskripte zur Unterstützung von Engineering-Workflows und Reduzierung manueller Tätigkeiten.",
    },
    icon: Code2,
  },
  {
    id: 6,
    title: {
      en: "On-Site IT Support",
      de: "Vor-Ort-IT-Support",
    },
    description: {
      en: "On-site IT support for short-term, interim, or project-based engagements — from a single day to extended contracts.",
      de: "Vor-Ort-IT-Support für kurzfristige, Interim- oder projektbasierte Einsätze – von einem Tag bis zu längerfristigen Aufträgen.",
    },
    icon: Headset,
  },
];

// ── Technologies ──────────────────────────────────────────────────────

export interface TechCategory {
  readonly category: L;
  readonly skills: readonly L[];
}

export const TECH_CATEGORIES: readonly TechCategory[] = [
  {
    category: { en: "MES / Manufacturing Systems", de: "MES / Fertigungssysteme" },
    skills: [
      { en: "Camline MES (RM, CarMa, MaMa)", de: "Camline MES (RM, CarMa, MaMa)" },
      { en: "Production workflows", de: "Produktions-Workflows" },
      { en: "Traceability systems", de: "Rückverfolgbarkeitssysteme" },
    ],
  },
  {
    category: { en: "Integration", de: "Integration" },
    skills: [
      { en: "SAP PP/MM", de: "SAP PP/MM" },
      { en: "PLC systems (Siemens S7 / TIA Portal)", de: "SPS-Systeme (Siemens S7 / TIA Portal)" },
      { en: "REST APIs", de: "REST APIs" },
    ],
  },
  {
    category: { en: "Data & Monitoring", de: "Daten & Monitoring" },
    skills: [
      { en: "Power BI", de: "Power BI" },
      { en: "Grafana", de: "Grafana" },
      { en: "SQL", de: "SQL" },
    ],
  },
  {
    category: { en: "Programming", de: "Programmierung" },
    skills: [
      { en: "Python", de: "Python" },
      { en: "C#", de: "C#" },
      { en: "SQL", de: "SQL" },
    ],
  },
];

// ── Experience ────────────────────────────────────────────────────────

export interface ExperienceItem {
  readonly id: number;
  readonly title: L;
  readonly description: L;
  readonly tags: readonly string[];
}

export const EXPERIENCE_ITEMS: readonly ExperienceItem[] = [
  {
    id: 1,
    title: {
      en: "Semiconductor Production Environment",
      de: "Halbleiter-Produktionsumgebung",
    },
    description: {
      en: "Support of MES configuration and production workflows in a semiconductor manufacturing environment, ensuring traceability and stable data integration.",
      de: "Unterstützung bei MES-Konfiguration und Produktions-Workflows in einer Halbleiterfertigung – Sicherstellung der Rückverfolgbarkeit und stabilen Datenintegration.",
    },
    tags: ["MES", "Camline", "Traceability"],
  },
  {
    id: 2,
    title: {
      en: "Automotive Manufacturing (Series Production)",
      de: "Automobilfertigung (Serienproduktion)",
    },
    description: {
      en: "MES system development and optimization from integration phase to stable production. Focus on workflow configuration, SAP alignment, and production data consistency.",
      de: "MES-Systementwicklung und -optimierung von der Integrationsphase bis zur stabilen Produktion. Schwerpunkt auf Workflow-Konfiguration, SAP-Ausrichtung und Produktionsdatenkonsistenz.",
    },
    tags: ["MES", "SAP PP/MM", "Automotive"],
  },
  {
    id: 3,
    title: {
      en: "Production Monitoring & Diagnostics",
      de: "Produktionsmonitoring & Diagnostik",
    },
    description: {
      en: "Development of dashboards using Power BI and Grafana to support engineers and production teams with real-time insights.",
      de: "Entwicklung von Dashboards mit Power BI und Grafana zur Unterstützung von Ingenieuren und Produktionsteams mit Echtzeit-Einblicken.",
    },
    tags: ["Power BI", "Grafana", "Dashboards"],
  },
];