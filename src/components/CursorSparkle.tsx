import { useEffect, useState, useCallback } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

const CursorSparkle = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const addSparkle = useCallback((e: MouseEvent) => {
    const sparkle: Sparkle = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };
    setSparkles((prev) => [...prev.slice(-12), sparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
    }, 800);
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const handler = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 60) {
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
          className="absolute text-sm"
          style={{
            left: s.x - 6,
            top: s.y - 6,
            animation: "sparkle 0.8s ease-out forwards",
          }}
        >
          💖
        </span>
      ))}
    </div>
  );
};

export default CursorSparkle;
