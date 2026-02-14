import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CoverPage from "./pages/CoverPage";
import LoveGallery from "./pages/LoveGallery";
import BestMemories from "./pages/BestMemories";
import ValentineQuestion from "./pages/ValentineQuestion";
import Celebration from "./pages/Celebration";
import NotFound from "./pages/NotFound";
import CursorSparkle from "./components/CursorSparkle";
import FloatingHearts from "./components/FloatingHearts";
import LoadingScreen from "./components/LoadingScreen";
import MusicToggle from "./components/MusicToggle";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CoverPage />} />
        <Route path="/gallery" element={<LoveGallery />} />
        <Route path="/memories" element={<BestMemories />} />
        <Route path="/question" element={<ValentineQuestion />} />
        <Route path="/celebration" element={<Celebration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LoadingScreen isLoading={isLoading} />
        <CursorSparkle />
        <FloatingHearts />
        <MusicToggle />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
