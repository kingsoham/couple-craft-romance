import { useEffect, useState, type ReactNode } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
}

export default function ParallaxWrapper({ children }: ParallaxWrapperProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div
      style={{
        transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
}
