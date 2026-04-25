"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function Pad({ cx, cy, r = 4 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      {/* Glow ring */}
      <circle
        cx={cx}
        cy={cy}
        r={r + 4}
        fill="rgba(96,210,255,0.06)"
      />
      {/* Outer ring */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="rgba(30,30,30,1)"
        stroke="rgba(96,210,255,0.55)"
        strokeWidth={1.2}
      />
      {/* Inner dot */}
      <circle
        cx={cx}
        cy={cy}
        r={r * 0.4}
        fill="rgba(96,210,255,0.7)"
      />
    </g>
  );
}

function Signal({
  d,
  duration,
  delay,
  repeatDelay = 2,
  color = "rgba(96,210,255,1)",
  glowColor = "rgba(96,210,255,0.35)",
}: {
  d: string;
  duration: number;
  delay: number;
  repeatDelay?: number;
  color?: string;
  glowColor?: string;
}) {
  return (
    <g>
      {/* Wide glow layer */}
      <motion.path
        d={d}
        stroke={glowColor}
        strokeWidth={6}
        fill="none"
        strokeLinecap="round"
        strokeDasharray="18 2500"
        animate={{ strokeDashoffset: [2500, -20] }}
        transition={{ duration, delay, repeat: Infinity, ease: "linear", repeatDelay }}
      />
      {/* Core bright signal */}
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeDasharray="14 2500"
        animate={{ strokeDashoffset: [2500, -20] }}
        transition={{ duration, delay, repeat: Infinity, ease: "linear", repeatDelay }}
      />
    </g>
  );
}

function CircuitBackground() {
  const trace = "rgba(255,255,255,0.1)";
  const tw = 1;

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Left traces */}
      <path d="M 0 170 H 160 V 110 H 300 V 200 H 420 V 150 H 480" stroke={trace} strokeWidth={tw} fill="none" />
      <path d="M 0 310 H 100 V 255 H 220 V 310 H 340" stroke={trace} strokeWidth={tw} fill="none" />
      <path d="M 220 255 V 170 H 340 V 90 H 460" stroke={trace} strokeWidth={tw} fill="none" />
      <path d="M 0 430 H 80 V 375 H 180 V 440 H 290 V 390 H 390" stroke={trace} strokeWidth={tw} fill="none" />
      <path d="M 0 550 H 60 V 490 H 160 V 560 H 270" stroke={trace} strokeWidth={tw} fill="none" />
      <path d="M 130 700 V 610 H 230 V 530 H 330 V 590 H 450" stroke={trace} strokeWidth={tw} fill="none" />

      {/* Left IC outlines */}
      <rect x="155" y="95" width="70" height="120" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={0.8} />
      <rect x="295" y="185" width="55" height="75" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={0.8} />
      <rect x="75" y="360" width="70" height="90" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={0.8} />

      {/* Left pads */}
      <Pad cx={160} cy={110} /><Pad cx={300} cy={110} /><Pad cx={300} cy={200} />
      <Pad cx={420} cy={200} /><Pad cx={420} cy={150} /><Pad cx={100} cy={255} />
      <Pad cx={220} cy={255} /><Pad cx={220} cy={310} /><Pad cx={340} cy={310} />
      <Pad cx={340} cy={170} /><Pad cx={80} cy={375} /><Pad cx={180} cy={375} />
      <Pad cx={180} cy={440} /><Pad cx={290} cy={440} /><Pad cx={290} cy={390} />
      <Pad cx={60} cy={490} /><Pad cx={160} cy={490} /><Pad cx={160} cy={560} />
      <Pad cx={230} cy={530} /><Pad cx={330} cy={530} /><Pad cx={330} cy={590} />

      {/* Right traces */}
      <path d="M 1200 150 H 1040 V 90 H 900 V 170 H 780 V 110 H 720" stroke={trace} strokeWidth={tw} fill="none" />
      <path d="M 1200 280 H 1100 V 225 H 980 V 285 H 860" stroke={trace} strokeWidth={tw} fill="none" />
      <path d="M 980 225 V 140 H 860 V 80 H 740" stroke={trace} strokeWidth={tw} fill="none" />
      <path d="M 1200 410 H 1120 V 355 H 1020 V 415 H 910 V 360 H 810" stroke={trace} strokeWidth={tw} fill="none" />
      <path d="M 1200 530 H 1140 V 470 H 1040 V 535 H 930" stroke={trace} strokeWidth={tw} fill="none" />
      <path d="M 1070 700 V 615 H 970 V 540 H 870 V 600 H 750" stroke={trace} strokeWidth={tw} fill="none" />

      {/* Right IC outlines */}
      <rect x="975" y="75" width="70" height="120" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={0.8} />
      <rect x="845" y="265" width="55" height="75" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={0.8} />
      <rect x="1055" y="340" width="70" height="90" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={0.8} />

      {/* Right pads */}
      <Pad cx={1040} cy={90} /><Pad cx={900} cy={90} /><Pad cx={900} cy={170} />
      <Pad cx={780} cy={170} /><Pad cx={780} cy={110} /><Pad cx={1100} cy={225} />
      <Pad cx={980} cy={225} /><Pad cx={980} cy={285} /><Pad cx={860} cy={285} />
      <Pad cx={860} cy={140} /><Pad cx={1120} cy={355} /><Pad cx={1020} cy={355} />
      <Pad cx={1020} cy={415} /><Pad cx={910} cy={415} /><Pad cx={910} cy={360} />
      <Pad cx={1140} cy={470} /><Pad cx={1040} cy={470} /><Pad cx={1040} cy={535} />
      <Pad cx={970} cy={540} /><Pad cx={870} cy={540} /><Pad cx={870} cy={600} />

      {/* Animated signal pulses — left */}
      <Signal d="M 0 170 H 160 V 110 H 300 V 200 H 420 V 150 H 480" duration={4.5} delay={0} repeatDelay={2} />
      <Signal d="M 0 430 H 80 V 375 H 180 V 440 H 290 V 390 H 390" duration={5} delay={1.2} repeatDelay={1.8} />
      <Signal d="M 130 700 V 610 H 230 V 530 H 330 V 590 H 450" duration={4} delay={2.5} repeatDelay={2.2} />

      {/* Animated signal pulses — right */}
      <Signal d="M 1200 150 H 1040 V 90 H 900 V 170 H 780 V 110 H 720" duration={4.5} delay={0.6} repeatDelay={2} />
      <Signal d="M 1200 410 H 1120 V 355 H 1020 V 415 H 910 V 360 H 810" duration={5.2} delay={1.8} repeatDelay={1.5} />
      <Signal d="M 1070 700 V 615 H 970 V 540 H 870 V 600 H 750" duration={4.2} delay={3} repeatDelay={2.5} />
    </svg>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  description,
  children,
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-cyan-500/[0.02] blur-3xl" />

      <CircuitBackground />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {description ||
                "Crafting exceptional digital experiences through innovative design and cutting-edge technology."}
            </p>
          </motion.div>

          {children && (
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };