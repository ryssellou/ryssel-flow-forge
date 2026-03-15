import { useEffect, useRef, useState } from "react";

const LABELS = [
  { text: "Full-Stack AI Developer", top: "20%", left: "17%" },
  { text: "AI Automation Specialist",  top: "46%", right: "15%" },
  { text: "ML Developer",            bottom: "23%", left: "17%" },
];


const VideoSection = () => {
  const containerRef  = useRef<HTMLDivElement>(null);
  const stickyRef     = useRef<HTMLDivElement>(null);
  const videoRef      = useRef<HTMLVideoElement>(null);
  const labelRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const maxOpacityRef = useRef(0); // scroll-gated max, read by mousemove handler

  const [progress, setProgress] = useState(0);

  // ── Scroll: scrub video + track progress ──────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const onScroll = () => {
      const { top, height } = container.getBoundingClientRect();
      const scrolled   = -top;
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0 || !video.duration) return;

      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      setProgress(p);
      video.currentTime = p * video.duration;

      // Magnifying glass cursor only during the labels reveal phase
      if (stickyRef.current) {
        stickyRef.current.style.cursor = p >= 0.75 ? "zoom-in" : "default";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep ref in sync with state so mousemove handler always has fresh value
  useEffect(() => {
    maxOpacityRef.current = Math.max(0, (progress - 0.75) / 0.25);
  }, [progress]);

  // ── Mouse: circular mask reveal — direct DOM, no re-renders ──────────────
  useEffect(() => {
    const RADIUS = 96; // ~1 inch at 96dpi

    const onMouseMove = (e: MouseEvent) => {
      const max = maxOpacityRef.current;
      labelRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        // Always show at scroll-gated opacity; mask controls what's visible
        el.style.opacity = String(max);
        const mask = `radial-gradient(circle ${RADIUS}px at ${relX}px ${relY}px, black 30%, transparent 100%)`;
        (el.style as CSSStyleDeclaration & { webkitMaskImage: string }).webkitMaskImage = mask;
        el.style.maskImage = mask;
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div ref={containerRef} id="video-section" className="relative h-[300vh]">
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">

        {/* Luxury dark background */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 60% 50%, #1a0a2e 0%, #0d0d0d 50%, #050505 100%)",
        }} />

        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #4f46e5, transparent 70%)" }} />

        {/* Gold shimmer top edge */}
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, #c9a84c55, #f0d080aa, #c9a84c55, transparent)" }} />

        {/* Video */}
        <video ref={videoRef} src="/final-video.mp4" muted playsInline preload="auto"
          className="relative z-10 w-full h-full object-contain" />

        {/* Cursor-proximity job title labels */}
        {LABELS.map((label, i) => (
          <div
            key={label.text}
            ref={(el) => { labelRefs.current[i] = el; }}
            className="absolute z-30 select-none pointer-events-none"
            style={{
              ...label,
              opacity: 0,
              fontFamily: "'Fredoka One', cursive",
              fontSize:   "clamp(1.8rem, 3.5vw, 3.2rem)",
              fontWeight: 400,
              fontStyle:  "normal",
              color:      "#1a1a1a",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
              transition: "opacity 0.15s ease-out",
              textShadow: "0 2px 12px rgba(255,255,255,0.4)",
            }}
          >
            {label.text}
          </div>
        ))}

        {/* Vignette */}
        <div className="absolute inset-0 z-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(5,5,5,0.55) 100%)" }} />

        {/* Scroll hint — fades out once user starts scrolling */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-500"
          style={{ opacity: Math.max(0, 1 - progress * 6) }}
        >
          <span style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.7)",
            textTransform: "uppercase",
          }}>
            Scroll to view portfolio
          </span>
          <svg
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            className="animate-bounce"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <path d="M12 5v14M5 13l7 7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #050505)" }} />
      </div>
    </div>
  );
};

export default VideoSection;
