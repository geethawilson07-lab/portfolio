import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-50 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl transition-transform"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        background: "radial-gradient(circle, var(--neon-cyan), transparent 70%)",
      }}
    />
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const scroll = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(scroll * 100);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-primary transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function ParticleBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-neon-cyan/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-neon-purple/20 blur-[140px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-neon-pink/15 blur-[130px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
