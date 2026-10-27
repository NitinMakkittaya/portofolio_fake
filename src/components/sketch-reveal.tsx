import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  sketch?: string;
  alt: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "wide" | "full";
  className?: string;
  onOpen?: () => void;
};

export function SketchReveal({ src, sketch, alt, size = "md", className, onOpen }: Props) {
  const [pos, setPos] = useState({ x: 50, y: 50, on: false });

  const move = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      on: true,
    });
  }, []);

  const sizeClass = size === "full" ? "w-full h-full" : `size-${size}`;

  return (
    <figure
      className={cn("work-img group", sizeClass, className)}
      onMouseMove={sketch ? move : undefined}
      onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
      data-cursor="hot"
    >
      <button
        type="button"
        className="absolute inset-0 z-10"
        onClick={onOpen}
        aria-label={`Open ${alt}`}
      />
      <img src={src} alt={alt} className="cgi" />
      {sketch ? (
        <img
          src={sketch}
          alt=""
          className="sketch-layer"
          style={{
            maskImage: pos.on
              ? `radial-gradient(circle 9rem at ${pos.x}% ${pos.y}%, transparent 0 38%, black 72%)`
              : "none",
            opacity: pos.on ? 1 : 0.92,
            transition: pos.on ? "none" : "opacity 400ms ease",
          }}
        />
      ) : null}
    </figure>
  );
}
