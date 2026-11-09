"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";

type ViewerImage = {
  src: string;
  alt: string;
};

export default function ProjectImageViewer({
  images,
  imageIndex,
  children,
  className,
}: {
  images: ViewerImage[];
  imageIndex: number;
  children: ReactNode;
  className: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(imageIndex);
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index + images.length - 1) % images.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, isOpen]);

  if (!activeImage) return children;

  function showPreviousImage() {
    setActiveIndex((index) => (index + images.length - 1) % images.length);
  }

  function showNextImage() {
    setActiveIndex((index) => (index + 1) % images.length);
  }

  return (
    <>
      <button
        type="button"
        aria-label={`Open project image viewer (${images.length} images)`}
        onClick={() => {
          setActiveIndex(imageIndex);
          setIsOpen(true);
        }}
        className={`group block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0368FD] ${className}`}
      >
        {children}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-transform duration-300 group-hover:scale-100 group-focus-visible:scale-100">
            <Eye size={24} strokeWidth={2} />
          </span>
        </span>
      </button>

      {isOpen && activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${activeImage.alt}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 cursor-default bg-black/90"
          />
          <div className="pointer-events-none relative flex h-full w-full items-center justify-center">
            <div className="pointer-events-auto relative h-[min(82vh,900px)] w-full max-w-6xl">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              aria-label="Close image viewer"
              onClick={() => setIsOpen(false)}
              className="pointer-events-auto absolute right-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white sm:right-2 sm:top-2"
            >
              <X size={26} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={showPreviousImage}
                  className="pointer-events-auto absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white sm:left-2"
                >
                  <ChevronLeft size={30} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={showNextImage}
                  className="pointer-events-auto absolute right-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white sm:right-2"
                >
                  <ChevronRight size={30} />
                </button>
              </>
            )}

            <p className="pointer-events-auto absolute bottom-0 rounded-full bg-black/50 px-4 py-2 text-sm text-white sm:bottom-2">
              {activeIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
