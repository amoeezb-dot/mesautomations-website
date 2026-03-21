"use client";

import Image from "next/image";
import {
  TestimonialContainerScroll,
  CardsContainer,
  CardTransformed,
  ReviewStars,
} from "@/components/shared/stacked-testimonials";
import { TESTIMONIALS } from "@/lib/data";

const testimonialCards = [
  {
    ...TESTIMONIALS[0],
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    ...TESTIMONIALS[1],
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    ...TESTIMONIALS[2],
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    ...TESTIMONIALS[3],
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
            Client Success Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Trusted by Manufacturers
            <br />
            <span className="text-white/60">Across Europe</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our clients achieve measurable results — from OEE improvements to
            full regulatory compliance. Here&apos;s what they say.
          </p>
        </div>

        <TestimonialContainerScroll className="min-h-[200vh]">
          <div className="sticky top-0 flex h-screen items-center justify-center">
            <CardsContainer className="h-80 w-full max-w-lg mx-auto">
              {testimonialCards.map((testimonial, index) => (
                <CardTransformed
                  key={testimonial.id}
                  index={index}
                  arrayLength={testimonialCards.length}
                  variant="dark"
                  incrementY={12}
                  incrementRotation={-index + 60}
                >
                  <ReviewStars
                    rating={testimonial.rating}
                    className="text-white"
                  />
                  <p className="text-center text-sm md:text-base text-white/80 leading-relaxed max-w-sm">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-white/50">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </TestimonialContainerScroll>
      </div>
    </section>
  );
}
