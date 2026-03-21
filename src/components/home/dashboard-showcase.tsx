"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/shared/container-scroll";

export function DashboardShowcase() {
  return (
    <section className="bg-[#030303]">
      <ContainerScroll
        titleComponent={
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
              Real-Time Production Intelligence
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Your Entire Factory,
              <br />
              <span className="text-white/60">in One Dashboard</span>
            </h2>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
          alt="MES Dashboard showing production KPIs, OEE metrics, and real-time analytics"
          width={1200}
          height={800}
          className="w-full h-full object-cover object-top"
        />
      </ContainerScroll>
    </section>
  );
}
