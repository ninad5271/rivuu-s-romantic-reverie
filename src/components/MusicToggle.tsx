import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a free romantic piano background music URL
    const audio = new Audio("https://cdn.pixabay.com/audio/2024/11/28/audio_3a4e395971.mp3");
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
    setIsMuted(!isMuted);
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed top-4 right-4 z-[100] glass-card p-3 rounded-full transition-all duration-300 hover:scale-110 glow-box"
      aria-label={isMuted ? "Unmute music" : "Mute music"}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 text-primary" />
      ) : (
        <Volume2 className="w-5 h-5 text-primary" />
      )}
    </button>
  );
};

export default MusicToggle;
