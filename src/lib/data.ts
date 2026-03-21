import {
  Cpu,
  Settings,
  BarChart3,
  GraduationCap,
  Box,
  Factory,
  Pill,
  Zap,
  Leaf,
} from "lucide-react";

export const SERVICES = [
  {
    id: "mes-implementation",
    step: "Step 1",
    title: "MES Implementation & Integration",
    content:
      "From requirements gathering to go-live, we manage the full lifecycle of your MES deployment. We integrate seamlessly with ERP systems like SAP S/4HANA, Oracle, and Microsoft Dynamics to ensure your production data flows without friction across every layer of your business.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    icon: Cpu,
  },
  {
    id: "process-automation",
    step: "Step 2",
    title: "Process Automation & PLC Programming",
    content:
      "Our engineers design and program PLC/SCADA systems that automate repetitive, high-risk, or precision-critical processes. We work with all major platforms including Siemens TIA Portal, Beckhoff TwinCAT, and Allen-Bradley ControlLogix.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2574&auto=format&fit=crop",
    icon: Settings,
  },
  {
    id: "digital-twin",
    step: "Step 3",
    title: "Digital Twin & Simulation",
    content:
      "Before a single line is modified on your factory floor, we simulate it. Our digital twin services let you model, test, and optimize production scenarios in a virtual environment — eliminating costly trial-and-error in the real world.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    icon: Box,
  },
  {
    id: "oee-analytics",
    step: "Step 4",
    title: "OEE & Performance Analytics",
    content:
      "We deploy real-time dashboards and analytics platforms that track Overall Equipment Effectiveness (OEE), production KPIs, and quality metrics. Turn raw machine data into actionable business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    icon: BarChart3,
  },
  {
    id: "training",
    step: "Step 5",
    title: "Training & Change Management",
    content:
      "Technology is only as powerful as the people using it. We provide hands-on operator training, supervisor workshops, and change management support to ensure your team adopts new systems confidently and efficiently.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop",
    icon: GraduationCap,
  },
] as const;

export const PROJECTS = [
  {
    id: 1,
    title: "Automotive Assembly Line Automation",
    date: "Stuttgart, Germany",
    content:
      "Designed and deployed a fully automated assembly line monitoring system integrating SCADA with existing MES infrastructure. Result: 23% increase in OEE, 18% reduction in unplanned downtime within 6 months.",
    category: "Automotive",
    icon: Factory,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "MES Rollout for Pharmaceutical Plant",
    date: "Frankfurt, Germany",
    content:
      "Implemented a GMP-compliant MES across three production lines, including full batch traceability, e-signature workflows, and SAP integration. Achieved full FDA 21 CFR Part 11 compliance.",
    category: "Pharma",
    icon: Pill,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Smart Factory Retrofit",
    date: "Munich, Germany",
    content:
      "Retrofitted a legacy production facility with IoT sensors, digital dashboards, and a centralized MES. Reduced manual data entry by 80% and enabled real-time production scheduling.",
    category: "Electronics",
    icon: Zap,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Energy Monitoring & Optimization",
    date: "Hamburg, Germany",
    content:
      "Deployed an energy consumption monitoring system integrated with the plant's MES. Identified waste reduction opportunities that led to a 14% drop in energy costs annually.",
    category: "Food & Beverage",
    icon: Leaf,
    relatedIds: [2, 3],
    status: "in-progress" as const,
    energy: 75,
  },
];

export const TEAM_MEMBERS = [
  {
    quote:
      "15+ years in industrial automation strategy and enterprise MES deployments across the EU. Leading the vision for accessible, world-class automation.",
    name: "Amy Jones",
    designation: "CEO",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    quote:
      "Electrical engineer turned entrepreneur with a passion for lean manufacturing and PLC architecture. Built the company from the ground up.",
    name: "Alex Dillinger",
    designation: "Founder",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    quote:
      "Former Siemens systems integrator with deep expertise in SCADA and digital factory design. Driving innovation in smart manufacturing.",
    name: "Tom Black",
    designation: "Founder",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
  },
  {
    quote:
      "Operations and quality management specialist with a background in pharmaceutical and automotive manufacturing. Ensuring excellence in every project.",
    name: "Barbara Santa",
    designation: "CEO",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    quote:
      "Data engineer and analytics architect specializing in OEE dashboards and MES-ERP integration. Transforming raw data into actionable insights.",
    name: "Dave Willson",
    designation: "Founder",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
];

export const VALUES = [
  {
    title: "Precision",
    description:
      "We engineer solutions that work exactly as intended, every time.",
  },
  {
    title: "Transparency",
    description: "Clear communication and honest timelines, always.",
  },
  {
    title: "Partnership",
    description:
      "We're not vendors; we're long-term partners in your operational success.",
  },
  {
    title: "Innovation",
    description:
      "Staying ahead of the technology curve so our clients don't have to.",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Klaus Mueller",
    role: "VP Operations",
    company: "AutoTech GmbH",
    content:
      "MES Automation transformed our production floor. The OEE improvements alone justified the investment within the first quarter. Their team's expertise in Siemens integration is unmatched.",
    rating: 5,
    avatar: "",
  },
  {
    id: 2,
    name: "Sarah Weber",
    role: "Plant Manager",
    company: "PharmaCorp AG",
    content:
      "Achieving FDA 21 CFR Part 11 compliance was our biggest challenge. MES Automation delivered a solution that exceeded our expectations — on time and within budget.",
    rating: 5,
    avatar: "",
  },
  {
    id: 3,
    name: "Michael Schmidt",
    role: "CTO",
    company: "ElektroWerk Solutions",
    content:
      "The smart factory retrofit reduced our manual data entry by 80%. The team's ability to integrate legacy systems with modern MES technology is remarkable.",
    rating: 5,
    avatar: "",
  },
  {
    id: 4,
    name: "Anna Fischer",
    role: "Director of Engineering",
    company: "NordFood Industries",
    content:
      "Their energy monitoring system identified savings we never knew existed. A 14% reduction in energy costs is a game-changer for our bottom line.",
    rating: 4,
    avatar: "",
  },
];

export const TRUSTED_COMPANIES = [
  "SIEMENS",
  "SAP",
  "Rockwell Automation",
  "Beckhoff",
  "Microsoft",
];

export const PROCESS_STEPS = [
  {
    step: "Step 1",
    title: "Consultation & Assessment",
    content:
      "We analyze your current production environment, identify pain points, and define clear automation objectives.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Design & Architecture",
    content:
      "Our engineers design a tailored solution architecture that integrates with your existing systems and scales with your business.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Implementation & Deployment",
    content:
      "We execute the implementation with minimal disruption, ensuring seamless integration with your ERP, SCADA, and PLC systems.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2670&auto=format&fit=crop",
  },
  {
    step: "Step 4",
    title: "Training & Ongoing Support",
    content:
      "Your team receives hands-on training and we provide continuous support to ensure long-term operational success.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
  },
];
