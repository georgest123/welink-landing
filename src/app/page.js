// src/app/page.js
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield, EyeOff, Timer, Users, Sparkles, Link2 } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SpiderWeb from "./components/SpiderWeb";

/* Enable smooth scroll only for user-triggered jumps */
function smoothForAWhile(ms = 400) {
  const html = document.documentElement;
  html.classList.add("smooth-scroll");
  clearTimeout((html)._smoothTO);
  (html)._smoothTO = setTimeout(() => html.classList.remove("smooth-scroll"), ms);
}

export default function Page() {
  const [showMainSite, setShowMainSite] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  // Stop browser from restoring scroll and causing surprise jumps
  useEffect(() => {
    if (typeof window === "undefined") return;
    try { history.scrollRestoration = "manual"; } catch {}
  }, []);


  // Get user data for personalization
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const userData = {
        name: urlParams.get("name") || localStorage.getItem("userName") || "Friend",
        interests: urlParams.get("interests")?.split(",") || ["social", "community"],
        timeOfDay: new Date().getHours(),
        location: urlParams.get("location") || "Unknown",
      };
      setUserProfile(userData);
    }
  }, []);

  // Re-run anchor scroll after the intro overlay disappears, only if real hash
  // Temporarily disabled to prevent auto-scroll issues
  // useEffect(() => {
  //   if (!showMainSite || typeof window === "undefined") return;

  //   const hash = window.location.hash?.trim();
  //   if (!hash || hash === "#" || hash === "#top") return;

  //   requestAnimationFrame(() => {
  //     requestAnimationFrame(() => {
  //       const el = document.querySelector(hash);
  //       if (el) {
  //         smoothForAWhile();
  //         el.scrollIntoView({ behavior: "smooth", block: "start" });
  //       }
  //     });
  //   });
  // }, [showMainSite]);

  return (
    <>
      <style jsx global>{`
        /* No global smooth scrolling; opt-in via .smooth-scroll */
        html { scroll-padding-top: 96px; }
        .smooth-scroll { scroll-behavior: smooth; }

        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        
        /* Video container - always full screen */
        .video-container {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 50 !important;
          background-color: black !important;
          overflow: hidden !important;
          margin: 0 !important;
          padding: 0 !important;
          min-width: 100vw !important;
          min-height: 100vh !important;
          max-width: 100vw !important;
          max-height: 100vh !important;
        }
        
        /* Force full screen on all devices */
        @media screen and (max-width: 768px) {
          .video-container {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            min-width: 100vw !important;
            min-height: 100vh !important;
            max-width: 100vw !important;
            max-height: 100vh !important;
          }
        }
        
        /* Video responsiveness for different platforms */
        .intro-video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
        }
        
        /* Mobile-specific video optimizations - keep video small but center in full container */
        @media screen and (max-width: 768px) {
          .intro-video {
            width: 80% !important;
            height: 60% !important;
            max-width: 80% !important;
            max-height: 60% !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            object-fit: contain !important;
          }
        }
        
        /* Extra small mobile devices - even smaller */
        @media screen and (max-width: 480px) {
          .intro-video {
            width: 70% !important;
            height: 50% !important;
            max-width: 70% !important;
            max-height: 50% !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            object-fit: contain !important;
          }
        }
        
        /* Very small mobile devices */
        @media screen and (max-width: 360px) {
          .intro-video {
            width: 60% !important;
            height: 40% !important;
            max-width: 60% !important;
            max-height: 40% !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            object-fit: contain !important;
          }
        }
        
        /* Portrait orientation - mobile specific */
        @media screen and (orientation: portrait) and (max-width: 768px) {
          .intro-video {
            width: 75% !important;
            height: 55% !important;
            max-width: 75% !important;
            max-height: 55% !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            object-fit: contain !important;
          }
        }
        
        /* Landscape orientation fixes */
        @media screen and (orientation: landscape) {
          .intro-video {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center !important;
          }
        }

        /* Link-as-button utilities */
        .btn-link {
          display: inline-block;
          height: 44px;
          line-height: 44px;
          padding: 0 20px;
          border-radius: 0.875rem;
          transition: transform 0.3s, background-color 0.3s;
          box-shadow: 0 8px 16px rgba(0,0,0,0.25);
          -webkit-backdrop-filter: blur(6px);
          backdrop-filter: blur(6px);
          font-size: 14px;
          text-align: center;
        }
        
        @media (min-width: 640px) {
          .btn-link {
            height: 48px;
            line-height: 48px;
            padding: 0 24px;
            border-radius: 1rem;
            font-size: 16px;
          }
        }
        .btn-primary { background: rgba(255,255,255,0.95); color: #000; }
        .btn-primary:hover { background: #fff; transform: translateY(-1px) scale(1.05); }
        .btn-ghost { background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.3); }
        .btn-ghost:hover { background: rgba(255,255,255,0.2); transform: translateY(-1px) scale(1.05); }
      `}</style>

      <div className="relative min-h-screen w-full text-white selection:bg-white/30 selection:text-white">
        <PersonalizedBackground userProfile={userProfile} />
        {/* Intro video: left exactly as you had it */}
        <IntroVideo onEnterSite={() => setShowMainSite(true)} />
        <div className={showMainSite ? "block" : "hidden"}>
      <NavBar />
      <main className="relative z-10">
            <Hero userProfile={userProfile} />
        <TrustStrip />
        <FeatureGrid />
        <SlowSocialExplainer />
        <BetaAndReserve />
        <Footer />
      </main>
        </div>
      </div>
    </>
  );
}

