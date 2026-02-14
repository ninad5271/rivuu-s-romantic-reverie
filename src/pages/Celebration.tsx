import { motion } from "framer-motion";
import { useMemo } from "react";
import BackButton from "@/components/BackButton";
import celebrationBg from "@/assets/celebration-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const slides = [gallery1, gallery2, gallery3, gallery4];

const Celebration = () => {
  const confetti = useMemo(
    () =>
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 4,
        emoji: ["🌹", "💕", "🌸", "✨", "💖", "🎉", "💐", "🦋"][i % 8],
        size: 14 + Math.random() * 20,
      })),
    []
  );

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <BackButton />

      {/* Background */}
      <div className="absolute inset-0">
        <img src={celebrationBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Falling confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confetti.map((c) => (
          <motion.span
            key={c.id}
            className="absolute"
            style={{
              left: `${c.left}%`,
              top: "-5%",
              fontSize: c.size,
            }}
            animate={{
              y: ["0vh", "110vh"],
              rotate: [0, 720],
              x: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: c.duration,
              delay: c.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {c.emoji}
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <motion.div
          className="text-6xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          🎉
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-romantic text-primary text-center glow-text mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Rivuu, You Make My World Beautiful ❤️
        </motion.h1>

        {/* Photo slideshow */}
        <motion.div
          className="glass-card p-4 rounded-2xl mb-12 max-w-md w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-xl h-64 sm:h-80">
            {slides.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Memory ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: slides.length * 3,
                  times: [
                    i / slides.length,
                    (i + 0.1) / slides.length,
                    (i + 0.9) / slides.length,
                    (i + 1) / slides.length,
                  ],
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div
          className="text-center glass-card p-8 sm:p-12 rounded-2xl max-w-lg glow-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="font-body text-foreground/80 text-lg leading-relaxed mb-6">
            You are the most beautiful thing that ever happened to me. Every day with you is a gift,
            and I promise to love you more with each passing moment.
          </p>
          <p className="text-3xl sm:text-4xl font-romantic text-primary glow-text">
            Forever Yours,
          </p>
          <p className="text-4xl sm:text-5xl font-romantic text-primary glow-text mt-2">
            Ninii 💞
          </p>
        </motion.div>

        {/* Floating roses at bottom */}
        <div className="mt-12 flex gap-4 text-3xl">
          {["🌹", "💕", "🌸", "💖", "🌹"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            >
              {e}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Celebration;
