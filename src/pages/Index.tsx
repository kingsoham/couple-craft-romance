import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import GlowingParticles from "@/components/GlowingParticles";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import LoveForm from "@/components/LoveForm";
import ResultCard from "@/components/ResultCard";
import { generateNickname } from "@/lib/nicknameGenerator";
import { getRandomShayari } from "@/lib/shayariData";

const Index = () => {
  const [result, setResult] = useState<{
    nickname: string;
    shayari: string;
    name1: string;
    name2: string;
  } | null>(null);

  const handleCreate = useCallback((name1: string, name2: string) => {
    setResult({
      nickname: generateNickname(name1, name2),
      shayari: getRandomShayari(name1, name2),
      name1,
      name2,
    });
  }, []);

  const handleGenerateAgain = useCallback(() => {
    if (result) {
      setResult({
        nickname: generateNickname(result.name1, result.name2),
        shayari: getRandomShayari(result.name1, result.name2),
        name1: result.name1,
        name2: result.name2,
      });
    }
  }, [result]);

  const handleBack = useCallback(() => setResult(null), []);

  return (
    <div className="min-h-screen bg-romantic relative overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 bg-glow pointer-events-none z-0" />

      <FloatingHearts />
      <GlowingParticles />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <ParallaxWrapper>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="font-display text-5xl md:text-7xl text-primary text-glow mb-3">
              CoupleCraft
            </h1>
            <p className="font-serif text-lg md:text-xl text-foreground/60 italic tracking-wide">
              Where Two Names Become One Story
            </p>
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}>
                <LoveForm onSubmit={handleCreate} />
              </motion.div>
            ) : (
              <motion.div key="result" className="w-full max-w-lg mx-auto">
                <ResultCard
                  nickname={result.nickname}
                  shayari={result.shayari}
                  onGenerateAgain={handleGenerateAgain}
                />
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  onClick={handleBack}
                  className="block mx-auto mt-6 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  ← Try Different Names
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </ParallaxWrapper>
      </div>
    </div>
  );
};

export default Index;
