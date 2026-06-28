"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  CircleDot,
  LayoutGrid,
  Lock,
  MessageCircle,
  Palette,
  Phone,
  Radio,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  DownloadBadges,
  GlassPanel,
  SiteFooter,
  SiteHeader,
  WallpaperBackground,
} from "./components/AppShell";
import IntroVideo from "./components/IntroVideo";
import SpiderWeb from "./components/SpiderWeb";

function smoothForAWhile(ms = 400) {
  const html = document.documentElement;
  html.classList.add("smooth-scroll");
  clearTimeout(html._smoothTO);
  html._smoothTO = setTimeout(() => html.classList.remove("smooth-scroll"), ms);
}

export default function HomePageClient() {
  const [showMainSite, setShowMainSite] = useState(false);
  const handleEnterSite = useCallback(() => setShowMainSite(true), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      history.scrollRestoration = "manual";
    } catch {}
  }, []);

  return (
    <div className="relative min-h-screen w-full text-white selection:bg-white/30 selection:text-white">
      <WallpaperBackground />
      <IntroVideo onEnterSite={handleEnterSite} />
      <div aria-hidden={!showMainSite}>
        <SiteHeader />
        <main className="relative z-10">
          <Hero />
          <WhyInLoop />
          <Features />
          <InnerCircleSection />
          <AppPillars />
          <TrustSection />
          <DownloadSection />
          <Footer />
        </main>
      </div>
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
            Your inner circle, not the whole internet
          </motion.p>
          <motion.h1
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-[2rem] font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl"
          >
            Social for the people who actually matter.
          </motion.h1>
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/72 sm:text-lg"
          >
            InLoop brings your inner circle, community hubs, events, messages, and calls together in one calm app — with your wallpaper, frosted glass UI, and no algorithmic feed.
          </motion.p>
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href="#download" onClick={() => smoothForAWhile()} className="glass-button-primary">
              Download InLoop
            </a>
            <a href="#features" onClick={() => smoothForAWhile()} className="glass-button-ghost">
              See what&apos;s inside
            </a>
          </motion.div>
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 12 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex justify-center lg:justify-start"
          >
            <DownloadBadges className="justify-center lg:justify-start" />
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
    "One giant public feed for everyone you know",
    "Algorithms deciding what you see and when you scroll",
    "Follower counts, likes, and performance pressure",
    "Your attention treated as the product",
  ];
  const approach = [
    "An inner-circle feed for people you trust",
    "Community hubs for shared interests — on your terms",
    "Messages, voice, and video calls built in",
    "Events that get you off the screen and into real life",
  ];

  return (
    <section id="why" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          reduce={reduce}
          title="Built for closeness, not clout"
          subtitle="InLoop is a social app for real relationships — not broadcasting to strangers, chasing metrics, or getting pulled into endless scroll loops."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <GlassPanel className="p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white/92">What we left behind</h3>
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
            <h3 className="text-lg font-semibold text-white/92">What InLoop gives you</h3>
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
    {
      icon: CircleDot,
      title: "Inner circle feed",
      desc: "Share posts with your trusted circle — not the whole internet. Feed content is removed after 7 days so the focus stays on the moment.",
    },
    {
      icon: LayoutGrid,
      title: "Community hubs",
      desc: "Join interest-based communities and see posts from hubs you choose to be part of.",
    },
    {
      icon: Users,
      title: "Connect & Bump",
      desc: "Build your inner circle and bump phones nearby to connect in person — no public search required.",
    },
    {
      icon: MessageCircle,
      title: "Messages & calls",
      desc: "Direct messages with optional end-to-end encryption, plus voice and video calls when you want to talk properly.",
    },
    {
      icon: Calendar,
      title: "Events",
      desc: "Discover events near you, join gatherings, and create experiences — with business tools for organisers.",
    },
    {
      icon: Palette,
      title: "Your wallpaper, your look",
      desc: "Pick your background, glass style, and accent colour. The whole app floats over the photo you choose.",
    },
  ];

  return (
    <section id="features" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          reduce={reduce}
          title="Everything your social life needs"
          subtitle="Feed, community, connections, events, and messaging — designed as one coherent experience on iOS and Android."
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

function InnerCircleSection() {
  const reduce = useReducedMotion();
  const layers = [
    "Your inner circle — the people you trust most",
    "Community hubs for shared interests",
    "Events and real-world meetups",
    "Private messages and calls when it matters",
  ];

  return (
    <section id="relationships" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            reduce={reduce}
            title="Structure that matches real life"
            subtitle="Most apps flatten everyone into one audience. InLoop separates your inner circle, wider community, and events — so sharing always has the right context."
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

function AppPillars() {
  const reduce = useReducedMotion();
  const pillars = [
    { icon: Radio, label: "Feed", desc: "Catch up with your inner circle" },
    { icon: LayoutGrid, label: "Community", desc: "Hubs and shared interests" },
    { icon: Users, label: "Inner Circle", desc: "Your connections and Bump to Connect" },
    { icon: Calendar, label: "Events", desc: "Local gatherings and tickets" },
    { icon: MessageCircle, label: "Messages", desc: "Chat, voice, and video calls" },
  ];

  return (
    <section id="product" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          reduce={reduce}
          title="Five tabs. One calm app."
          subtitle="The same frosted-glass interface you see in the app — dashboard, feed, community, connect, events, and messages floating over your chosen wallpaper."
        />
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassPanel className="p-6 sm:p-8">
            <div className="space-y-5">
              {pillars.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[20px] border border-white/20 bg-white/10">
                    <item.icon className="h-5 w-5 text-white/90" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white/92">{item.label}</p>
                    <p className="mt-1 text-sm text-white/62">{item.desc}</p>
                  </div>
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
    { icon: Shield, text: "No ads and no attention-farming business model." },
    { icon: Lock, text: "Privacy Center with data export, blocked users, and in-app reporting." },
    { icon: MessageCircle, text: "Optional end-to-end encryption for direct messages." },
    { icon: Phone, text: "Voice and video calls built in — not bolted on as an afterthought." },
  ];

  return (
    <section id="trust" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <GlassPanel className="p-8 sm:p-10 md:p-12">
          <SectionHeading
            reduce={reduce}
            title="Privacy and safety by design"
            subtitle="InLoop is built for people who want control — over who sees their posts, how long content stays around, and how their data is handled."
            align="left"
          />
          <ul className="mt-8 space-y-4">
            {points.map((point, index) => (
              <motion.li
                key={point.text}
                initial={reduce ? {} : { opacity: 0, x: -8 }}
                whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + index * 0.04 }}
                className="flex gap-3 text-white/85"
              >
                <point.icon className="mt-0.5 h-5 w-5 shrink-0 text-white/60" />
                <span>{point.text}</span>
              </motion.li>
            ))}
          </ul>
        </GlassPanel>
      </div>
    </section>
  );
}

function DownloadSection() {
  const reduce = useReducedMotion();

  return (
    <section id="download" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          reduce={reduce}
          title="Download InLoop"
          subtitle="Available now on iOS and Android. Sign in, pick your wallpaper, and start with the people who matter."
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
          Questions or support?{" "}
          <a href="mailto:support@inloop.uk" className="text-white/75 underline decoration-white/30 underline-offset-2 hover:text-white">
            support@inloop.uk
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return <SiteFooter />;
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
