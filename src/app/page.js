// src/app/page.js
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield, Users, CircleDot, Map, Calendar, Lock, Sparkles, Link2, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SpiderWeb from "./components/SpiderWeb";

function smoothForAWhile(ms = 400) {
  const html = document.documentElement;
  html.classList.add("smooth-scroll");
  clearTimeout(html._smoothTO);
  html._smoothTO = setTimeout(() => html.classList.remove("smooth-scroll"), ms);
}

export default function Page() {
  const [showMainSite, setShowMainSite] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      history.scrollRestoration = "manual";
    } catch {}
  }, []);

  return (
    <>
      <style jsx global>{`
        html { scroll-padding-top: 96px; }
        .smooth-scroll { scroll-behavior: smooth; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .video-container {
          position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
          width: 100% !important; height: 100% !important; z-index: 50 !important; background-color: black !important;
          overflow: hidden !important; margin: 0 !important; padding: 0 !important;
          min-width: 100vw !important; min-height: 100vh !important; max-width: 100vw !important; max-height: 100vh !important;
        }
        @media screen and (max-width: 768px) {
          .intro-video { width: 80% !important; height: 60% !important; position: absolute !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; object-fit: contain !important; }
        }
        @media screen and (orientation: landscape) {
          .intro-video { width: 100% !important; height: 100% !important; object-fit: cover !important; }
        }
        .btn-link {
          display: inline-block; height: 44px; line-height: 44px; padding: 0 20px; border-radius: 1rem;
          transition: transform 0.2s, background-color 0.2s; font-size: 14px; text-align: center;
        }
        @media (min-width: 640px) {
          .btn-link { height: 48px; line-height: 48px; padding: 0 24px; border-radius: 1.25rem; font-size: 16px; }
        }
        .btn-primary { background: rgba(255,255,255,0.96); color: #0a0a0a; }
        .btn-primary:hover { background: #fff; transform: translateY(-1px); }
        .btn-ghost { background: rgba(255,255,255,0.08); color: #fff; border: 1px solid rgba(255,255,255,0.25); }
        .btn-ghost:hover { background: rgba(255,255,255,0.14); transform: translateY(-1px); }
      `}</style>

      <div className="relative min-h-screen w-full text-white selection:bg-white/30 selection:text-white">
        <PersonalizedBackground />
        <IntroVideo onEnterSite={() => setShowMainSite(true)} />
        <div className={showMainSite ? "block" : "hidden"}>
          <NavBar />
          <main className="relative z-10">
            <Hero />
            <WhyInLoop />
            <USPFeatures />
            <DesignedAroundRelationships />
            <ProductPreview />
            <TrustSection />
            <BetaAndReserve />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

function PersonalizedBackground() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: `url('/images/background-images/background2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

function IntroVideo({ onEnterSite }) {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    try {
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = prev || "";
    } catch {}
    onEnterSite();
    setShowVideo(false);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= videoRef.current.duration - 3) {
      videoRef.current.pause();
      handleVideoEnd();
    }
  };

  if (!showVideo) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-50 bg-black overflow-hidden" style={{ minWidth: "100vw", minHeight: "100vh" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        onTimeUpdate={handleTimeUpdate}
        className="intro-video absolute top-1/2 left-1/2 w-full max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{ objectFit: "cover", height: "35%" }}
      >
        <source src="/videos/Intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function NavBar() {
  const items = [
    { label: "Why InLoop", href: "#why" },
    { label: "How it works", href: "#features" },
    { label: "Product", href: "#product" },
    { label: "Trust", href: "#trust" },
    { label: "Get Access", href: "#access" },
  ];
  return (
    <nav className="sticky top-4 z-30 w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg flex items-center justify-between px-6 py-4">
        <a href="#top" onClick={() => smoothForAWhile()} className="flex items-center shrink-0">
          <Image src="/images/InLoop.png" alt="InLoop" width={160} height={40} className="h-8 w-auto sm:h-9" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} onClick={() => smoothForAWhile()} className="text-white/80 hover:text-white transition-colors">
              {it.label}
            </a>
          ))}
        </div>
        <a href="#access" onClick={() => smoothForAWhile()} className="btn-link btn-primary shrink-0 hidden sm:inline-block">
          Get early access
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative scroll-mt-24 pt-20 sm:pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.12]"
            >
              Real relationships, not algorithmic feeds.
            </motion.h1>
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-5 text-lg text-white/75 max-w-lg leading-relaxed"
            >
              InLoop is a slower, more intentional social network built around trusted circles, private sharing, and meaningful communities — not likes, followers, or feed traps.
            </motion.p>
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#access" onClick={() => smoothForAWhile()} className="btn-link btn-primary">
                Join the beta
              </a>
              <a href="#features" onClick={() => smoothForAWhile()} className="btn-link btn-ghost">
                Explore how it works
              </a>
            </motion.div>
            <div className="mt-8">
              <a href="https://apps.apple.com/app/inloop" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
                <Image src="/images/feature-images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt="Download on the App Store" width={140} height={44} className="h-11 w-auto" />
              </a>
            </div>
          </div>
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 24 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
              <Image
                src="/images/feature-images/hero2.PNG"
                alt="InLoop app"
                width={320}
                height={480}
                className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-white/10"
                priority
              />
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyInLoop() {
  const reduce = useReducedMotion();
  const problems = [
    "Endless feeds designed to keep you scrolling",
    "Everyone flattened into one audience",
    "Performance anxiety and follower-count culture",
    "Privacy erosion and data exploitation",
    "Algorithmic manipulation instead of real connection",
  ];
  const approach = [
    "Structure your relationships into meaningful circles",
    "Share with who matters, not with everyone",
    "No feed traps, no vanity metrics, no pressure to perform",
    "Privacy-first by design — no public search, intentional sharing",
    "Communities and events that create real-world value",
  ];

  return (
    <section id="why" className="relative py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center"
        >
          Why InLoop exists
        </motion.h2>
        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-4 text-center text-white/75 max-w-2xl mx-auto leading-relaxed"
        >
          Most social platforms treat connection as a product to optimise. InLoop is built around how people actually relate: in circles, with intention, and without extraction.
        </motion.p>
        <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="text-lg font-semibold text-white/90 mb-4">The problem with modern social</h3>
            <ul className="space-y-3 text-white/65 text-sm leading-relaxed">
              {problems.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-red-400/80 shrink-0 mt-0.5">×</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white/90 mb-4">The InLoop approach</h3>
            <ul className="space-y-3 text-white/65 text-sm leading-relaxed">
              {approach.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-emerald-400/80 shrink-0 mt-0.5">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function USPFeatures() {
  const reduce = useReducedMotion();
  const features = [
    { icon: CircleDot, title: "Inner circles", desc: "Define who matters most. Interact in smaller, trusted spaces instead of broadcasting to everyone." },
    { icon: Map, title: "Visual relationship map", desc: "See your connections and social proximity in a more human way — not a flat list of followers." },
    { icon: EyeOff, title: "Disappearing by default", desc: "Share intentionally. Content that doesn’t stick around by default keeps the focus on the moment." },
    { icon: Shield, title: "No ads, no feed traps", desc: "The product isn’t built to monetise your attention. No algorithmic hooks or vanity metrics." },
    { icon: Lock, title: "Invite-only trust model", desc: "No public search. You choose who’s in your network. Privacy and safety are built in from the start." },
    { icon: Calendar, title: "Communities and events", desc: "Not just DMs. Real groups, gatherings, and meaningful interaction beyond passive scrolling." },
  ];

  return (
    <section id="features" className="relative py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
          A different kind of social
        </motion.h2>
        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-white/75 max-w-xl leading-relaxed"
        >
          Built around structure, trust, and intention — not engagement at any cost.
        </motion.p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/[0.08] transition-colors"
            >
              <div className="h-11 w-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                <f.icon className="h-5 w-5 text-white/90" />
              </div>
              <h3 className="mt-4 font-semibold text-white/95">{f.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignedAroundRelationships() {
  const reduce = useReducedMotion();
  const layers = [
    "Close friends and family",
    "Trusted groups and circles",
    "Communities and shared interests",
    "Events and real-world connection",
  ];

  return (
    <section id="relationships" className="relative py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.h2
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
            >
              Designed around real human relationships
            </motion.h2>
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-white/75 leading-relaxed"
            >
              Other platforms flatten your social life into one broadcast layer. InLoop reflects how you actually relate: close friends, family, trusted groups, communities, and shared experiences — each with the right level of closeness and context.
            </motion.p>
            <ul className="mt-8 space-y-4">
              {layers.map((layer, i) => (
                <motion.li
                  key={layer}
                  initial={reduce ? {} : { opacity: 0, x: -8 }}
                  whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-3 text-white/85"
                >
                  <span className="h-2 w-2 rounded-full bg-white/60 shrink-0" />
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
            <div className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm p-6 sm:p-8 inline-block">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  const reduce = useReducedMotion();

  return (
    <section id="product" className="relative py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center"
        >
          Your network, your way
        </motion.h2>
        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-center text-white/75 max-w-xl mx-auto"
        >
          Inner circles, relationship mapping, communities, and events — all in one place.
        </motion.p>
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/feature-images/hero2.PNG"
            alt="InLoop app preview"
            width={320}
            height={480}
            className="w-full max-w-[260px] sm:max-w-[300px] h-auto rounded-3xl shadow-2xl ring-1 ring-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}

function TrustSection() {
  const reduce = useReducedMotion();
  const points = [
    "No ad-driven incentives — we don’t sell your attention.",
    "No attention farming or feed optimisation against your wellbeing.",
    "Privacy-first architecture: no public search, intentional sharing.",
    "Built for users and communities, not for extraction.",
  ];

  return (
    <section id="trust" className="relative py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 sm:p-10 md:p-12">
          <motion.h2
            initial={reduce ? {} : { opacity: 0, y: 12 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            Trust through product philosophy
          </motion.h2>
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 12 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-white/75 max-w-2xl leading-relaxed"
          >
            InLoop’s design reflects how we make money — and how we don’t. Value comes from community and real-world use, not from keeping you glued to a feed.
          </motion.p>
          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={reduce ? {} : { opacity: 0, x: -8 }}
                whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + i * 0.04 }}
                className="flex gap-3 text-white/85"
              >
                <Shield className="h-5 w-5 text-white/60 shrink-0 mt-0.5" />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const FORMSPREE_BETA_ID = process.env.NEXT_PUBLIC_FORMSPREE_BETA_ID || "";
const FORMSPREE_WAITLIST_ID = process.env.NEXT_PUBLIC_FORMSPREE_WAITLIST_ID || "";

function BetaAndReserve() {
  const [betaStatus, setBetaStatus] = useState({ state: "idle", message: "" });
  const [waitlistStatus, setWaitlistStatus] = useState({ state: "idle", message: "" });

  const handleBetaSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_BETA_ID) {
      setBetaStatus({ state: "error", message: "Form not configured." });
      return;
    }
    const form = e.target;
    const email = form.email?.value?.trim();
    if (!email) return;
    setBetaStatus({ state: "loading", message: "" });
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_BETA_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "InLoop Beta request" }),
      });
      if (res.ok) {
        setBetaStatus({ state: "success", message: "You’re in. We’ll be in touch." });
        form.reset();
      } else setBetaStatus({ state: "error", message: "Something went wrong. Try again." });
    } catch {
      setBetaStatus({ state: "error", message: "Something went wrong. Try again." });
    }
  };

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_WAITLIST_ID) {
      setWaitlistStatus({ state: "error", message: "Form not configured." });
      return;
    }
    const form = e.target;
    const email = form.email?.value?.trim();
    if (!email) return;
    setWaitlistStatus({ state: "loading", message: "" });
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_WAITLIST_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "InLoop Waitlist signup" }),
      });
      if (res.ok) {
        setWaitlistStatus({ state: "success", message: "You’re on the list." });
        form.reset();
      } else setWaitlistStatus({ state: "error", message: "Something went wrong. Try again." });
    } catch {
      setWaitlistStatus({ state: "error", message: "Something went wrong. Try again." });
    }
  };

  const benefits = ["Early access to the app", "Founder updates and roadmap", "Help shape the product", "Priority invites for your circles"];

  return (
    <section id="access" className="relative py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Join the early movement</h2>
          <p className="mt-3 text-white/75 max-w-lg mx-auto">
            Get early access, founder updates, and a say in how InLoop grows. No spam — just meaningful updates.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-semibold">Request beta access</h3>
            <p className="mt-2 text-white/75 text-sm">For people who want to use and shape InLoop from day one.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={handleBetaSubmit}>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 h-12 rounded-2xl bg-white/10 border border-white/20 px-4 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                disabled={betaStatus.state === "loading"}
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-2xl bg-white text-black font-medium hover:bg-white/95 transition-colors disabled:opacity-60 disabled:pointer-events-none shrink-0"
              >
                {betaStatus.state === "loading" ? "Sending…" : "Request invite"}
              </button>
            </form>
            {betaStatus.message && (
              <p className={`mt-3 text-sm ${betaStatus.state === "error" ? "text-red-300" : "text-emerald-300"}`}>{betaStatus.message}</p>
            )}
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-xl font-semibold">Join the waitlist</h3>
            <p className="mt-2 text-white/75 text-sm">Be first to know when we launch. Exclusive updates and community access.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={handleWaitlistSubmit}>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 h-12 rounded-2xl bg-white/10 border border-white/20 px-4 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30"
                disabled={waitlistStatus.state === "loading"}
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-2xl bg-white/90 text-black font-medium hover:bg-white transition-colors disabled:opacity-60 disabled:pointer-events-none shrink-0"
              >
                {waitlistStatus.state === "loading" ? "Sending…" : "Join waitlist"}
              </button>
            </form>
            {waitlistStatus.message && (
              <p className={`mt-3 text-sm ${waitlistStatus.state === "error" ? "text-red-300" : "text-emerald-300"}`}>{waitlistStatus.message}</p>
            )}
            <ul className="mt-6 space-y-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-white/70">
                  <Sparkles className="h-4 w-4 text-white/50 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/15 py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/images/InLoop.png" alt="InLoop" width={120} height={32} className="h-7 w-auto" />
          <span className="text-white/50 text-sm">© {new Date().getFullYear()}</span>
        </div>
        <p className="text-white/55 text-sm">A slower, more intentional way to connect.</p>
      </div>
    </footer>
  );
}