function PersonalizedBackground() {
  // Remove background-attachment: fixed to avoid mobile jank
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

/* Your original IntroVideo component, unchanged */
function IntroVideo({ onEnterSite }) {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    // reset to top immediately, then reveal site
    try {
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = prev || "";
    } catch {}

    setVideoEnded(true);
    onEnterSite();
    setShowVideo(false);
  };

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      // End video 3 seconds early
      if (currentTime >= duration - 3) {
        videoRef.current.pause();
        handleVideoEnd();
      }
    }
  };

  if (!showVideo) {
    return null;
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 50,
        backgroundColor: 'black',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        minWidth: '100vw',
        minHeight: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        border: '5px solid red'
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        onTimeUpdate={handleVideoTimeUpdate}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          position: 'absolute',
          top: '50%',
          left: '0',
          width: '100%',
          height: '60%',
          minWidth: '100%',
          maxWidth: '100%',
          // Override mobile CSS rules
          transform: 'translateY(-50%) !important',
          left: '0 !important'
        }}
      >
        <source src="/videos/Intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function NavBar() {
  const items = [
    { label: "Features", href: "#features" },
    { label: "Slow Social", href: "#slow" },
    { label: "Get Access", href: "#access" },
  ];
  return (
    <div className="sticky top-4 z-30 w-full flex justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center">
          <div className="rounded-2xl sm:rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] ring-1 ring-white/10 w-full max-w-[1200px] sm:max-w-[1500px]">
            <div className="px-6 py-4 flex items-center justify-between">
              <a href="#top" onClick={() => smoothForAWhile()} className="flex items-center">
                <Image src="/images/logo.png" alt="WeLink Logo" width={200} height={50} className="w-32 sm:w-40 md:w-48 h-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {items.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    onClick={() => smoothForAWhile()}
                    className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                  >
              {it.label}
            </a>
          ))}
        </nav>
              <a href="#access" onClick={() => smoothForAWhile()} className="md:inline-block hidden btn-link btn-primary">
                Get Started
        </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ userProfile }) {
  const reduce = useReducedMotion();

  const getPersonalizedGreeting = () => {
    if (!userProfile) return "Less feed. More friends.";
    const { name, timeOfDay } = userProfile;
    const hour = timeOfDay;
    if (hour >= 6 && hour < 12) return `Good morning, ${name}.`;
    if (hour >= 12 && hour < 17) return `Good afternoon, ${name}.`;
    if (hour >= 17 && hour < 22) return `Good evening, ${name}.`;
    return `Welcome back, ${name}.`;
  };

  const getPersonalizedSubtitle = () => {
    if (!userProfile) {
      return "The world's first slow social app. Safe, cosy, and algorithm-free. No public search, no data traps. Just your people, your space.";
    }
    const { interests } = userProfile;
    const primaryInterest = interests[0] || "social";
    const interestMessages = {
      social: "Connect with your inner circle in a safe, cosy space.",
      community: "Build meaningful relationships in your local community.",
      events: "Discover events and meet new friends in your area.",
      music: "Share your musical moments with people who matter.",
      art: "Express your creativity in a supportive community.",
      tech: "Connect with like-minded tech enthusiasts.",
    };
    return interestMessages[primaryInterest] || "The world's first slow social app. Safe, cosy, and algorithm-free.";
  };

  return (
    <section id="top" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-28 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
        <div>
          <motion.h1
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]"
          >
            {getPersonalizedGreeting()}
          </motion.h1>
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-white/70 text-lg max-w-xl"
          >
            {getPersonalizedSubtitle()}
          </motion.p>
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a href="#access" onClick={() => smoothForAWhile()} className="btn-link btn-primary">
                Join the Beta
            </a>
            <a href="#access" onClick={() => smoothForAWhile()} className="btn-link btn-ghost">
                Join waiting list
            </a>
          </motion.div>
          <div className="mt-4 text-sm text-white/50">No ads. Disappearing by default. AI as a shield, not a hook.</div>
        </div>

        <div className="relative">
          <AppDashboardMockup />
        </div>
      </div>
    </section>
  );
}

