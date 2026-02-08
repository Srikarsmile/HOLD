"use client";

import Link from "next/link";
import { Reveal } from "@/lib/motion";

export default function CTA() {
  return (
    <section className="pb-12 sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card px-5 py-12 text-center sm:rounded-3xl sm:px-8 sm:py-16 md:px-16 md:py-20">
            {/* Background Orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="cta-orb-1 absolute -top-48 -right-24 h-96 w-96 rounded-full bg-accent opacity-30 blur-[80px]" />
              <div className="cta-orb-2 absolute -bottom-36 -left-12 h-72 w-72 rounded-full bg-accent-warm opacity-30 blur-[80px]" />
            </div>

            <div className="relative z-10">
              <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(1.4rem,4vw,2.8rem)] font-bold tracking-tight sm:mb-5">
                Ready to be part of the movement?
              </h2>
              <p className="mx-auto mb-8 max-w-[600px] text-base leading-relaxed text-text-secondary sm:mb-10 md:text-lg">
                Whether you&apos;re a young person looking for a safe space, a
                family seeking community, or someone who wants to support
                grassroots change &mdash; there&apos;s a place for you.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#programs")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-warm px-7 py-3.5 text-sm font-semibold text-white transition-all sm:w-auto sm:px-8 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span>Join a Programme</span>
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
                <Link
                  href="/volunteer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-text-primary backdrop-blur-sm transition-all sm:w-auto sm:px-8 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/5"
                >
                  Volunteer With Us
                </Link>
                <Link
                  href="/support"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-text-primary backdrop-blur-sm transition-all sm:w-auto sm:px-8 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/5"
                >
                  Donate to Support
                </Link>
                <a
                  href="mailto:hollditdownuk@hotmail.com?subject=Partnership%20Inquiry"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-text-primary backdrop-blur-sm transition-all sm:w-auto sm:px-8 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/5"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
