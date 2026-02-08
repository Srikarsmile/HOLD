"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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

const supportWays = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Make a Donation",
    desc: "Your financial contribution directly funds programmes for young people and families. Every pound helps us create safe, inclusive spaces where healing and growth happen.",
    cta: "Donate Now",
    href: "mailto:hollditdownuk@hotmail.com?subject=I%20would%20like%20to%20make%20a%20donation",
    highlight: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Become a Volunteer",
    desc: "Give your time and skills to support our events, mentoring sessions, and workshops. Whether you have a few hours or a regular commitment, your presence matters.",
    cta: "Get Involved",
    href: "/volunteer",
    highlight: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Corporate Partnership",
    desc: "Partner with Hold It Down CIC to make a lasting impact. We offer sponsorship opportunities, team volunteering days, and bespoke community engagement programmes.",
    cta: "Partner With Us",
    href: "mailto:hollditdownuk@hotmail.com?subject=Corporate%20Partnership%20Inquiry",
    highlight: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    ),
    title: "Share Our Story",
    desc: "Follow us on social media, share our posts, and tell people about Hold It Down. Word of mouth is powerful — your voice amplifies ours and helps us reach more families.",
    cta: "Follow on Instagram",
    href: "https://www.instagram.com/holditdowncic",
    highlight: false,
  },
];

const impactNumbers = [
  { number: "500+", label: "Young people supported" },
  { number: "300+", label: "Family fun day attendees" },
  { number: "5", label: "Active programmes" },
  { number: "100+", label: "Fathers & male carers engaged" },
];

const fundingAreas = [
  {
    amount: "£25",
    impact: "Provides art supplies for a creative wellbeing workshop session",
  },
  {
    amount: "£50",
    impact: "Funds a young person's place on an outdoor adventure trip",
  },
  {
    amount: "£100",
    impact: "Covers equipment for a Talk Di TingZ podcast recording session",
  },
  {
    amount: "£250",
    impact: "Sponsors a family's participation in the Roots & Wings programme",
  },
  {
    amount: "£500",
    impact: "Funds a full mentoring programme for a group of young people",
  },
  {
    amount: "£1,000+",
    impact: "Helps us deliver a community event bringing together 100+ people",
  },
];

export default function SupportPage() {
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
              href="/events"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Events
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
              Support Us
            </span>
          </Reveal>
          <Reveal>
            <h1 className="mx-auto max-w-[800px] font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
              Help us <span className="text-gradient">amplify</span> unheard
              voices
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-5 max-w-[600px] text-base leading-relaxed text-text-secondary md:text-lg">
              Hold It Down CIC is a grassroots community interest company. We
              rely on the generosity of individuals, organisations, and partners
              to continue our vital work with young people and families in
              Croydon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="px-5 pb-12 sm:px-6 md:pb-16">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {impactNumbers.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-bg-card p-5 text-center sm:p-6"
              >
                <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-accent sm:text-3xl">
                  {item.number}
                </p>
                <p className="mt-1 text-xs text-text-secondary sm:text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="px-5 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <h2 className="mb-8 text-center font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight sm:mb-12">
              Ways to <span className="text-gradient">support</span>
            </h2>
          </Reveal>
          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {supportWays.map((way) => (
              <motion.div key={way.title} variants={fadeUp}>
                <div
                  className={`group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
                    way.highlight
                      ? "border-accent/30 bg-gradient-to-br from-accent/5 to-accent-warm/5 hover:border-accent/50 hover:shadow-xl"
                      : "border-border bg-bg-card hover:border-accent/30 hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${
                      way.highlight
                        ? "bg-accent/10 text-accent"
                        : "bg-accent-glow text-accent"
                    }`}
                  >
                    {way.icon}
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold">
                    {way.title}
                  </h3>
                  <p className="mb-6 flex-1 leading-relaxed text-text-secondary">
                    {way.desc}
                  </p>
                  {way.href.startsWith("/") ? (
                    <Link
                      href={way.href}
                      className={`group/btn inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                        way.highlight
                          ? "text-accent hover:text-accent-warm"
                          : "text-accent hover:text-accent-warm"
                      }`}
                    >
                      {way.cta}
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
                  ) : (
                    <a
                      href={way.href}
                      target={way.href.startsWith("http") ? "_blank" : undefined}
                      rel={way.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`group/btn inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                        way.highlight
                          ? "text-accent hover:text-accent-warm"
                          : "text-accent hover:text-accent-warm"
                      }`}
                    >
                      {way.cta}
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
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Your Donation Funds */}
      <section className="border-t border-border px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <div className="mb-10 text-center sm:mb-14">
              <span className="mb-5 inline-block rounded-full border border-accent/15 bg-accent-glow px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Your Impact
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight">
                Where your money goes
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] text-text-secondary">
                Every contribution is invested directly into our programmes and
                community. Here&apos;s what your support makes possible.
              </p>
            </div>
          </Reveal>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {fundingAreas.map((item) => (
              <motion.div
                key={item.amount}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-xl border border-border bg-bg-card p-5 transition-all hover:border-accent/20 hover:shadow-md sm:p-6"
              >
                <span className="flex-shrink-0 rounded-lg bg-accent-glow px-3 py-1.5 font-[family-name:var(--font-heading)] text-lg font-bold text-accent">
                  {item.amount}
                </span>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.impact}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card px-5 py-12 text-center sm:rounded-3xl sm:px-8 sm:py-16 md:px-16 md:py-20">
              <div className="absolute inset-0 overflow-hidden">
                <div className="cta-orb-1 absolute -top-48 -right-24 h-96 w-96 rounded-full bg-accent opacity-30 blur-[80px]" />
                <div className="cta-orb-2 absolute -bottom-36 -left-12 h-72 w-72 rounded-full bg-accent-warm opacity-30 blur-[80px]" />
              </div>
              <div className="relative z-10">
                <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(1.4rem,4vw,2.8rem)] font-bold tracking-tight sm:mb-5">
                  Ready to make a difference?
                </h2>
                <p className="mx-auto mb-8 max-w-[600px] text-base leading-relaxed text-text-secondary sm:mb-10 md:text-lg">
                  Get in touch to discuss how you can support our work. Whether
                  it&apos;s a one-off donation, regular giving, or a partnership
                  &mdash; every contribution counts.
                </p>
                <a
                  href="mailto:hollditdownuk@hotmail.com?subject=I%20want%20to%20support%20Hold%20It%20Down%20CIC"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-warm px-7 py-3.5 text-sm font-semibold text-white transition-all sm:px-10 sm:py-4 sm:text-base hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span>Get In Touch</span>
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
                </a>
              </div>
            </div>
          </Reveal>
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
