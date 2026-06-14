"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  CircleDot,
  EyeOff,
  Lock,
  Map,
  MessageCircle,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  GlassPanel,
  SiteFooter,
  SiteHeader,
  WallpaperBackground,
} from "./components/AppShell";
import SpiderWeb from "./components/SpiderWeb";

function smoothForAWhile(ms = 400) {
  const html = document.documentElement;
  html.classList.add("smooth-scroll");
  clearTimeout(html._smoothTO);
  html._smoothTO = setTimeout(() => html.classList.remove("smooth-scroll"), ms);
}

const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apps.apple.com/app/inloop";
const FORMSPREE_BETA_ID = process.env.NEXT_PUBLIC_FORMSPREE_BETA_ID || "";
const FORMSPREE_WAITLIST_ID = process.env.NEXT_PUBLIC_FORMSPREE_WAITLIST_ID || "";

export default function Page() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      history.scrollRestoration = "manual";
    } catch {}
  }, []);

  return (
    <div className="relative min-h-screen w-full text-white selection:bg-white/30 selection:text-white">
      <WallpaperBackground />
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <WhyInLoop />
        <Features />
        <RelationshipMap />
        <ProductPreview />
        <TrustSection />
        <AccessSection />
        <Footer />
      </main>
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="scroll-mt-24 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-24 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 12 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex justify-center lg:justify-start"
          >
            <Image
              src="/images/simplelogox1.png"
              alt="InLoop"
              width={180}
              height={54}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </motion.div>
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 12 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="mt-6 text-sm font-medium uppercase tracking-[0.24em] text-white/55"
          >
            Slow social, by design
          </motion.p>
          <motion.h1
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-[2rem] font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl"
          >
            Real relationships, not algorithmic feeds.
          </motion.h1>
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/72 sm:text-lg"
          >
            InLoop is a wallpaper-first social app for trusted circles, private sharing, chat, calls, and events — without likes, follower pressure, or feed traps.
          </motion.p>
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href="#access" onClick={() => smoothForAWhile()} className="glass-button-primary">
              Join the beta
            </a>
            <a href="#features" onClick={() => smoothForAWhile()} className="glass-button-ghost">
              Explore features
            </a>
          </motion.div>
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 12 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex justify-center lg:justify-start"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <Image
                src="/images/feature-images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                alt="Download on the App Store"
                width={140}
                height={44}
                className="h-11 w-auto"
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 24 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex justify-center"
        >
          <GlassPanel className="inline-flex p-3 sm:p-4">
            <Image
              src="/images/feature-images/hero2.PNG"
              alt="InLoop app preview"
              width={520}
              height={780}
              className="h-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]"
              priority
            />
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}

