"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Calendar,
  CreditCard,
  LayoutGrid,
  MapPin,
  Megaphone,
  MessageCircle,
  Shield,
  Sparkles,
  Ticket,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DownloadBadges,
  GlassPanel,
  SiteFooter,
  SiteHeader,
  WallpaperBackground,
} from "../components/AppShell";

const benefits = [
  {
    icon: Users,
    title: "An audience that opted in",
    desc: "No fighting an algorithm. Your community hubs and events reach people who chose to follow you — not random scrollers.",
  },
  {
    icon: Calendar,
    title: "Events built to fill rooms",
    desc: "Create gatherings with pinned locations, rich details, and discovery for people nearby who are already looking for something to do.",
  },
  {
    icon: Ticket,
    title: "Sell tickets in-app",
    desc: "Paid events and subscriptions handled securely through Stripe — no duct-taping payment links across five different tools.",
  },
  {
    icon: LayoutGrid,
    title: "Your own community hub",
    desc: "A dedicated space for your brand, club, or venue. Share updates, build loyalty, and keep conversations in one calm place.",
  },
  {
    icon: BarChart3,
    title: "Business analytics",
    desc: "Understand what resonates with your community through business-tier insights — so every event and post gets sharper over time.",
  },
  {
    icon: MessageCircle,
    title: "Direct line to customers",
    desc: "Messages and calls built in. Answer questions, confirm bookings, and stay close to the people who keep coming back.",
  },
];

const pillars = [
  {
    icon: Calendar,
    label: "Events & ticketing",
    points: [
      "Create and promote events with titles, descriptions, times, and pinned locations",
      "Get discovered by users browsing events near them",
      "Sell tickets and manage paid experiences through Stripe",
      "Verified location pinning for business credibility",
    ],
  },
  {
    icon: LayoutGrid,
    label: "Community hubs",
    points: [
      "Run an interest-based hub around your brand or scene",
      "Post updates to people who genuinely care — no pay-to-boost required",
      "Keep your community separate from the noise of a public feed",
      "Build repeat engagement between events",
    ],
  },
  {
    icon: Sparkles,
    label: "Business tools",
    points: [
      "Business profile with plan and entitlement management",
      "Analytics tiers to track community and event performance",
      "Push notifications so your audience never misses a drop",
      "Bump to Connect for in-person sign-ups at your venue",
    ],
  },
];

const audiences = [
  {
    title: "Venues & nightlife",
    desc: "Fill your dance floor, comedy night, or open mic. Promote what's on, sell tickets, and stay in touch with regulars.",
  },
  {
    title: "Studios & classes",
    desc: "Yoga, fitness, art, music — build a hub for your students, announce sessions, and let locals discover you.",
  },
  {
    title: "Clubs & communities",
    desc: "Running a book club, sports team, or hobby group? Give members a private home that isn't a chaotic group chat.",
  },
  {
    title: "Local brands & organisers",
    desc: "Pop-ups, markets, workshops, brand activations — create real-world moments and own the relationship with attendees.",
  },
];

const comparisons = [
  { them: "Pay to reach your own followers", us: "Your hub members see your posts" },
  { them: "Event link + payment link + chat app", us: "Events, tickets, and messages in one app" },
  { them: "Vanity metrics and ad clutter", us: "No ads. No attention-farming. Ever." },
  { them: "Strangers and spam in your DMs", us: "Invite-only trust. Real connections." },
];

