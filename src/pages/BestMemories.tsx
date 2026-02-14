import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const memories = [
  {
    title: "The First Hello",
    text: "The first time we talked, I felt something different. Something warm. Like the universe was telling me — she's the one. 🌟",
  },
  {
    title: "Late Night Conversations",
    text: "Remember those nights we stayed up talking about everything and nothing? Those are my favorite memories. Every second with you is a treasure. 💫",
  },
  {
    title: "Our Little World",
    text: "We built our own little world — full of inside jokes, silly nicknames, and endless love. No one else understands it, and that makes it even more special. 🏡",
  },
  {
    title: "Through Every Storm",
    text: "We've had our tough moments, but we always came back stronger. That's how I know this love is real — because it survives everything. 🌈",
  },
  {
    title: "Forever With You",
    text: "Every day I choose you, and every day I'd choose you again. You're not just my love — you're my best friend, my home, my forever. 💕",
  },
];

const BestMemories = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(340 50% 92%), hsl(280 30% 90%), hsl(340 40% 95%))",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Blurred lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 100 + Math.random() * 200,
              height: 100 + Math.random() * 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, hsl(340 80% 80% / 0.2), transparent)`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl sm:text-6xl font-romantic text-primary text-center glow-text mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Best Memories 💕
        </motion.h1>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform sm:-translate-x-1/2" />

          {memories.map((memory, i) => (
            <motion.div
              key={i}
              className={`relative flex mb-12 ${
                i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary glow-box transform -translate-x-1/2 mt-6 z-10" />

              <div className={`ml-12 sm:ml-0 sm:w-5/12 ${i % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-2xl font-romantic text-primary mb-3">{memory.title}</h3>
                  <p className="font-body text-foreground/80 leading-relaxed text-sm">
                    {memory.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="btn-romantic text-lg font-romantic"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/question")}
          >
            One More Question, Rivuu… 💍
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BestMemories;
