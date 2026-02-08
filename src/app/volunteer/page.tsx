"use client";

import { useState } from "react";
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

const roles = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Event Support",
    desc: "Help us run our community events, from family fun days to networking nights. Setup, registration, activities, and more.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Mentoring",
    desc: "Become a mentor to young people aged 10-25. Share your experience, provide guidance, and be a positive role model.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Workshop Facilitation",
    desc: "Lead or co-facilitate creative, wellbeing, or skills workshops. Bring your expertise to our community sessions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Digital & Media",
    desc: "Help with social media, photography, videography, podcast production, or website updates. Amplify our story online.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Admin & Fundraising",
    desc: "Support behind the scenes with administration, grant writing, fundraising campaigns, and organisational development.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Sports & Activities",
    desc: "Lead football sessions, outdoor activities, or sports programmes for young people. Fitness and fun combined.",
  },
];

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    interests: [] as string[],
    availability: "",
    experience: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleInterestToggle(interest: string) {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent("Volunteer Application - " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAge Range: ${formData.age}\nInterested In: ${formData.interests.join(", ")}\nAvailability: ${formData.availability}\nExperience: ${formData.experience}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:hollditdownuk@hotmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

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
              Support
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
              Get Involved
            </span>
          </Reveal>
          <Reveal>
            <h1 className="mx-auto max-w-[800px] font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
              Volunteer with{" "}
              <span className="text-gradient">Hold It Down</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-5 max-w-[600px] text-base leading-relaxed text-text-secondary md:text-lg">
              Your time, skills, and passion can change lives. Join our team of
              dedicated volunteers and help us create safe, empowering spaces for
              young people and families in Croydon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="px-5 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <h2 className="mb-8 text-center font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight sm:mb-12">
              How you can <span className="text-gradient">help</span>
            </h2>
          </Reveal>
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {roles.map((role) => (
              <motion.div
                key={role.title}
                variants={fadeUp}
                className="group rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-glow text-accent">
                  {role.icon}
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-base font-semibold">
                  {role.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {role.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section
        id="form"
        className="border-t border-border px-5 py-16 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-[700px]">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="mb-5 inline-block rounded-full border border-accent/15 bg-accent-glow px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Apply Now
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight">
                Volunteer application
              </h2>
              <p className="mx-auto mt-4 max-w-[500px] text-text-secondary">
                Fill in the form below and we&apos;ll get back to you. No
                experience necessary &mdash; just a willingness to make a
                difference.
              </p>
            </div>
          </Reveal>

          {submitted ? (
            <Reveal>
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center sm:p-12">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-semibold">
                  Thank you!
                </h3>
                <p className="mb-6 text-text-secondary">
                  Your email client should have opened with your application
                  details. Please send the email to complete your application.
                  We&apos;ll be in touch soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold text-accent hover:text-accent-warm"
                >
                  Submit another application
                </button>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 rounded-2xl border border-border bg-bg-card p-6 sm:p-8"
              >
                {/* Name & Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-text-primary"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-text-primary"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Age */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-text-primary"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="age"
                      className="mb-1.5 block text-sm font-medium text-text-primary"
                    >
                      Age Range
                    </label>
                    <select
                      id="age"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text-primary transition-colors focus:border-accent focus:outline-none"
                    >
                      <option value="">Select age range</option>
                      <option value="16-18">16-18</option>
                      <option value="18-25">18-25</option>
                      <option value="25-35">25-35</option>
                      <option value="35-50">35-50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-text-primary">
                    What are you interested in? (select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {roles.map((role) => (
                      <button
                        key={role.title}
                        type="button"
                        onClick={() => handleInterestToggle(role.title)}
                        className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                          formData.interests.includes(role.title)
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border text-text-secondary hover:border-accent/30 hover:text-text-primary"
                        }`}
                      >
                        {role.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label
                    htmlFor="availability"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Availability
                  </label>
                  <select
                    id="availability"
                    value={formData.availability}
                    onChange={(e) =>
                      setFormData({ ...formData, availability: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text-primary transition-colors focus:border-accent focus:outline-none"
                  >
                    <option value="">How often can you volunteer?</option>
                    <option value="one-off">One-off events only</option>
                    <option value="monthly">A few hours per month</option>
                    <option value="weekly">A few hours per week</option>
                    <option value="regular">Regular commitment (weekly+)</option>
                    <option value="flexible">Flexible / as needed</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    rows={3}
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
                    placeholder="Tell us about any relevant skills, experience, or qualifications (optional)"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Anything else you&apos;d like us to know?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none"
                    placeholder="Your message (optional)"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-warm px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span>Submit Application</span>
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
                </button>
              </form>
            </Reveal>
          )}
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
