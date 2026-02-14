import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import BackButton from "@/components/BackButton";

const noMessages = [
  "Nice try Rivuu 😜",
  "You can't escape this love 😏",
  "Wrong answer detected 😂",
  "Haha! Try again 🤭",
  "Nope! That button doesn't work 💕",
  "Your heart already said YES 😘",
  "The NO button is scared of you 🏃‍♀️",
];

const ValentineQuestion = () => {
  const navigate = useNavigate();
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);

  const moveNoButton = useCallback(() => {
    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 250;
    setNoPos({ x, y });
    setNoCount((prev) => prev + 1);
    setYesScale((prev) => Math.min(prev + 0.1, 2));
  }, []);

  const handleYes = () => {
    navigate("/celebration");
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center romantic-gradient relative overflow-hidden px-4"
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <BackButton />

      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {["💕", "🌹", "💘", "✨", "🦋", "💗"][i]}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-romantic text-primary glow-text mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Rivuu, Will You Be My Valentine? ❤️
        </motion.h1>

        <motion.p
          className="text-lg font-body text-foreground/70 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I just want to ask you again… 🥺
        </motion.p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-8 relative min-h-[120px]">
          <motion.button
            className="btn-romantic font-romantic text-xl px-10 py-5"
            animate={{ scale: yesScale }}
            whileHover={{ scale: yesScale * 1.05 }}
            whileTap={{ scale: yesScale * 0.95 }}
            onClick={handleYes}
          >
            💖 YES
          </motion.button>

          <motion.button
            className="px-8 py-4 rounded-full font-body font-semibold text-lg bg-muted text-muted-foreground transition-all duration-150"
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            onTouchStart={moveNoButton}
          >
            🙈 NO
          </motion.button>
        </div>

        {/* Playful message */}
        {noCount > 0 && (
          <motion.p
            key={noCount}
            className="mt-8 text-lg font-body text-primary font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            {noMessages[(noCount - 1) % noMessages.length]}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default ValentineQuestion;
