"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Apple,
  Dumbbell,
  Flame,
  HeartPulse,
  Sparkles,
  Target,
  TrendingUp,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/site";
import { GlassPanel, SiteFooter, SiteHeader, WallpaperBackground } from "../components/AppShell";

const features = [
  {
    icon: Utensils,
    title: "Nutrition",
    desc: "Log meals, macros, and water. See calories and protein update as you eat — so you always know what fuels your body.",
    image: "/images/mypulse/shot-3.png",
    eyebrow: "Know exactly what fuels your body",
  },
  {
    icon: Dumbbell,
    title: "Training",
    desc: "Suggested and logged workouts that guide you — not overwhelm. Streaks, active days, and plans that keep you moving.",
    image: "/images/mypulse/shot-2.png",
    eyebrow: "Workouts that guide you",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    desc: "Weight, calories, weekly activity, and trends that actually motivate. Clear insights so you focus on what’s next.",
    image: "/images/mypulse/shot-4.png",
    eyebrow: "Progress that motivates",
  },
  {
    icon: Sparkles,
    title: "Pulse Coach",
    desc: "Ask naturally about nutrition, training, and recovery. Personalised guidance tailored to your goals and data.",
    image: "/images/mypulse/shot-6.png",
    eyebrow: "A coach that knows your journey",
  },
];

const pillars = [
  {
    icon: HeartPulse,
    title: "Apple Health sync",
    desc: "Optionally connect Apple Health (and Health Connect / Samsung Health on Android) so activity flows into MyPulse.",
  },
  {
    icon: Flame,
    title: "Streaks that stick",
    desc: "Build consistency with streaks and active-day tracking — progress you can feel week after week.",
  },
  {
    icon: Target,
    title: "Goals without clutter",
    desc: "Profile, targets, reminders, and integrations in one calm place. Everything about you. Nothing complicated.",
  },
  {
    icon: Activity,
    title: "Built for athletes & everyday users",
    desc: "Whether you’re training hard or building healthier habits — including optional linked-trainer support.",
  },
];