export default function BusinessPageClient() {
  const reduce = useReducedMotion();

  return (
    <div className="relative min-h-screen w-full text-white selection:bg-white/30 selection:text-white">
      <WallpaperBackground />
      <SiteHeader compact />

      <main className="relative z-10">
        <section className="px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:pt-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="w-full text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                <Sparkles className="h-3.5 w-3.5" />
                InLoop for Business
              </span>
              <h1 className="mt-6 w-full text-[2rem] font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Your community isn&apos;t a follower count.{" "}
                <span className="text-white/75">It&apos;s your superpower.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-white/72 sm:text-lg">
                Stop renting attention from platforms that profit when you lose it. InLoop gives venues, organisers, and local brands the tools to host events, sell tickets, run community hubs, and build relationships that actually show up in real life.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#get-started" className="glass-button-primary">
                  Start with InLoop Business
                </a>
                <a href="#how-it-works" className="glass-button-ghost">
                  See how it works
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-14 flex justify-center"
            >
              <GlassPanel className="inline-flex p-3 sm:p-4">
                <Image
                  src="/images/feature-images/hero2.PNG"
                  alt="InLoop business tools in the app"
                  width={520}
                  height={780}
                  className="h-auto w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px]"
                  priority
                />
              </GlassPanel>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              reduce={reduce}
              title="Why businesses are switching"
              subtitle="Generic social media was built for advertisers. InLoop was built for people — and the businesses that bring them together."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={reduce ? {} : { opacity: 0, y: 12 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <GlassPanel className="h-full p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[20px] border border-white/20 bg-white/10">
                      <item.icon className="h-5 w-5 text-white/90" />
                    </div>
                    <h3 className="mt-4 font-semibold text-white/95">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{item.desc}</p>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              reduce={reduce}
              title="Three tools. One relationship."
              subtitle="Everything you need to go from “we should do something” to a sold-out room — without juggling five different apps."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.label}
                  initial={reduce ? {} : { opacity: 0, y: 12 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <GlassPanel className="h-full p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[20px] border border-white/20 bg-white/10">
                        <pillar.icon className="h-5 w-5 text-white/90" />
                      </div>
                      <h3 className="text-lg font-semibold text-white/95">{pillar.label}</h3>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/68">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-0.5 shrink-0 text-[#66FF99]">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              reduce={reduce}
              title="Built for businesses that bring people together"
              subtitle="If your success depends on real-world turnout — not likes — InLoop is where you belong."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {audiences.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={reduce ? {} : { opacity: 0, y: 10 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassPanel className="p-6 sm:p-7">
                    <h3 className="text-lg font-semibold text-white/92">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{item.desc}</p>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <GlassPanel className="p-8 sm:p-10 md:p-12">
              <SectionHeading
                reduce={reduce}
                title="The old way vs. InLoop"
                subtitle="You already know the frustration. Here's what changes when your tools match your intent."
              />
              <div className="mt-10 space-y-4">
                {comparisons.map((row, index) => (
                  <motion.div
                    key={row.them}
                    initial={reduce ? {} : { opacity: 0, x: -8 }}
                    whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="grid gap-3 rounded-[20px] border border-white/12 bg-white/5 p-4 sm:grid-cols-2 sm:gap-6 sm:p-5"
                  >
                    <div className="flex gap-3 text-sm text-white/55">
                      <span className="shrink-0 text-[#FF9999]">×</span>
                      <span>{row.them}</span>
                    </div>
                    <div className="flex gap-3 text-sm text-white/88">
                      <span className="shrink-0 text-[#66FF99]">✓</span>
                      <span>{row.us}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading
                  reduce={reduce}
                  title="Reach people nearby — at the right moment"
                  subtitle="When someone opens InLoop looking for something to do tonight, your event can be right there. Location-aware discovery puts you in front of people already in the mood to go out."
                  align="left"
                />
                <ul className="mt-8 space-y-4">
                  {[
                    { icon: MapPin, text: "Pin your venue or event location for verification and discovery" },
                    { icon: Megaphone, text: "Push notifications keep your community in the loop" },
                    { icon: Zap, text: "Bump to Connect — turn foot traffic into followers at your door" },
                    { icon: Shield, text: "Privacy-first platform your customers actually trust" },
                  ].map((item, index) => (
                    <motion.li
                      key={item.text}
                      initial={reduce ? {} : { opacity: 0, x: -8 }}
                      whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 + index * 0.05 }}
                      className="flex items-start gap-3 text-white/85"
                    >
                      <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-white/60" />
                      <span className="text-sm leading-relaxed sm:text-base">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <GlassPanel className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-white/70" />
                  <h3 className="text-lg font-semibold text-white/92">Payments without the headache</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/68">
                  Sell tickets, run paid events, and manage business subscriptions through{" "}
                  <strong className="text-white/90">Stripe</strong> — industry-standard payments with no card data stored on our servers. Your customers check out in-app. You focus on the experience.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/68">
                  Business plans and entitlements are built into the platform, so you get the right tools for your stage — from your first community hub to a full analytics suite.
                </p>
              </GlassPanel>
            </div>
          </div>
        </section>

        <section id="get-started" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              reduce={reduce}
              title="Ready to build something people show up for?"
              subtitle="Download InLoop, set up your business profile, and start with your first event or community hub. Questions? Our team is here to help."
            />
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-10"
            >
              <DownloadBadges />
            </motion.div>
            <p className="mt-8 text-sm text-white/55">
              Business onboarding or partnership enquiries?{" "}
              <a
                href="mailto:support@inloop.uk?subject=InLoop%20for%20Business"
                className="text-white/75 underline decoration-white/30 underline-offset-2 hover:text-white"
              >
                support@inloop.uk
              </a>
            </p>
            <p className="mt-4">
              <Link href="/" className="text-sm text-white/50 transition-colors hover:text-white/80">
                ← Back to home
              </Link>
            </p>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function SectionHeading({ reduce = false, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "mx-0 text-left" : "mx-auto text-center";

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
