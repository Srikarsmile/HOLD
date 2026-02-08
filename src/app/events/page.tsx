"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { events } from "@/lib/events-data";
import { Reveal, fadeUp, staggerContainer } from "@/lib/motion";
import { useTheme } from "@/lib/theme";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-card text-text-secondary transition-all hover:border-border-hover hover:text-accent"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] border-b border-border bg-bg/85 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-lg font-bold tracking-wide"
          >
            <span className="text-text-primary">HOLD IT</span>
            <span className="text-accent">DOWN</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Home
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Support Us
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-28 pb-12 sm:px-6 sm:pt-32 md:pb-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, var(--hero-glow-1) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, var(--hero-glow-2) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <Reveal>
            <span className="mb-5 inline-block rounded-full border border-accent/15 bg-accent-glow px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Our Events
            </span>
          </Reveal>
          <Reveal>
            <h1 className="mx-auto max-w-[800px] font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
              Where community{" "}
              <span className="text-gradient">comes alive</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-5 max-w-[600px] text-base leading-relaxed text-text-secondary md:text-lg">
              From family fun days to youth-led podcast sessions, our events
              bring people together to connect, heal, and celebrate. Click on any
              event to read the full story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Events List */}
      <section className="px-5 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="grid gap-6 sm:gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {events.map((event, i) => (
              <motion.div key={event.slug} variants={fadeUp}>
                <Link
                  href={`/events/${event.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div
                      className={`relative aspect-[16/10] md:aspect-auto md:min-h-[350px] ${
                        i % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={event.image}
                        alt={event.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card/60 via-transparent to-transparent md:bg-none" />
                      <div className="absolute top-4 left-4 rounded-full border border-accent/20 bg-bg/80 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
                        {event.badge}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 md:p-10">
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
                        <span className="flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {event.location}
                        </span>
                      </div>

                      <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold sm:text-2xl">
                        {event.title}
                      </h2>
                      <p className="mb-5 leading-relaxed text-text-secondary">
                        {event.desc.length > 200
                          ? event.desc.slice(0, 200) + "..."
                          : event.desc}
                      </p>

                      {/* Impact Tags */}
                      {event.impact.length > 0 && (
                        <div className="mb-5">
                          <div className="flex flex-wrap gap-2">
                            {event.impact.slice(0, 3).map((imp) => (
                              <span
                                key={imp}
                                className="rounded-full border border-accent/15 bg-accent-glow px-3 py-1 text-xs font-medium text-accent"
                              >
                                {imp}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Read Story CTA */}
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-warm">
                        Read the full story
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-5 py-12 text-center sm:px-6">
        <p className="mb-4 text-text-secondary">
          Want to get involved in our next event?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/volunteer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:border-accent/30 hover:bg-bg-card"
          >
            Volunteer With Us
          </Link>
          <Link
            href="/support"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-warm px-8 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span>Support Us</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-8 text-center sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] text-lg font-bold tracking-wide"
        >
          <span className="text-text-primary">HOLD IT</span>
          <span className="text-accent">DOWN</span>
        </Link>
        <p className="mt-3 text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} Hold It Down CIC. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
