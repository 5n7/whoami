"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface Photo {
  src: string;
  alt: string;
}

interface LightboxProps {
  photo: Photo | null;
  isOpen: boolean;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ photo, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !photo) return null;

  return (
    <div
      className="fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-3xl text-white transition-colors hover:text-gray-300"
        aria-label="Close"
      >
        <IoClose />
      </button>

      <div className="relative mx-4 h-full max-h-[90vh] w-full max-w-7xl">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          className="object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};
