"use client";

import { Reveal } from "@/lib/motion";

const team = [
  {
    name: "Marcus Jack",
    role: "Director, Communications & Programme Lead",
    desc: "Marcus leads the strategic direction, communications, and programme design for Hold It Down CIC, drawing on lived experience and deep community roots to create impactful, culturally relevant programming.",
  },
  {
    name: "Laverne John",
    role: "Director, Creative Lead",
    desc: "Laverne brings creative vision to the organisation, leading on arts-based programming, event design, and community engagement through culturally rooted creative expression.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-20">
          {/* Left - Header */}
          <div>
            <Reveal>
              <span className="mb-5 inline-block rounded-full border border-accent/15 bg-accent-glow px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Our Team
              </span>
            </Reveal>
            <Reveal>
              <h2 className="mb-5 font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                Led by <span className="text-gradient">community</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="mb-6 leading-relaxed text-text-secondary">
                Hold It Down CIC is led by people with deep roots in the
                communities we serve. Our leadership combines lived experience
                with professional expertise in youth work, creative arts, and
                community development.
              </p>
            </Reveal>

            {/* Governance Statement */}
            <Reveal>
              <div className="rounded-xl border border-border bg-bg-card p-5 sm:p-6">
                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-text-primary">
                  Governance
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Hold It Down is a registered Community Interest Company (No.
                  14377702) in England &amp; Wales. We are committed to
                  transparency, accountability, and community benefit. All
                  surplus is reinvested into our programmes and the communities
                  we serve.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right - Team Cards */}
          <div className="flex flex-col gap-5">
            {team.map((member) => (
              <Reveal key={member.name}>
                <div className="rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-md sm:p-8">
                  <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-glow font-[family-name:var(--font-heading)] text-lg font-bold text-accent">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-accent">
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {member.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