function WhyInLoop() {
  const reduce = useReducedMotion();
  const problems = [
    "Endless feeds designed to keep you scrolling",
    "Everyone flattened into one public audience",
    "Performance anxiety and follower-count culture",
    "Privacy erosion and data exploitation",
  ];
  const approach = [
    "Structure relationships into meaningful circles",
    "Share with who matters, not with everyone",
    "No feed traps, vanity metrics, or pressure to perform",
    "Privacy-first by design with intentional sharing",
  ];

  return (
    <section id="why" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          reduce={reduce}
          title="Why InLoop exists"
          subtitle="Most platforms optimise attention. InLoop is built around how people actually relate — in circles, with intention, and without extraction."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <GlassPanel className="p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white/92">The problem with modern social</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/68">
              {problems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-[#FF9999]">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassPanel>
          <GlassPanel className="p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white/92">The InLoop approach</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/68">
              {approach.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-[#66FF99]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const reduce = useReducedMotion();
  const features = [
    { icon: CircleDot, title: "Inner circles", desc: "Define who matters most and interact in smaller, trusted spaces." },
    { icon: Map, title: "Relationship map", desc: "See your network with more human context than a flat follower list." },
    { icon: MessageCircle, title: "Chat and calls", desc: "Messages, voice, and video built into the same calm experience." },
    { icon: EyeOff, title: "Disappearing by default", desc: "Share intentionally with content that does not linger forever." },
    { icon: Shield, title: "No ads, no feed traps", desc: "No algorithmic hooks or vanity metrics driving the product." },
    { icon: Calendar, title: "Communities and events", desc: "Groups, gatherings, and real-world connection beyond passive scrolling." },
  ];

  return (
    <section id="features" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          reduce={reduce}
          title="Built like the app feels"
          subtitle="Frosted glass panels, your wallpaper, and controls that stay out of the way — the same visual language on iOS and Android."
          align="left"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <GlassPanel className="h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-[20px] border border-white/20 bg-white/10">
                  <feature.icon className="h-5 w-5 text-white/90" />
                </div>
                <h3 className="mt-4 font-semibold text-white/95">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{feature.desc}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelationshipMap() {
  const reduce = useReducedMotion();
  const layers = [
    "Close friends and family",
    "Trusted groups and circles",
    "Communities and shared interests",
    "Events and real-world connection",
  ];

  return (
    <section id="relationships" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            reduce={reduce}
            title="Designed around real human relationships"
            subtitle="Other platforms flatten your social life into one broadcast layer. InLoop reflects closeness, context, and the people who actually matter."
            align="left"
          />
          <ul className="mt-8 space-y-4">
            {layers.map((layer, index) => (
              <motion.li
                key={layer}
                initial={reduce ? {} : { opacity: 0, x: -8 }}
                whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + index * 0.05 }}
                className="flex items-center gap-3 text-white/85"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-white/60" />
                {layer}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={reduce ? {} : { opacity: 0, scale: 0.98 }}
          whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <GlassPanel className="inline-block p-6 sm:p-8">
            <SpiderWeb
              size={280}
              rings={5}
              spokes={12}
              nodes={[
                { id: "a", label: "Alina", ring: 2, angleDeg: 10 },
                { id: "b", label: "Matei", ring: 3, angleDeg: 70 },
                { id: "c", label: "Daria", ring: 3, angleDeg: 140 },
                { id: "d", label: "Ilya", ring: 4, angleDeg: 210 },
                { id: "e", label: "Noah", ring: 2, angleDeg: 280 },
                { id: "f", label: "Maya", ring: 4, angleDeg: 330 },
              ]}
              centerLabel="You"
            />
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}

function ProductPreview() {
  const reduce = useReducedMotion();
  const highlights = [
    { icon: Users, label: "Circles and Connect" },
    { icon: MessageCircle, label: "Private chat and calls" },
    { icon: Lock, label: "Privacy Center controls" },
  ];

  return (
    <section id="product" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          reduce={reduce}
          title="Your network, your wallpaper, your pace"
          subtitle="The same dark, glass-first interface you see in the app — feed, messages, events, and settings floating over the background you choose."
        />
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassPanel className="p-6 sm:p-8">
            <div className="space-y-5">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[20px] border border-white/20 bg-white/10">
                    <item.icon className="h-5 w-5 text-white/90" />
                  </div>
                  <p className="text-base font-medium text-white/88">{item.label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
          <div className="flex justify-center">
            <GlassPanel className="inline-flex p-3">
              <Image
                src="/images/feature-images/hero2.PNG"
                alt="InLoop app preview"
                width={320}
                height={480}
                className="h-auto w-full max-w-[260px] sm:max-w-[300px]"
              />
            </GlassPanel>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const reduce = useReducedMotion();
  const points = [
    "No ad-driven incentives — we do not sell your attention.",
    "No attention farming or feed optimisation against your wellbeing.",
    "Privacy-first architecture with intentional sharing and in-app controls.",
    "Built for users and communities, not for extraction.",
  ];

  return (
    <section id="trust" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <GlassPanel className="p-8 sm:p-10 md:p-12">
          <SectionHeading
            reduce={reduce}
            title="Trust through product philosophy"
            subtitle="InLoop’s design reflects how we make money — and how we do not. Value comes from community and real-world use, not from keeping you glued to a feed."
            align="left"
          />
          <ul className="mt-8 space-y-4">
            {points.map((point, index) => (
              <motion.li
                key={point}
                initial={reduce ? {} : { opacity: 0, x: -8 }}
                whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + index * 0.04 }}
                className="flex gap-3 text-white/85"
              >
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-white/60" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </GlassPanel>
      </div>
    </section>
  );
}

function AccessSection() {
  const [betaStatus, setBetaStatus] = useState({ state: "idle", message: "" });
  const [waitlistStatus, setWaitlistStatus] = useState({ state: "idle", message: "" });
  const benefits = [
    "Early access to the app",
    "Founder updates and roadmap",
    "Help shape the product",
    "Priority invites for your circles",
  ];

  const handleBetaSubmit = async (event) => {
    event.preventDefault();
    if (!FORMSPREE_BETA_ID) {
      setBetaStatus({ state: "error", message: "Form not configured." });
      return;
    }
    const form = event.target;
    const email = form.email?.value?.trim();
    if (!email) return;
    setBetaStatus({ state: "loading", message: "" });
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_BETA_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "InLoop Beta request" }),
      });
      if (response.ok) {
        setBetaStatus({ state: "success", message: "You’re in. We’ll be in touch." });
        form.reset();
      } else {
        setBetaStatus({ state: "error", message: "Something went wrong. Try again." });
      }
    } catch {
      setBetaStatus({ state: "error", message: "Something went wrong. Try again." });
    }
  };

  const handleWaitlistSubmit = async (event) => {
    event.preventDefault();
    if (!FORMSPREE_WAITLIST_ID) {
      setWaitlistStatus({ state: "error", message: "Form not configured." });
      return;
    }
    const form = event.target;
    const email = form.email?.value?.trim();
    if (!email) return;
    setWaitlistStatus({ state: "loading", message: "" });
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_WAITLIST_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "InLoop Waitlist signup" }),
      });
      if (response.ok) {
        setWaitlistStatus({ state: "success", message: "You’re on the list." });
        form.reset();
      } else {
        setWaitlistStatus({ state: "error", message: "Something went wrong. Try again." });
      }
    } catch {
      setWaitlistStatus({ state: "error", message: "Something went wrong. Try again." });
    }
  };

  return (
    <section id="access" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Join the early movement"
          subtitle="Get early access, founder updates, and a say in how InLoop grows."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <GlassPanel className="p-8">
            <h3 className="text-xl font-semibold">Request beta access</h3>
            <p className="mt-2 text-sm text-white/72">For people who want to use and shape InLoop from day one.</p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleBetaSubmit}>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="glass-field flex-1"
                disabled={betaStatus.state === "loading"}
              />
              <button
                type="submit"
                className="glass-button-primary shrink-0 px-6 disabled:pointer-events-none disabled:opacity-60"
              >
                {betaStatus.state === "loading" ? "Sending…" : "Request invite"}
              </button>
            </form>
            {betaStatus.message ? (
              <p className={`mt-3 text-sm ${betaStatus.state === "error" ? "text-[#FF6B6B]" : "text-[#66FF99]"}`}>
                {betaStatus.message}
              </p>
            ) : null}
          </GlassPanel>

          <GlassPanel className="p-8">
            <h3 className="text-xl font-semibold">Join the waitlist</h3>
            <p className="mt-2 text-sm text-white/72">Be first to know when we launch.</p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleWaitlistSubmit}>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="glass-field flex-1"
                disabled={waitlistStatus.state === "loading"}
              />
              <button
                type="submit"
                className="glass-button-primary shrink-0 px-6 disabled:pointer-events-none disabled:opacity-60"
              >
                {waitlistStatus.state === "loading" ? "Sending…" : "Join waitlist"}
              </button>
            </form>
            {waitlistStatus.message ? (
              <p className={`mt-3 text-sm ${waitlistStatus.state === "error" ? "text-[#FF6B6B]" : "text-[#66FF99]"}`}>
                {waitlistStatus.message}
              </p>
            ) : null}
            <ul className="mt-6 space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-white/70">
                  <Sparkles className="h-4 w-4 shrink-0 text-white/50" />
                  {benefit}
                </li>
              ))}
            </ul>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <SiteFooter />;
}

function SectionHeading({ reduce = false, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left mx-0" : "text-center mx-auto";

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
