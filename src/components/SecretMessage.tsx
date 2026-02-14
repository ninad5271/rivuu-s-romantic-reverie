import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SecretMessageProps {
  isOpen: boolean;
  onClose: () => void;
}

const SecretMessage = ({ isOpen, onClose }: SecretMessageProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Dark blurred backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Floating sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-lg"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                  y: [0, -40],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                }}
              >
                {["✨", "💖", "🌟", "💕"][i % 4]}
              </motion.span>
            ))}
          </div>

          {/* Message card */}
          <motion.div
            className="relative z-10 max-w-md w-full text-center p-10 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, hsl(340 50% 15% / 0.9), hsl(280 30% 12% / 0.9))",
              border: "1px solid hsl(340 80% 60% / 0.3)",
              boxShadow: "0 0 60px hsl(340 100% 70% / 0.3), 0 0 120px hsl(340 100% 60% / 0.15), inset 0 0 60px hsl(340 80% 60% / 0.05)",
            }}
            initial={{ scale: 0.5, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              className="heartbeat text-4xl mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              💝
            </motion.div>

            <motion.p
              className="font-romantic text-3xl sm:text-4xl glow-text mb-6"
              style={{ color: "hsl(340 80% 70%)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Rivuu…
            </motion.p>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <p className="font-body text-white/80 text-base leading-relaxed">
                You are the most beautiful chapter of my life.
              </p>
              <p className="font-body text-white/80 text-base leading-relaxed">
                No matter what happens,
              </p>
              <p className="font-body text-white/80 text-base leading-relaxed">
                My heart will always choose you.
              </p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <p className="font-romantic text-2xl" style={{ color: "hsl(340 80% 70%)" }}>
                Forever yours,
              </p>
              <p className="font-romantic text-3xl glow-text mt-1" style={{ color: "hsl(340 80% 70%)" }}>
                Ninii ❤️
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecretMessage;