export default function MyPulsePageClient() {
  const reduce = useReducedMotion();

  return (
    <div className="mypulse-page relative min-h-screen w-full text-white selection:bg-[#FF7A3D]/35 selection:text-white">
      <WallpaperBackground />
      <div className="mypulse-glow" aria-hidden />
      <SiteHeader compact />

      <main className="relative z-10">
        <section className="px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 md:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <motion.div
                initial={reduce ? {} : { opacity: 0, y: 12 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 rounded-full border border-[#FF7A3D]/35 bg-[#FF7A3D]/10 px-4 py-1.5"
              >
                <Image
                  src="/images/mypulse/icon.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-lg"
                  priority
                />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#FFB08A]">MyPulse</span>
              </motion.div>

              <motion.h1
                initial={reduce ? {} : { opacity: 0, y: 16 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.06 }}
                className="mt-6 text-[2.1rem] font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]"
              >
                Your fitness,{" "}
                <span className="text-[#FF8A55]">in one pulse.</span>
              </motion.h1>

              <motion.p
                initial={reduce ? {} : { opacity: 0, y: 16 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-5 text-base leading-relaxed text-white/72 sm:text-lg"
              >
                Nutrition, workouts, progress, and Apple Health — connected in one beautiful experience. Fitness finally feels effortless.
              </motion.p>

              <motion.div
                initial={reduce ? {} : { opacity: 0, y: 16 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.14 }}
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
              >
                <a href="#features" className="glass-button-primary">
                  Explore MyPulse
                </a>
                <a href="#download" className="glass-button-ghost">
                  Get the app
                </a>
              </motion.div>

              <motion.p
                initial={reduce ? {} : { opacity: 0 }}
                animate={reduce ? {} : { opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-sm text-white/50"
              >
                By WeLink App LTD · Stay close. Stay well.
              </motion.p>
            </div>

            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55 }}
              className="flex justify-center"
            >
              <Image
                src="/images/mypulse/shot-1.png"
                alt="MyPulse — Fitness finally feels effortless"
                width={420}
                height={900}
                className="h-auto w-full max-w-[280px] rounded-[28px] border border-white/10 shadow-[0_24px_80px_rgba(255,122,61,0.18)] sm:max-w-[320px]"
                priority
              />
            </motion.div>
          </div>
        </section>

        <section id="features" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              reduce={reduce}
              title="Everything your body needs to know"
              subtitle="Log food, train with purpose, follow your progress, and get personalised coaching — without juggling five apps."
            />

            <div className="mt-14 space-y-16 md:space-y-24">
              {features.map((feature, index) => {
                const reverse = index % 2 === 1;
                return (
                  <motion.div
                    key={feature.title}
                    initial={reduce ? {} : { opacity: 0, y: 20 }}
                    whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className={reverse ? "lg:pl-4" : "lg:pr-4"}>
                      <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#FFB08A]">
                        {feature.eyebrow}
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-[#FF7A3D]/30 bg-[#FF7A3D]/15">
                          <feature.icon className="h-5 w-5 text-[#FF8A55]" />
                        </div>
                        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{feature.title}</h3>
                      </div>
                      <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">{feature.desc}</p>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src={feature.image}
                        alt={`MyPulse ${feature.title}`}
                        width={380}
                        height={820}
                        className="h-auto w-full max-w-[240px] rounded-[24px] border border-white/10 sm:max-w-[280px]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex justify-center lg:order-2">
                <Image
                  src="/images/mypulse/shot-5.png"
                  alt="MyPulse works with Apple Health"
                  width={380}
                  height={820}
                  className="h-auto w-full max-w-[240px] rounded-[24px] border border-white/10 sm:max-w-[280px]"
                />
              </div>
              <div className="lg:order-1">
                <SectionHeading
                  reduce={reduce}
                  title="Works beautifully with Apple Health"
                  subtitle="Connect when you want activity data to flow in. MyPulse only reads or writes health data after you grant permission."
                  align="left"
                />
                <ul className="mt-8 space-y-4">
                  {[
                    "Optional Apple Health on iOS",
                    "Health Connect / Samsung Health on Android",
                    "You stay in control of what’s shared",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-white/80">
                      <Apple className="mt-0.5 h-5 w-5 shrink-0 text-[#FF8A55]" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              reduce={reduce}
              title="Designed for real life"
              subtitle="Athletes, everyday movers, and anyone who wants a cleaner place to track food and training."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {pillars.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={reduce ? {} : { opacity: 0, y: 12 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassPanel className="h-full p-6 sm:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-[#FF7A3D]/30 bg-[#FF7A3D]/12">
                      <item.icon className="h-5 w-5 text-[#FF8A55]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white/95">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{item.desc}</p>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <GlassPanel className="overflow-hidden p-8 sm:p-10 md:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <SectionHeading
                    reduce={reduce}
                    title="Become the healthiest version of yourself"
                    subtitle="Nutrition. Training. Progress. All connected. All for you. Download MyPulse and start with the habits that matter."
                    align="left"
                  />
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a href={`mailto:${SUPPORT_EMAIL}?subject=MyPulse%20access`} className="glass-button-primary">
                      Get MyPulse
                    </a>
                    <a href={`mailto:${SUPPORT_EMAIL}?subject=MyPulse`} className="glass-button-ghost h-11 px-5 text-sm">
                      Contact support
                    </a>
                  </div>
                  <p className="mt-6 text-sm text-white/50">
                    Questions about privacy or account deletion?{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}?subject=MyPulse%20privacy`}
                      className="text-white/75 underline decoration-white/30 underline-offset-2 hover:text-white"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </p>
                  <p className="mt-4">
                    <Link href="/" className="text-sm text-white/50 transition-colors hover:text-white/80">
                      ← Back to InLoop
                    </Link>
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/mypulse/shot-8.png"
                    alt="Download MyPulse"
                    width={360}
                    height={780}
                    className="h-auto w-full max-w-[240px] rounded-[24px] border border-white/10 sm:max-w-[280px]"
                  />
                </div>
              </div>
            </GlassPanel>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function SectionHeading({ reduce = false, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "mx-auto text-center";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <motion.h2
        initial={reduce ? {} : { opacity: 0, y: 12 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-4 leading-relaxed text-white/72"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
