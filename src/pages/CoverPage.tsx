import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const CoverPage = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => navigate("/gallery"), 800);
  };

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isClicked ? 0 : 1, scale: isClicked ? 1.1 : 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-6xl sm:text-8xl md:text-9xl font-romantic text-primary glow-text mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Rivuu ❤️
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-body text-foreground/80 mb-12 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          From Ninii… A little surprise for you.
        </motion.p>

        <motion.button
          className="btn-romantic text-xl font-romantic tracking-wide"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1, type: "spring" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          Click Here My Love 💖
        </motion.button>

        {/* Sparkle burst on click */}
        {isClicked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-2xl"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 300,
                  y: (Math.random() - 0.5) * 300,
                }}
                transition={{ duration: 0.8, delay: i * 0.02 }}
              >
                {["✨", "💖", "🌹", "💕"][i % 4]}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CoverPage;
