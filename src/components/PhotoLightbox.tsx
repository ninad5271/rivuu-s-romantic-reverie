import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoLightboxProps {
  images: { src: string; caption: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const PhotoLightbox = ({ images, currentIndex, isOpen, onClose, onNavigate }: PhotoLightboxProps) => {
  const goNext = () => onNavigate((currentIndex + 1) % images.length);
  const goPrev = () => onNavigate((currentIndex - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Floating hearts */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: "-5%",
                }}
                animate={{
                  y: [0, -window.innerHeight * 1.2],
                  opacity: [0, 0.6, 0],
                  x: [(Math.random() - 0.5) * 60],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  delay: Math.random() * 3,
                  repeat: Infinity,
                }}
              >
                {["💕", "❤️", "💖"][i % 3]}
              </motion.span>
            ))}
          </div>

          {/* Close */}
          <motion.button
            className="absolute top-4 right-4 z-10 text-white/60 hover:text-white glass-card p-2 rounded-full"
            onClick={onClose}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Nav arrows */}
          <motion.button
            className="absolute left-4 z-10 text-white/60 hover:text-white glass-card p-2 rounded-full"
            onClick={goPrev}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="absolute right-4 z-10 text-white/60 hover:text-white glass-card p-2 rounded-full"
            onClick={goNext}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative z-10 max-w-3xl w-full"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 0 60px hsl(340 80% 60% / 0.3)" }}>
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].caption}
                  className="w-full max-h-[75vh] object-contain bg-black/50"
                />
              </div>
              <motion.p
                className="text-center mt-4 font-body text-white/70 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {images[currentIndex].caption}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoLightbox;
