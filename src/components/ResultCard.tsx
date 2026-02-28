import { motion } from "framer-motion";
import { useState } from "react";

interface ResultCardProps {
  nickname: string;
  shayari: string;
  onGenerateAgain: () => void;
}

export default function ResultCard({ nickname, shayari, onGenerateAgain }: ResultCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass-card rounded-2xl p-8 md:p-12 max-w-lg w-full mx-auto relative overflow-hidden"
    >
      {/* Glow behind nickname */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/20 blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="relative z-10 text-center">
        {/* Heart icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-4"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" className="mx-auto" fill="hsl(340 70% 55%)" opacity="0.8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.div>

        {/* Nickname */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-display text-5xl md:text-6xl text-primary text-glow mb-8"
        >
          {nickname}
        </motion.h2>

        {/* Shayari */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-8"
        >
          {shayari.split('\n').map((line, i) => (
            <p
              key={i}
              className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed italic"
            >
              {line}
            </p>
          ))}
        </motion.div>

        {/* Generate Again */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onGenerateAgain}
          className="btn-shimmer bg-primary/15 border border-primary/30 text-primary-foreground px-8 py-3 rounded-full font-body text-sm tracking-widest uppercase hover:bg-primary/25 transition-colors duration-300"
        >
          Generate Again
        </motion.button>
      </div>
    </motion.div>
  );
}
