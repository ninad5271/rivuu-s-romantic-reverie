import { useEffect, useState, useCallback } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  emoji: string;
}

const emojis = ["💖", "✨", "💕"];

const CursorSparkle = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const addSparkle = useCallback((e: MouseEvent) => {
    const sparkle: Sparkle = {
      id: Date.now() + Math.random(),
      x: e.clientX + (Math.random() - 0.5) * 16,
      y: e.clientY + (Math.random() - 0.5) * 16,
      size: 10 + Math.random() * 8,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    };
    setSparkles((prev) => [...prev.slice(-15), sparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
    }, 1000);
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const handler = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 50) {
        lastTime = now;
        addSparkle(e);
      }
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [addSparkle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute"
          style={{
            left: s.x - s.size / 2,
            top: s.y - s.size / 2,
            fontSize: s.size,
            animation: "cursorSparkle 1s ease-out forwards",
            filter: "drop-shadow(0 0 6px hsl(340 100% 80% / 0.6))",
          }}
        >
          {s.emoji}
        </span>
      ))}
    </div>
  );
};

export default CursorSparkle;
