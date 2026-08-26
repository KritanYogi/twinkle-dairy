"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { wordReveal, fadeUp, staggerContainer } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "Freshness, poured with purpose.";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !sectionRef.current || !imageRef.current)
      return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.15 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = HEADLINE.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1920&q=80"
          alt="Fresh dairy products and traditional sweets at Twinkle Dairy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15,23,31,0.25) 0%, rgba(15,23,31,0.65) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col items-start justify-end max-w-7xl mx-auto px-6 sm:px-8 pb-16 sm:pb-24 lg:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-gold-500 font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-[11px] sm:text-sm uppercase mb-3 sm:mb-5"
          >
            Since three generations
          </motion.p>

          <h1 className="font-display text-white text-3xl sm:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.05] max-w-3xl overflow-hidden">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-2 sm:mr-4">
                <motion.span
                  custom={i}
                  variants={wordReveal}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            custom={words.length + 1}
            className="mt-3 sm:mt-6 max-w-xl text-white/85 text-sm sm:text-lg leading-relaxed"
          >
            Farm-fresh dairy and handcrafted sweets, made in small batches
            every morning — never the other way around.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={words.length + 2}
            className="mt-5 sm:mt-10 flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              href="/categories/milk"
              className="rounded-button bg-gold-500 px-5 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-wide text-ink-900 shadow-gold-glow transition-transform hover:-translate-y-0.5"
            >
              Shop Fresh Dairy
            </Link>
            <Link
              href="/categories/traditional-sweets"
              className="rounded-button border border-white/40 px-5 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Explore Sweets
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70"
        aria-hidden="true"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.div>

      <div className="absolute -bottom-px left-0 right-0 z-10 leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-[48px] sm:h-[64px]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,32 C 120,60 200,0 320,24 C 440,48 500,72 620,56 C 740,40 800,4 920,20 C 1040,36 1100,64 1220,44 C 1320,28 1380,36 1440,24 L1440,80 L0,80 Z"
            fill="#FFFDF7"
          />
        </svg>
      </div>
    </section>
  );
}