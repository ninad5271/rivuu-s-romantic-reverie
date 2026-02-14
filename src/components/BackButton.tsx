import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(-1)}
      className="fixed top-4 left-4 z-[100] glass-card px-4 py-2.5 rounded-full flex items-center gap-2 font-body text-sm text-foreground/80 transition-all duration-300 hover:text-primary"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 25px hsl(340 100% 80% / 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Back</span>
    </motion.button>
  );
};

export default BackButton;
