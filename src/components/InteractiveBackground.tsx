import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<
    Array<{ x: number; y: number; vx: number; vy: number; size: number; alpha: number }>
  >([]);
  const dimsRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const mouseRef = useRef<{ nx: number; ny: number }>({ nx: 0, ny: 0 });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const center = () => {
      const x = Math.round(window.innerWidth / 2);
      const y = Math.round(window.innerHeight / 2);
      document.documentElement.style.setProperty("--cursor-x", `${x}px`);
      document.documentElement.style.setProperty("--cursor-y", `${y}px`);
    };
    center();
    const onMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
      const nx = Math.max(-1, Math.min(1, (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)));
      const ny = Math.max(-1, Math.min(1, (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)));
      mouseRef.current.nx = nx;
      mouseRef.current.ny = ny;
      document.documentElement.style.setProperty("--nx", String(nx));
      document.documentElement.style.setProperty("--ny", String(ny));
    };
    const onLeave = () => center();
    window.addEventListener("pointermove", onMove);
    window.addEventListener("mouseleave", onLeave);
    const onClick = (e: MouseEvent) => {
      const id = nextIdRef.current++;
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 800);
    };
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const setSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      dimsRef.current = { w, h };
    };
    setSize();
    const createParticles = () => {
      const count = Math.min(220, Math.floor((dimsRef.current.w * dimsRef.current.h) / 15000));
      particlesRef.current = new Array(count).fill(0).map(() => ({
        x: Math.random() * dimsRef.current.w,
        y: Math.random() * dimsRef.current.h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.7 + 0.25,
      }));
    };
    createParticles();
    const draw = () => {
      const { w, h } = dimsRef.current;
      ctx.clearRect(0, 0, w, h);
      const { nx, ny } = mouseRef.current;
      for (const p of particlesRef.current) {
        p.vx += nx * 0.003;
        p.vy += ny * 0.003;
        p.vx *= 0.994;
        p.vy *= 0.994;
        p.x += p.vx + nx * 0.12;
        p.y += p.vy + ny * 0.12;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha * 0.9})`;
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    const onResize = () => {
      setSize();
      createParticles();
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px circle at var(--cursor-x) var(--cursor-y), hsl(var(--accent) / 0.18), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px circle at var(--cursor-x) var(--cursor-y), hsl(var(--primary) / 0.12), transparent 70%)",
          }}
        />
        <div
          className="absolute w-[36rem] h-[36rem] rounded-full"
          style={{
            left: "10%",
            top: "12%",
            background:
              "radial-gradient(closest-side, hsl(var(--accent) / 0.14), transparent 70%)",
            transform: "translate(calc(var(--nx) * 24px), calc(var(--ny) * 18px))",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute w-[28rem] h-[28rem] rounded-full"
          style={{
            right: "8%",
            top: "30%",
            background:
              "radial-gradient(closest-side, hsl(var(--primary) / 0.12), transparent 70%)",
            transform: "translate(calc(var(--nx) * -36px), calc(var(--ny) * 24px))",
            filter: "blur(24px)",
          }}
        />
        <div
          className="absolute w-[40rem] h-[40rem] rounded-full"
          style={{
            left: "50%",
            bottom: "6%",
            transform: "translate(-50%, 0) translate(calc(var(--nx) * 20px), calc(var(--ny) * -16px))",
            background:
              "radial-gradient(closest-side, hsl(var(--accent) / 0.10), transparent 70%)",
            filter: "blur(24px)",
          }}
        />
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      <div className="fixed inset-0 z-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "brightness(1.35) saturate(1.08)",
            WebkitBackdropFilter: "brightness(1.35) saturate(1.08)",
            background: "transparent",
            maskImage:
              "radial-gradient(360px circle at var(--cursor-x) var(--cursor-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 60%)",
            WebkitMaskImage:
              "radial-gradient(360px circle at var(--cursor-x) var(--cursor-y), rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            mixBlendMode: "screen",
            background:
              "radial-gradient(380px circle at var(--cursor-x) var(--cursor-y), rgba(255,255,255,0.24), transparent 65%)",
          }}
        />
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            className="absolute rounded-full border border-white/40"
            style={{
              left: r.x,
              top: r.y,
              width: "8px",
              height: "8px",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0.35 }}
            animate={{ scale: 10, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </div>
    </>
  );
};

export default InteractiveBackground;
