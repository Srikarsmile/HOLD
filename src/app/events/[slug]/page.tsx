"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
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

export default function EventBlogPage() {
  const params = useParams();
  const slug = params.slug as string;
  const event = events.find((e) => e.slug === slug);
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
          Event not found
        </h1>
        <Link href="/events" className="text-accent hover:underline">
          Back to Events
        </Link>
      </div>
    );
  }

  const { blogContent } = event;

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
              href="/events"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              All Events
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full sm:h-[60vh]">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 sm:px-6 sm:pb-12">
          <div className="mx-auto max-w-[800px]">
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              {event.badge}
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-[clamp(1.8rem,5vw,3.2rem)] font-bold leading-tight tracking-tight text-white">
              {event.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
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
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="px-5 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[800px]">
          {/* Intro */}
          <Reveal>
            <p className="mb-10 text-lg leading-relaxed text-text-secondary sm:text-xl sm:leading-relaxed">
              {blogContent.intro}
            </p>
          </Reveal>

          {/* Sections */}
          {blogContent.sections.map((section, i) => (
            <Reveal key={i}>
              <div className="mb-10">
                <h2 className="mb-4 font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight sm:text-2xl">
                  {section.heading}
                </h2>
                {section.body.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    className="mb-4 leading-relaxed text-text-secondary last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}

          {/* Quote */}
          {blogContent.quote && (
            <Reveal>
              <blockquote className="my-12 border-l-4 border-accent py-2 pl-6 sm:pl-8">
                <p className="mb-3 text-lg font-medium italic leading-relaxed text-text-primary sm:text-xl">
                  &ldquo;{blogContent.quote.text}&rdquo;
                </p>
                <cite className="text-sm font-semibold not-italic text-accent">
                  — {blogContent.quote.author}
                </cite>
              </blockquote>
            </Reveal>
          )}

          {/* Closing */}
          <Reveal>
            <p className="mb-12 text-lg leading-relaxed text-text-secondary">
              {blogContent.closing}
            </p>
          </Reveal>

          {/* Highlights & Impact */}
          <Reveal>
            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-bg-card p-6">
                <h3 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-text-primary">
                  Highlights
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {event.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              {event.impact.length > 0 && (
                <div className="rounded-2xl border border-border bg-bg-card p-6">
                  <h3 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-text-primary">
                    Impact
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {event.impact.map((imp) => (
                      <li
                        key={imp}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-warm" />
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Photo Gallery */}
        {event.gallery.length > 0 && (
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <h2 className="mb-6 text-center font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight sm:text-2xl">
                Photo Gallery
              </h2>
            </Reveal>
            <motion.div
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {event.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-border transition-all hover:border-accent/30 hover:shadow-lg"
                  onClick={() => setLightboxImage(idx)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/10" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </article>

      {/* More Events / CTA */}
      <section className="border-t border-border px-5 py-12 text-center sm:px-6">
        <p className="mb-2 text-text-secondary">
          Enjoyed this story?
        </p>
        <p className="mb-6 text-sm text-text-tertiary">
          Explore more of our events or get involved in what we do.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:border-accent/30 hover:bg-bg-card"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Events
          </Link>
          <Link
            href="/support"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-warm px-8 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Support Us
            <svg
              width="16"
              height="16"
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 backdrop-blur-sm p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={event.gallery[lightboxImage].src}
                alt={event.gallery[lightboxImage].alt}
                width={1200}
                height={900}
                className="object-contain"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg/80 text-text-primary backdrop-blur-sm transition-colors hover:bg-accent hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImage(
                      lightboxImage === 0
                        ? event.gallery.length - 1
                        : lightboxImage - 1
                    );
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-bg/80 text-text-primary backdrop-blur-sm transition-colors hover:bg-accent hover:text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <span className="flex items-center px-3 text-sm text-text-secondary">
                  {lightboxImage + 1} / {event.gallery.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImage(
                      lightboxImage === event.gallery.length - 1
                        ? 0
                        : lightboxImage + 1
                    );
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-bg/80 text-text-primary backdrop-blur-sm transition-colors hover:bg-accent hover:text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
