"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EXIT_DELAY_MS = 800;

export default function IntroVideo({ onEnterSite }) {
  const reduce = useReducedMotion();
  const [showVideo, setShowVideo] = useState(!reduce);
  const [isExiting, setIsExiting] = useState(false);
  const exitTimeoutRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (reduce) onEnterSite();
  }, [reduce, onEnterSite]);

  useEffect(() => {
    return () => clearTimeout(exitTimeoutRef.current);
  }, []);

  const handleVideoEnd = () => {
    setIsExiting(true);
    exitTimeoutRef.current = setTimeout(() => {
      try {
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        window.scrollTo(0, 0);
        html.style.scrollBehavior = prev || "";
      } catch {}
      onEnterSite();
      setShowVideo(false);
    }, EXIT_DELAY_MS);
  };

  if (!showVideo) return null;

  return (
    <div className={`intro-overlay${isExiting ? " intro-overlay--exiting" : ""}`} aria-hidden={!showVideo}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className="intro-video"
      >
        <source src="/videos/logo-intro.mp4" type="video/mp4" />
        <source src="/videos/logo-intro.mov" type="video/quicktime" />
      </video>
    </div>
  );
}
