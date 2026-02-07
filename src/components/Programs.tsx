"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, fadeUp, staggerContainer, TiltCard } from "@/lib/motion";

const programs = [
  {
    title: "Cultural Education",
    desc: "Culturally safe spaces where young people explore identity, heritage, and creative expression. We celebrate diversity and challenge inequality through education that centres lived experience.",
    tags: ["Identity", "Heritage", "Creative Expression"],
    image:
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&h=400&fit=crop",
    imageAlt: "Young people expressing themselves through creative arts and culture",
  },
  {
    title: "Youth Development",
    desc: "Skills-building workshops and mentoring that equip young people with confidence, resilience, and the tools to shape their futures. We nurture local talent and celebrate potential.",
    tags: ["Workshops", "Mentoring", "Skills"],
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop",
    imageAlt: "Young people building skills and confidence together",
  },
  {
    title: "Community Support",
    desc: "Strengthening grassroots networks and providing support for families affected by inequality and exclusion. Real, grounded work that meets people where they are.",
    tags: ["Grassroots", "Families", "Inclusion"],
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
    imageAlt: "Families and community members coming together for support",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-secondary">
      {children}
    </span>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        {/* Header */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <span className="mb-5 inline-block rounded-full border border-accent/15 bg-accent-glow px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                What We Do
              </span>
            </Reveal>
            <Reveal>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
                Programmes shaped <span className="text-gradient">by</span> and{" "}
                <span className="text-gradient">for</span> the community
              </h2>
            </Reveal>
          </div>
          <div className="flex items-end">
            <Reveal>
              <p className="text-base leading-relaxed text-text-secondary md:text-lg">
                Our initiatives are shaped through co-design with participants,
                responding to what local families and young people tell us they
                need.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Programs Grid */}
        <motion.div
          className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Featured: Roots & Wings */}
          <TiltCard className="group relative col-span-full overflow-hidden rounded-2xl border border-accent/10 bg-gradient-to-br from-bg-card to-accent/[0.03]">
            <div className="grid items-center md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[16/10] sm:aspect-[2/1] md:aspect-auto md:h-full md:min-h-[350px]">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
                  alt="Families and young people participating in the Roots and Wings programme"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-card/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent md:hidden" />
              </div>
              {/* Content */}
              <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
                <span className="mb-4 inline-block rounded-full border border-accent/15 bg-accent-glow px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-accent">
                  National Lottery Funded
                </span>
                <h3 className="mb-4 font-[family-name:var(--font-heading)] text-2xl font-semibold sm:text-3xl">
                  Roots & Wings
                </h3>
                <p className="mb-6 leading-relaxed text-text-secondary">
                  A family-focused programme creating honest spaces for expression
                  and belonging. Co-designed with families and young people, Roots
                  & Wings nurtures intergenerational connection and amplifies youth
                  voice through creative workshops, dialogue sessions, and
                  community events.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Tag>Family Focused</Tag>
                  <Tag>Co-Designed</Tag>
                  <Tag>Youth Voice</Tag>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Other Programs - 3 column grid */}
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((prog) => (
              <TiltCard
                key={prog.title}
                className="card-shadow group overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-500 hover:border-border-hover"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                </div>
                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="mb-3 font-[family-name:var(--font-heading)] text-xl font-semibold">
                    {prog.title}
                  </h3>
                  <p className="mb-5 text-[0.95rem] leading-relaxed text-text-secondary">
                    {prog.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {prog.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
