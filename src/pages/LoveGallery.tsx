import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const photos = [
  { src: gallery1, caption: "The moment I knew you were the one ❤️" },
  { src: gallery2, caption: "Holding your hand feels like home 🌹" },
  { src: gallery3, caption: "My heart belongs to you forever 💕" },
  { src: gallery4, caption: "Every night sky reminds me of your beauty ✨" },
];

const adorList = [
  "Your smile lights up my entire world 🌟",
  "The way you laugh makes everything better 😊",
  "Your kindness inspires me every single day 💫",
  "You make ordinary moments feel magical ✨",
  "Being with you feels like a beautiful dream 💭",
];

const cuteCards = [
  { emoji: "🍕", text: "That time we argued about pizza toppings" },
  { emoji: "😴", text: "When you fell asleep on my shoulder" },
  { emoji: "🎶", text: "Singing our favorite songs together" },
];

const quizQuestions = [
  {
    question: "What does Ninii love most about Rivuu?",
    options: ["Everything 💖", "Her smile 😊", "Her heart 💝"],
    answer: 0,
    response: "Correct! Ninii loves EVERYTHING about you! 🥰",
  },
  {
    question: "How much does Ninii miss Rivuu?",
    options: ["A little", "A lot", "More than words can say 💕"],
    answer: 2,
    response: "You know it! Words can never be enough! 😘",
  },
];

const LoveGallery = () => {
  const navigate = useNavigate();
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number | null>>({});

  return (
    <motion.div
      className="min-h-screen romantic-gradient relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.h1
          className="text-4xl sm:text-6xl font-romantic text-primary text-center glow-text mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Every Moment With You Is Special ❤️
        </motion.h1>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className="group glass-card p-3 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="text-center mt-3 pb-2 font-body text-foreground/80 text-sm">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why I Adore You */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl font-romantic text-primary text-center glow-text mb-8">
            💌 Why I Adore You
          </h2>
          <div className="glass-card p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto">
            <ul className="space-y-4">
              {adorList.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 font-body text-foreground/80"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="text-primary mt-0.5">♥</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Our Cute Moments */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl font-romantic text-primary text-center glow-text mb-8">
            😂 Our Cute Moments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {cuteCards.map((card, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 rounded-2xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-4xl block mb-3">{card.emoji}</span>
                <p className="font-body text-sm text-foreground/80">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mini Love Quiz */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl font-romantic text-primary text-center glow-text mb-8">
            🧠 Mini Love Quiz
          </h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            {quizQuestions.map((q, qi) => (
              <motion.div
                key={qi}
                className="glass-card p-6 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: qi * 0.2 }}
              >
                <p className="font-body font-semibold text-foreground mb-4">{q.question}</p>
                <div className="flex flex-wrap gap-3">
                  {q.options.map((opt, oi) => (
                    <button
                      key={oi}
                      onClick={() => setQuizAnswers((prev) => ({ ...prev, [qi]: oi }))}
                      className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                        quizAnswers[qi] === oi
                          ? "btn-romantic text-sm"
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {quizAnswers[qi] !== undefined && quizAnswers[qi] !== null && (
                  <motion.p
                    className="mt-4 font-body text-sm text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {quizAnswers[qi] === q.answer ? q.response : "Hehe, try again! 😜"}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="btn-romantic text-lg font-romantic"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/memories")}
          >
            Unlock Our Memories 💕
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoveGallery;
