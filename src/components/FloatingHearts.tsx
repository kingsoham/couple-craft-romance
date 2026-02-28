import { useMemo } from "react";

interface HeartProps {
  style: React.CSSProperties;
  size: number;
}

const Heart = ({ style, size }: HeartProps) => (
  <div
    className="absolute animate-drift opacity-0"
    style={style}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-gentle-spin"
      style={{ animationDuration: `${8 + Math.random() * 12}s` }}
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        fill="hsl(340 70% 55% / 0.15)"
        stroke="hsl(340 70% 55% / 0.25)"
        strokeWidth="0.5"
      />
    </svg>
  </div>
);

export default function FloatingHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: 16 + Math.random() * 28,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        '--drift-x': `${-30 + Math.random() * 60}px`,
        '--drift-y': `${-100 - Math.random() * 150}px`,
        '--drift-r': `${Math.random() * 90 - 45}deg`,
        '--drift-duration': `${10 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 10}s`,
      } as React.CSSProperties,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <Heart key={h.id} style={h.style} size={h.size} />
      ))}
    </div>
  );
}
