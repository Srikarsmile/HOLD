"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal, fadeUp, staggerContainer } from "@/lib/motion";

const audiences = [
  {
    title: "Young People",
    age: "Ages 12–25",
    desc: "Find your voice, build confidence, and connect with mentors who understand your world. Our programmes offer safe spaces for creative expression, emotional support, and leadership development.",
    cta: "Join a Programme",
    href: "#programs",
    isAnchor: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Parents & Carers",
    age: "Family support",
    desc: "Strengthen your family bonds through our intergenerational programmes. Connect with other parents, access workshops, and be part of a community that celebrates fatherhood, motherhood, and caregiving.",
    cta: "Explore Programmes",
    href: "#programs",
    isAnchor: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Older Adults",
    age: "Intergenerational",
    desc: "Share your wisdom and lived experience with the next generation. Our programmes value the knowledge of elders and create meaningful spaces where older adults can mentor, connect, and contribute.",
    cta: "Get Involved",
    href: "/volunteer",
    isAnchor: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Partners & Funders",
    age: "Organisations",
    desc: "Partner with a grassroots CIC making real impact in South London. We offer sponsorship opportunities, collaborative programme delivery, and transparent reporting on outcomes and community benefit.",
    cta: "Partner With Us",
    href: "mailto:hollditdownuk@hotmail.com?subject=Partnership%20Inquiry",
    isAnchor: false,
    isExternal: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Volunteers",
    age: "All ages welcome",
    desc: "Give your time, skills, and lived experience to support young people and families. Whether it's mentoring, event support, or creative facilitation — your contribution makes a difference.",
    cta: "Volunteer With Us",
    href: "/volunteer",
    isAnchor: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
];

export default function AudiencePathways() {
  return (
    <section id="pathways" className="py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <Reveal>
            <span className="mb-5 inline-block rounded-full border border-accent/15 bg-accent-glow px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Who We Work With
            </span>
          </Reveal>
          <Reveal>
            <h2 className="mx-auto max-w-[700px] font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              There&apos;s a place for{" "}
              <span className="text-gradient">everyone</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-5 max-w-[600px] text-base leading-relaxed text-text-secondary md:text-lg">
              We serve different communities with tailored programmes and
              opportunities. Find your pathway below.
            </p>
          </Reveal>
        </div>

        {/* Audience Cards */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {audiences.map((audience) => (
            <motion.div
              key={audience.title}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg sm:p-8"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-glow text-accent">
                {audience.icon}
              </div>
              <div className="mb-1 flex items-center gap-3">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  {audience.title}
                </h3>
              </div>
              <span className="mb-3 text-xs font-medium text-accent">
                {audience.age}
              </span>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
                {audience.desc}
              </p>
              {audience.isAnchor ? (
                <a
                  href={audience.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(audience.href)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-warm"
                >
                  {audience.cta}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform group-hover/btn:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ) : "isExternal" in audience && audience.isExternal ? (
                <a
                  href={audience.href}
                  className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-warm"
                >
                  {audience.cta}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform group-hover/btn:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ) : (
                <Link
                  href={audience.href}
                  className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-warm"
                >
                  {audience.cta}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform group-hover/btn:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
