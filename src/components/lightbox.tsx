import { useEffect } from "react";
import type { WorkImage } from "@/data/content";

type Props = {
  images: WorkImage[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
};

export function Lightbox({ images, index, onClose, onIndex }: Props) {
  const img = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onIndex]);

  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        type="button"
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close"
      />
      <img
        src={img.src}
        alt={img.alt}
        className="relative z-[1] max-h-[82vh] max-w-[88vw] object-contain"
      />
      <p className="meta absolute bottom-8 left-1/2 z-[1] -translate-x-1/2 text-center">
        {img.alt}
      </p>
      <button
        type="button"
        className="absolute left-4 top-1/2 z-[1] -translate-y-1/2 px-3 py-6 text-paper/70 hover:text-paper"
        onClick={() => onIndex((index - 1 + images.length) % images.length)}
        aria-label="Previous"
        data-cursor="hot"
      >
        ←
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 z-[1] -translate-y-1/2 px-3 py-6 text-paper/70 hover:text-paper"
        onClick={() => onIndex((index + 1) % images.length)}
        aria-label="Next"
        data-cursor="hot"
      >
        →
      </button>
      <button
        type="button"
        className="meta absolute right-6 top-6 z-[1]"
        onClick={onClose}
        data-cursor="hot"
      >
        Close
      </button>
    </div>
  );
}
