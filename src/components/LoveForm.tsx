import { useState } from "react";
import { motion } from "framer-motion";

interface LoveFormProps {
  onSubmit: (name1: string, name2: string) => void;
}

export default function LoveForm({ onSubmit }: LoveFormProps) {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name1.trim() && name2.trim()) {
      onSubmit(name1.trim(), name2.trim());
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass-card rounded-2xl p-8 md:p-10 max-w-md w-full mx-auto"
    >
      <div className="space-y-6">
        <div>
          <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
            First Name
          </label>
          <input
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="Enter name..."
            className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
            required
          />
        </div>

        <div className="flex justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="hsl(340 70% 55%)" opacity="0.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        <div>
          <label className="block font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Second Name
          </label>
          <input
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Enter name..."
            className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
            required
          />
        </div>

        <button
          type="submit"
          className="btn-shimmer w-full bg-primary/80 hover:bg-primary text-primary-foreground py-3.5 rounded-full font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300 mt-2"
        >
          Create Our Love
        </button>
      </div>
    </motion.form>
  );
}
