"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, staggerContainer, TiltCard } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "Hold It Down gave my family a space where we could just be ourselves. My son found his voice through the workshops, and I found a community that truly understands us.",
    name: "Community Parent",
    role: "Roots & Wings Participant",
    avatar: "/media/image-5.jpeg",
  },
  {
    quote:
      "For the first time, I felt like someone actually cared about what I had to say. The mentors here don\u2019t just talk at you \u2014 they listen, they understand, and they push you to believe in yourself.",
    name: "Young Person",
    role: "Youth Programme Member",
    avatar: "/media/image-7.jpeg",
  },
  {
    quote:
      "This isn\u2019t charity \u2014 it\u2019s community. Hold It Down is built by people who\u2019ve lived it. That\u2019s what makes it real. That\u2019s what makes it work.",
    name: "Local Volunteer",
    role: "Community Member",
    avatar: "/media/image-1.jpeg",
  },
];

const milestones = [
  { year: "2022", event: "Hold It Down CIC incorporated in England & Wales" },
  { year: "2023", event: "Roots & Wings programme launched — first family fun day" },
  { year: "2024", event: "Expanded to 5 active programmes, 500+ young people and families reached" },
  { year: "2025", event: "Third year of Roots & Wings — 300+ attendees at June fun day" },
];

export default function Impact() {
  return (
    <section id="impact" className="py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <Reveal>
            <span className="mb-5 inline-block rounded-full border border-accent/15 bg-accent-glow px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Our Impact
            </span>
          </Reveal>
          <Reveal>
            <h2 className="mx-auto max-w-[700px] font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              Every story matters.
              <br />
              Every voice <span className="text-gradient">counts</span>.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-5 max-w-[600px] text-base leading-relaxed text-text-secondary md:text-lg">
              Since 2022, we&apos;ve been building a movement rooted in lived
              experience. Here&apos;s our journey and what the community has to
              say.
            </p>
          </Reveal>
        </div>

        {/* Programme Timeline */}
        <Reveal>
          <div className="mb-12 rounded-2xl border border-border bg-bg-card p-6 sm:mb-16 sm:p-8">
            <h3 className="mb-6 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-text-primary">
              Our Journey
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-glow font-[family-name:var(--font-heading)] text-sm font-bold text-accent">
                      {m.year.slice(2)}
                    </span>
                    <div className="mt-2 h-full w-px bg-border sm:hidden" />
                  </div>
                  <div className="pb-4 sm:pb-0">
                    <p className="text-xs font-semibold text-accent">{m.year}</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((t, i) => (
            <TiltCard
              key={i}
              className="card-shadow flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card p-6 transition-all duration-500 sm:p-8 md:p-10 hover:border-border-hover"
            >
              <span className="text-gradient mb-3 font-[family-name:var(--font-heading)] text-4xl leading-none sm:mb-4 sm:text-5xl md:text-6xl">
                &ldquo;
              </span>
              <p className="flex-1 text-[0.95rem] italic leading-relaxed text-text-secondary">
                {t.quote}
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-border">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-text-tertiary">{t.role}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