function AppDashboardMockup() {
  const [activeCard, setActiveCard] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isInView, setIsInView] = useState(true);
  const scrollRef = useRef(null);
  const mockupRef = useRef(null);

  const handleCardClick = (cardTitle) => {
    setActiveCard(cardTitle);
    if (cardTitle === "Events Near You" || cardTitle === "Messages") {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
    setTimeout(() => setActiveCard(null), 1000);
  };

  const handleContentScroll = (e) => {
    if (e.target) setScrollPosition(e.target.scrollTop);
  };

  // Visibility tracking for animations
  useEffect(() => {
    const handleViewportScroll = () => {
      if (mockupRef.current) {
        const rect = mockupRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    const timer = setTimeout(() => handleViewportScroll(), 100);
    window.addEventListener("scroll", handleViewportScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleViewportScroll);
    };
  }, []);

  return (
    <motion.div
      ref={mockupRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto h-[400px] w-[280px] sm:h-[480px] sm:w-[300px] md:h-[560px] md:w-[300px] rounded-[2.2rem] p-[8px] sm:p-[12px] bg-gradient-to-b from-white/15 to-white/8 border border-white/30 shadow-[0_0_80px_-10px_rgba(255,255,255,0.2)] backdrop-blur-3xl ring-1 ring-white/20"
    >
      <div className="h-full w-full rounded-[1.8rem] overflow-hidden bg-black/60 ring-1 ring-white/20 backdrop-blur-xl">
        {/* App Header */}
        <div className="h-14 w-full backdrop-blur-xl bg-white/10 border-b border-white/20 flex items-center justify-between px-4 sticky top-0 z-10">
          <div />
          <Image src="/images/logo.png" alt="WeLink Logo" width={80} height={20} className="w-auto h-auto" />
          <div className="flex items-center justify-center w-6 h-6">
            {showNotification && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="w-3 h-3 bg-red-500 rounded-full"
                style={{ filter: "drop-shadow(0 0 4px rgba(239,68,68,0.8))" }}
              />
            )}
          </div>
        </div>

        {/* Scrollable Dashboard Content */}
        <div ref={scrollRef} className="h-[calc(100%-56px)] overflow-y-auto scrollbar-hide" onScroll={handleContentScroll}>
          <div className="p-4 space-y-4 pb-8">
            <InteractiveCard
              title="Circle Feed"
              subtitle="Catch up with your inner circle"
              glow
              onClick={() => handleCardClick("Circle Feed")}
              isActive={activeCard === "Circle Feed"}
              type="feed"
              isInView={isInView}
            />
            <InteractiveCard
              title="Events Near You"
              subtitle="3 local events today"
              onClick={() => handleCardClick("Events Near You")}
              isActive={activeCard === "Events Near You"}
              hasNotification
              type="events"
              isInView={isInView}
            />
            <InteractiveCard
              title="Messages"
              subtitle="2 new conversations"
              onClick={() => handleCardClick("Messages")}
              isActive={activeCard === "Messages"}
              type="messages"
              isInView={isInView}
            />
            <SpiderWebConnectionCard
              title="Inner Circle"
              subtitle="Nurture close relationships"
              onClick={() => handleCardClick("Inner Circle")}
              isActive={activeCard === "Inner Circle"}
              isInView={isInView}
            />
            <InteractiveCard
              title="Community"
              subtitle="What's happening locally"
              onClick={() => handleCardClick("Community")}
              isActive={activeCard === "Community"}
              type="community"
              isInView={isInView}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-2 right-2 w-1 h-8 bg-white/20 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollPosition > 10 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-full bg-white/60 rounded-full"
            animate={{ height: `${Math.min(100, (scrollPosition / 200) * 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function MiniSpiderWeb({ type = "default" }) {
  const getVisualization = () => {
    switch (type) {
      case "feed":
        return <FeedVisualization />;
      case "events":
        return <EventsVisualization />;
      case "messages":
        return <MessagesVisualization />;
      case "community":
        return <CommunityVisualization />;
      default:
        return <DefaultVisualization />;
    }
  };

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="miniWebGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {getVisualization()}
    </svg>
  );
}

function DefaultVisualization() {
  return (
    <>
      <line x1="50" y1="10" x2="50" y2="90" stroke="url(#miniWebGradient)" strokeWidth="0.5" opacity="0.6" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="url(#miniWebGradient)" strokeWidth="0.5" opacity="0.6" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.4" opacity="0.5" />
      <circle cx="50" cy="50" r="3" fill="url(#miniWebGradient)" />
    </>
  );
}

function FeedVisualization() {
  return (
    <>
      <defs>
        <radialGradient id="feedNodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f8fafc" stopOpacity="1" />
          <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      <rect x="15" y="15" width="70" height="25" rx="3" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.6" opacity="0.8" />
      <circle cx="20" cy="20" r="2" fill="url(#feedNodeGradient)" />
      <line x1="25" y1="22" x2="60" y2="22" stroke="url(#feedNodeGradient)" strokeWidth="0.4" opacity="0.8" />
      <line x1="25" y1="25" x2="50" y2="25" stroke="url(#feedNodeGradient)" strokeWidth="0.4" opacity="0.8" />
      <line x1="25" y1="28" x2="45" y2="28" stroke="url(#feedNodeGradient)" strokeWidth="0.4" opacity="0.8" />

      <rect x="15" y="45" width="70" height="30" rx="3" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.6" opacity="0.8" />
      <circle cx="20" cy="50" r="2" fill="url(#feedNodeGradient)" />
      <rect x="25" y="52" width="50" height="15" rx="2" fill="url(#miniWebGradient)" opacity="0.3" />
      <line x1="25" y1="70" x2="55" y2="70" stroke="url(#feedNodeGradient)" strokeWidth="0.4" opacity="0.8" />

      <rect x="15" y="80" width="50" height="15" rx="3" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.6" opacity="0.8" />
      <circle cx="20" cy="85" r="1.5" fill="url(#feedNodeGradient)" />
      <line x1="25" y1="87" x2="45" y2="87" stroke="url(#feedNodeGradient)" strokeWidth="0.4" opacity="0.8" />
      <line x1="25" y1="90" x2="40" y2="90" stroke="url(#feedNodeGradient)" strokeWidth="0.4" opacity="0.8" />
    </>
  );
}

function EventsVisualization() {
  return (
    <>
      <defs>
        <radialGradient id="eventNodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f8fafc" stopOpacity="1" />
          <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      <rect x="15" y="20" width="20" height="18" rx="2" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.8" opacity="0.8" />
      <rect x="15" y="20" width="20" height="6" fill="url(#miniWebGradient)" opacity="0.6" />
      <circle cx="20" cy="30" r="2" fill="url(#eventNodeGradient)" />
      <circle cx="25" cy="30" r="2" fill="url(#eventNodeGradient)" />
      <circle cx="30" cy="30" r="2" fill="url(#eventNodeGradient)" />

      <path d="M55 20 L75 20 Q77 20 77 22 L77 28 Q77 30 75 30 L73 30 Q71 30 71 32 Q71 34 73 34 L75 34 Q77 34 77 36 L77 42 Q77 44 75 44 L55 44 Q53 44 53 42 L53 36 Q53 34 55 34 L57 34 Q59 34 59 32 Q59 30 57 30 L55 30 Q53 30 53 28 L53 22 Q53 20 55 20 Z" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.8" opacity="0.8" />
      <circle cx="60" cy="25" r="2" fill="url(#eventNodeGradient)" />
      <circle cx="65" cy="25" r="2" fill="url(#eventNodeGradient)" />
      <circle cx="70" cy="25" r="2" fill="url(#eventNodeGradient)" />

      <rect x="25" y="55" width="25" height="20" rx="2" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.8" opacity="0.8" />
      <rect x="25" y="55" width="25" height="7" fill="url(#miniWebGradient)" opacity="0.6" />
      <circle cx="30" cy="65" r="2" fill="url(#eventNodeGradient)" />
      <circle cx="35" cy="65" r="2" fill="url(#eventNodeGradient)" />
      <circle cx="40" cy="65" r="2" fill="url(#eventNodeGradient)" />
      <circle cx="45" cy="65" r="2" fill="url(#eventNodeGradient)" />
    </>
  );
}

function MessagesVisualization() {
  return (
    <>
      <defs>
        <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.8" />
        </radialGradient>
      </defs>

      <path d="M15 20 Q15 15 20 15 L40 15 Q45 15 45 20 L45 35 Q45 40 40 40 L25 40 L20 45 L25 40 L20 40 Q15 40 15 35 Z" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.8" opacity="0.8" />
      <line x1="20" y1="22" x2="40" y2="22" stroke="url(#miniWebGradient)" strokeWidth="0.3" opacity="0.9" />
      <line x1="20" y1="26" x2="38" y2="26" stroke="url(#miniWebGradient)" strokeWidth="0.3" opacity="0.9" />
      <line x1="20" y1="30" x2="36" y2="30" stroke="url(#miniWebGradient)" strokeWidth="0.3" opacity="0.9" />
      <line x1="20" y1="34" x2="34" y2="34" stroke="url(#miniWebGradient)" strokeWidth="0.3" opacity="0.9" />

      <rect x="60" y="25" width="25" height="18" rx="3" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.8" opacity="0.8" />
      <path d="M60 25 L72.5 33 L85 25" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.6" opacity="0.9" />
      <line x1="65" y1="30" x2="80" y2="30" stroke="url(#miniWebGradient)" strokeWidth="0.3" opacity="0.9" />
      <line x1="65" y1="34" x2="78" y2="34" stroke="url(#miniWebGradient)" strokeWidth="0.3" opacity="0.9" />
      <line x1="65" y1="38" x2="75" y2="38" stroke="url(#miniWebGradient)" strokeWidth="0.3" opacity="0.9" />

      <circle cx="25" cy="65" r="12" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.8" opacity="0.8" />
      <circle cx="20" cy="65" r="2" fill="url(#nodeGradient)" />
      <circle cx="25" cy="65" r="2" fill="url(#nodeGradient)" />
      <circle cx="30" cy="65" r="2" fill="url(#nodeGradient)" />

      <rect x="65" y="55" width="20" height="15" rx="2" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.8" opacity="0.8" />
      <circle cx="75" cy="60" r="2" fill="url(#nodeGradient)" />
      <line x1="68" y1="65" x2="77" y2="65" stroke="url(#miniWebGradient)" strokeWidth="0.3" opacity="0.9" />
      <line x1="68" y1="68" x2="75" y2="68" stroke="url(#miniWebGradient)" strokeWidth="0.3" opacity="0.9" />
    </>
  );
}

function CommunityVisualization() {
  return (
    <>
      <defs>
        <radialGradient id="communityNodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f8fafc" stopOpacity="1" />
          <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      <rect x="15" y="15" width="60" height="20" rx="3" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.6" opacity="0.8" />
      <circle cx="20" cy="20" r="2" fill="url(#communityNodeGradient)" />
      <rect x="25" y="18" width="8" height="4" rx="1" fill="url(#miniWebGradient)" opacity="0.4" />
      <line x1="25" y1="25" x2="50" y2="25" stroke="url(#communityNodeGradient)" strokeWidth="0.4" opacity="0.8" />
      <line x1="25" y1="28" x2="45" y2="28" stroke="url(#communityNodeGradient)" strokeWidth="0.4" opacity="0.8" />

      <rect x="15" y="40" width="70" height="25" rx="3" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.6" opacity="0.8" />
      <circle cx="20" cy="45" r="2" fill="url(#communityNodeGradient)" />
      <rect x="25" y="43" width="12" height="6" rx="1" fill="url(#miniWebGradient)" opacity="0.4" />
      <circle cx="28" cy="46" r="1" fill="url(#communityNodeGradient)" />
      <circle cx="32" cy="46" r="1" fill="url(#communityNodeGradient)" />
      <line x1="25" y1="52" x2="60" y2="52" stroke="url(#communityNodeGradient)" strokeWidth="0.4" opacity="0.8" />
      <line x1="25" y1="55" x2="55" y2="55" stroke="url(#communityNodeGradient)" strokeWidth="0.4" opacity="0.8" />

      <rect x="15" y="70" width="50" height="15" rx="3" fill="none" stroke="url(#miniWebGradient)" strokeWidth="0.6" opacity="0.8" />
      <circle cx="20" cy="75" r="1.5" fill="url(#communityNodeGradient)" />
      <rect x="25" y="73" width="6" height="4" rx="1" fill="url(#miniWebGradient)" opacity="0.4" />
      <line x1="25" y1="80" x2="45" y2="80" stroke="url(#communityNodeGradient)" strokeWidth="0.4" opacity="0.8" />
      <line x1="25" y1="82" x2="40" y2="82" stroke="url(#communityNodeGradient)" strokeWidth="0.4" opacity="0.8" />
    </>
  );
}

function InteractiveCard({ title, subtitle, glow = false, onClick, isActive, hasNotification = false, type = "default", isInView }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ripple, setRipple] = useState(null);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    setRipple({ x, y, size });
    setTimeout(() => setRipple(null), 600);

    if (onClick) onClick();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        scale: isActive ? 1.05 : 1,
        boxShadow: isActive
          ? "0 0 30px -5px rgba(255,255,255,0.3)"
          : glow
          ? "0 0 50px -10px rgba(255,255,255,0.2)"
          : "0 0 20px -5px rgba(0,0,0,0.3)",
      }}
      transition={{ duration: 0.2 }}
      className="relative rounded-2xl border border-white/20 p-4 backdrop-blur-xl bg-white/10 ring-1 ring-white/10 cursor-pointer overflow-hidden"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {ripple && (
        <motion.div
          className="absolute bg-white/20 rounded-full pointer-events-none"
          style={{ left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

      {hasNotification && (
        <motion.div
          className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full"
          animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 0.8 : 1 }}
        />
      )}

      <div className="relative z-10">
        <div className="text-[13px] text-white/70">{subtitle}</div>
        <div className="mt-1 text-white font-semibold">{title}</div>
        <div className="mt-3 h-24 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm relative overflow-hidden">
          <MiniSpiderWeb type={type} isInView={isInView} />
        </div>
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

function SpiderWebConnectionCard({ title, subtitle, onClick, isActive, isInView }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ripple, setRipple] = useState(null);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    setRipple({ x, y, size });
    setTimeout(() => setRipple(null), 600);

    if (onClick) onClick();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        scale: isActive ? 1.05 : 1,
        boxShadow: isActive ? "0 0 30px -5px rgba(255,255,255,0.9)" : "0 0 20px -5px rgba(0,0,0,0.3)",
      }}
      transition={{ duration: 0.2 }}
      className="relative rounded-2xl border border-white/20 p-4 backdrop-blur-xl bg-white/10 ring-1 ring-white/10 cursor-pointer overflow-hidden"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {ripple && (
        <motion.div
          className="absolute bg-white/20 rounded-full pointer-events-none"
          style={{ left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

      <div className="relative z-10">
        <div className="text-[13px] text-white/70">{subtitle}</div>
        <div className="mt-1 text-white font-semibold">{title}</div>

        <div className="mt-3 h-24 w-full rounded-xl bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-sm relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <motion.line x1="50" y1="10" x2="50" y2="90" stroke="url(#webGradient)" strokeWidth="0.5" opacity="0.6"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 2, delay: 0.2 }} />
            <motion.line x1="10" y1="50" x2="90" y2="50" stroke="url(#webGradient)" strokeWidth="0.5" opacity="0.6"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 2, delay: 0.4 }} />
            <motion.line x1="20" y1="20" x2="80" y2="80" stroke="url(#webGradient)" strokeWidth="0.3" opacity="0.4"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 2, delay: 0.6 }} />
            <motion.line x1="80" y1="20" x2="20" y2="80" stroke="url(#webGradient)" strokeWidth="0.3" opacity="0.4"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 2, delay: 0.8 }} />

            <motion.circle cx="50" cy="50" r="15" fill="none" stroke="url(#webGradient)" strokeWidth="0.4" opacity="0.5"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.5, delay: 1 }} />
            <motion.circle cx="50" cy="50" r="25" fill="none" stroke="url(#webGradient)" strokeWidth="0.3" opacity="0.3"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.5, delay: 1.2 }} />
            <motion.circle cx="50" cy="50" r="35" fill="none" stroke="url(#webGradient)" strokeWidth="0.2" opacity="0.2"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1.5, delay: 1.4 }} />

            <motion.circle cx="50" cy="50" r="2" fill="url(#nodeGradient)"
              initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 1.6 }} />
            <motion.circle cx="30" cy="30" r="1.5" fill="url(#nodeGradient)"
              initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 1.8 }} />
            <motion.circle cx="70" cy="30" r="1.5" fill="url(#nodeGradient)"
              initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 2 }} />
            <motion.circle cx="30" cy="70" r="1.5" fill="url(#nodeGradient)"
              initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 2.2 }} />
            <motion.circle cx="70" cy="70" r="1.5" fill="url(#nodeGradient)"
              initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 2.4 }} />

            <motion.line x1="50" y1="50" x2="30" y2="30" stroke="url(#connectionGradient)" strokeWidth="0.3" opacity="0.6"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1, delay: 2.6 }} />
            <motion.line x1="50" y1="50" x2="70" y2="30" stroke="url(#connectionGradient)" strokeWidth="0.3" opacity="0.6"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1, delay: 2.8 }} />
            <motion.line x1="50" y1="50" x2="30" y2="70" stroke="url(#connectionGradient)" strokeWidth="0.3" opacity="0.6"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1, delay: 3 }} />
            <motion.line x1="50" y1="50" x2="70" y2="70" stroke="url(#connectionGradient)" strokeWidth="0.3" opacity="0.6"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : { pathLength: 0 }} transition={{ duration: 1, delay: 3.2 }} />

            <motion.circle cx="50" cy="50" r="3" fill="none" stroke="url(#pulseGradient)" strokeWidth="1" opacity="0.8"
              animate={isInView ? { r: [3, 8, 3], opacity: [0.8, 0.2, 0.8] } : { r: 3, opacity: 0.8 }}
              transition={{ duration: 2, repeat: isInView ? Infinity : 0, ease: "easeInOut" }} />

            <defs>
              <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
              </linearGradient>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.8" />
              </radialGradient>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.4" />
              </linearGradient>
              <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          <motion.div
            className="absolute inset-0"
            animate={{
              background: isHovered
                ? "radial-gradient(circle at 20% 20%, rgba(248,250,252,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(226,232,240,0.1) 0%, transparent 50%)"
                : "radial-gradient(circle at 20% 20%, rgba(248,250,252,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(226,232,240,0.05) 0%, transparent 50%)",
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

function TrustStrip() {
  const items = ["No public search", "Disappearing by default", "AI shielded", "No ads, no feed traps"];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/70 text-sm">
        {items.map((t) => (
          <div key={t} className="rounded-2xl border border-white/20 px-4 py-4 bg-white/10 backdrop-blur-xl ring-1 ring-white/10 shadow-lg hover:scale-105 transition-all duration-300">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureGrid() {
  const features = [
    { icon: Shield, title: "Safety baked in", desc: "Invite-only circles. No stalking, no public search." },
    { icon: EyeOff, title: "Ephemeral by default", desc: "Moments fade unless you save them together." },
    { icon: Timer, title: "Respect for your time", desc: "No doomscroll. Gentle session limits." },
    { icon: Users, title: "Inner circle view", desc: "See real connections, not vanity metrics." },
  ];
  return (
    <section id="features" className="relative py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-semibold tracking-tight">
          Designed for small, safe circles
        </motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 ring-1 ring-white/10 shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg ring-1 ring-white/20">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <div className="mt-5 font-semibold text-lg">{f.title}</div>
              <div className="mt-2 text-sm text-white/80">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SlowSocialExplainer() {
  return (
    <section id="slow" className="relative py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/15 to-white/8 p-4 sm:p-6 md:p-8 backdrop-blur-xl ring-1 ring-white/10 shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4 sm:mb-6">Slow social, explained</h3>
            <p className="mt-4 text-white/80 text-base sm:text-lg leading-relaxed text-center mb-6 sm:mb-8">
              WeLink reimagines social connection for the digital age. Instead of broadcasting to the world, 
              you build meaningful relationships in small, trusted circles where authenticity thrives.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">The Problem with Fast Social</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Endless scrolling feeds designed to addict and distract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Public performance anxiety and constant comparison</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Shallow connections based on likes and follower counts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Data harvesting and privacy violations as the business model</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">The WeLink Solution</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Intimate circles of close friends only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Ephemeral content that disappears naturally, like real conversations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>No likes, no followers, no public profiles or vanity metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>End-to-end encryption and privacy by design, not as an afterthought</span>
                    </li>
                  </ul>
                </div>
                
                <p className="mt-6 text-white/60 text-base">
                  Slow social means quality over quantity. It&apos;s about being present with the people who matter most, 
                  sharing moments that are meant to be experienced, not archived or monetized.
                </p>
                
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm justify-center sm:justify-start">
            <Badge Icon={Sparkles} text="No algorithm" />
            <Badge Icon={Link2} text="Invite-only" />
            <Badge Icon={Shield} text="Privacy-first" />
          </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Inner Circle at your fingertips</h4>
                <div className="flex justify-center">
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
                  centerLabel=""
                  onNodeClick={(id) => console.log("clicked", id)}
                />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ Icon, text }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl ring-1 ring-white/10 shadow-lg">
      <Icon className="h-4 w-4 text-white" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function BetaAndReserve() {
  return (
    <section id="access" className="relative py-16 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/15 to-white/8 p-8 backdrop-blur-xl ring-1 ring-white/10 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-semibold">Join the private beta</h3>
          <p className="mt-3 text-white/80">Get early access and help shape the first slow social app.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@cosy.space"
              className="flex-1 h-12 min-h-[3rem] rounded-2xl bg-white/15 border border-white/30 px-4 placeholder:text-white/60 outline-none backdrop-blur-sm focus:ring-2 focus:ring-white/50"
              style={{ minHeight: '48px', height: '48px' }}
            />
            <button className="h-12 min-h-[3rem] rounded-2xl px-8 bg-white/95 text-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm font-medium"
              style={{ minHeight: '48px', height: '48px' }}>
              Request invite
            </button>
          </form>
          <p className="mt-3 text-sm text-white/70">We&apos;ll only email you about beta access.</p>
        </div>

        <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/15 to-white/8 p-8 backdrop-blur-xl ring-1 ring-white/10 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-semibold">Join the waiting list</h3>
          <p className="mt-3 text-white/80">Be first to know when WeLink launches. Get exclusive early access.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 h-12 min-h-[3rem] rounded-2xl bg-white/15 border border-white/30 px-4 placeholder:text-white/60 outline-none backdrop-blur-sm focus:ring-2 focus:ring-white/50"
              style={{ minHeight: '48px', height: '48px' }}
            />
            <button className="h-12 min-h-[3rem] rounded-2xl px-8 bg-white/95 text-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm font-medium"
              style={{ minHeight: '48px', height: '48px' }}>
              Join List
            </button>
          </form>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {["Early access priority", "Exclusive launch updates", "Founder community access", "No spam, ever"].map((b) => (
              <li key={b} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl ring-1 ring-white/10 shadow-lg flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-white/80 shadow-sm" />
                <span className="text-white/90 font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/20 backdrop-blur-xl bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="WeLink Logo" width={150} height={40} className="w-auto h-auto" />
          <span className="text-white/60 text-sm">© {new Date().getFullYear()}</span>
        </div>
        <div className="text-white/70 text-sm font-medium">Built for people, not algorithms.</div>
      </div>
    </footer>
  );
}