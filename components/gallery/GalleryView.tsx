"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryImages } from "@/data/gallery";

export default function GalleryView() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function openLightbox(index: number) {
    setActiveIndex(index);
  }

  function closeLightbox() {
    setActiveIndex(null);
  }

  function showPrevious() {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + galleryImages.length) % galleryImages.length
    );
  }

  function showNext() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % galleryImages.length);
  }

  const activeImage = activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <main id="main-content">
      <Navbar />
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <p className="text-green-600 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4">
          Gallery
        </p>
        <h1 className="font-display text-ink-900 text-3xl sm:text-4xl lg:text-5xl mb-12 max-w-2xl">
          A closer look at what we make.
        </h1>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative w-full mb-6 rounded-card overflow-hidden break-inside-avoid block"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={index % 3 === 0 ? 750 : 450}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={activeImage !== null}
        onOpenChange={(open) => !open && closeLightbox()}
      >
        <DialogContent
          showCloseButton={false}
          className="max-w-3xl sm:max-w-3xl bg-transparent border-none shadow-none p-0"
        >
          {activeImage && (
            <div className="relative">
              <button
                onClick={closeLightbox}
                aria-label="Close gallery"
                className="absolute -top-12 right-0 z-10 text-white hover:text-gold-500 transition-colors"
              >
                <X size={28} />
              </button>

              <button
                onClick={showPrevious}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-ink-900 hover:bg-white transition-colors"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="rounded-image overflow-hidden flex items-center justify-center bg-black/20 max-h-[70vh]">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width={1200}
                  height={800}
                  className="w-auto h-auto max-h-[70vh] max-w-full object-contain"
                />
              </div>

              <button
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-ink-900 hover:bg-white transition-colors"
              >
                <ChevronRight size={22} />
              </button>

              <p className="text-center text-white/90 text-sm mt-4">
                {activeImage.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
}