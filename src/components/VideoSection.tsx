import { useEffect, useRef, useState } from "react";

/** Returns 0-1 for a fade-in / hold / fade-out envelope */
function phaseOpacity(
  progress: number,
  fadeIn: number,
  holdStart: number,
  holdEnd: number,
  fadeOut: number
): number {
  if (progress < fadeIn || progress > fadeOut) return 0;
  if (progress < holdStart) return (progress - fadeIn) / (holdStart - fadeIn);
  if (progress <= holdEnd) return 1;
  return 1 - (progress - holdEnd) / (fadeOut - holdEnd);
}

function phaseTranslateY(
  progress: number,
  fadeIn: number,
  holdStart: number,
  holdEnd: number,
  fadeOut: number
): number {
  if (progress < fadeIn || progress > fadeOut) return 20;
  if (progress < holdStart) return 20 * (1 - (progress - fadeIn) / (holdStart - fadeIn));
  if (progress <= holdEnd) return 0;
  return -20 * ((progress - holdEnd) / (fadeOut - holdEnd));
}

const PHASES = [
  { id: "role1",    fadeIn: 0.02, holdStart: 0.06, holdEnd: 0.11, fadeOut: 0.15 },
  { id: "value",    fadeIn: 0.18, holdStart: 0.22, holdEnd: 0.28, fadeOut: 0.32 },
  { id: "role2",    fadeIn: 0.35, holdStart: 0.39, holdEnd: 0.46, fadeOut: 0.50 },
  { id: "tech",     fadeIn: 0.52, holdStart: 0.56, holdEnd: 0.61, fadeOut: 0.65 },
  { id: "role3",    fadeIn: 0.67, holdStart: 0.70, holdEnd: 0.73, fadeOut: 0.75 },
] as const;

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
  const maxOpacityRef  = useRef(0);
  const rafRef         = useRef<number | null>(null);
  const targetTimeRef  = useRef(0);
  const lastSeekRef    = useRef(0); // timestamp of last actual seek
  const lastTimeRef    = useRef(0); // last video.currentTime we set

  const [progress, setProgress] = useState(0);

  // ── iOS unlock: Safari blocks seeking until video is "played" once ────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const unlock = () => {
      video.play().then(() => video.pause()).catch(() => {});
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("click", unlock);
    };
    window.addEventListener("touchstart", unlock, { once: true, passive: true });
    window.addEventListener("click", unlock, { once: true });
    return () => {
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("click", unlock);
    };
  }, []);

  // ── Scroll: scrub video + track progress ──────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.pause();

    const onScroll = () => {
      const { top, height } = container.getBoundingClientRect();
      const scrolled   = -top;
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0 || !video.duration) return;

      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      setProgress(p);
      targetTimeRef.current = p * video.duration;

      if (stickyRef.current) {
        stickyRef.current.style.cursor = p >= 0.75 ? "zoom-in" : "default";
      }

      // Throttle seeks: only seek if time changed by >40ms worth or 50ms passed
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const now = performance.now();
        const timeDelta = Math.abs(targetTimeRef.current - lastTimeRef.current);
        const elapsed = now - lastSeekRef.current;
        if (timeDelta > 0.04 || elapsed > 50) {
          video.currentTime = targetTimeRef.current;
          lastTimeRef.current = targetTimeRef.current;
          lastSeekRef.current = now;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
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

        {/* ── Scroll-synced text overlays ─────────────────────────────── */}

        {/* Phase 1: Full-Stack AI Developer */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{
            opacity: phaseOpacity(progress, PHASES[0].fadeIn, PHASES[0].holdStart, PHASES[0].holdEnd, PHASES[0].fadeOut),
            transform: `translateY(${phaseTranslateY(progress, PHASES[0].fadeIn, PHASES[0].holdStart, PHASES[0].holdEnd, PHASES[0].fadeOut)}px)`,
            willChange: "opacity, transform",
          }}
        >
          <span style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            color: "#ffffff",
            letterSpacing: "0.08em",
            textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)",
            textAlign: "center",
          }}>
            Full-Stack AI Developer
          </span>
        </div>

        {/* Phase 2: Value proposition */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{
            opacity: phaseOpacity(progress, PHASES[1].fadeIn, PHASES[1].holdStart, PHASES[1].holdEnd, PHASES[1].fadeOut),
            transform: `translateY(${phaseTranslateY(progress, PHASES[1].fadeIn, PHASES[1].holdStart, PHASES[1].holdEnd, PHASES[1].fadeOut)}px)`,
            willChange: "opacity, transform",
          }}
        >
          <div style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1.2rem, 3vw, 2.4rem)",
            color: "rgba(255,255,255,0.9)",
            textShadow: "0 1px 10px rgba(0,0,0,0.4)",
            textAlign: "center",
            lineHeight: 1.4,
          }}>
            <div>I build AI systems that</div>
            <div>turn hours into seconds.</div>
          </div>
        </div>

        {/* Phase 3: AI Automation Specialist */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{
            opacity: phaseOpacity(progress, PHASES[2].fadeIn, PHASES[2].holdStart, PHASES[2].holdEnd, PHASES[2].fadeOut),
            transform: `translateY(${phaseTranslateY(progress, PHASES[2].fadeIn, PHASES[2].holdStart, PHASES[2].holdEnd, PHASES[2].fadeOut)}px)`,
            willChange: "opacity, transform",
          }}
        >
          <span style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            color: "#ffffff",
            letterSpacing: "0.08em",
            textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)",
            textAlign: "center",
          }}>
            AI Automation Specialist
          </span>
        </div>

        {/* Phase 4: Tech stack */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{
            opacity: phaseOpacity(progress, PHASES[3].fadeIn, PHASES[3].holdStart, PHASES[3].holdEnd, PHASES[3].fadeOut),
            transform: `scale(${0.95 + 0.05 * phaseOpacity(progress, PHASES[3].fadeIn, PHASES[3].holdStart, PHASES[3].holdEnd, PHASES[3].fadeOut)})`,
            willChange: "opacity, transform",
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div style={{ width: "clamp(120px, 30vw, 300px)", height: "1px", background: "rgba(255,255,255,0.15)" }} />
            <span style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.12em",
              textAlign: "center",
              textShadow: "0 1px 10px rgba(0,0,0,0.4)",
            }}>
              n8n &middot; Zapier &middot; Make &middot; Python &middot; OpenAI &middot; Supabase
            </span>
            <div style={{ width: "clamp(120px, 30vw, 300px)", height: "1px", background: "rgba(255,255,255,0.15)" }} />
          </div>
        </div>

        {/* Phase 5: AI/ML Developer */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{
            opacity: phaseOpacity(progress, PHASES[4].fadeIn, PHASES[4].holdStart, PHASES[4].holdEnd, PHASES[4].fadeOut),
            transform: `translateY(${phaseTranslateY(progress, PHASES[4].fadeIn, PHASES[4].holdStart, PHASES[4].holdEnd, PHASES[4].fadeOut)}px)`,
            willChange: "opacity, transform",
          }}
        >
          <span style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            color: "#ffffff",
            letterSpacing: "0.08em",
            textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)",
            textAlign: "center",
          }}>
            AI/ML Developer
          </span>
        </div>

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
